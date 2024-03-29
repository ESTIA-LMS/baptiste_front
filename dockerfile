FROM node:16.14-alpine3.15 as build
#
RUN apk update && apk add bash
#
RUN npm install -g npm@8.6.0
#
RUN npm install -g @angular/cli@13.1.4
#
WORKDIR /app/front
#
COPY ["./package.json", "./"]
#
## Install dependencies
RUN npm install 
#
RUN npm install --production=false
#
RUN npm audit fix -f
#
#COPY . .
