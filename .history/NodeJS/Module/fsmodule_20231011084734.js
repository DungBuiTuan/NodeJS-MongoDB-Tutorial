//sync & async
const fs = require('fs');

//read file

// fs.readFile('fs.txt','utf-8',(err,data) =>{
//     if (err) {
//         console.error(err);
//         return;
//     } else {
//         console.log(data);
//     }
// })

// const file = fs.readFileSync('fs.txt','utf-8');
// console.log(file);

//write file

// fs.writeFile('text.txt','Hello,this is text.txt',(err) =>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("success");
// })

// fs.writeFileSync('text.txt','This is content of write file sync','utf-8');
// console.log('Write file success');

//stat

// fs.stat('text.txt',(err,stats) =>{
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(stats);
// })

const stats = fs.statSync('text.txt');
console.log(stats);