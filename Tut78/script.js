let terminal = document.querySelector(".hacker-terminal");
// terminal.style.backgroundColor = "blue"

function dotsAnimation(){
    let initialState = terminal.innerText;

    let dotCount = 0;
    let a = setInterval(()=>{
        if(dotCount < 3){
            terminal.innerText += ".";
            dotCount++;
        }
        else{
            dotCount = 0;
            terminal.innerText = initialState;
        }
    },500);

    let RandomTimeout = Math.ceil(1 + Math.random()*(7 - 1));

    let prm1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve ("Done!")
            clearInterval(a);
            terminal.innerText = initialState + "...";
            initialState = terminal.innerText;
        },RandomTimeout*1000);
    })

    return prm1;
}

async function startHacking(){
    terminal.innerText += `Initializing Hacking`;
    await dotsAnimation();
    terminal.innerText += `\nReading your Files`;
    await dotsAnimation();
    terminal.innerText += `\nPassword files Detected`;
    await dotsAnimation();
    terminal.innerText += `\nSending all passwords and personal files to server`;
    await dotsAnimation();
    terminal.innerText += `\nCleaning up`;
    await dotsAnimation();
    terminal.innerText += `\nDONE :)`;
    
    
}

startHacking()