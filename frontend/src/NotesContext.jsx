import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthProvider';

const NotesContext = createContext();


export const NotesProvider = ({children}) => {
  const {token} = useAuth();
  const [notes, setNotes] = useState([]); 
  useEffect(() => {
    if (token){
      fetchNotes();
    }   
  }, [token])

  const fetchNotes = async () => {
    try{
      const response = await axios.get("http://127.0.0.1:8000/api/notes/", {
        headers: {
            'Authorization': `Bearer ${token}`
        }  
      })
      setNotes(response.data)
    }catch(error){
      console.error('Error in fetching notes', error)
    }
  }
  const handleCreateNote = async (title, content, category) => {
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/notecreate/',{title, content, category}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(response)
      setNotes((prevNotes) => [...prevNotes, response.data])
    } catch(error){
      console.error('error in creating note', error)
    }
  }

  const handleUpdateNote = async (updatedNote) => {
    try{
      const response = await axios.patch(`http://127.0.0.1:8000/api/updatedelete/${updatedNote.id}/`, updatedNote, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        setNotes((prevNotes) => 
          prevNotes.map((note) => 
            note.id === updatedNote.id ? updatedNote: note
          )
        )
      }

    }
    catch(error){
      console.error('error in updating note ', error)
    }
    
  };

  const handleDeleteNote = async (noteId) => {
    try{
      const response = await axios.delete(`http://127.0.0.1:8000/api/updatedelete/${noteId}/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (response.status === 204 || response.status === 200) {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
      }
    } catch (error) {
      console.error("Error in updating note", error)
    }

  };

  return (
    <NotesContext.Provider 
      value={{notes, fetchNotes, handleUpdateNote, handleDeleteNote, handleCreateNote}}
    >
      {children}
    </NotesContext.Provider>
  )
}
export const useNotes = () => useContext(NotesContext);