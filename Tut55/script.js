console.log("Hey! H r u?");
// var a = 1;
// var b = 2;
// console.log("Sum : ", a + b);
// console.log(typeof a, typeof b)

// Global and Local Scopes
{
    let x = "100";
    console.log(x);
    {
        let x = "200";
        console.log(x);
    }
}

const c = 1;
// c = c + 1; //Will give error

let l = 2;
let m = 2.55;
let n = null;
let o = "Geetansh";
let p = true;
let q;
let r = 100n;

console.log(l, m, n, o, p, q, r);
console.log(typeof l,typeof m,typeof n,typeof o,typeof p,typeof q,typeof r);

const shoe = {
    "brand": "nike",
    "brand tag line": "Just Do It",
    price: 10000
};


const obj = {
    property1: 1, // property name may be an identifier
    2: 2, // or a number
    "property n": 33, // or a string
};

shoe.color = "Red";
console.log(shoe);
console.log(shoe.price);

console.log("End Reached")