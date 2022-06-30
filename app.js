const express = require('express');
const app = express();
const logger = require('./05-logger');
const authorize = require('./05-authorize');

// req => middleware => res
// app.get('/',logger, (req, res) => {
//     res.send('Hello, world!');
// })

// app.get('/about',logger, (req, res) => {
//     res.send('About')
// })

// sexond way

// app.use(logger,authorize);

app.get('/', (req, res) => {
    res.send('Hello, world!');
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/items',[logger,authorize],(req, res) => {
    res.send('Items')
})

app.get('/api/item', (req, res) => {
    res.send('One Item')
    console.log(req.user);
})

app.listen(5000,()=>{
    console.log('Server is listening on port');
})