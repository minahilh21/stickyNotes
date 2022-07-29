import React, { useEffect, useState } from "react";
import './../css/AddNote.css';
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";


const EditNote = ({ onEdit }) => {
  const param = useParams();
  let id = param.id;
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [color, setColor] = useState('')
    useEffect(() => {
      getNote();
    },[])
  const getNote = async () => {
    axios.get(`http://localhost:5000/${id}`,  { crossdomain: true }).then(response => {
      setTitle(response.data.title);
      setContent(response.data.content);
      setColor(response.data.color);
    });
  }
  const navigate = useNavigate();
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