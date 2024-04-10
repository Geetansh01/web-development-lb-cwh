let num = parseInt(prompt("Enter Number : "));
let arr = [];
for (let i = num; i >= 1; i--) {
    arr.push(i);  
}

let fact = 1;
arr.forEach(element => {
    fact = fact*element;
});
alert(`Factorial of ${num} using for loop : ${fact}`);

let fact2 = arr.reduce((a, b)=>{
    return a*b;
})
alert(`Factorial of ${num} using reduce : ${fact2}`);
