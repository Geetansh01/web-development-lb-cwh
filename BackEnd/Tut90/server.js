const { error } = require('console')
const express = require('express')
const fs = require("fs")
const app = express()
const port = 3000


//EXAMPLE 1 : inbuilt middleware in Express.js

// /*
//     Middleware inbuilt by Express.js : 
//     1)If the request is say on "http://localhost:3000/hello.txt" then this middleware intercepts the request and sends "hello.txt" from "public" folder in response
//     2)Note that after the response is sent to the client, the request-response cycle ends. 
//     3)So, even though there is a route handler below for request on "/hello.txt", it can't do anything
// */
// app.use(express.static("public"))

// //Route handlers
// app.get('/hello.txt', (req, res) => {
//   res.send('I am route handler for /hello.txt')
// })



//EXAMPLE 2 : writing your own middleware
// function myMiddleware(req, res, next){
//     console.log("myMiddleware() executed!")
//     next()
// }
// app.use(myMiddleware)



//EXAMPLE 3 : Many middlewares
// //1st middleware
// app.use((req, res, next) => {
//     console.log("1st middleware")
//     next()
// })

// //2nd middleware
// app.use((req, res, next) => {
//     console.log("2nd middleware")
//     next()
// })

// //3rd middleware
// app.use((req, res, next) => {
//     console.log("3rd middleware")
//     next()
// })



//EXAMPLE 4 : Hanging request

// app.use((req, res, next) => {
//     console.log("I am a middleware")
//     // next(); //Hanging the request
// })



//EXAMPLE 5 : Middleware ending the request - response cycle

// app.use((req, res, next) => {
//     console.log("I am a middleware")
//     res.send("response sent by middleware")
    
//     /*
//         1)Commenting this next() because the middleware has already sent the response and ended the request response cycle, so giving control to the next middleware is stupid as the request response cycle has already been ended. 
//         2)Un-commenting this next() will result in an error.
//     */
//     // next();
// })

// app.get("/", (req, res) => {
//     res.send("Hello World!")
// })


//EXAPMLE 6 : actually using middleware for something

//1)Modifying the request
app.use((req, res, next) => {
    req.name = "Geetansh Bhardwaj"; //Add this field to the request object
    next()
})

//2)Before the request is processed , log the user in and maintain logs in "logs.txt"
app.use((req, res, next) => {
    fs.appendFile("logs.txt", `user ${req.name} logged in on timestamp ${new Date()}\n`, (err) => {
        console.log(err);
    });
    next()
})


//output on terminal that server is listening
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})