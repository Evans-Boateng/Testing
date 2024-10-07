import { Link, useNavigate } from "react-router-dom"
import Header from "../Header"
import axios from "axios"
import { useState } from "react";

export default function Register(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault()
    try{
      await axios.post("http://127.0.0.1:8000/api/usercreate/", {name, email, password})
      setName("")
      setEmail("")
      setPassword("")
      navigate("/login")

    }catch(error){
      console.error("An error occured", error.response?.data || error.message)
    }
  }
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-[70vh] w-full">
        <div className=" bg-white w-[90%] sm:w-[35%] px-[18px] py-[32px] border border-slate-200 rounded">
          <div>
            <h3 className="text-lg font-medium mb-5">SignUp</h3>
            <form onSubmit={handleSubmit}>
              <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="font-medium w-full rounded border border-slate-200 text-sm py-2 px-4 mb-3 focus:outline-none"/>
              <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="font-medium w-full rounded border border-slate-200 text-sm py-2 px-4 mb-3 focus:outline-none"/>
              <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="font-medium w-full rounded border border-slate-200 text-sm py-2 px-4 mb-6 focus:outline-none"/>
              <button type="submit" className="text-center w-full text-sm text-white py-2 rounded bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-md mb-5">Create Account</button> 
            </form>
            <div className="text-sm text-center font-medium">
              <p>Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}