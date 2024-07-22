const express = require('express')
const app = express()
const db = require ('./DB')


const bodyParser = require('body-parser');
app.use(bodyParser.json());


const person = require('./models/person');
// const  MenuItem = require('./models/MenuItemm');



app.get('/',function (req,res){
res.send('welcome to my hotel')

})


// app.post('/Menu',async (req,res) => {

//     try{

//     const data = req.body

//     const   newMenuItem = new MenuItem(data);

//     const response = await newMenuItem.save();
//     console.log('data saved');
//     res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:'internal saver error'});
        
//     }
// })




// app.get('/Menu',async (req,res) =>{
//     try{
//         const data = await MenuItem.find();
//         console.log('data fetched');
//         res.json(data);
//     }catch(err){
//         console.log(err);
//         res.status(500).json({error:'internal saver error'});

//     }
// })



const personRouters = require('./routers/personRouter');

app.use('/person',personRouters)




app.listen(3000,()=>{
    console.log("listeing on the port 3000");
})

