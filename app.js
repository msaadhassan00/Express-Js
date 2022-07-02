const express = require('express');
const app = express();
let { people } = require('./data');

app.use(express.static('./methods-public'))

// middleware
app.use(express.urlencoded({ extended: false }))

//parse data
app.use(express.json());

app.get('/api/users',(req, res)=> {
    res.status(200).json({success: true,data:people});
})

app.post('/api/users',(req, res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(401).json({success: false,msg:'Provide Name'});
    }
    res.status(200).json({success: true,person:name});
})

app.post('/login',(req, res)=> {
    const {name} = req.body;
    if(name){
        
        return res.status(200).send(`Welcome ${name}!`);
    }
    res.status(401).send(`You must be logged in`);
})

app.listen(5000,()=>{
    console.log('Server listening')
})