# Use the official nginx image as a base
FROM nginx:alpine

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the built files from the local machine to the container
COPY ./out /usr/share/nginx/html

# Copy a custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d

# Expose port 80
EXPOSE 80

# Command to run nginx
CMD ["nginx", "-g", "daemon off;"]



# FROM node:18
# # Set the working directory in the container
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install app dependencies
# RUN npm install

# # Bundle app source
# COPY . .


# # Expose the port the app runs on
# EXPOSE 3000

# # Define the command to run your app
# CMD ["npm","run", "start"]