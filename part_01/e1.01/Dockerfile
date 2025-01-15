# Use the official Node.js runtime as a parent image
FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install any needed dependencies
RUN npm install

# Copy the application source code
COPY . .

# Command to run the application
CMD ["node", "index.js"]