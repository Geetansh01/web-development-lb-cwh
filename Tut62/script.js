/* 
    Ques : Create a business name generator by combining list of adjectives and shop name and another word

    Adjectives:
    Crazy 
    Amazing
    Fire 

    Shop Name:
    Engine
    Foods
    Garments

    Another Word:
    Bros
    Limited
    Hub
*/

function word() {
    let a = "Bros";
    let b = "limited";
    let c = "Hub";
    let random = Math.floor(Math.random() * 10) % 3;
    if(random == 0){
        return a;
    }
    else if(random == 1){
        return b;
    }
    else{
        return c;
    }
}
function shopName() {
    let a = "Engine";
    let b = "Foods";
    let c = "Garments";
    let random = Math.floor(Math.random() * 10) % 3;
    if(random == 0){
        return a;
    }
    else if(random == 1){
        return b;
    }
    else{
        return c;
    }
}
function adjective() {
    let a = "Crazy";
    let b = "Amazing";
    let c = "Fire";
    let random = Math.floor(Math.random() * 10) % 3;
    if(random == 0){
        return a;
    }
    else if(random == 1){
        return b;
    }
    else{
        return c;
    }
}

let businessName = adjective() + shopName() + word();
alert(`Your Cool Business Name is : ${businessName}`);