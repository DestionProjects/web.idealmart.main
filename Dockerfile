# # Use the official nginx image as a base
# FROM nginx:alpine

# # Remove the default Nginx configuration file
# RUN rm /etc/nginx/conf.d/default.conf

# # Copy the built files from the local machine to the container
# COPY ./out /usr/share/nginx/html

# # Copy a custom Nginx configuration file
# COPY nginx.conf /etc/nginx/conf.d

# # Expose port 80
# EXPOSE 80

# # Command to run nginx
# CMD ["nginx", "-g", "daemon off;"]



# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the Next.js development server
CMD ["npm", "run", "dev"]
