# Dev
FROM node:18.19.0 AS dev
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

# Build
FROM dev AS build
WORKDIR /app
COPY . .
RUN yarn run build

# Production
FROM build AS production
CMD [ "node", "dist/main.js" ]
