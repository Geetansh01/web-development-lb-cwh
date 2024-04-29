// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 

import express from 'express'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { dataGen } from "./modules/server_functions.mjs" 
import mongoose from 'mongoose';
import { Employee } from './models/employee.js';

const app = express()
const port = 3000
const __dirname = dirname(fileURLToPath(import.meta.url)); //Bcz using ES6 modules
// console.log(__dirname);

app.use(express.static('./public'))

const connection = mongoose.connect("mongodb://localhost:27017/XYZcompany");

app.get('/', (req, res) => {
    res.sendFile('./public/generate.html', { root: __dirname });
})

app.post('/postdata', async (req, res) => {
    let randDataObj = dataGen();
    let emp = new Employee(randDataObj)
    try{
        await emp.save();
        res.send(JSON.stringify(randDataObj));
    }
    catch(err){
        console.log(err);
        res.send(JSON.stringify({err: "Error generating / saving data in DB"}));   
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})