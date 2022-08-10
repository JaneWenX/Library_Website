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
}

// const handleSearch = (req, res) => {
//     res.status(200).json({
//         status:200,
//         data:req,
//         message:'Search results for books, authors, and more'})
//     }



module.exports = {handleSearch}