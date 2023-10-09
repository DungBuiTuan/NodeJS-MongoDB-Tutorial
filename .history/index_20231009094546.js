const express = require('express');
const app = express();
const {dbConnection} = require('./Database');

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

app.use(express.json());

app.post('/item' ,async(req , res)=>{
    console.log(req.body);
    const db  = await dbConnection();
    const collection = db.collection('ItemManagement');
    const result=await  collection.insertOne(req.body);
    res.json('updated');
})

app.listen(3000);