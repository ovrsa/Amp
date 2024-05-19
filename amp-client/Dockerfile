# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# ビルドコマンドを実行
RUN npm run build

# Start the app
CMD ["npm", "run", "dev"]
