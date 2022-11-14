FROM node:19-alpine
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY public/ public
COPY src/ src

EXPOSE 4000
CMD npm start
