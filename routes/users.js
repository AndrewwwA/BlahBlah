const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.send("got to GET /wiki/");
  } catch (e) {
    console.log(e, "1");
  }
});

router.post("/", (req, res, next) => {
  try {
    res.send("got to POST /wiki/");
  } catch (e) {
    console.log(e, "2");
  }
});

router.get("/add", (req, res, next) => {
  try {
    res.send("got to GET /wiki/add");
  } catch (e) {
    console.log(e, "3");
  }
});

module.exports = router;
