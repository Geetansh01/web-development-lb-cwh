//Using Named exports.
//So I need to specifiy the exact names of things (like a, b, name here)
import {a, b, name} from "./myModule.js";

console.log(a);
console.log(b);
console.log(name);


//Using Default exports. 
//So no matter the name i use, the same default thing will come from "./myModule.js"
import obj from "./myModule.js";
console.log(obj);

import AnyNameHere from "./myModule.js";
console.log(AnyNameHere);


//importing from "./usingModulesWithHTMLFiles/myModule2.js"
import car from "./usingModulesWithHTMLFiles/myModule2.js"
console.log(car);




