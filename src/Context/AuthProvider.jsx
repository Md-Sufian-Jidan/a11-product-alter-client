import { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = () => {
    const [ user, setUser] = useState('')
    const userInfo = {}
    return (
        <AuthContext.Provider value={userInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;