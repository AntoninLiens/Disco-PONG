FROM node:19-alpine

WORKDIR /app-frontend

COPY package.json .
COPY package-lock.json .

COPY . .

RUN npm i

CMD [ "npm", "run", "start" ]