//sync & async
const fs = require('fs');

// fs.readFile('fs.txt','utf-8',(err,data) =>{
//     if (err) {
//         console.error(err);
//         return;
//     } else {
//         console.log(data);
//     }
// })

const file = fs.readFileSync('fs.txt','utf-8');
console.log(file);