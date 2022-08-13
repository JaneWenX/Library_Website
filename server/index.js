const express = require("express");
const morgan = require("morgan");
const { postAccount, getAccount,getHistory } = require("./handlers");
// const {slideItems} = require('.././client/src/slideshow-gallery/')
const port = 8000;

express()
  .use(morgan("tiny"))
  .use(express.json())
  .use(express.static("public"))

  .post("/api/account", postAccount)

  .get("/api/account", getAccount)

  .get("/api/history",getHistory)


  .listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
