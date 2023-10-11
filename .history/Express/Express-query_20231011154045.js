const express = require('express')
const path = require('path')
const people = require('./data')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('<h1>Click to page</h1><a href="/api/people">People</a>')
})


app.get('/api/people/query',(req,res)=>{
    let sortPeople = [...people]
    const {search,limit} = req.query
    if (search) {
        sortPeople = sortPeople.filter((People)=>{
            return People.name.startsWith(search);
        })
    }
    res.json(sortPeople);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

