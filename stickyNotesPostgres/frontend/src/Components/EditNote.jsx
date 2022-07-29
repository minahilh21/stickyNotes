import React, { useState } from "react";
import './../css/AddNote.css';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


const EditNote = ({ onEdit, id }) => {
  id = '321c65c0-fa6b-43ce-b9af-9c5d29d3a5c7';
  const [items, setItems] = useState([]);
    axios.get(`http://localhost:5000/${id}`,  { crossdomain: true }).then(response => {
      setItems(response.data);
    });
  const navigate = useNavigate();
  const [title, setTitle] = useState(items.title)
  const [content, setContent] = useState(items.content)
  const [color, setColor] = useState('#776667')

  return (
    <div className="wrapper">
      <h3>Edit Note</h3>
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
        <label htmlFor="selectColor">Select Color</label> 
        <input 
          type="color" 
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        </div>
        <input 
          type='submit' 
          value='Save Note' 
          onClick={(e)=> {
            e.preventDefault();  
            onEdit(id, title, content, color)
            setTitle('')
            setContent('')
            navigate('/')
            }
          } 
          /> 
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

export default EditNote;