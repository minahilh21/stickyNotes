import React, { useState } from 'react'
// import AddButton from "./AddButton";
import AddNote from "./AddNote"



export default function Header({ onAdd }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>Sticky Notes</h2>
      {/* <AddButton onclick="setIsOpen"/> */}
      {/* <button className="btn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>  */}
      <button className="btn btn-block" style={{color: '#000'}} onClick={() => setIsOpen(true)}>
        Add Note
      </button>

      {isOpen && <AddNote setIsOpen={setIsOpen} onAdd={onAdd} />}
    </div>
  )
}
