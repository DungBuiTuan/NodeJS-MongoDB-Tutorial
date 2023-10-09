const {dbConnection} = require('./Database');

async function insert(){
    try {
        const db = await dbConnection();
        const collection = db.collection('ItemManagement');
        const result=await  collection.insertOne({item:"Item1", price:47, quantity: 2, date:'2023-04-04'});
        console.log(result);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

insert();