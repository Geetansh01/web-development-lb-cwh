
function outer(){
    let name = "Geetansh";
    function inner(){
        console.log(name);
    }

    return inner; //returns the inner() function (Pass by sharing)
}

let foo = outer();
foo(); //Output : Geetansh

/*  
    1)Note that inner() is a local object (local to outer()) (here, inner() --> a function object)

    2)U might wonder why we are able to pass a reference of a local object (More Technically, Objects are passed by sharing in JS) outside of outer() in the first place as the local object should be destroyed immediately as outer() ends. (This is for sure the case in C++ & U are NOT Allowed to pass reference of local objects outside like this).

    2)Answer: Memory Management (Garbage Collection) in JS works a bit differently. From bingChatAi:

        JavaScript’s garbage collector works based on reachability. An object is considered reachable (& thus not garbage collected) if there’s a way to reach it. Here, inner() is reachable even when outer() ends as foo() now holds a reference to it. So it will not be garbage collected! 
    
    3)U can validate this by trying this code (it works perfectly fine! No Errors thrown ¯\_(ツ)_/¯ ):

        function outer(){
            let obj = {
                Name : "Geetansh",
            }
            return obj;
        }

        let b = outer();
        console.log(b); //Output : { Name: 'Geetansh' }


*/