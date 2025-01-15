# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application source code
COPY . .

# Expose the port specified by the environment variable
EXPOSE $PORT

# Command to run the application
CMD ["node", "index.js"]
