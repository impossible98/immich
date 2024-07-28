# Dev
FROM node:18.19.0 AS dev
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
# Build
FROM dev AS build
WORKDIR /app
COPY . .
RUN yarn run build \
    && yarn install --production
# Production
FROM node:18.19.0 AS production
WORKDIR /app
COPY --from=build /app/node_modules .
COPY --from=build /app/dist .
CMD [ "node", "dist/main.js" ]
