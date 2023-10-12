const express = require('express')
// const path = require('path')
const people = require('./data')
const port = 3000
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))

//Get Method
app.get('/persons' , (req , res)=>{

   res.json(people);

})

//Post Method
app.post('/persons' , (req,res)=>{
    console.log(req.body);
    const newPerson = {
        name:req.body.name,
        age:req.age
    }

    people.push(newPerson);
    res.status(201).json(people);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

