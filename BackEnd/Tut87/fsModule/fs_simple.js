//NOTE : Before running this code, make sure to take the terminal in "Tut87" folder bcz files are being made where the terminal currently is.
const fs = require("fs");
// console.log(fs);

console.log('Program Starting');

//Writing to file
// fs.writeFileSync("hello.txt", "Hi there! How are U?");

// fs.writeFile("hello.txt", "Hi there! How are U?", () => {
//     console.log('Content Written to File Asynchronulsy!')
// }); //Run the code & in the output, U will see below line's output "Program Ending" 1st bcz it takes time to write to a file

//Reading the file after writing to it
fs.writeFile("hello.txt", "Hi there! How are U?", () => {
    console.log('Content Written');
    fs.readFile("./hello.txt", (error, data) => {
        console.log(error, data.toString());
    })
});

//Appending to file
// fs.appendFile("hello.txt", "1 2 3 4 5", (error)=>{
//     console.log(error);
// })
console.log('Program Ending');