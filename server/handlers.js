"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
// const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const handleSearch = () => {
    return request('http://openlibrary.org/search.json?q=the+lord+of+the+rings') // 1
      .then((response) => JSON.parse(response))
      .then((parsedResponse) => {
        console.log(parsedResponse)
        return parsedResponse.data; // 2
      })
      .catch((err) => {
        return err.error?JSON.parse(err.error):err
      });
  };

// const handleSearch = (req, res) => {
//     res.status(200).json({
//         status:200,
//         data:req,
//         message:'Search results for books, authors, and more'})
//     }



module.exports = {handleSearch}