FROM node:19-alpine

RUN npm install -g npm@9.5.1

WORKDIR /app-backend

COPY .env .
COPY package.json .
COPY package-lock.json .

COPY . .

RUN npm i

RUN npm run build

CMD [ "npm", "run", "start" ]