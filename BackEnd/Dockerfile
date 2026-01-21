FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
# Install dependencies including devDependencies (needed for build)
RUN npm install

COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the application
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
