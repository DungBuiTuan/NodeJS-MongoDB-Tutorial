console.log('Welcome to Node Tutorial')
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
// 4,5,6
sayHi('Dung')
sayHi(names.john)
sayHi(names.peter)
console.log("----------------")
var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)


