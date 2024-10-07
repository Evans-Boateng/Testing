import axios from "axios";
import { useAuth } from "./AuthProvider";

const useApi = () => {
    const {token} = useAuth();
    const api = axios.create({
        baseURL: 'http://127.0.0.1:8000/'
    })
    
    api.interceptors.request.use(
        (config) => {
            if (token){
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )
    return api;
}


export default useApi;