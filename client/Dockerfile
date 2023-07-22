FROM node:18-alpine as builder

WORKDIR /app

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

# pnpm fetch does require only lockfile
COPY pnpm-lock.yaml ./

RUN pnpm fetch --prod
ADD . ./

RUN pnpm install -r --offline --prod
RUN pnpm build

# Bundle static assets with nginx
FROM node:18-alpine  as production

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]