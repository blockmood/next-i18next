FROM node:18-alpine3.14

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["./start.sh"]
