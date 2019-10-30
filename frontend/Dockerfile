FROM node:10.16.3-alpine
RUN mkdir -p /app/frontend
WORKDIR /app/frontend

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
