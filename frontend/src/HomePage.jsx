import { NavLink, Outlet } from "react-router-dom"
import Note from "./note"
import Header from "./Header"
import { Toaster, toast } from 'sonner'


export default function HomePage() {
  return (
    <>
      <Header />
      <div className="w-[100%] h-[100%] flex justify-center">
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
          <div className="grid grid-cols-3 gap-5">
            <Outlet />
          </div>
        </div>
        </div>
      </div>
    </>
  )
}