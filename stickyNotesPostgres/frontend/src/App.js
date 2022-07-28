import React from 'react';
import './App.css';
import Notes from "./Components/Notes";
import axios from "axios";
import AddNote from "./Components/AddNote"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


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
  await axios.post('http://localhost:5000/', note);
}
async function updateNote(id, title, content, color){
  const note = {
    title,
    content,
    color
  }
  return await axios.put(`http://localhost:5000/${id}`, note);
}
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Sticky Notes</h1>
        <Routes>
          <Route exact path="/" element={
            <>
              <Link to="/add">
                <button>
                  Add Note
                </button>
              </Link>
              <Notes onDelete={deleteNote}/>
            </>
          }
          />
          <Route exact path="/add" element={<AddNote onAdd={addNote} />}/>
        </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}
export default App;
