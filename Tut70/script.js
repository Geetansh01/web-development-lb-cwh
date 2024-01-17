console.log("Reload For Different Colors");


function getRandomColor() {
    let v1 = Math.ceil(0 + Math.random()*(255 - 0));
    let v2 = Math.ceil(0 + Math.random()*(255 - 0));
    let v3 = Math.ceil(0 + Math.random()*(255 - 0));
    return `rgb(${v1}, ${v2}, ${v3})`;
}

document.body.style.backgroundColor = getRandomColor(document.body);

let a = document.getElementsByClassName("box");

for (let index = 0; index < a.length; index++) {
    a[index].style.backgroundColor = getRandomColor();
    a[index].style.color = getRandomColor();
}

