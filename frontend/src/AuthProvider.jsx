import { useState, useContext, createContext, useEffect, useMemo } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [token, setToken_] = useState(null);
  const [refreshtoken, setRefreshToken_] = useState(null);

  const setToken = (newToken) => {
    setToken_(newToken)
  }
  const setRefreshToken = (newRefreshToken) =>{
    setRefreshToken_(newRefreshToken)
  }
  const contextValue = useMemo(()=>({
    token,
    refreshtoken,
    setToken,
    setRefreshToken
  }), [token, refreshtoken]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );

};
export const useAuth = () => {
  return useContext(AuthContext)
}
export default AuthProvider;

