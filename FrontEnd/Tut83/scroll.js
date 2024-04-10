function scroll2Top(){
    let x = window;
    x.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
}

let scrollBtn = document.querySelector(".scrollBtn");

scrollBtn.addEventListener("click", ()=>{
    scroll2Top();
})

