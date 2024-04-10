console.log("JS Loops");
// for loop
// for(let i = 0; i < 100; i++){
//     console.log(1 + i);
// }

let person = {
    name: "Geetansh",
    "Running Speed": 20,
    weight: 60,
    height: 181
};

// for in loop
for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        console.log(key, person[key]);
    }    
}

// for of loop
for(const c of "Geetansh"){
    console.log(c);
}

for (const key in person) {

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

