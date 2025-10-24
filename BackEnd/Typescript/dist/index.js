"use strict";
var _a, _b;
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
//# sourceMappingURL=index.js.map