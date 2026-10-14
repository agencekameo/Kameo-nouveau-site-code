import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as tables from './db-tables';

/**
 * Base PostgreSQL des articles publiés par n8n. Elle est facultative : sans DATABASE_URL, ou si
 * la base ne répond pas, le blog affiche ses articles Markdown et l'API de publication répond 503.
 * Le client n'est créé qu'au premier accès (le build n'a pas besoin de la base).
 */
export type Db = ReturnType<typeof drizzle<typeof tables>>;

declare global {
  // eslint-disable-next-line no-var
  var _kameoSql: ReturnType<typeof postgres> | undefined;
  // eslint-disable-next-line no-var
  var _kameoDb: Db | undefined;
  // eslint-disable-next-line no-var
  var _kameoSchema: Promise<void> | undefined;
}

export const hasDatabase = () => Boolean(process.env.DATABASE_URL);

function client() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL absente');
  // SSL exigé pour une base distante (Neon, Scaleway…), inutile sur le réseau Docker interne
  const local = /@(localhost|127\.0\.0\.1|postgres|db)(:|\/)/.test(url) || process.env.DB_SSL === 'false';
  return (globalThis._kameoSql ??= postgres(url, {
    max: 5,
    connect_timeout: 5,
    idle_timeout: 60,
    onnotice: () => {},
    ...(local ? {} : { ssl: 'require' as const }),
  }));
}

/** Instance Drizzle, tables créées si besoin (une fois par processus, retentée après un échec). */
export async function getDb(): Promise<Db> {
  const sql = client();
  globalThis._kameoSchema ??= sql.unsafe(tables.SCHEMA_SQL).then(
    () => undefined,
    (err) => {
      globalThis._kameoSchema = undefined;
      throw err;
    },
  );
  await globalThis._kameoSchema;
  return (globalThis._kameoDb ??= drizzle(sql, { schema: tables }));
}
