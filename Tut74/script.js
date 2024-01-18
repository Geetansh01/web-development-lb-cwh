// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

let button = document.getElementById("btn1");

button.addEventListener("click", () => {
    alert("I was Clicked");
});

// // Alter Method
// function f() {
//     alert("I was Clicked");
//     count++;
// }
// button.addEventListener("click", f);

let button2 = document.getElementById("btn2");
button2.addEventListener("contextmenu", () => {
    alert("Pls Don't hack us by Right Click");
});

let button3 = document.getElementById("btn3");
button3.addEventListener("keypress", (e) => {
    console.log(e); //Logging the event object
    console.log(e.key);
});

let button4 = document.getElementById("btn4");
let click_count = 0;
function handleClick() {
    click_count++;
    if(click_count >= 2){
        button4.removeEventListener("click", handleClick);
    }
    alert(`Click No. ${click_count}`);
}
button4.addEventListener("click", handleClick);

