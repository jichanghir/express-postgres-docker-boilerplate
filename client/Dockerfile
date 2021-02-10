FROM node:12.17.0 AS install-dependencies
WORKDIR /app
COPY ./src/package.json /app/
RUN yarn install
COPY src /app


# Stage 1 - the build process
FROM install-dependencies AS build-deps
RUN yarn build


# Stage 2 - the production environment
FROM nginx AS prod
COPY --from=build-deps /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
