import { useState } from "react"
import NoteModal from "./CreateNoteModal";
import {motion} from "framer-motion"

export default function Header() {
  const [open, setOpen] = useState(false);
  return(
    <>
      <div className="flex bg-white items-center  justify-center py-3 gap-4 shadow-md w-[100%]">
        <div className="w-[80%]">
          <form action="">
            <div className="flex gap-2 bg-[#f5f5f5] py-2 px-5 w-full rounded-[5px] items-center ">
              <svg className="w-[18px] text-gray-500" cxmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              <input placeholder="Search" className="placeholder-custom outline-none bg-transparent text-gray-500 w-full"></input>
            </div>
          </form>
        </div>
        <div className="">
          <motion.button onClick={() => setOpen(true)} className=" hover:bg-indigo-500 bg-blue-500 py-[9px] flex items-center gap-1 text-white px-5 rounded-[20px] shadow-sm"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <svg className="w-[16px] h-[14px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
            <span className="text-[13px]">Add</span>
          </motion.button>
        </div>
      </div>
      <NoteModal open={open} onClose={() => setOpen(false)}/>
    </>
  )
}