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

/**** Objects in TS ****/
type car = {
    name: string,
    model: string,
    price: number
}

let myCar: car = {
    name: "Maruti Suzuki Celerio",
    model: "BAC",
    price: 1000000
}
console.log(myCar.name)

// Optional properties in an object: Optional properties can be added to an object type with the ? operator:

type Superhero = {
  name: string;
  strength: number;
  cape?: boolean; // cape is optional. That means that the type of .cape is actually boolean | undefined
};

//Discriminated Union
type Circle = {
    kind: "circle";
    radius: number;
};

type Square = {
    kind: "square";
    sideLength: number;
};

type Shape = Circle | Square;

function area(shape: Shape): number {
    if(shape.kind == "circle"){
        //Now TS knows it's a "Circle" type
        return Math.PI * shape.radius ** 2;
    }
    //Now TS knows it's a "Square" type
    return shape.sideLength ** 2;
}

//Dynamic keys 
type classMarks = {
    [key: string]: number;
    // This means type of "keys" of this object will be "string" and type of their values would be "number"
    // The specific name "key" doesn't matter, you can have anything, like "[xyz: string]: number;"
}

let cseA_marks: classMarks = {
    "Geetansh": 100,
    "Soham": 90
}

console.log("Geetansh's marks: " + cseA_marks["Geetansh"])

// Another Syntax to do exactly the same thing as above
type classMarks2 = Record<string, number>; // a Record in TS is a type that describes an object
let cseA_marks2: classMarks2 = {
    "Geetansh": 100,
    "Soham": 90
}
console.log("Geetansh's marks: " + cseA_marks2["Geetansh"])

// Dynamic Default Properties: if you want to require certain properties, use this syntax: 
type FormData = {
  [field: string]: string;
  email: string;
  password: string;
};

// The type above says: The object must have an "email" and "password" property, and it can have any number of additional "string" properties.

//Readonly Modifier
type cat = {
    readonly name: string
}

let tom: cat = {
    name: "Tom the cat"
}
// tom.name = "Jerry the cat" // Will give error

// "as const" in TS
let list = ["Apple", "Mango", "Banana"] as const; // Now, it's type is fixed as "["Apple", "Mango", "Banana"]" and nothing can be changed
// list.push("Pineapple") // will give error
// Similarly, it can be used to fix objects!

/**** Sets in TS ****/
let mySet = new Set<number>();
mySet.add(1); // Ok
// mySet.add("Hi"); // Error

/**** Maps in TS ****/
let myMap = new Map<string, number>();
myMap.set("Geetansh", 1);
console.log("Geetansh's number:" + myMap.get("Geetansh"));

/**** Type Assertion in TS: "as" keyword ****/
let a: string | number;

// a.toLowerCase(); // Won't work as "a" can be a "number" as well

// Here, we tell TS that we know that "a" is a string. 
// (a as string).toLocaleLowerCase(); // This will give error bcz of a separate reason: a has not been assigned any value yet!

/**** Classes in TS ****/
class Hero {
  name: string;
  health: number;
  #id: number;

  constructor(name: string, health: number, id: number) {
    this.name = name;
    this.health = health;
    this.#id = id;
  }

  attack(damage: number): void {
    console.log(`${this.name} attacks for ${damage} damage!`);
    console.log(`${this.name} has ID: ${this.#id}`);
  }

  getHealth() {
    return this.health;
  }
}

// Create an instance
const geralt = new Hero("Geralt", 100, 1);
geralt.attack(25);
console.log(geralt.getHealth());
// console.log(geralt.#id); // Can't access private members outside the class

// To create private members the TypeScript-only way, you use the "private" keyword instead of "#". So, while "#" marks a member as private also in JS, the "private" keyword will mark it as private only in TS and not JS (but still your TS code won't compile if you try to access a "private" member outside the class so your code would function the same anyway!)
class Hero2 {
    private id: number;

    constructor (id: number){
        this.id = id;
    }
}

const saitama = new Hero2(1);
// console.log(saitama.id); // Can't access private members outside the class

// Abstract classes in TS
abstract class Shape2{
    size: "small" | "medium" | "large";

    constructor(size: "small" | "medium" | "large") {
        this.size = size;
    }

    abstract area(): number;
}

class Circle2 extends Shape2 {
    constructor (size: "small" | "medium" | "large") {
        super(size);
    }

    area(): number {
        return 100; // Hardcoding area as 100
    }
}
const circle = new Circle2("medium");
console.log(circle.area());

// Interfaces in TS: an abstract class can have some definitions in it but an "interface" would only have declarations and NO definitions.
interface Vehicle {
  make: string;
  model: string;
}
interface Drivable {
  drive(distance: number): void;
}
class ElectricCar implements Vehicle, Drivable {
  make: string;
  model: string;

  // not required by the interfaces, but it's
  // okay to add extra properties
  private isRunning: boolean = false;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
    this.isRunning = false;
  }

  drive(distance: number): void {
    this.isRunning = true;
    console.log(`Driving ${distance} miles`);
  }
}

const myCar2 = new ElectricCar("Tesla", "Model S");
myCar2.drive(10); // "Testing Tesla Model S"

// Note: You can completely replace the "interface" with a "type" instead with no additional changes
type Vehicle2 = {
  make: string;
  model: string;
}
type Drivable2 = {
  drive(distance: number): void;
}
class ElectricCar2 implements Vehicle, Drivable {
  make: string;
  model: string;

  // not required by the interfaces, but it's
  // okay to add extra properties
  private isRunning: boolean = false;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
    this.isRunning = false;
  }

  drive(distance: number): void {
    this.isRunning = true;
    console.log(`Driving ${distance} miles`);
  }
}

const myCar3 = new ElectricCar2("TATA", "Range Rover");
myCar3.drive(10000); // "Testing Tesla Model S"

/**** Utility Types in TS ****/
// Pick<T> utility Type
type King = {
    name: string,
    age: number,
    kingdom: string
}

type Layman = Pick<King, "name" | "age">;
const anmol: Layman = {
    name: "Anmol",
    age: 19 
}
console.log(anmol.name);

/**** Generics in TS ****/
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(getFirst<string>(["Hi", "Hello", "Adios"]));
console.log(getFirst(["Hi", "Hello", "Adios"])); // You don't even need to specify the <string>, TS is smart enough to infer it.

//"extends" keyword in Generics
//1: stupid demo just to show what is is
function sayHi<T extends string>(name: T){ // So, now, T can just be "string" and nothing else
    console.log(`Hi ${name}`);
}

sayHi("Geetansh Bhardwaj")

//2: actual use case
type IHaveName = {
    name: string;
}
function sayHi2<T extends IHaveName>(user: T){ // So, now, T can be any type but should also satisfy "IHaveName" type (i.e should have a "name" of type "string").
    console.log(`Hi ${user.name}`);
}

sayHi2({
    name: "Geetansh Bhardwaj",
    age: 20
})

// Type Parameters for Types
type Marks<T> = {
    user_marks: T
}

let marks1: Marks<string> = {
    user_marks: "100",
}
console.log(marks1.user_marks)
let marks2: Marks<number> = {
    user_marks: 100,
}
console.log(marks2.user_marks)
