import express from "express"
import mongoose, { modelNames } from "mongoose"
import { Todo } from "./models/Todo.js"
const app = express()
const port = 3000

//Specify the name of DB in mongoDB as "TodoDB" after connetion string in which to do CRUD operations
let connection = await mongoose.connect("mongodb://localhost:27017/TodoDB");

app.get('/', async (req, res) => {
    //Making a new todo and saving it to the database. If the fields of the todo are not according to imposed constraints, mongoose will throw an error. (Ex => " isDone: "Ram" " will result in error as "Ram" is not a boolean)
    let todo1 = new Todo({
        name: "webD",
        desc: "complete 1 web Dev lecture",
        isDone: false
    })

    await todo1.save(); //To save the above "todo1" to the database
    res.send('ToDo saved to DB if mongoose validations passed.')
})


//To send a To-do from DB to the client
app.get('/myTodos', async (req, res) => {
    let todos = await Todo.findOne({});
    res.json(todos);

    //If you don't want the _id field to be sent, then make a new JSON object with only the fields you want to send and send that.
    let obj = {
        name: todos.name,
        desc: todos.desc,
        isDone: todos.isDone
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})