# Build environment
FROM node:carbon-alpine
LABEL author="Michael-Bryant Choa"

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --only=production
COPY . .
EXPOSE 3001
CMD [ "npm", "start" ]
