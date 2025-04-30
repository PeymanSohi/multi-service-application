# Stage 1: Build the application
FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Stage 2: Set up the production environment
FROM node:18-slim

WORKDIR /app

COPY --from=build /app /app
RUN npm install --production

CMD ["npm", "start"]
