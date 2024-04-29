use ("sigmawebDtut95");

// console.log(db);

db.createCollection("people");

var person1 = {name: "Geetansh", age: 18};
var person2 = {name: "Alice", age: 25};
var person3 = {name: "Bob", age: 30};
var person4 = {name: "Charlie", age: 22};
var person5 = {name: "David", age: 27};
var person6 = {name: "Eva", age: 19};
var person7 = {name: "Frank", age: 35};
var person8 = {name: "Grace", age: 28};
var person9 = {name: "Hannah", age: 24};
var person10 = {name: "Isaac", age: 32};
var person11 = {name: "Isaac", age: 32};

//CREATE
// db.getCollection("people").insertOne(person1);

let array = [person2, person3, person4, person5, person6, person7, person8, person9, person10, person11];
// db.getCollection("people").insertMany(array);

//READ
// let obj = db.people.find({name : "Isaac"});
// // console.log(obj);
// // console.log(obj.count());
// console.log(obj.toArray());
// // console.log(typeof(obj));

// //"findOne()" returns just the 1st matching document
// let obj2 = db.people.findOne({name : "Isaac"});
// console.log(obj2);


//UPDATE
db.createCollection("courses");
// db.courses.insertOne({name: "C++", fee: 10});

// db.courses.insertMany([
//     {name: "Java", fee: 10},
//     {name: "Python", fee: 10},
//     {name: "C#", fee: 10},
//     {name: "JavaScript", fee: 10},
//     {name: "PHP", fee: 10},
//     {name: "Ruby", fee: 10},
//     {name: "Swift", fee: 20},
//     {name: "Perl", fee: 20},
//     {name: "Scala", fee: 20},
//     {name: "Lua", fee: 20},
// ])

//Updates only the 1st record
// db.courses.updateOne({fee : 10}, {$set : {fee : 200}});

//Update Many
// db.courses.updateMany({fee : 10}, {$set : {fee : 400}});


//DELETE
// db.courses.deleteOne({fee : 200});
db.courses.deleteMany({fee : 300});

