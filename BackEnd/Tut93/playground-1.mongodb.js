/* global use, db */
// MongoDB Playground

// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('sigmawebDtut9');

// Insert a few documents into the sales collection.
db.getCollection('people').insertMany([
    { "name": "Geetansh", "age": 18 },
    { "name": "Alice", "age": 25 },
    { "name": "Bob", "age": 30 },
    { "name": "Charlie", "age": 22 },
    { "name": "David", "age": 27 },
    { "name": "Eva", "age": 19 },
    { "name": "Frank", "age": 35 },
    { "name": "Grace", "age": 28 },
    { "name": "Hannah", "age": 24 },
    { "name": "Isaac", "age": 32 },    
]);

// Print a message to the output window.
console.log(`Data inserted!`);

