# Use Node.js
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
 COPY analytics-dashboard/package*.json ./


# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Build React app
RUN npm run build

# Serve with NGINX
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
