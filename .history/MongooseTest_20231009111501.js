const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
//Set up default mongoose connection
// const mongoDB = 'mongodb://127.0.0.1:27017/Test_MongoDB';

const Item = new mongoose.Schema({
    item:String,
    price:Int32,
    quantity:Int32,
    date:Date,
});

const ItemModel = mongoose.model('ItemManagement',Item);

const main = async() =>{
    await mongoose.connect('mongodb://127.0.0.1:27017/Test_MongoDB');
    console.log('Connect Successfully');

    const newData = new ItemModel({
        item:'Item3',
        price : 456 ,
        quantity:89,
        date:new Date('2024-02-09'),
    });
    await newData.save();
    console.log('Data is Added Successfully');
}

main();