# Dev
FROM node:18.19.0 as dev
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

# Build
FROM dev as build
WORKDIR /app
RUN yarn run build

# Production
FROM build as production
CMD [ "node", "dist/main.js" ]
