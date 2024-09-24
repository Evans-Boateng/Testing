import { Link } from "react-router-dom"
import Header from "../Header"

export default function Login(){
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-[70vh] w-full">
        <div className=" bg-white w-[35%] px-[18px] py-[32px] border border-slate-200 rounded">
          <div>
            <h3 className="text-lg font-medium mb-5">Login</h3>
            <form>
              <input placeholder="example@gmail.com" className=" w-full rounded border border-slate-200 text-sm py-2 px-4 mb-3 focus:outline-none"/>
              <input type="password" placeholder="password" className=" w-full rounded border border-slate-200 text-sm py-2 px-4 mb-6 focus:outline-none"/>
              <button className="text-center w-full text-sm text-white py-2 rounded bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-md mb-5">Login</button>
            </form>
            <div className="text-sm text-center font-medium">
              <p>Not registered yet? <Link to="" className="text-blue-500 hover:underline">Create an Account</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}