const { default: mongoose } = require("mongoose");
require('dotenv').config()

mongodbURI = process.env.MONGO_DB_URI; 

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