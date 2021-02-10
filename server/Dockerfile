FROM node:12.18.1

WORKDIR /app

COPY ./src/package*.json /app/

RUN npm install

COPY src /app

CMD [ "npm", "start" ]
