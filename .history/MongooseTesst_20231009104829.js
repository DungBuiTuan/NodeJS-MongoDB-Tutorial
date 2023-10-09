const mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1:27017/Test_MongoDB';

const main = async() =>{
    await mongoose.connect(mongoDB);
    console.log('Connect Successfully');
}
mongoose.connect(mongoDB, { useNewUrlParser: true });
 //Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)