import { useEffect, useState } from "react";
import Note from "../note";
import axios from "axios";
import { useAuth } from "../AuthProvider";
import { useNotes } from "../NotesContext";
import Initial from "../Initial";



export default function All() {

    const {notes} = useNotes();
      

    return (
        <>
            {   
                notes.length === 0 ? <Initial /> :
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5">
                    {notes.map((note, index) => {
                        return (
                            
                            <Note title={note.title} content={note.content} category={note.category} created={note.created} note={note} key={note.id}
                            id={note.id}/>
                        )
                    })}
                </div>
            }

        </>
    )
}