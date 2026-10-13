import 'react';

// Propriétés personnalisées CSS (--rating, --progress…) dans les attributs style.
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
