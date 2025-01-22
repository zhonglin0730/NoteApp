'use client'
import { useState} from 'react'
import { deleteNote } from '../actions/noteActions'

export default function NoteList({ initialNotes }: { initialNotes: Note[] }) {
  const [notes, setNotes] = useState<Note[]>(initialNotes)

  const handleDelete = async (noteId: string) => {

    const element = document.getElementById(noteId);
    element?.classList.add('crossed-out');
    
    await deleteNote(noteId)
    setNotes(notes.filter((note) => note.$id !== noteId))
  }

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.$id} id={note.$id} onClick={() => handleDelete(note.$id)}>
          <p>{note.content}</p>
        </li>
      ))}
    </ul>
  )
}
