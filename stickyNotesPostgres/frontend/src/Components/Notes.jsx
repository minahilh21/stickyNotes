import Note from "./Note"
function Notes({onDelete, onEdit}) {
return (
    <div>
      <ul>
       <Note onDelete={ onDelete } onEdit={ onEdit }/>
      </ul>
    </div>
  )
}
export default Notes;