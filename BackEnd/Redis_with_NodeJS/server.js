const express = require('express')
const client = require('./client')
const app = express()
const port = 9000

app.get('/', async (req, res) => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    try {
        // Check Redis for whether cached data is available or not
        const cached_value = await client.get("todos") // Naming it "todos" because that is what the "url" returns and that is what we are caching
        if(cached_value){
             res.json(JSON.parse(cached_value))
        }
        else{       
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            
            const result = await response.json();
            
            // Store in Redis
            await client.set("todos", JSON.stringify(result));
            await client.expire("todos", 10); // cache will expire after 10 seconds
            
            res.send(result)
        }
    } catch (error) {
        console.error(error.message);
        return res.status(500).send(`Something went wrong`);
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


async function getData() {
  
}


