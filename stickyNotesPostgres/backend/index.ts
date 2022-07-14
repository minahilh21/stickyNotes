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

app.get("/", async (req, res)=> {
  res.send(await Note.find());
});

app.get("/:id", async(req, res)=> {
  res.send(await getNote(req.params.id));
});

app.post("/", async (req,res) => {
  const note = await Note.create({
    title: req.body.title,
    content: req.body.content,
    color: req.body.color
  }).save();
  res.send(note);
});

app.delete("/:id", async (req, res) => {
  const note = await getNote(req.params.id);
  if(note) Note.remove(note);
  res.send("true");
});

app.put("/:id", async (req, res) => {
  console.log("in put");
  const note = await getNote(req.params.id);
  note.title = req.body.title ? req.body.title : note.title;
  note.content = req.body.content ? req.body.content : note.content;
  note.color = req.body.color ? req.body.color: note.color;
  await Note.save(note);
  res.send(note);
})

let port = 5000;

app.listen(port, ()=> {
 console.log("Server started successfully");
});
}
main();

async function getNote(id: string) {
  const note = await Note.findOne({ where: { id: id }});
  if(!note) throw new Error("Note not found");
  return note;
}