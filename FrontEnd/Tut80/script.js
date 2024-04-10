//Prototype
// let animal = {
//     eats : true,
// }

// let rabbit = {
//     jumps : true
// }

// rabbit.__proto__ = animal; //sets rabbit.[[Prototype]] = animal

//Classes & Objs
class Animal{
    constructor(name){
        this.name = name;
        console.log('Animal Class Constructor invoked');
    }

    eats() {
        console.log('Eating....');
    }
    
    jumps() {
        console.log('Jumping...');
    }
}

class Lion extends Animal{
    constructor(name){
        super(name);
        console.log('Lion Class Constructor invoked');
    }    
    
    //Method Overriding
    eats() {
        super.eats(); //To call eats() of super (base) class
        console.log('Lion Eating....');
    }
}

let rabbit = new Animal('Bunny');
console.log(rabbit);
rabbit.eats();

let lion = new Lion("Sheru");
console.log(lion);
lion.eats();

console.log(rabbit instanceof Animal);
console.log(lion instanceof Animal);
console.log(lion instanceof Lion);



