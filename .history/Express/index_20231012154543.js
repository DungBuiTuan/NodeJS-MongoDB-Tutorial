const express = require('express')
const port = 3000
const app = express()
const personRouter = require('./PersonRoutes/PersonRoutes')

app.use('/',personRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

