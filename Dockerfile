# build project
FROM node:18.14.2-alpine3.17 as build
WORKDIR /app
COPY ["package*.json", "."]
RUN npm install --only=production
COPY [".", "."]
RUN npm run build

# create nginx server
FROM nginx:1.23.3-alpine
COPY --from=build ["/app/dist", "/usr/share/nginx/html"]
COPY ["./nginx.conf", "/etc/nginx/nginx.conf"]
WORKDIR /usr/share/nginx/html
