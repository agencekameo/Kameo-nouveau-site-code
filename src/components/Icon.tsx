import { ICON_VIEWBOX } from '@/lib/icons';

/**
 * Icône du sprite SVG (équivalent de kameo_icon() côté PHP et svgIcon() côté JS).
 * Accepte « fa-solid fa-heart », « fa-heart » ou « heart ».
 */
export default function Icon({ name, className }: { name: string; className?: string }) {
  let fam = 'solid';
  let ic = '';
  for (const raw of name.trim().split(/\s+/)) {
    const w = raw.replace(/^fa-/, '');
    if (w === 'solid' || w === 'regular' || w === 'brands') fam = w;
    else if (w) ic = w;
  }
  if (!ic) return null;
  const id = `i-${fam}-${ic}`;
  return (
    <svg className={className ? `icon ${className}` : 'icon'} viewBox={ICON_VIEWBOX[id]} aria-hidden="true" focusable="false">
      <use href={`/icons.svg#${id}`} />
    </svg>
  );
}
