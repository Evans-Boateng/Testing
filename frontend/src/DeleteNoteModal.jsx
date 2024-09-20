import { toast } from "sonner"
import axios from "axios"

export default function DeleteNote({open, onClose, noteId}) {
  const handleDelete = async () => {
    try{
      await axios.delete(`http://127.0.0.1:8000/api/updatedelete/${noteId}/`);
      onClose()
      toast.success("Note deleted successfully!")

    }
    catch{
      toast.error("Note failed to delete!")
    }
  }
  return (
    <div onClick={onClose} className={`fixed z-50 inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "hidden"}`}>
      <div onClick={(event) => event.stopPropagation()} className={`w-[35%] flex flex-col justify-center items-center px-[15px] py-[20px] rounded-[5px] bg-white shadow transition all relative ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} `}>
        <div className="flex items-center justify-center mb-4">
          <svg className="w-[30px] text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>
        </div>
        <h1 className="text-lg font-bold">Confirm Delete</h1>
        <p className="text-center px-[40px] text-sm mb-4">Are you sure you want to delete this note?</p>
        <div className="flex gap-2">
          <button onClick={handleDelete} className="bg-red-600 text-white px-5 py-1 rounded-[6px] hover:transition-all duration-200 shadow-black hover:bg-red-700 text-[15px]">Delete</button>
          <button onClick={onClose} className="bg-gray-100 px-5 py-1 rounded-[6px] text-[15px] hover:transition-all duration-200 shadow-black hover:bg-gray-200">Cancel</button>
        </div>
        
        <button onClick={onClose} className="py-1 px-2 hover:bg-slate-50 hover:transition-all duration-200 rounded absolute top-[12px] right-[13px]">
          <svg className="w-[16px] text-[#8a8f8b]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>
          
      </div>
    </div>
  )
}