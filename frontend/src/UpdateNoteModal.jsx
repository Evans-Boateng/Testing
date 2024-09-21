import { useEffect, useState } from "react"
import axios from "axios";
import { Toaster, toast } from 'sonner'


export default function UpdateNote({open,onClose,noteId}) {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");

  const [noteData, setNoteData] = useState({
    title: '',
    content: ''
  });
  
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/updatedelete/${noteId}/`)
      .then(response => response.json())
      .then(data => {
        // Only extract the name and description from the response
        const { title, content } = data;
        setNoteData({ title, content });
      })
      .catch(error => console.error('Error fetching item:', error));
  }, [noteId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNoteData({ ...noteData, [name]: value });
  };
  
  const handleSubmit = async () => {
    try{
      await axios.patch(`http://127.0.0.1:8000/api/updatedelete/${noteId}/`, noteData)
      toast.success("Note updated successfully!")
      onClose();
    }
    catch(error){
      console.error("Error in updating note", error)
    }
  }


  return (
    <div onClick={onClose} className={`fixed z-50 inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "hidden"}`}>
      <div onClick={(event) => event.stopPropagation()} className={`w-[35%]  p-[15px] rounded-[5px] bg-white shadow transition all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} `}>
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[12px]">TITLE</span>
            <button onClick={onClose}>
              <svg className="w-[12px] text-[#8a8f8b]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </button>
          </div>
          <input value={noteData.title} name="title" onChange={handleInputChange} className="w-full h-8 font-medium text-lg mb-[5px] focus:outline-none" />
          <span className="block text-[12px] mb-[5px]">CONTENT</span>
          <textarea value={noteData.content} name="content" onChange={handleInputChange} rows="4" className="w-full bg-[#f5f5f5] rounded focus:outline-none px-1 py-[4px] font-medium text-sm mb-4" />


          <div className="flex justify-center">
            <button onClick={handleSubmit} className="w-full bg-blue-500 hover:bg-blue-600 hover:transition-all duration-200 text-[13px] font-medium text-white py-2 rounded shadow-xl">UPDATE</button>
          </div>
        </div>
      </div>
    </div>
      
  )
}