const mongoose = require('mongoose')

const mongoURL = "mongodb://localhost:27017/myhotel";

mongoose.connect (mongoURL)

const db = mongoose.connection;

db.on('connected',() => {

    console.log("connected to MONGODB sever");
});


db.on('error',(err) => {

    console.log("MONGODB connection error:", err);
});


db.on('disconnected',() => {

    console.log("MONGODB disconnected");
});


module.exports = db;