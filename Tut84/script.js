let songCards = document.querySelectorAll(".song-card");

songCards.forEach(card => {
    let initialHTML = card.innerHTML;

    card.addEventListener("mouseenter", () => {
        //Make the play button visible
        card.insertAdjacentHTML("afterbegin",
            `
        <div class="play-btn">
            <span class="circle">
                <img src="./assets/images/playBtn.svg" alt="play">
            </span>
        </div>
        `
        )
    })

    card.addEventListener("mouseleave", ()=>{
        card.innerHTML = initialHTML;
    })

});


