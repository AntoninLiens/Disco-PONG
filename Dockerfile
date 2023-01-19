FROM node:18

RUN apt-get update
RUN apt-get upgrade

EXPOSE 3000

WORKDIR /app
COPY app/package*.json ./
RUN npm ci

COPY app/ .
RUN npm run build

CMD [ "node", "dist/main" ]