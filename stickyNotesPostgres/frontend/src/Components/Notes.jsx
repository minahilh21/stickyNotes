import Note from "./Note"
function Notes({ onDelete }) {
return (
    <div>
      <ul>
       <Note onDelete={ onDelete }/>
      </ul>
    </div>
  )
}
export default Notes;