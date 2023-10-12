const express = require('express')
// const path = require('path')
// const people = require('./data')
const port = 3000
const app = express()

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

