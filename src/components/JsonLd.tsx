/** Rend un ou plusieurs blocs JSON-LD, un <script> par bloc comme le faisait le thème. */
export default function JsonLd({ data }: { data: object | object[] }) {
  const list = Array.isArray(data) ? data : [data];
  const ids = definedIds(list);
  return (
    <>
      {list.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dropDanglingBreadcrumbs(d, ids)).replace(/</g, '\\u003c') }}
        />
      ))}
    </>
  );
}

/** Identifiants définis dans les blocs de la page : nœuds qui portent un @id et au moins une autre propriété. */
function definedIds(list: object[]): Set<string> {
  const ids = new Set<string>();
  const visit = (o: unknown): void => {
    if (Array.isArray(o)) return o.forEach(visit);
    if (!o || typeof o !== 'object') return;
    const n = o as Record<string, unknown>;
    if (typeof n['@id'] === 'string' && Object.keys(n).some((k) => k !== '@id')) ids.add(n['@id']);
    Object.values(n).forEach(visit);
  };
  list.forEach(visit);
  return ids;
}

/**
 * Retire toute référence « breadcrumb » vers un fil d'Ariane absent de la page : Google y voit sinon un
 * second fil d'Ariane, vide (Search Console : « Champ itemListElement manquant », relevé le 03/11/2026 sur
 * les articles de l'outil de rédaction et sur la landing).
 */
function dropDanglingBreadcrumbs(o: unknown, ids: Set<string>): unknown {
  if (Array.isArray(o)) return o.map((v) => dropDanglingBreadcrumbs(v, ids));
  if (!o || typeof o !== 'object') return o;
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(o)) {
    if (k === 'breadcrumb' && v && typeof v === 'object' && !Array.isArray(v)) {
      const ref = (v as Record<string, unknown>)['@id'];
      if (typeof ref === 'string' && Object.keys(v).length === 1 && !ids.has(ref)) continue;
    }
    out[k] = dropDanglingBreadcrumbs(v, ids);
  }
  return out;
}
