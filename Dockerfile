FROM node:19-alpine
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN nmp ci

COPY public/ public
COPY src/ src
RUN npm run app

EXPOSE 4000
CMD npm start