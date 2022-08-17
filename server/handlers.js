
const { MongoClient, ObjectId } = require("mongodb");
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

const addFavorite = async(req,res)=>{
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("Library");

  //to define how to get new added item info in cart
  const newFav = await db.collection("favorites").insertOne(req.body);

  newFav? res.status(200).json({status: 200,data: newFav,message: "add newFav success!",})
    : res.status(404).json({ status: 404, message: "add newFav fail!" });
client.close();
}

const addToBorrowCart = async(req,res)=>{
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("Library");

  //to define how to get new added item info in cart
  const borrowCart = await db.collection("borrowCart").insertOne(req.body);

  borrowCart? res.status(200).json({status: 200,data: borrowCart,message: "add borrowCart success!",})
    : res.status(404).json({ status: 404, message: "add borrowCart fail!" });
client.close();
}

const shareTo = async(req,res) =>{
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("Library");

  //to define how to get new added item info in cart
  const wantToShare = await db.collection("share").insertOne(req.body);

  wantToShare? res.status(200).json({status: 200,data: wantToShare,message: "add wantToShare success!",})
    : res.status(404).json({ status: 404, message: "add wantToShare fail!" });
client.close();
}

const getLike = async(req,res) =>{
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("Library");

  //to define how to get new added item info in cart
  const allLiked = await db.collection("favorites").find().toArray();

  allLiked? res.status(200).json({status: 200,data: allLiked,message: "get allLiked success!",})
    : res.status(404).json({ status: 404, message: "get allLiked fail!" });
client.close();

}
const getBorrowCart = async(req,res) =>{
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("Library");

  //to define how to get new added item info in cart
  const allCart = await db.collection("borrowCart").find().toArray();

  allCart? res.status(200).json({status: 200,data: allCart,message: "get allCart success!",})
    : res.status(404).json({ status: 404, message: "get allCart fail!" });
client.close();

}
const getShare = async(req,res) =>{
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("Library");

  //to define how to get new added item info in cart
  const allShare = await db.collection("share").find().toArray();

  allShare? res.status(200).json({status: 200,data: allShare,message: "get allShare success!",})
    : res.status(404).json({ status: 404, message: "get allShare fail!" });
client.close();
}

const deleteCart = async(req,res)=>{
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("Library");

  //to define how to get new added item info in cart
  const _id = req.params.bookId
  const theOneTo = await db.collection("borrowCart").findOne({_id:_id})
  const toDelete = await db.collection("borrowCart").deleteOne({theOneTo})
  toDelete? res.status(200).json({status: 200,data:toDelete,message: "delete toDelete success!",})
    : res.status(404).json({ status: 404, message: "delete toDelete fail!" });
client.close();
}

const patchPreference = async(req,res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("Library");
  const _id = req.params.accountId
  const theOneTo = await db.collection("accounts").findOne({_id:_id})
  const toUpdate = await db.collection("accounts").updateOne({theOneTo})
  toUpdate? res.status(200).json({status: 200,data:toUpdate,message: "update toUpdate success!",})
    : res.status(404).json({ status: 404, message: "update toUpdate fail!" });
client.close();
}
module.exports = {postAccount,getAccount,getHistory,addFavorite,addToBorrowCart,shareTo,getLike,getBorrowCart,getShare
,deleteCart,patchPreference
  }