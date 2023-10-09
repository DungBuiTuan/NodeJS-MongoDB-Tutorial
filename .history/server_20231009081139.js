const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'MyCluster';
 
const dbConnection = async () =>{

    // const col = db.collection('UserManagement');
    // const findResult = await col.find().toArray();
    // console.log(findResult);
    try {
        await client.connect();
        console.log('Connect Successfully');
        const db = client.db(dbName);
        return db;
    } catch (error) {
        console.error('Fail to connect database:',error);
        throw error;
    }
}

module.exports = {dbConnection};

