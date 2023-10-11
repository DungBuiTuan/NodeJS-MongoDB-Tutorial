const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('<h1>This is Express page</h1>')
})
app.get('/about', (req, res) => {
    res.status(200).send('<h1>About Page</h1>')
})
app.get('/*', (req, res) => {
    res.status(404).send('<h1>Resuorce not found</h1>')
})

app.get('/files',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
})
app.listen(3000, () => console.log(`Example app listening on port ${port}!`))

