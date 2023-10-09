const mongoose = require('mongoose');
const express = require('express');

mongoose.connect('mongodb://127.0.0.1:27017/Test_MongoDB');
const bookSchema = new mongoose.Schema({
    title : String,
    author : String,
})

const Book = mongoose.model('BookManagement',bookSchema);
const app = express();

//get
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

//middleware
app.use(express.json());

//post
app.post('/book', async (req,res) =>{
    console.log(req.body);
    try {
        const {title,author} = req.body;
        const books = new Book();
        await books.save();
        res.status(201).json(books)
    } catch (error) {
        res.status(500).json({error:'Internal server error'});
    }
})

app.listen(3000, ()=>{
    console.log('get server');
})