const express = require('express')
const path = require('path')
const people = require('./data')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'myweb')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

