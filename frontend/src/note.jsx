import { useState } from "react"
import UpdateNote from "./UpdateNoteModal";
import DeleteNote from "./DeleteNoteModal";

export default function Note(props){
  const [open, setOpen] = useState(false);
  const [openDelModal, setOpenDelModal] = useState(false);
  
  const changeBackground = () =>{
    let color = "";
    if (props.category === "Business"){
      color = "bg-[#5C6BC0]"
    }
    else if (props.category === "Personal") {
      color = "bg-[#FF9100]"
    } else {
      color = "bg-[#6BBB6A]"
    }
    return color;
  }
  const createdTimestamp = props.created;
  const createdDate = new Date(createdTimestamp)
  const year = createdDate.getFullYear();
  const month = createdDate.getMonth() + 1; // Add 1 as getMonth() returns 0-based index
  const day = createdDate.getDate();

  return (
    <div className="bg-white p-4 rounded-[10px] shadow-md relative ">
      <div className="flex items-center justify-between mb-4">
        <div className={`${changeBackground()} text-sm p-[6px] rounded-[20px]`}>{props.category}</div>
        <div className="flex pr-[10px] justify-between items-center gap-5">
          <input type="checkbox" className="w-[15px] text-[15px] checked:bg-green-500 cursor-pointer"  />
          <button onClick={() => setOpen(true)}>
            <svg className="w-[14px] h-[14px] text-[#8a8f8b] hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>
          </button>
          <button onClick={() => setOpenDelModal(true)}>
            <svg className="w-[14px] text-[#8a8f8b] hover:text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>
          </button>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="font-medium text-lg mb-3">{props.title}</h1>
        <p className="text-sm">{props.content}</p>
      </div>
      <div className="flex justify-end absolute bottom-[16px] right-[16px]"><p className="text-sm text-gray-400">{day}.{month}.{year}</p></div>
      <UpdateNote open={open} onClose={() => setOpen(false)} noteId={props.id}/>
      <DeleteNote open={openDelModal} onClose={() => setOpenDelModal(false)} noteId={props.id}/>
    </div>
  )
}