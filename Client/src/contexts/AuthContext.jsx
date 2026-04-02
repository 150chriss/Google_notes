import React,{useState, useEffect, createContext} from 'react';
const AuthContext = createContext();
//custom hook to use the auth context
export const useAuth =useContext(AuthContext)
if(!useAuth){
    console.log("useAuth must be used within an AuthProvider")
}
const API_URL=import .meta.env.VITE_API_URL ;
export default function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchme = async()=>{
        try{

        }
        catch(err){
            console.log("Error fetching user data",err)
        }
}
}