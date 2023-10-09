const {dbConnection} = require('./Database');

async function main(){
    try {
        const db = await dbConnection();
        const collection = db.collection('ItemManagement');
        const findResult = await collection.find().toArray();
        console.log(findResult);
    } catch (error) {
        console.error('Error performing the task:',error);
    }
}
main();