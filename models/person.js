const mongoose = require('mongoose');

const personschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },

    work: {
        type: String,
        enum:['chef','waiter','manager'],
        required:true

    },
    email:{
            type: String,
            required:true,
            unique:true

    },
    addresh:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
});

const person = mongoose.model('person', personschema);

module.exports = person;