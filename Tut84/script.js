/*  Play Button Animation */
let songCards = document.querySelectorAll(".song-card");

songCards.forEach((card) => {
  let initialHTML = card.innerHTML;

  card.addEventListener("mouseenter", () => {
    //Make the play button visible
    card.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="play-btn">
            <span class="circle">
                <img src="./assets/images/playBtn.svg" alt="play">
            </span>
        </div>
        `
    );
  });

  card.addEventListener("mouseleave", () => {
    card.innerHTML = initialHTML;
  });
});

/* Populating library with available Songs */
async function getSongs() {
  let response = await fetch("./songs");
  let data = await response.text();
  console.log(data);

  let container = document.createElement("div");
  container.innerHTML = data;

  let allaTags = container.getElementsByTagName("a");
  let songsArray = [];

  for (let i = 0; i < allaTags.length; i++) {
    if (allaTags[i].href.endsWith(".mp3")) {
      songsArray.push(allaTags[i].href);
    }
  }
  return songsArray;
}

async function populateLibrary() {
  let songsArray = await getSongs();
//   let audioElement = new Audio(songsArray[1]);
//   audioElement.play();
  console.log(songsArray);

  let libraryActions = document.querySelector(".library-actions");

  songsArray.forEach((s) => {
    //Extracting song name
    //Assuming "s" is like : "http://127.0.0.1:3000/Tut84/songs/yt1s.com%20-%20Aam%20Jahe%20Munde%20%20Parmish%20Verma%20feat%20Pardhaan%20%20Desi%20Crew%20%20Laddi%20Chahal.mp3"
    let songName = "";

    songName = s.split('/').pop().replace('.mp3','').replaceAll('%20', ' ');

    let a = document.createElement("a");
    a.setAttribute("href", s);
    a.insertAdjacentHTML("afterbegin", `
        <h3 id="trackName">${songName}</h3>
        <p id="artistName">Parmish Verma</p>
    `)

    let song = document.createElement("div");
    song.setAttribute("class", "song black-card");
    song.insertAdjacentElement("afterbegin", a);

    libraryActions.insertAdjacentElement("beforebegin", song);
  });
}

populateLibrary();
