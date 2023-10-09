const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost/EmployeeDB';
const client = new MongoClient(url);
 
async function main(){
    await client.connect();
    console.log('Connect Successfully')
}

main();

