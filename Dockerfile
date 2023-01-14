# Get the Node 18 image from Docker
FROM node:18-alpine

# Copy files and install dependencies
WORKDIR /usr/src/app
COPY . .
RUN npm install

CMD node http.mjs

EXPOSE 8080
