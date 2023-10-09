const express = require('express');
const app = express();

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)');
    console.log('success');
});

app.listen(3000);