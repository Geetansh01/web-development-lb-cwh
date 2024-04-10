console.log("Namaste Bharat!");

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[3].style.backgroundColor = "green";
document.getElementById("purplebox").style.backgroundColor = "purple";

document.querySelector(".box").style.backgroundColor = "red";

// function setColor(element) {
//     element.style.backgroundColor = "blue";
// }
// document.querySelectorAll(".box").forEach(setColor);

// Either ☝ or Use Arrow Functions

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "pink";
})