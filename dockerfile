# FROM node:lts-alpine as build-stage
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # production stage
# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

FROM node:alpine

EXPOSE 80

RUN apk add --no-cache nginx

WORKDIR /app

COPY package.json .
RUN yarn install

COPY misc/nginx.conf /etc/nginx/nginx.conf

COPY . .

RUN yarn run generate

CMD ["nginx"]