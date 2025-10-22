/****  TypeScript Intro ****/
let age: number = 20;
if (age<50){
    age += 10;
}
console.log(age);

/****  Type Inference in TS ****/
let marks = 15;

/**** Functions ****/
function calculateTotal(
    a: number,
    b: number
):number{
    return a+b;
}
console.log(calculateTotal(1,2));