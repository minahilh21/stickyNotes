import Note from "./Note"
function Notes({onDelete}) {
return (
    <div>
      <h1>Sticky Notes</h1>
      <ul>
       <Note onDelete={onDelete}/>
      </ul>
    </div>
  )
}
export default Notes;