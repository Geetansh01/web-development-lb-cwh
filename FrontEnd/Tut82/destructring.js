
//with arrays
let [x, y, ...rest] = [1,2,3,4,5,6,7];
console.log(x);
console.log(y);
console.log(rest);

//with objects
let boy = {
    Name: "Rohan",
    Age: 18,
    weight: 60,
}

let {Name, weight} = boy;
console.log(Name);
console.log(weight);
