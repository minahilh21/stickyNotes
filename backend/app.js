const express = require("express");
const Quote = require('inspirational-quotes');
const app = express();
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
const note = [{
  "id": 1,
  "title": "title",
  "content": "sticky note content",
  "createdAt": new Date(),
  "updatedAt": new Date(),
},
{
  "id": 2,
  "title": "title2",
  "content": "sticky note content2",
  "createdAt": new Date(),
  "updatedAt": new Date(),
},
];
app.get("/", function(req, res) {
  console.log(note);
  res.send(note);
});
let port = process.env.PORT;
if(port == null || port == "") {
 port = 5000;
}

app.listen(port, function() {
 console.log("Server started successfully");
});