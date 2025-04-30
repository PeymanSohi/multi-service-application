const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const app = express();
const port = 5000;

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Redis connection
const redisClient = redis.createClient({ host: 'redis' });

app.get('/', (req, res) => {
    redisClient.get('key', (err, reply) => {
        if (reply) {
            res.send(`Cache Hit: ${reply}`);
        } else {
            res.send('Cache Miss');
        }
    });
});

app.listen(port, () => {
    console.log(`API server running on port ${port}`);
});
