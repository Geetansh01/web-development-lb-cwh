// Using "String" datatype from redis
const client = require("./client")

async function init() {
    // // 1: Get and Set a value
    // await client.set("user:1", "Geetansh Bhardwaj");
    // let user_1 = await client.get("user:1");
    // console.log("User 1 is: ", user_1);

    // // 2: Set a value with expiry time (TTL - Time To Live)
    // await client.set("cached_msg:1", "I will expire in 10 seconds");
    // await client.expire("cached_msg:1", 10); // See Redis GUI: This msg will expire in 10 seconds!
    // console.log(await client.get("cached_msg:1"));    
}

init();