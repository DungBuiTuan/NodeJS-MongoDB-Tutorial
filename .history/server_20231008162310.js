const {MongoClient} = require('mongodb');

const url = 'mongodb+srv://tuandung0815:DE160632-DUNG@mycluster.46rajfm.mongodb.net/';
const client = new MongoClient(url);
const dbName = 'MyCluster'
 
async function main(){
    await client.connect();
    console.log('Connect Successfully')
    // Database and collection
    const db = client.db(dbName);
    const col = db.collection('UserManagement');
    const findResult = await col.find().toArray();
    console.log(findResult);
}

main();

