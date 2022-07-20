import React, { useState } from "react";
import styles from '../css/AddNote.module.css';
import { RiCloseLine } from "react-icons/ri";

const AddNote = ({ setIsOpen, onAdd }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [color, setColor] = useState('#ffbbba')
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Add Note</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <form className="form-group">
              <input 
                type="text" 
                id="title" 
                name="title" 
                placeholder='Enter Title'
                value={title}
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}/> 
              <br/>
              <textarea 
                type="text" 
                id="content" 
                name="content" 
                placeholder='Enter Content'
                value={content}
                className="form-control"
                onChange={(e) => setContent(e.target.value)}/>
                <br/>
              <label style={{ color: "#000" }} className="form-check-label" for="selectColor">Select Color</label>
              <input 
                type="color" 
                value={color}
                className="form-check-input"
                onChange={(e) => setColor(e.target.value)}
              />
              <br/>
            <div className={styles.modalActions}> 
              <div className={styles.actionsContainer}>
                <input 
                  type='submit' 
                  value='Save' 
                  onClick={(e)=> {
                    e.preventDefault();  
                    onAdd(title,content,color)
                    setTitle('')
                    setContent('')
                    setColor('#ffbbba')
                    setIsOpen(false)
                    }
                  } className='btn btn-success'
                />
                <input 
                  type='submit' 
                  value='Cancel' 
                  className="btn btn-danger"
                  onClick={() => setIsOpen(false)}
                />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNote;