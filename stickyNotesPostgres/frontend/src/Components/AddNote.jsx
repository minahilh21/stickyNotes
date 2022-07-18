import React from 'react'
import { useState } from 'react'

export default function AddNote({onAdd}) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [color, setColor] = useState('#ffbbba')
  return (
    <>
    <form style={{color: '#000'}}>
      <input 
        type="text" 
        id="title" 
        name="title" 
        placeholder='Enter Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}/> 
      <br/>
      <input 
        type="text" 
        id="content" 
        name="content" 
        placeholder='Enter Content'
        value={content}
        onChange={(e) => setContent(e.target.value)}/><br/>
      <label>Select color:</label>
      <input 
        type="color" 
        value={color}
        onChange={(e) => setColor(e.target.value)}
          /><br/>
      <input 
        type='submit' 
        value='Save Note' 
        onClick={(e)=> {
          e.preventDefault();  
          onAdd(title,content,color)
          setTitle('')
          setContent('')
          setColor('#ffbbba')
          }
        } className='btn btn-success'/>
  </form>
    </>
)
}
