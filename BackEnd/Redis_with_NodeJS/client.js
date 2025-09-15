const Redis = require("ioredis");

const client = new Redis() // This will hit the redis server on 6379

module.exports = client;