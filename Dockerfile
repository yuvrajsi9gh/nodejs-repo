# Node.js v22
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source
COPY . .

# Healthcheck endpoint
HEALTHCHECK --interval=30s --timeout=5s \
  CMD wget -qO- http://localhost:3000/health || exit 1

# Expose app port
EXPOSE 3000

# Run app
CMD ["node", "server.js"]
