import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

/**
 * Tables des articles publiés par n8n (API /api/blog/publish/…), reprises du site Omega.
 * Mêmes noms et mêmes colonnes, plus width/height/variants (images WebP) et word_count.
 * Les tables sont créées au premier accès par ensureSchema() (src/lib/db.ts) : aucune
 * migration à lancer au déploiement.
 */
export const blogCategories = pgTable('blog_categories', {
  id: text('id').primaryKey(),
  slug: text('slug').unique().notNull(),
  name_fr: text('name_fr').notNull(),
  description: text('description'),
  created_at: timestamp('created_at', { withTimezone: true }).default(sql`now()`),
});

export const blogMedia = pgTable('blog_media', {
  id: text('id').primaryKey(),
  filename: text('filename').notNull(),
  url: text('url').notNull(),
  mime: text('mime').notNull(),
  size_bytes: integer('size_bytes').notNull(),
  width: integer('width'),
  height: integer('height'),
  /** Largeurs des variantes WebP générées (« 300,768,1024 »), null si aucune. */
  variants: text('variants'),
  title: text('title'),
  alt_text: text('alt_text'),
  caption: text('caption'),
  description: text('description'),
  created_at: timestamp('created_at', { withTimezone: true }).default(sql`now()`),
});

export const blogPosts = pgTable('blog_posts', {
  id: text('id').primaryKey(),
  slug: text('slug').unique().notNull(),
  title: text('title').notNull(),
  content_html: text('content_html').notNull(),
  excerpt: text('excerpt'),
  meta_title: text('meta_title'),
  meta_description: text('meta_description'),
  focus_keyword: text('focus_keyword'),
  category_id: text('category_id').references(() => blogCategories.id, { onDelete: 'set null' }),
  featured_media_id: text('featured_media_id').references(() => blogMedia.id, { onDelete: 'set null' }),
  lang: text('lang').notNull().default('fr'),
  status: text('status').notNull().default('draft'),
  reading_minutes: integer('reading_minutes'),
  word_count: integer('word_count'),
  published_at: timestamp('published_at', { withTimezone: true }),
  created_at: timestamp('created_at', { withTimezone: true }).default(sql`now()`),
  updated_at: timestamp('updated_at', { withTimezone: true }).default(sql`now()`),
});

/** Création idempotente des tables (même structure que drizzle/0001_create_blog.sql d'Omega). */
export const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS blog_categories (
  id          TEXT PRIMARY KEY,
  slug        TEXT UNIQUE NOT NULL,
  name_fr     TEXT NOT NULL,
  description TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS blog_media (
  id          TEXT PRIMARY KEY,
  filename    TEXT NOT NULL,
  url         TEXT NOT NULL,
  mime        TEXT NOT NULL,
  size_bytes  INTEGER NOT NULL,
  width       INTEGER,
  height      INTEGER,
  variants    TEXT,
  title       TEXT,
  alt_text    TEXT,
  caption     TEXT,
  description TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id                TEXT PRIMARY KEY,
  slug              TEXT UNIQUE NOT NULL,
  title             TEXT NOT NULL,
  content_html      TEXT NOT NULL,
  excerpt           TEXT,
  meta_title        TEXT,
  meta_description  TEXT,
  focus_keyword     TEXT,
  category_id       TEXT REFERENCES blog_categories(id) ON DELETE SET NULL,
  featured_media_id TEXT REFERENCES blog_media(id) ON DELETE SET NULL,
  lang              TEXT NOT NULL DEFAULT 'fr',
  status            TEXT NOT NULL DEFAULT 'draft',
  reading_minutes   INTEGER,
  word_count        INTEGER,
  published_at      TIMESTAMPTZ,
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

-- colonnes ajoutées par rapport à Omega (base créée avec son script d'origine)
ALTER TABLE blog_media ADD COLUMN IF NOT EXISTS width INTEGER;
ALTER TABLE blog_media ADD COLUMN IF NOT EXISTS height INTEGER;
ALTER TABLE blog_media ADD COLUMN IF NOT EXISTS variants TEXT;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS word_count INTEGER;

CREATE INDEX IF NOT EXISTS blog_posts_status_published_idx ON blog_posts (status, published_at DESC);

INSERT INTO blog_categories (id, slug, name_fr) VALUES
  ('cat_creation_site',            'creation-site',            'Création de site'),
  ('cat_wordpress',                'wordpress',                'WordPress'),
  ('cat_e_commerce',               'e-commerce',               'E-commerce'),
  ('cat_seo',                      'seo',                      'SEO et référencement'),
  ('cat_referencement_local',      'referencement-local',      'Référencement local'),
  ('cat_developpement_sur_mesure', 'developpement-sur-mesure', 'Développement sur-mesure'),
  ('cat_saas_ia',                  'saas-ia',                  'SaaS et IA'),
  ('cat_branding',                 'branding',                 'Branding'),
  ('cat_motion_design',            'motion-design',            'Motion design')
ON CONFLICT DO NOTHING;
`;
