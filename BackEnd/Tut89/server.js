const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Syntax 1
//Handling POST request on '/' of server
app.post('/', (req, res) => {
    console.log('A POST req has been received from some client'); //This will be in the server logs (i.e Terminal from where you ran "node server.js")
    res.send('Msg from Geetansh_s Server : your POST req has been receieved!')
})

//Similarly Handling PUT & DELETE request on '/' of server
app.put('/', (req, res) => {
    console.log('A PUT req has been received from some client'); //This will be in the server logs (i.e Terminal from where you ran "node server.js")
    res.send('Msg from Geetansh_s Server : your PUT req has been receieved!')
})

app.delete('/', (req, res) => {
    console.log('A DELETE req has been received from some client'); //This will be in the server logs (i.e Terminal from where you ran "node server.js")
    res.send('Msg from Geetansh_s Server : your DELETE req has been receieved!')
})


//Syntax 2 : Request chaining
// app.post('/', (req, res) => {
//     console.log('A POST req has been received from some client'); //This will be in the server logs (i.e Terminal from where you ran "node server.js")
//     res.send('Msg from Geetansh_s Server : your POST req has been receieved!')
// }).put('/', (req, res) => {
//     console.log('A PUT req has been received from some client'); //This will be in the server logs (i.e Terminal from where you ran "node server.js")
//     res.send('Msg from Geetansh_s Server : your PUT req has been receieved!')
// }).delete('/', (req, res) => {
//     console.log('A DELETE req has been received from some client'); //This will be in the server logs (i.e Terminal from where you ran "node server.js")
//     res.send('Msg from Geetansh_s Server : your DELETE req has been receieved!')
// })


//Sending files on routes
app.get("/index", (req, res) => {
    console.log('Sent index.html');
    //M1 : Using absolute path
    // res.sendFile("C:/Users/Geetansh/Desktop/WebDevCodes/BackEnd/Tut89/templates/index.html")  
    
    //M2 : using relative path
    console.log(__dirname); //outputs : C:\Users\Geetansh\Desktop\WebDevCodes\BackEnd\Tut89
    res.sendFile("templates/index.html", { root: __dirname })
})

//Sending JSON objects on routes
app.get("/json", (req, res) => {
    console.log('Sent index.json');
    res.json({
        name: "Geetansh Bhardwaj",
        age: 18,
        address: "B-309, Sector-5, Noida",
        gender: "Male",
        interests: ["reading books", "watching movies", "playing video games"],
        is_active: true,
        joined_on: "2020-08-25",
        role: "developer",
        skills: ["JavaScript", "React", "Node.js", "Python"],
        username: "geetansh_bhardwaj"
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})