import data from './ESModule.mjs'
// const addFunction = require('./add');
// const addObject = require('./multipleIm-Export');
// const moduleExports = require('./exports');

const {hello,bye} = data;
// const sum = addFunction(4,5);

// console.log(sum);
// console.log('-----import/export-----');
// console.log('-----------------------');
// console.log('-----Multiple import/export-----');

// console.log(addObject.name);

// console.log('-----------------------');

// moduleExports.sayBye();
// moduleExports.sayHello();
// moduleExports.sayThanks();

console.log('-----------------------');
console.log('-----ES Module-----');

hello();
bye();