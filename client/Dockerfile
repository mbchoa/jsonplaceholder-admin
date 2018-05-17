# Build environment
FROM node:carbon-alpine as builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --only=production
COPY . .
RUN npm run build

# Production environment
FROM nginx:1.13.9-alpine
LABEL author="Michael-Bryant Choa"

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
