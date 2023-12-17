console.log("JS Functions")

function greet(name) {
    console.log("Good Morning " + name + "!");
    console.log(name + " is a great name.");
}

greet("Geetansh");
greet("Tanish");

function add(a, b, c = 1){
    let sum = a + b + c;
    console.log("Sum is : ", sum);
    return sum;
}

let result = add(1,2);
console.log(result);


//Arrow Function
const myfunc = (x) => {
    console.log(x);
    return x;
}

let a = myfunc(100);
console.log(a);


