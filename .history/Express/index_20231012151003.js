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
    const newPerson = req.body;
    newPerson.id = people.length+1;
    people.push(newPerson);
    res.status(201).json(people);
})

//Put Method
app.put('/persons/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const updatePeo = req.body;
    const index = people.findIndex(peo => peo.id === id);
    if (index !== -1) {
        people[index] = {...people[index],...updatePeo};
        res.json(people[index]);
    } else {
        res.status(404).json('error:Person not found')
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

