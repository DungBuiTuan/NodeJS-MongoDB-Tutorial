// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative-flavor')

console.log('------------------')
console.log(data.items);
sayHi('Tuan Dung')
sayHi(names.dung)
sayHi(names.tuan)
