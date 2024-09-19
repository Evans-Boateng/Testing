import axios from "axios";
import Note from "../note"
import { useEffect, useState } from "react";


export default function Home() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () =>{
      try{
        const response = await axios.get("http://127.0.0.1:8000/api/notes/");
        setNotes(response.data)
      }
      catch (error) {
        console.error("error in fetching note", error)
      }
      
    }
    fetchNotes();
  }, [])

  const filteredNotes = notes.filter((note) => note.category === "Home");

  return (
      <>
        {
          filteredNotes.map((note, index) => {
            return <Note title={note.title} content={note.content} category={note.category} created={note.created} key={index}
            id={note.id}/>
          })
        }
      </>
  )
}
