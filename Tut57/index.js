console.log("JS Loops");
// for loop
// for(let i = 0; i < 100; i++){
//     console.log(1 + i);
// }

// for in loop
let person = {
    name: "Geetansh",
    "Running Speed": 20,
    weight: 60,
    height: 181
};

for (const key in person) {
    console.log(key, person[key]);      
}

// for of loop
for(const c of "Geetansh"){
    console.log(c);
}

//while loop
let i = 2;
while(i < 5){
    console.log(i);
    i++;
}

//do while loop
let m = 100;
do {
    console.log(m);
    m++;
} while (m < 5);

