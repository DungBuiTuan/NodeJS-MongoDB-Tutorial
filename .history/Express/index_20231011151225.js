const express = require('express')
const path = require('path')
const people = require('./data')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('<h1>Click to page</h1><a href="/api/people">People</a>')
})

app.get('/api/people',(req,res)=>{
    const newPeople = people.map((people)=>{
        const {name,age} = people;
        return {name,age};
    })
    res.json(newPeople);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

