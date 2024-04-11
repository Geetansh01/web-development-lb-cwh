import path from "path";

let myPath = "C:\\Users\\Geetansh\\Desktop\\WebDevCodes\\BackEnd\\Tut87\\fsModule.mjs";

console.log('*********************');

console.log(path.extname(myPath), "\n");
console.log(path.dirname(myPath), "\n");
console.log(path.basename(myPath), "\n");

//Giving 1st path in forward slash "/" & 2nd in "\", still "path" module works like a charm 
console.log(path.join("C:/", "user\\Geetansh\\Desktop\\A.txt"));



