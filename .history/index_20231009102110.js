const express = require('express');
const app = express();
const {dbConnection} = require('./Database');


//get request in order to respone to serser 
app.get('/' , async(req , res)=>{
    try {
        const db  = await dbConnection();
        const collection = db.collection('ItemManagement');
        const documents = await collection.find().toArray();
        res.json(documents);
        console.log("documents : ",documents);
    } catch (error) {
        console.error(error);
        throw error;
    }
});

//Do sth with Database to post it
app.use(express.json());

app.post('/item' ,async(req , res)=>{
    console.log(req.body);
    const db  = await dbConnection();
    const collection = db.collection('ItemManagement');
    const result=await  collection.insertOne(req.body);
    res.json('updated');
});

//Put
app.put('/item/:item' ,async(req , res)=>{
    console.log(req.params);
    const db  = await dbConnection();
    const collection = db.collection('ItemManagement');
    let result=await  collection.insertMany({item:req.params.name},{$set:req.body});
    res.json('updated');
});

app.listen(3000);