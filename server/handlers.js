
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const postAccount = async(req,res) =>{
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("Library");

  //to define how to get new added item info in cart
  const newAccount = await db.collection("accounts").insertOne(req.body);

  newAccount? res.status(200).json({status: 200,data: newAccount,message: "add newAccount success!",})
    : res.status(404).json({ status: 404, message: "add newAccount fail!" });
client.close();

}

const getAccount = async(req,res) =>{
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("Library");

  //to define how to get new added item info in cart
  const allAccounts = await db.collection("accounts").find().toArray();

  allAccounts? res.status(200).json({status: 200,data: allAccounts,message: "get allAccounts success!",})
    : res.status(404).json({ status: 404, message: "get allAccounts fail!" });
client.close();

}

const getHistory = async(req,res) =>{
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("Library");

  //to define how to get new added item info in cart
  const myHistory = await db.collection("history").find().toArray();

  myHistory? res.status(200).json({status: 200,data:myHistory, message: "get myHistory success!",})
    : res.status(404).json({ status: 404, message: "get myHistory fail!" });
client.close();

}

module.exports = {postAccount,getAccount,getHistory}