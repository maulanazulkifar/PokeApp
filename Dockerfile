# Use official Node.js image as the base image for building
FROM node:14-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the built React app
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Nginx is started automatically by the base image