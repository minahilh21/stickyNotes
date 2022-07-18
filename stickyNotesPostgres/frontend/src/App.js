import React from 'react';
import './App.css';
import Notes from "./Components/Notes";
import axios from "axios";
async function deleteNote(id){
  await axios.delete(`http://localhost:5000/${id}`, {
    headers: {"Content-Type":"application/json"}
  }, {mode: 'cors'});
  console.log("yo hooo")
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Notes onDelete={deleteNote}/>
      </header>
    </div>
  );
}
export default App;
