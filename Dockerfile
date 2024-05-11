FROM node:18.16.0-slim

LABEL mainteiner="MarekKobyliński"
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install -g http-server
RUN npm install --production
RUN npm run build
