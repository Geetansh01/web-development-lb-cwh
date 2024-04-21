/*
    Question:
    You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

    for example, these files become:

    1. name.jpg
    2. name.png
    3. this.pdf 
    4. harry.zip
    5. Rohan.zip
    6. cat.jpg 
    7. harry.pdf

    this: 
    jpg/name.jpg, jpg/cat.jpg 
    png/name.png 
    pdf/this.pdf pdf/harry.pdf
    zip/harry.zip zip/Rohan.zip
*/

const fsPromises = require('node:fs/promises');

async function clearClutter() {
    try {
        const files = await fsPromises.readdir("./");
        
        for (const file of files) {
            if(file == "index.js" || file == "ClutterInside") continue;
            // console.log(file);
            

            let myArray = file.split(".");
            let name = myArray[0];
            let extension = myArray[myArray.length - 1];

            try {
                await fsPromises.access(`./${extension}/`);
                await fsPromises.rename(`./${name}.${extension}`, `./${extension}/${name}.${extension}`);
            } catch {
                await fsPromises.mkdir(`./${extension}/`);
                await fsPromises.rename(`./${name}.${extension}`, `./${extension}/${name}.${extension}`);
            }
            
        }
    } catch (err) {
        console.log('Error reading the directory.\n');
        console.error(err);
    }
}


console.log('Clearing Clutter');

clearClutter();

