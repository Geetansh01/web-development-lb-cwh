function createCard(titleStr, cName, views, monthsOld, durationStr, thumbnailLink){
    /* div.card-container */
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card-container");
    cardContainer.style.boxSizing = "border-box";
    cardContainer.style.padding = "8px";
    cardContainer.style.backgroundColor = `rgb(17 17 17)`;
    
    //Set Responsive Height
    let cardContainerHeight;
    if(window.innerWidth >= 1000){
        cardContainerHeight = "106px"
        cardContainer.style.height = cardContainerHeight;
    }
    else{
        cardContainerHeight = `${(20/100) * window.innerWidth}px`;
        cardContainer.style.height = cardContainerHeight;
    }
    
    /* div.card */
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    cardContainer.insertAdjacentElement("afterbegin", card);
    card.style.height = `${parseInt(cardContainerHeight) - 8*2}px`;
    card.style.boxSizing = "border-box";
    // card.style.border = "2px solid white"
    card.style.display = "flex";
    
    /* thumbnail */
    let thumbnailCont = document.createElement("div");
    card.insertAdjacentElement("beforeend", thumbnailCont);
    thumbnailCont.style.position = "relative";
    // thumbnailCont.style.border = "2px solid black";
    
    let thumbnail = document.createElement("img");
    thumbnail.setAttribute("src", thumbnailLink);
    thumbnail.setAttribute("alt","thumbnail");
    thumbnail.style.borderRadius = "12px";
    thumbnailCont.insertAdjacentElement("beforeend", thumbnail);
    thumbnail.style.height = "100%";
    thumbnail.style.widtht = "100%";
    
    /* duration */
    let duration = document.createElement("div");
    duration.style.width = "40.23px";
    duration.style.height = "18px"
    duration.style.backgroundColor = `rgba(0,0,0,0.8)`;
    duration.style.color = "white";
    duration.style.fontSize = "12px";
    duration.style.display = "flex";
    duration.style.alignItems = "center";
    duration.style.justifyContent = "center";
    duration.innerText = durationStr;

    thumbnailCont.insertAdjacentElement("beforeend", duration);
    duration.style.position = "absolute";
    duration.style.right = "11px";
    duration.style.bottom = "11px";
    duration.style.borderRadius = "5px";
    
    /* metadata */
    let metadata = document.createElement("div");
    metadata.style.padding = "5px";    
    card.insertAdjacentElement("beforeend", metadata);
    
    
    /* title */
    let title = document.createElement("p");
    title.innerText = titleStr;
    title.style.color = "white";
    metadata.insertAdjacentElement("beforeend", title);
    
    /* cName, views etc */
    let vidInfo = document.createElement("p");
    vidInfo.style.color = "#aaa";
    vidInfo.style.fontSize = "12px";
    vidInfo.style.marginTop = "8px";
    let allInfoStr;
    allInfoStr = `${cName} • `;
    
    if(views >= 1000000){
        views = views/1000000;
        allInfoStr += `${views}M views • `;
    }
    else if(views >= 1000){
        views = views/1000;
        allInfoStr += `${views}K views • `;
    }
    
    allInfoStr += `${monthsOld} months ago`;
    vidInfo.innerText = allInfoStr;
    metadata.insertAdjacentElement("beforeend", vidInfo);
    
    document.body.children[0].append(cardContainer);
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 10000000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");

