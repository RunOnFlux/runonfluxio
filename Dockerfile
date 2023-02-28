FROM node:alpine

RUN mkdir -p /
WORKDIR /data

COPY . /data

RUN npm install

RUN npm run build
EXPOSE 3000
CMD npm run start
