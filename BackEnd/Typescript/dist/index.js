"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _b;
var _Hero_id;
Object.defineProperty(exports, "__esModule", { value: true });
let age = 20;
if (age < 50) {
    age += 10;
}
console.log(age);
let marks = 15;
function calculateTotal(a, b) {
    return a + b;
}
console.log(calculateTotal(1, 2));
function getGrade(marks) {
    if (marks >= 95)
        return 'A';
    else if (marks >= 30 && marks < 95)
        return 'B';
    else
        return 'F';
}
console.log(getGrade(100));
function calculateTotal2(a, b) {
    return a + b;
}
console.log(calculateTotal2(1, 2));
function returnsNothing() {
}
function returnsUndefined() {
    return undefined;
}
function greetWrapper(name, greet) {
    return greet(name);
}
function greet1(name) {
    return `Hi! ${name}`;
}
function greet2(name) {
    return `Namaste! ${name}`;
}
console.log(greetWrapper('Geetansh', greet2));
let dogName = 'Tommy';
function f1(info) {
    if (typeof info === "string") {
        info.toLowerCase();
    }
}
let CartoonNames = ["Tom", "Jerry", "Shinchan"];
console.log(CartoonNames[0]);
let matrix = [[1, 2],
    [3, 4]
];
console.log((_a = matrix[0]) === null || _a === void 0 ? void 0 : _a[1]);
let CartoonNames2 = ["Tom", "Jerry", "Shinchan"];
console.log(CartoonNames[0]);
let matrix2 = [[1, 2],
    [3, 4]
];
console.log((_b = matrix2[0]) === null || _b === void 0 ? void 0 : _b[1]);
let harray = [1, "tommy"];
console.log(harray[1]);
let myCar = {
    name: "Maruti Suzuki Celerio",
    model: "BAC",
    price: 1000000
};
console.log(myCar.name);
function area(shape) {
    if (shape.kind == "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.sideLength ** 2;
}
let cseA_marks = {
    "Geetansh": 100,
    "Soham": 90
};
console.log("Geetansh's marks: " + cseA_marks["Geetansh"]);
let cseA_marks2 = {
    "Geetansh": 100,
    "Soham": 90
};
console.log("Geetansh's marks: " + cseA_marks2["Geetansh"]);
let tom = {
    name: "Tom the cat"
};
let list = ["Apple", "Mango", "Banana"];
let mySet = new Set();
mySet.add(1);
let myMap = new Map();
myMap.set("Geetansh", 1);
console.log("Geetansh's number:" + myMap.get("Geetansh"));
let a;
class Hero {
    constructor(name, health, id) {
        _Hero_id.set(this, void 0);
        this.name = name;
        this.health = health;
        __classPrivateFieldSet(this, _Hero_id, id, "f");
    }
    attack(damage) {
        console.log(`${this.name} attacks for ${damage} damage!`);
        console.log(`${this.name} has ID: ${__classPrivateFieldGet(this, _Hero_id, "f")}`);
    }
    getHealth() {
        return this.health;
    }
}
_Hero_id = new WeakMap();
const geralt = new Hero("Geralt", 100, 1);
geralt.attack(25);
console.log(geralt.getHealth());
class Hero2 {
    constructor(id) {
        this.id = id;
    }
}
const saitama = new Hero2(1);
class Shape2 {
    constructor(size) {
        this.size = size;
    }
}
class Circle2 extends Shape2 {
    constructor(size) {
        super(size);
    }
    area() {
        return 100;
    }
}
const circle = new Circle2("medium");
console.log(circle.area());
class ElectricCar {
    constructor(make, model) {
        this.isRunning = false;
        this.make = make;
        this.model = model;
        this.isRunning = false;
    }
    drive(distance) {
        this.isRunning = true;
        console.log(`Driving ${distance} miles`);
    }
}
const myCar2 = new ElectricCar("Tesla", "Model S");
myCar2.drive(10);
class ElectricCar2 {
    constructor(make, model) {
        this.isRunning = false;
        this.make = make;
        this.model = model;
        this.isRunning = false;
    }
    drive(distance) {
        this.isRunning = true;
        console.log(`Driving ${distance} miles`);
    }
}
const myCar3 = new ElectricCar2("TATA", "Range Rover");
myCar3.drive(10000);
const anmol = {
    name: "Anmol",
    age: 19
};
console.log(anmol.name);
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst(["Hi", "Hello", "Adios"]));
console.log(getFirst(["Hi", "Hello", "Adios"]));
function sayHi(name) {
    console.log(`Hi ${name}`);
}
sayHi("Geetansh Bhardwaj");
function sayHi2(user) {
    console.log(`Hi ${user.name}`);
}
sayHi2({
    name: "Geetansh Bhardwaj",
    age: 20
});
let marks1 = {
    user_marks: "100",
};
console.log(marks1.user_marks);
let marks2 = {
    user_marks: 100,
};
console.log(marks2.user_marks);
//# sourceMappingURL=index.js.map