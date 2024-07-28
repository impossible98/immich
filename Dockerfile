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
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
ENV NODE_ENV="production"
ENV DATABASE_HOST=""
ENV DATABASE_PORT=""
ENV DATABASE_USER=""
ENV DATABASE_PASSWORD=""
ENV DATABASE_NAME=""
EXPOSE 12284
CMD [ "node", "dist/main.js" ]
