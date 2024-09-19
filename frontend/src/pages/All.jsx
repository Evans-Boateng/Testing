import { useEffect, useState } from "react";
import Note from "../note";
import axios from "axios";

export default function All() {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        const fetchNotes = async () =>{
            try{
                const response = await axios.get("http://127.0.0.1:8000/api/notes/")
                setNotes(response.data)
                
            }
            catch (error) {
                console.error("error in fetching notes", error)
            }
        }
        fetchNotes();
    }, [])

    return (
        <>
            {
                notes.map((note, index) =>{
                    return <Note title={note.title} content={note.content} category={note.category} created={note.created} key={index}
                        id={note.id}/>
                })
            }
        </>
    )
}