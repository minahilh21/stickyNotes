import * as express from "express";
import { createConnection } from "typeorm";
import { Note } from "./Entity/note";

const main = async () => {
const app = express();
app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
const connection = await createConnection();
app.get("/", async function(req, res) {
  res.send(await Note.find());
});
app.post("/", async function(req,res) {
  console.log("title",req.body.title);
  const note = await Note.create({
    title: req.body.title,
    content: req.body.content,
    color: req.body.color
  }).save();
  res.send(note);
})
let port = 5000;

app.listen(port, function() {
 console.log("Server started successfully");
});
}
main();