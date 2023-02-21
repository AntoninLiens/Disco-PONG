FROM node:19-alpine

WORKDIR /app-backend

COPY .env .
COPY package.json .
COPY package-lock.json .

COPY . .

RUN npm i

CMD [ "npm", "run", "start:dev" ]