const express = require("express");
const mongoose = require("mongoose");
const redis = require("redis");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swaggerSpec");

const app = express();
const port = 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Redis connection
const client = redis.createClient(process.env.REDIS_URI);
client.on("connect", () => {
  console.log("Redis connected");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello from API service!");
});

app.listen(port, () => {
  console.log(`API service listening on port ${port}`);
});
