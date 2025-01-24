# Use the official Node.js image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application files to the container
COPY . .

# Expose the port your app uses
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
