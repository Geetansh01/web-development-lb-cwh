/*  Play Button Animation */
function addPlayBtnAnimation() {
	let songCards = document.querySelectorAll(".song-card")

	songCards.forEach((card) => {
		let initialHTML = card.innerHTML

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
			)
		})

		card.addEventListener("mouseleave", () => {
			card.innerHTML = initialHTML
		})
	})
}

/* Populating library with available Songs */
async function getSongs(AlbumFolder) {
	let response = await fetch(`./songs/${AlbumFolder}`)
	let data = await response.text()
	// console.log(data);

	let container = document.createElement("div")
	container.innerHTML = data

	let allaTags = container.getElementsByTagName("a")
	let songsArray = []

	for (let i = 0; i < allaTags.length; i++) {
		if (allaTags[i].href.endsWith(".mp3")) {
			songsArray.push(allaTags[i].href)
		}
	}
	return songsArray
}

async function populateLibrary(AlbumFolder) {
	let songsArray = await getSongs(AlbumFolder)
	// console.log(songsArray);

	let songsArea = document.querySelector(".songs-area");
	songsArea.innerHTML = ""; //Clear already existing content

	songsArray.forEach((s) => {
		//Extracting song name
		//Assuming "s" is like : "http://127.0.0.1:3000/Tut84/songs/yt1s.com%20-%20Aam%20Jahe%20Munde%20%20Parmish%20Verma%20feat%20Pardhaan%20%20Desi%20Crew%20%20Laddi%20Chahal.mp3"
		let songName = ""

		songName = s.split("/").pop().replace(".mp3", "").replaceAll("%20", " ")

		let song = document.createElement("div")
		song.setAttribute("class", "song black-card")
		song.insertAdjacentHTML(
			"afterbegin",
			`
                        <div class="first">
                            <img src="./assets/images/music-icon.svg" alt="play">
                            <div class="song-info">
                                <p id="trackName">${songName}</p>
                                <p id="artistName">Parmish Verma</p>
                            </div>
                        </div>
                        <img src="./assets/images/playBtn.svg" alt="play">
    `
		)

		songsArea.insertAdjacentElement("beforeend", song)
	})

	return songsArray;
}

function secondsToString(seconds) {
	// Check if seconds is a valid number
	if (isNaN(seconds) || seconds < 0) {
		// Return 00:00 if invalid
		return "00:00"
	}
	// Round the seconds to the nearest integer
	seconds = Math.round(seconds)
	// Calculate the minutes and the remaining seconds
	let minutes = Math.floor(seconds / 60)
	let remainder = seconds % 60
	// Pad the seconds with a leading zero if needed
	if (remainder < 10) {
		remainder = "0" + remainder
	}
	// Pad the minutes with a leading zero if needed
	if (minutes < 10) {
		minutes = "0" + minutes
	}
	// Return the string in the format mm/ss
	return minutes + ":" + remainder
}

function playSong(currSong, songURL, trackName) {
	currSong.pause();

	currSong.src = songURL
	currSong.setAttribute(
		`data-trackName`,
		trackName
	) // Store the current song name for later use in pause and stop functions

	currSong.load();
	currSong.play();
}

async function main() {
	addPlayBtnAnimation();
	let AlbumFolder = "parmish_verma";
	let songsArray = await populateLibrary(AlbumFolder);
	console.log("songsArray: ", songsArray);

	/* Play song on click */ /////////////////NOT WORKING FOR ALLLLL
	let currSong = new Audio()
	currSong.setAttribute(`data-trackName`, ``)

	let songs = Array.from(
		document.querySelector(".library").getElementsByClassName("song")
	)
	console.log(songs)

	songs.forEach((song) => {
		let songURL = `./songs/${AlbumFolder}/${song.querySelector("#trackName").innerText}.mp3`; ////////////FOLDER to be added here
		// console.log(songURL)

		song.addEventListener("click", () => {
			let trackName = `${song.querySelector("#trackName").innerText}`;
			playSong(currSong, songURL, trackName);
			document
				.querySelector(".playbar ul>li:nth-child(2)")
				.children[0].setAttribute("src", "./assets/images/pausebtnplaybar.svg")
			console.log(`Playing : ${songURL}`)
		})
	})

	/*Play pause song from playbar*/
	let pauseplaybtn = document.querySelector(".playbar ul>li:nth-child(2)")
	pauseplaybtn.addEventListener("click", () => {
		if (currSong.currentSrc == "") {
			//Do nothing
		} else if (currSong.paused) {
			currSong.play()
			pauseplaybtn.children[0].setAttribute(
				"src",
				"./assets/images/pausebtnplaybar.svg"
			)
		} else {
			currSong.pause()
			pauseplaybtn.children[0].setAttribute(
				"src",
				"./assets/images/playbtnplaybar.svg"
			)
		}
	})

	/* previous & next button in playbar */
	let simpleSongsArray = [];
	songsArray.forEach((songURL) => {
		simpleSongsArray.push(songURL.split("/").at(-1));
	});
	console.log(simpleSongsArray);

	let prevbtn = document.getElementById("prevBtn");
	prevbtn.addEventListener("click", () => {
		if (currSong.currentSrc == "") {
			//Do nothing
		} else if (currSong.paused) {

		} else {
			//song is playing

			let url = currSong.currentSrc;
			// console.log(currSong.currentSrc);
			let index = songsArray.indexOf(url);
			// console.log(index);

			let prevSongIndex = (index === 0) ? index : index - 1;
			let newURl = songsArray[prevSongIndex];
			let newTrackName = `${newURl.split("/").pop().replace(".mp3", "").replaceAll("%20", " ")}`; // To update the trackName of the song

			playSong(currSong, newURl, newTrackName);

		}
	})

	let nxtbtn = document.getElementById("nxtBtn");
	nxtbtn.addEventListener("click", () => {
		if (currSong.currentSrc == "") {
			//Do nothing
		} else if (currSong.paused) {

		} else {
			//song is playing

			let url = currSong.currentSrc;
			// console.log(currSong.currentSrc);
			let index = songsArray.indexOf(url);
			// console.log(index);

			let nextSongIndex = (index === (songsArray.length - 1)) ? index : index + 1;
			let newURl = songsArray[nextSongIndex];
			let newTrackName = `${newURl.split("/").pop().replace(".mp3", "").replaceAll("%20", " ")}`; // To update the trackName of the song

			playSong(currSong, newURl, newTrackName);

		}
	})

	/* Set song name & duration in playbar */
	let songName = document.getElementsByClassName("song-name")[0]
	currSong.addEventListener("playing", () => {
		songName.innerHTML = `${currSong.getAttribute(`data-trackName`)}`
	})

	let songDuration = document.getElementsByClassName("song-duration")[0]
	let seekBtn = document.querySelector(".seekbar > .circle")
	currSong.addEventListener("timeupdate", () => {
		songDuration.innerText = `${secondsToString(
			currSong.currentTime
		)} / ${secondsToString(currSong.duration)}`

		seekBtn.style.left = `${(currSong.currentTime / currSong.duration) * 100}%`
	})

	/* Volume control */
	let volumeSeekBar = document.getElementById("volume");
	volumeSeekBar.addEventListener("change", (e) => {
		// console.log(e, e.target, e.target.value);
		currSong.volume = parseInt(e.target.value) / 100;
	})

	/*Seek Song */
	let seekbar = document.querySelector(".seekbar")
	seekbar.addEventListener("click", (e) => {
		// console.log(e.target, e.target.getBoundingClientRect().right - e.target.getBoundingClientRect().left, e.offsetX);
		let percentageSeeked =
			(e.offsetX / e.target.getBoundingClientRect().width) * 100
		seekBtn.style.left = `${percentageSeeked}%`
		currSong.currentTime = (currSong.duration * percentageSeeked) / 100
	})

	/* hamburger menu for mobile */
	let menuicon = document.getElementById("openmenu-icon")
	menuicon.addEventListener("click", () => {
		document.getElementsByClassName("sidebar")[0].style.left = `0px`
	})

	let closemenuicon = document.getElementById("closemenu-icon")
	closemenuicon.addEventListener("click", () => {
		document.getElementsByClassName("sidebar")[0].style.left = `-290px`
	})

	/* Load Album on card click */
	let allSongCards = Array.from(document.getElementsByClassName("song-card"));
	allSongCards.forEach((songCard) => {
		songCard.addEventListener("click", (event) => {
			// console.log(event);
			// console.log(event.target);
			// console.log(event.currentTarget);
			let AlbumFolder = event.currentTarget.dataset.albumfolder;
			// console.log(AlbumFolder);
			populateLibrary(AlbumFolder);
		});
	});



}

main();