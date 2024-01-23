function sleep() {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('1s Hogya!')
        }, 1000);
    })

    return p;
}

//we wish to use await, but don't want to separately make a "async" function, so using IIFE instead
(async function main(){
    let a = await sleep();
    console.log('inside IIFE');
    console.log(a);
    
    let b = await sleep();
    console.log(b);
})()