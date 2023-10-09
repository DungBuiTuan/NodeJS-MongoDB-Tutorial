const mongoose = require('mongoose');
const express = require('express');

mongoose.connect('mongodb://127.0.0.1:27017/Test_MongoDB');
const bookSchema = new mongoose.Schema({
    title : String,
    author : String,
})

const Book = mongoose.model('BookManagement',bookSchema);
const app = express();

app.get('/book', async (req,res) =>{
    try {
        const books = await Book.find();
        res.json(books)
    } catch (error) {
        console.log(error);
        throw error;
        res.status(500).json({error:'Internal server error'});
    }
})

app.listen(3000, ()=>{
    console.log('get server');
})