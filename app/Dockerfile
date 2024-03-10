# Multi-stage building
# Building Vue.js
FROM node:17-alpine3.14 as vue-build

COPY ./vue /app
WORKDIR /app
RUN npm install

RUN npm run build

# Building nginx environment and copy Vue.js from vue-build
FROM nginx:alpine

ENV APP_HOME /app
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR $APP_HOME
COPY --from=vue-build /app/dist /var/www

# Execute web server by nginx
WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
