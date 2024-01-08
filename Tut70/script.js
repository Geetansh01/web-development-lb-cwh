console.log("Reload For Different Colors");


function setRandomBackground(x) {
    let colors = ["blanchedalmond", "antiquewhite", "pink", "pink"]; 
    let a = Math.floor(Math.random()*10) % colors.length; 
    x.style.backgroundColor = colors[a];
}

function setRandomColor(x) {
    let colors = ["pink", "yellow", "blue", "green", "aqua", "brown"]; 
    let a = Math.floor(Math.random()*10) % colors.length; 
    x.style.backgroundColor = colors[a];
}

setRandomBackground(document.body);

let a = document.getElementsByClassName("box");

for (let index = 0; index < a.length; index++) {
    setRandomColor(a[index]); 
}