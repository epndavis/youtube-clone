FROM node:14.15.3

ENV PORT 80

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "start"]
