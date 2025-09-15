// Using "String" datatype from redis
const client = require("./client")

async function init() {
    // 1: Insert and pop values from list
    await client.lpush("messages", 1);
    await client.lpush("messages", 2);
    await client.lpush("messages", 3);
    console.log(await client.rpop("messages"));
    console.log(await client.rpop("messages"));
    console.log(await client.rpop("messages"));
}

init();