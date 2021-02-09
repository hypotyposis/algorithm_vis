FROM node:12-alpine

ADD . /app
WORKDIR /app

RUN npm install express --save

CMD node /app/app.js