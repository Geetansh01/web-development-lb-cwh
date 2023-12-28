let arr = [1, 2, "Geetansh"];
console.log(arr.length);
console.log(arr[0], arr[2]);
console.log(arr.toString());
console.log(arr.join(" and "));

let numbers = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

numbers.forEach((element, index, numbers) => {
    console.log(element,index,numbers);
});

for (const iterator of numbers) {
    console.log(iterator);
}

let lettersArray = Array.from("abcdefghijklmnopqrstuvwxyz");
console.log(typeof(lettersArray))
console.log(lettersArray);