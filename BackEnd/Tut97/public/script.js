let genbtn = document.getElementById("generate");

genbtn.addEventListener("click", async (event) => {
    genbtn.style.backgroundColor = 'red';
    let putReq = await fetch("/postdata", {method: "POST"});
    let response = await putReq.json();
    // console.log(response);

    document.querySelector(".data").innerText = JSON.stringify(response, null, 2);
})