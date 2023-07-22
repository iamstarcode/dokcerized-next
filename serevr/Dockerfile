FROM node:18-alpine as builder

#add curl
#RUN apk --no-cache add curl 
WORKDIR /app

#RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

# pnpm fetch does require only lockfile
COPY pnpm-lock.yaml ./

RUN pnpm fetch --prod
ADD . ./

RUN pnpm install -r --offline --prod
RUN pnpm build

COPY . .

EXPOSE 8000
CMD [ "node", "server.js" ]
