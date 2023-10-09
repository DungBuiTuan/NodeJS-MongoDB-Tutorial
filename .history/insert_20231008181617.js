const {dbConnection} = require('./server');

async function insert(){
    try {
        const db = await dbConnection();
        const collection = db.collection('UserManagement');
        const result=await  collection.insertOne({name:"Bui Anh Tuan", gender: "Male", age:47,dob:'1976-04-04'});
        console.log(result);
    } catch (error) {
        console.error(error);
        throw error;
    }
}