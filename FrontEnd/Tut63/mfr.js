let nums = [1, 2, 3, 4, 5, 6];
let SquareArray = [];

//map()
SquareArray = nums.map((element)=>{
    return element**2;
});

console.log(SquareArray);

//filter()
let newArr = [];

const greaterThan4 = (element, index, array)=>{
    return (element > 4) ? true : false; 
}
newArr = nums.filter(greaterThan4);
console.log(newArr);


//reduce()
const sum = (a, b)=>{
    return a+b;
}

let total = nums.reduce(sum);
console.log(total);