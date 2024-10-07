import { Link, useNavigate } from "react-router-dom"
import Header from "../Header"
import { useAuth } from "../AuthProvider"
import { useState } from "react"
import axios from "axios";

export default function Login(){
  const {setToken, setRefreshToken, token } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
      const response = await axios.post("http://127.0.0.1:8000/api/token/", { email, password });
      setToken(response.data.access)
      setRefreshToken(response.data.refresh)
      console.log(response.data)
      console.log(token)
      
      navigate("/")
    }catch(error){
      console.error("An error while logging in", error)
      navigate("/signup")
    }
  }
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-[70vh] w-full">
        <div className=" bg-white w-[90%] sm:w-[35%] px-[18px] py-[32px] border border-slate-200 rounded">
          <div>
            <h3 className="text-lg font-medium mb-5">Login</h3>
            <form onSubmit={handleSubmit}>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="font-medium w-full rounded border border-slate-200 text-sm py-2 px-4 mb-3 focus:outline-none"/>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="font-medium w-full rounded border border-slate-200 text-sm py-2 px-4 mb-6 focus:outline-none"/>
              <button type="submit" className="text-center w-full text-sm text-white py-2 rounded bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-md mb-5">Login</button>
            </form>
            <div className="text-sm text-center font-medium">
              <p>Not registered yet? <Link to="/signup" className="text-blue-500 hover:underline">Create an Account</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}