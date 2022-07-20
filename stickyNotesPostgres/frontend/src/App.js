import React from 'react';
import './App.css';
import Notes from "./Components/Notes";
import axios from "axios";
import Header from "./Components/Header"

async function deleteNote(id){
  await axios.delete(`http://localhost:5000/${id}`, {
    headers: {"Content-Type":"application/json"}
  }, {mode: 'cors'});
}
async function addNote(title, content, color){
  const note = {
    title,
    content,
    color
  }
  return await axios.post('http://localhost:5000/', note);
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header onAdd={addNote} />
      <Notes onDelete={deleteNote}/>
      </header>
    </div>
  );
}
export default App;
