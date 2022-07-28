import React, { useState } from "react";
import './../css/AddNote.css';
import { useNavigate, Link } from "react-router-dom";


const AddNote = ({ onAdd }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [color, setColor] = useState('#ffbbba')
  return (
    <div className="wrapper">
      <h3>Add Note</h3>
      <form>
        <input 
          type="text" 
          id="title" 
          name="title" 
          placeholder='Enter Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />     
        <br/>
        <textarea 
          type="text" 
          id="content" 
          name="content" 
          placeholder='Enter Content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          />
        <br/>
        <div className="color-pallet">
        <label Htmlfor="selectColor">Select Color</label> 
        <input 
          type="color" 
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        </div>
        <Link to="/">
        <input 
          type='submit' 
          value='Save Note' 
          onClick={(e)=> {
            e.preventDefault();  
            onAdd(title,content,color)
            setTitle('')
            setContent('')
            navigate('/');
            }
          } 
          /> 
          </Link>
          <Link to="/">
            <input 
              type='submit' 
              value='Cancel'
              style={{backgroundColor:'#c00'}}
            />
          </Link>
        </form>
    </div>
  );
};

export default AddNote;