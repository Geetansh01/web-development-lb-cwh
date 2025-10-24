/****  TypeScript Intro ****/
let age: number = 20;
if (age<50){
    age += 10;
}
console.log(age);

/****  Type Inference in TS ****/
let marks = 15;

/**** Functions ****/
// 1: Explicit Return
function calculateTotal(
    a: number,
    b: number
):number{
    return a+b;
}
console.log(calculateTotal(1,2));

// 2: Also Explicit Return: Here the only things you can return are 'A' or 'B' or 'F'
function getGrade(marks:number):'A'|'B'|'F'{
    if(marks >= 95) return 'A';
    else if(marks >= 30 && marks < 95) return 'B';
    else return 'F';
}
console.log(getGrade(100))

// 3: Inferred return type of function
function calculateTotal2(
    a: number,
    b: number
){
    return a+b;
}
console.log(calculateTotal2(1,2)); 

// 4: Function returning "Void"
function returnsNothing():void {
    // returns nothing
}

// 5: Function returning "Undefined"
function returnsUndefined():void {
    return undefined;
}

// 6: Function Type in TS
function greetWrapper(name: string, greet: (name: string) => string){
    return greet(name);
}

function greet1(name: string):string {
    return `Hi! ${name}`;
}

function greet2(name: string):string {
    return `Namaste! ${name}`;
}

console.log(greetWrapper('Geetansh', greet2));

/**** Type Alias ****/
type myStringType = String // So, "myStringType" is a new type now          in this case it's just the "String" type
let dogName:myStringType = 'Tommy'

/**** Union Type and Type Narrowing ****/
function f1(info: string | number){
    // info.toLowerCase() // TS Will throw an error here, it may/ maynot be a string here
    
    // Type Narrowing: TS knows that inside this if block, "info" is string
    if(typeof info === "string"){
        info.toLowerCase() // allowed here!
    }
}

/**** Arrays in TS ****/
// Method 1
let CartoonNames: string[] = ["Tom", "Jerry", "Shinchan"]
console.log(CartoonNames[0]);

let matrix: number[][] = [[1,2],
                          [3,4]    
                         ]
console.log(matrix[0]?.[1])

// Method 2
let CartoonNames2: Array<string> = ["Tom", "Jerry", "Shinchan"]
console.log(CartoonNames[0]);

let matrix2: Array<Array<number>> = [[1,2],
                          [3,4]    
                         ]
console.log(matrix2[0]?.[1])

// Heterogenous Arrays
let harray: (string | number)[] = [1, "tommy"]
console.log(harray[1])




