const express = require('express');
const { handleSearch } = require('./handlers');
const port = 8000;

express()
    .get('/api/books',handleSearch)

    .get('/', (req, res) => {
    res.status(200).json({status:200,message:'Hello World!'})
    })

    .listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    });