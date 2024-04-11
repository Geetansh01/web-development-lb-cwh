//NOTE : Before running this code, make sure to take the terminal in "Tut87" folder bcz files are being made where the terminal currently is.
//Using ES6 module standard just bcz i want to 🤷‍♀️
//Also bcz i have not initialised this folder as a node package (i.e it doesn't hava a "package.json" file) so i need to use ".mjs" extension to be able to use ES6 modules
//".mjs" means a JS module (in ES6 module system)
import fs from "fs/promises"; 

console.log('Program Starting');

//Writing to file
// let promise = fs.writeFile("hello2.txt", "This is fs/promises module")
// console.log(promise);

await fs.writeFile("hello2.txt", "This is fs/promises module")

//Reading from file after writing to it using above ☝          
let data = await fs.readFile("hello.txt")
console.log(data.toString());

await fs.appendFile("hello2.txt", "\n1 2 3 4 5");

console.log('Program Ending');