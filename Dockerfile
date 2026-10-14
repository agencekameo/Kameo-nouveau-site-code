# ═══════════════════════════════════════════════════════════════════════════════
# agence-kameo.fr — image Docker (même organisation que le site Omega)
# ─────────────────────────────────────────────────────────────────────────────
# deps    → npm ci
# builder → next build en sortie autonome (standalone). Le build n'a pas accès à la
#           base : les pages du blog se complètent des articles n8n à leur régénération.
# runner  → image de production légère, utilisateur non root
# ═══════════════════════════════════════════════════════════════════════════════

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund


FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_OUTPUT_STANDALONE=1
RUN npm run build


FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV BLOG_UPLOADS_ROOT=/uploads

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs \
 && mkdir -p /uploads \
 && chown nextjs:nodejs /uploads

# Fichiers statiques, et articles Markdown relus à chaque régénération du blog
COPY --from=builder /app/public ./public
COPY --from=builder /app/src/content/blog ./src/content/blog
# Serveur autonome ; .next doit rester modifiable (cache des pages régénérées)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
