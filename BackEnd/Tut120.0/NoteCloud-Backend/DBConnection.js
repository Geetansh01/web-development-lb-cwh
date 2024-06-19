const { default: mongoose } = require("mongoose");

mongodbURI = "mongodb://localhost:27017";

async function connectToMongoDB() {
    try{
        await mongoose.connect(mongodbURI);
        console.log('Connected to MongoDB Successfully');
    }
    catch(err){
        console.log('Error Connecting to MongoDB 😢');
    }
}

module.exports.connectToMongoDB = connectToMongoDB;