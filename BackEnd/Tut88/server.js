const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));

app.get('/', (request, response) => {
    response.send('Hello World! My Name is Geetansh Bhardwaj! This is my server running on port 3000')
})

/***********Tedious way to handle different routes********** */
// app.get('/contact', (request, response) => {
//   response.send('Contact Me page ')
// })

// app.get('/blog/intro-to-js', (request, response) => {
//   response.send('JS introduction')
// })

// app.get('/blog/intro-to-python', (request, response) => {
//   response.send('python introduction')
// })

/***********Easier way to handle different routes********** */
app.get('/blog/:slug', (request, response) => {
    // console.log(request);
    response.send(request.params.slug)
})

app.get('/blog/:slug/:secondSlug', (request, response) => {
    // console.log(request);
    response.send(`Hello & welocome || ${request.params.slug} || ${request.params.secondSlug}` )
})


/***********Query Parameters********** */
app.get('/:slug', (request, response) => {
    //For URL  : http://localhost:3000/IronMan?mode=dark&region=India
    console.log(request.params); //outputs { slug: 'IronMan' }
    console.log(request.query); //outputs { mode: 'dark', region: 'India' }
    
    response.send(request.params.slug)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})