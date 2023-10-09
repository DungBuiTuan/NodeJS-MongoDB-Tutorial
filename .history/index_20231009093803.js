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

app.post('/item' , (req , res)=>{
    console.log(req.body);
    const db  = await dbConnection();
    const collection = db.collection('ItemManagement');
    // const result=await  collection.insertOne({item:"Item2", price:7, quantity: 2, date:'2023-05-04'});
    res.json('updated');
})

app.listen(3000);