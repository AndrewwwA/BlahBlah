const express = require("express");
const morgan = require("morgan");
const { db, Page, User } = require("./models");
const wiki = require("./routes/wiki");
const user = require("./routes/users");
const pg = require("pg");
const app = express();
const main = require("./views/main");
const port = 3000;

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wiki);
app.use("/user", user);

app.get("/", (req, res, next) => {
  try {
    res.redirect("/wiki");
  } catch (e) {
    console.log(e);
  }
});

// db.authenticate().then(() => {
//   console.log("connected to the database");
// });

const init = async () => {
  await db.sync();
  app.listen(port, () => {
    try {
      console.log("starting server");
    } catch (e) {
      console.log(e);
    }
  });
};

init();
