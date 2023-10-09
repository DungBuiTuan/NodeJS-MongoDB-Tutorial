const {MongoClient} = require('mongodb');

const url = 'mongodb+srv://tuandung0815:DE160632-DUNG@mycluster.46rajfm.mongodb.net/';
const client = new MongoClient(url);
 
async function main(){
    await client.connect();
    console.log('Connect Successfully')
}

main();

