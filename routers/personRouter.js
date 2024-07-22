const Router  = require("express");

const express =require('express');
const router = express.Router();
const person = require('../models/person');


router.post('/',async (req,res) => {

    try{

    const data = req.body

    const newPerson = new person(data);

    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal saver error'});
        
    }
})


router.get('/',async (req,res) =>{
    try{
        const data = await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal saver error'});

    }
})



router.get('/:workType',async(req, res) =>{
    try{
        const workType = req.params.workType;
        if(workType =='chef'|| workType =='waiter'|| workType =='manager' ){
            
     const response = await person.find({work: workType});
     console.log('response fetched');
     res.status(200).json(response);

     }
     else{
     res.status(404).json({error:'invalid work type'});

     }

    }catch(err){

        console.log(err);
        res.status(500).json({error:'internal saver error'});


    }
})



router.put ('/:id',async(req,res) =>{
    try{
        const personid = req.param
    }
})

module.exports= router;