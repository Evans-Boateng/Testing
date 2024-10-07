import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import { useAuth } from "./AuthProvider";
import axios from "axios";

function ProtectedRoute({children}) {
    const [isAuthorized, setIsAuthorized] = useState(null);
    const { setToken, refreshtoken, token } = useAuth();
    console.log(token)

    useEffect(() => {
       const authorize = async() => {
            if (!token){
                await refreshToken();
                return;
            }
            try {
                await auth();
            } catch(error){
                setIsAuthorized(false)
            }
       }
       authorize();
    }, [token])

    const refreshToken = async () => {
        try{
            const res = await axios.post("http://127.0.0.1:8000/api/token/refresh/", {}, {
                withCredentials: true
            });
            if (res.status === 200){
                setToken(res.data.access)
                setIsAuthorized(true)
            }else {
                setIsAuthorized(false)
            }
        } catch(error){
            console.log("An error occured", error.response?.data || error.message)
            setIsAuthorized(false)
        }
    }

    const auth = async () => {
        const decoded = jwtDecode(token)
        const tokenExpiration = decoded.exp
        const now = Date.now() / 1000
        console.log(now);

        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsAuthorized(true)
        }
    }
    if (isAuthorized === null){
       return <div>Loading...</div>
    }
    return isAuthorized ? children : <Navigate to="/login" />
}
export default ProtectedRoute