const express = require("express");
const mongoos = require("mongoose");
const bodyParser = require("body-parser");

const HomeRoute = require("./routers/home");
const path = require("path");

const app = express();
const port = process.env.port || 8080;

mongoos.connect("mongodb://127.0.0.1:27017/studentsdetails", {
  useNewUrlParser: true,
});
const db = mongoos.connection;
db.on("error", () => {
  console.log("Error is ");
});
db.once("open", () => {
  console.log("Connected");
});


// body parser 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/", HomeRoute);
// app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
// my edit 

app.use(express.static("public"));
// app.get("/", (err, res) => {
//   res.send("hello");
// });
app.listen(port, () => {
  console.log(`Server start at http://localhost:${port}`);
});
