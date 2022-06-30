const express = require('express');
const app = express();  
const {products} = require('./data')

app.get('/',(req, res)=>{
    // res.json([{name:'jhon'},{name:'susan'}])
    // res.json(products)

    res.send('<h1>Welcome To Home Page</h1> <a href="/api/products">Go to Products API</a>')

})

app.get('/api/products',(req, res)=>{
    const newProducts= products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts);
})

app.get('/api/products/:productID',(req, res)=>{
    const {productID} = req.params
    const SingleProduct = products.find((product)=> product.id === Number(productID))

    if(!SingleProduct){
        res.status(404).send('Product not found')
    }

    return res.json(SingleProduct);

})

app.get('/api/products/:productID/reviews/:reviewID',(req, res)=>{
    console.log(req.params);
    res.send('Hello World!')
})

app.get('/api/v1/query',(req, res)=>{
    // console.log(req.query);
    const {search,limit} = req.query;
    let sortedProducts = [...products];

    if(search){
        sortedProducts = products.filter((product)=>{
            return product.name.startsWith(search);
        });
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if(sortedProducts < 1){
        // res.status(200).send('No Product Matched with given data'); 
        return res.status(200).json({sucess:true,data:[]})
    }

    res.status(200).json(sortedProducts);
    // res.send('Hello World!')
}) 

app.listen(5000,()=>{
    console.log('Server listening on port');
})