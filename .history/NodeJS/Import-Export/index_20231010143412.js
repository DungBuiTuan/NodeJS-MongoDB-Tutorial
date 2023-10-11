const addFunction = require('./add');
const addObject = require('./multipleIm-Export');
const sum = addFunction(4,5);

console.log(sum);
console.log('-----import/export-----');
console.log('-----------------------');

console.log(addObject.name);
