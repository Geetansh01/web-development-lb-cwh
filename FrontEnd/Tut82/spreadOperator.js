function sum(a, b, c) {
    return a+b+c;
}

//Use 1 : To spread arrays
let arr = [1,2,3];

console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr));
// Both lines above mean same thing

//Use 2 : To make an object from an array 
let obj = {...arr};
console.log(obj);  //{0: 1, 1: 2, 2: 3}






