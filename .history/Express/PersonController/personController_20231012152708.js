
let people =[
    {
        id:1,
        name:'Dung',
        age:12
    },
    {
        id:2,
        name:'Dunga',
        age:13
    },
    {
        id:3,
        name:'Dungb',
        age:14
    },
    {
        id:4,
        name:'Dungc',
        age:15
    },
]

//Get Method
app.get('/persons' , (req , res)=>{

   res.json(people);

})

//Post Method
app.post('/persons' , (req,res)=>{
    console.log(req.body);
    const newPerson = req.body;
    newPerson.id = people.length+1;
    people.push(newPerson);
    res.status(201).json(people);
})

//Put Method
app.put('/persons/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const updatePeo = req.body;
    const index = people.findIndex(peo => peo.id === id);
    if (index !== -1) {
        people[index] = {...people[index],...updatePeo};
        res.json(people[index]);
    } else {
        res.status(404).json({error:'Person not found'})
    }
})

//Delete Method
app.delete('/persons/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const index=people.findIndex((item)=> item.id===id)
    if(!isNaN(index)){
        const deletedItem =  people.splice(index,1)[0];
        res.status(200).json(deletedItem);
        }else{
            res.status(404).json({ error : 'person not found' });
        }
})