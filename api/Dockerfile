# Stage 1: Build stage
FROM node:16 AS build

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .

# Stage 2: Runtime stage
FROM node:16-slim

WORKDIR /app

COPY --from=build /app /app

EXPOSE 5005

CMD ["node", "server.js"]
