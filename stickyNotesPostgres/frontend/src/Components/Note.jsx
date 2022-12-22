import React from 'react'
import { MdEdit, MdDelete  } from 'react-icons/md'
import axios from "axios";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Note = ({ onDelete }) =>{
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
    axios.get("http://localhost:5000/",  { crossdomain: true }).then(response => {
      setItems(response.data);
    });
    function getTime(createdAt) {
      const minute = Math.floor((new Date() - new Date(createdAt))/(1000*60))
      if(minute === 0 ) return `seconds ago`
      if(minute >= 1 && minute < 60) return `${minute} minutes ago`
      else if (minute >= 60 && minute < 1440) {
        const hours = Math.floor(minute/60);
        if(hours <= 1)
          return `1 hour ago`;
        else return  `${hours} hours ago`
      }
      else if (minute >= 1440 && minute < 43800) {
        const days = Math.floor(minute/(1440));
        if(days <= 1)
          return `1 day ago`;
        return `${days} days ago`
      }
      else if (minute >= 43800 && minute < 525600) {
        const months = Math.floor(minute/(43800));
        if(months <= 1)
          return `1 month ago`;
        return `${months} months ago`
      }
      else return `${Math.floor(minute/(525600))} years ago`
    }
  return (
    <>
    {items.map(item => (
    <li key={item._id}>
      <div href="" style={{backgroundColor: item.color}}>
        <h2>{ item.title }</h2>
          <p>{ item.content }</p>
        <h6>{ getTime(item.createdAt) }</h6>
        <span>
            <MdEdit onClick={()=> {
            navigate(`/edit/${item._id}`)
            }
          } />
          <MdDelete onClick={()=> onDelete(item._id)}/>
        </span>
      </div>
    </li>
    ))}
    </>
  )
}
export default Note;



