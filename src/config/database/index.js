const mongoose = require("mongoose");

const URL = "mongodb+srv://new-paper:tuankiet0502@cluster0.qu9qrow.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.URL);
        console.log("connect success");
    } catch (error) {
        console.log("connect false");
    }
}

module.exports = { connect };
