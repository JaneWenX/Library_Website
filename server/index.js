const express = require('express');
const { handleSearch,postAccount,getAccount } = require('./handlers');
// const {slideItems} = require('.././client/src/slideshow-gallery/')
const port = 8000;

express()
    .get('/api/books',handleSearch)

    .get('/api/account', (req, res) => {
        res.status(200).json({status:200,message:'Hello World!'})
    })

    .post('/api/account',postAccount)
    .get('/api/account',getAccount)
    .get('/', (req, res) => {
    res.status(200).json({status:200,message:'Hello World!'})
    })
    

    .listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    });