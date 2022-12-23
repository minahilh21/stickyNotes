const express = require('express')
import { startDb } from "./connection";
import { noteModel } from "./Model/note.model";
import cors from 'cors';
import { PORT } from "./constants";

const main = async () => {
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())
app.use(function(req: any, res:any, next:any) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//get all notes
app.get("/", async (req: any, res: any)=> {
  res.send(await noteModel.find());
});

//get one note
app.get("/:id", async (req: any, res: any) => {
  res.send(await getNote(req.params.id));
});

//add note
app.post("/", async (req: any, res: any) => {
  const user = req.body;
  const newUser = new noteModel(user);
  await newUser.save();
  res.json(user);
});

//update note
app.put("/:id", async (req: any, res: any) => {
  res.json (await noteModel.findOneAndUpdate(
    { _id: req.params.id }, 
    req.body, 
    {  new: true}
  ));
});

//delete note
app.delete("/:id", async (req: any, res: any) => {
  const note = await getNote(req.params.id);
  if(note) await noteModel.deleteOne({id: note.id});
  res.send("true");
});

app.listen(PORT,()=> {
  console.log(`expresss server started at Port: ${PORT}`);
});
startDb();
}
main();

async function getNote(id: string) {
  const note = await noteModel.findOne({ where: { id: id }});
  if(!note) throw new Error("Note not found");
  return note;
}