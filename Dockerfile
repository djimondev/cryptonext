# Build stage
FROM node:18.19.1-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --ignore-scripts

# Copy source files
COPY src/ ./src/
COPY public/ ./public/
COPY docker/ ./docker/
COPY index.html ./
COPY vite.config.js ./
COPY tsconfig*.json ./

# Build the app
RUN npm run build

# Production stage
FROM nginxinc/nginx-unprivileged:1.25.4-alpine

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

# Expose port 8080 instead of 80 (unprivileged nginx listens on 8080 by default)
EXPOSE 8080

# Start Nginx using our entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"] 