const {dbConnection} = require('./server');

async function main(){
    try {
        const db = await dbConnection();
        const collection = db.collection('UserManagement');
        const findResult = await collection.find().toArray();
        console.log(findResult);
    } catch (error) {
        console.error('Error performing the task:',error);
    }
}

main();