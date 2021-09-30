FROM node:15.0-alpine

ENV PATH /app/node_modules/.bin:$PATH

RUN mkdir -p /home/node/app/node_modules
RUN chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json .



RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD ["npm","run","start"]