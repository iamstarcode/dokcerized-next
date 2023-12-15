FROM node:20-alpine as builder

WORKDIR /app

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

# pnpm fetch does require only lockfile
COPY pnpm-lock.yaml ./

RUN pnpm fetch
ADD . ./

RUN pnpm install -r --offline
RUN pnpm build

FROM node:18-alpine  as production

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist/src ./dist/src
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 8000
CMD ["npm","start"]
