import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'

const NoteListPage = () => {

    let [notes, setNotes] = useState([])
    
    useEffect(() => {
      getNotes()
    }, [])
    
    let getNotes = async () => {
      let resp = await fetch('data')
      let data = await resp.json()
      setNotes(data)
    }

  return (
    <div>
      <div className='notes-list'>
          {notes.map((note, index) => (
            <ListItem key={index} note={note}/>
          ))}
      </div>
    </div>
  )
}

export default NoteListPage