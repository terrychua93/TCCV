# #Use node version 22 as our base image
# FROM node:20

# # Create app directory
# WORKDIR /app

# #Copy package.json and package-lock.json
# COPY package*.json ./

# #Install app dependencies
# RUN npm install

# #Copy the rest of the application code into the container
# COPY . .

# # Set port environment variable
# ENV PORT=9000
# #Expose the port the app runs on
# EXPOSE 9000

# # Start the application
# CMD ["npm", "start"]


FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20-alpine

RUN npm install -g http-server

WORKDIR /app
COPY --from=builder /app/dist .

EXPOSE 9000

CMD ["http-server", "-p", "9000"]