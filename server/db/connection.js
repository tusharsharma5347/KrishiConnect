// config/db-config.js
const mongoose = require('mongoose');

async function connectdb() {
    const uri = 'mongodb+srv://tushar_31:Tushar_09@cluster0.c3v4zdy.mongodb.net';

    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB via Mongoose");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        throw error; // propagate the error to prevent app from starting
    }
}

module.exports = connectdb;