const express = require('express');
const app = express();
const {dbConnection} = require('./Database');

app.get('/' , async(req , res)=>{
    try {
        const db  = await dbConnection();
        const collection = db.collection('ItemManagement');
        const documents = await collection.find().toArray();
        console.log("documents : ",documents);
    } catch (error) {
        console.error(error);
        throw error;
    }
});

app.listen(3000);