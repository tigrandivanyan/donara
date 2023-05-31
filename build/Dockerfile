# Base image
FROM nginx:alpine

# Copy the built files from the build folder to Nginx HTML directory
COPY ./build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]