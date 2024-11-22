import { NavLink, Outlet } from "react-router-dom"
import Note from "./note"
import Header from "./Header"
import { Toaster, toast } from 'sonner';
import Initial from "./Initial";
import { useNotes } from "./NotesContext";


export default function HomePage() {
  const {notes} = useNotes();
  return (
    <>
      <Header />
      <div className="w-[100%] relative h-[100%] flex justify-center">
        <Toaster richColors/>
        <div className=" w-[88%] mt-5 mb-5">
        <div className="mb-3"><h1 className="font-medium text-lg">Your notes</h1></div>
        <div className="">
          <nav className="mb-5">
            <div className="flex items-center text-sm text-gray-500 font-medium">
              
                <NavLink to="/" className={({isActive}) => {
                  return isActive? "border-b-[2px] border-blue-500 px-5 pb-1" : "border-b-[2px] px-5 pb-1"
                  }}>ALL
                </NavLink>  
              
                <NavLink to="/personal" className={({isActive}) => {
                  return isActive? "border-[#FF9100] border-b-[2px]  px-5 pb-1" : "border-b-[2px]  px-5 pb-1"
                  }}>PERSONAL
                </NavLink>
                
                <NavLink to="/home" className={({isActive}) => {
                  return isActive? "border-[#6BBB6A] border-b-[2px]  px-5 pb-1" : "border-b-[2px]  px-5 pb-1"
                  }}>HOME
                </NavLink>

                <NavLink to="/business" className={({isActive}) => {
                  return isActive? "border-[#5C6BC0] border-b-[2px]  px-5 pb-1" : "border-b-[2px]  px-5 pb-1"
                  }}>BUSINESS
                </NavLink>
              
            </div>
          </nav>
          <Outlet />
          
          <div className="fixed right-10 bottom-7 sm:hidden ">
            <button className="bg-blue-600 text-white p-4 rounded-[50%]">
              <svg className="w-[20px] h-[18px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}