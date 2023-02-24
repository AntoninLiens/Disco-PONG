FROM node:19-alpine

RUN npm install -g @npm9.5.1

WORKDIR /app-backend

COPY .env .
COPY package.json .
COPY package-lock.json .

COPY . .

RUN npm i

CMD [ "npm", "run", "start:dev" ]