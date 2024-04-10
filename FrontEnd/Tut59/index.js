// Faulty Calculator

function FaultyCalculate(a, op, b){
    let x = Math.floor(Math.random() * 10); //Random int from [0, 9]
    if(x == 0){
        if(op == "+"){
            return a-b;
        }
        else if(op == "*"){
            return a+b;
        }
        else if(op == "-"){
            return a/b;
        }
        else if(op == "/"){
            return a**b;
        }
    }
    else{
        if(op == "+"){
            return a+b;
        }
        else if(op == "*"){
            return a*b;
        }
        else if(op == "-"){
            return a-b;
        }
        else if(op == "/"){
            return a/b;
        }
    }
}

function Calculate(a, op, b) {
    if(op == "+"){
        return a+b;
    }
    else if(op == "*"){
        return a*b;
    }
    else if(op == "-"){
        return a-b;
    }
    else if(op == "/"){
        return a/b;
    }
}

let wrongAnswerCount = 0;
for (let i = 0; i < 10000; i++) { 
    let a =  Math.floor(Math.random() * 10); //Random int from [0, 9]
    let b = Math.floor(Math.random() * 10); //Random int from [0, 9]
    
    let operators = ["+", "-", "/", "*"];
    let num = (Math.floor(Math.random() * 10)) % 4; //Random int from [0, 3]
    
    let result = Calculate(a, operators[num], b);
    let resultFaulty = FaultyCalculate(a, operators[num], b);

    if(result != resultFaulty){
        wrongAnswerCount++;
    }
}

console.log(wrongAnswerCount,"/10000 are Faulty Results");

console.log(FaultyCalculate(2,"+",3)); //May or May Not Give 5
