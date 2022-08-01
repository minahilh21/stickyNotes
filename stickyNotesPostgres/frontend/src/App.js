import React from 'react';
import './App.css';
import Notes from "./Components/Notes";
import axios from "axios";
import AddNote from "./Components/AddNote"
import EditNote from "./Components/EditNote"
import swal from 'sweetalert';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


async function deleteNote(id){
  const willDelete = await swal({
    title: "Are you sure?",
    text: "Are you sure want to delete this note?",
    icon: "warning",
    buttons: [
      'Cancel',
      'Delete'
    ],
    dangerMode: true,
  });
  
  if (willDelete) {
    await axios.delete(`http://localhost:5000/${id}`, {
      headers: {"Content-Type":"application/json"}
    }, {mode: 'cors'});
    swal("Deleted!", "Note deleted sucessfully", "success", {
    className: "confirmation-button"
    });
  }
}
async function addNote(title, content, color){
  const note = {
    title,
    content,
    color
  }
  await axios.post('http://localhost:5000/', note);
  swal("Note added!","Note saved sucessfully", "success");
}
async function updateNote(id, title, content, color){
  const note = {
    title,
    content,
    color
  }
  await axios.put(`http://localhost:5000/${id}`, note);
  swal("Note Updated!","Note updated sucessfully", "success");
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
              <Notes onDelete={deleteNote} onEdit={updateNote}/>
            </>
          }
          />
          <Route exact path="/add" element={<AddNote onAdd={addNote} />}/>
          <Route path="/edit/:id" element={<EditNote onEdit={updateNote}/>}/>
        </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}
export default App;
