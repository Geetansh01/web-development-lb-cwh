//Importing via CommonJS Module system
const a = require("./myModule");
console.log(a);

//Note that i had to give the current directory i.e "ExportsInCommJSModules" it's own "package.json" bcz otherwise it was taking the "package.json" from "Tut86" & that file is using ES6 Modules. So i was unable to run above code! 

//This will print the filename & directory name of current folder
console.log(__filename,"\n",__dirname);

//We are able to do this bcz when using CommonJS modules, before a module's code is executed, Node.js will wrap it with a wrapper function that looks like the following:
/*
(function(exports, require, module, __filename, __dirname) { 
    // Module code actually lives in here 
}); 
*/

