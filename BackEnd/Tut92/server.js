const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

/*******I wish to use the same template file "blog.html" for different blogs*****/

//M1 : Without ejs : either make many ".html" files in "template/" or no other option 😢
// app.get('/blog/adidas', (req, res) => {
//     let blogTitle = "Adidas"
//     let blogContent = "Adidas is the best brand"
//     res.sendFile("./template/blogTemplate.html", { root: __dirname })
// })

// app.get('/blog/nike', (req, res) => {
//     let blogTitle = "Nike"
//     let blogContent = "Nike is the best brand"
//     res.sendFile("./template/blogTemplate.html", { root: __dirname })
// })

// M2 : with ejs
app.get('/blog/adidas', (req, res) => {
    let blogTitle = "Adidas"
    let blogContent = "Adidas is the best brand"
    res.render("blogTemplate", { blogTitle: blogTitle, blogContent: blogContent })
})

app.get('/blog/nike', (req, res) => {
    let blogTitle = "Nike"
    let blogContent = "Nike is the best brand"
    res.render("blogTemplate", { blogTitle: blogTitle, blogContent: blogContent })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})