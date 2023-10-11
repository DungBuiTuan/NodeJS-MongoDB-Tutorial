const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     res.status(200).send('<h1>This is Express page</h1>')
// })
// app.get('/about', (req, res) => {
//     res.status(200).send('<h1>About Page</h1>')
// })
// app.get('/files',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'))
// })
// app.get('/jsonres',(req,res)=>{
//     res.json([{
//         name:'Dung',
//         age:22,
//         address:'Thanh Hoa'
//     },
//     {
//         name:'Tuan',
//         age:47,
//         address:'Thanh Hoa'
//     }
// ])
app.use(express.static('mywweb'));

})
app.get('*', (req, res) => {
    res.status(404).send('<h1>Resuorce not found</h1>')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

