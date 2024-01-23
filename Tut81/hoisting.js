//with "var"
function main() {
    console.log(a); //undefined but NO error ---> hoisting
    
    //Bht Sara Code.........
    
    var a = 3;
    
    console.log(a); //3
    
}

main();

//with functions
greet("Raj");

function greet(x) {
    console.log(`Good Morning ${x}`);
    
}

//with functions BUT function made with let/const 
greet2("Pinku"); //will give ERROR

let greet2 = function (x){
    console.log(`Good Morning ${x}`);
}

