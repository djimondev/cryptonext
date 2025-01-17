# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source files
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy runtime configuration script
COPY public/config.js /usr/share/nginx/html/
COPY docker/entrypoint.sh /docker-entrypoint.sh

# Make entrypoint executable
RUN chmod +x /docker-entrypoint.sh

# Set environment variables
ENV API_URL=http://localhost:3000
ENV ENVIRONMENT=production

# Expose port
EXPOSE 80

# Start Nginx using our entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"] 