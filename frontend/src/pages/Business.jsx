import axios from "axios";
import Note from "../note"
import { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider";
import Initial from "../Initial";
import { useNotes } from "../NotesContext";


export default function Business() {
  const {notes} = useNotes();

  const filteredNotes = notes.filter((note) => note.category === "Business");

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
