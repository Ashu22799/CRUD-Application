const express = require("express");
const Router = express.Router();
const Club = require("../models/club");

Router.get("/", (err, res) => {
  res.render("index");
});

// Create/Insert data

Router.post("/add", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // console.log(name, email);

  const club = new Club({
    name,
    email,
  });
  club
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });

  // call back method old version

  // club.save(err => {
  //   if (err) {
  //     console.log("err is ");
  //   } else {
  //     res.redirect("/");
  //   }
  // });
});

// FIND Operation

Router.get("/show", (req, res) => {
  Club.find()
    .then((docs) => {
      // console.log(docs);
      res.render('show',{
        students:docs
      })
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = Router;
