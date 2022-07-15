import React from 'react'
import { MdEdit, MdDelete  } from 'react-icons/md'
import axios from "axios";
import { useState } from 'react'

const Note = ({note}) =>{
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("");


  const [createdAt, setCreatedAt] = useState(0);
    axios.get("http://localhost:5000/",  { crossdomain: true }).then(response => {
      setTitle(response.data[0].title);
      setContent(response.data[0].content);
      setCreatedAt(response.data[0].createdAt);
      setColor(response.data[0].color);
    });
    function getTime(createdAt) {
      const minute = Math.floor((new Date() - new Date(createdAt))/(1000*60))
      if(minute === 0 ) return `seconds ago`
      if(minute > 1 && minute < 60) return `${minute} minutes ago`
      else if (minute > 60 && minute < 3600) return `${Math.floor(minute/60)} hours ago`
      else if (minute > 3600 && minute < 25200) return `${Math.floor(minute/(3600))} days ago`
      else if (minute > 25200 && minute < 756000) return `${Math.floor(minute/(25200))} months ago`
      else return `${Math.floor(minute/(756000))} years ago`
    }
  return (
    <>
    <li >
      <div href="" style={{backgroundColor: color}}>
        <h2>{ title }</h2>
          <p>{ content }</p>
        <h6>{ getTime(createdAt) }</h6>
        <span>
          <MdEdit/> 
          <MdDelete/>
        </span>
      </div>
    </li>
    </>
  )
}
export default Note;

