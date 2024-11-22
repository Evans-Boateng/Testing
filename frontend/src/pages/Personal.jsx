import axios from "axios";
import Note from "../note"
import { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider";
import { useNotes } from "../NotesContext";
import Initial from "../Initial";


export default function Personal() {
  const {notes} = useNotes();

  const filteredNotes = notes.filter((item) => item.category === "Personal");

  return (
      <>
        { filteredNotes.length === 0 ? <Initial /> :
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5">
            {filteredNotes.map((note) => {
              const gotNote = note;
              return (
                  <Note 
                    title={note.title} 
                    content={note.content} 
                    category={note.category} 
                    created={note.created} 
                    key={note.id}
                    note={gotNote}
                    id={note.id}
                  />

              )
            })}
          </div>
        }
      </>
  )
}