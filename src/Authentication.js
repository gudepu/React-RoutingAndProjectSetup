import React, { useState,useContext, useEffect } from 'react'

export const AuthContext=React.createContext({});

export const useAuth=()=>{
    return useContext(AuthContext);
}



export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [isLogin,setIsLogin]=useState(false);
    const [token,setToken]=useState(null);

    useEffect(()=>{
        const isLogin=localStorage.getItem('isLogin');
        const token=localStorage.getItem('token');

        if(isLogin && token){
            setUser({token,isLogin});
            setIsLogin(isLogin);
            setToken(token);
        }

    },[])
    const value={
        user,
        isLogin,
        token,
        setUser,
        setIsLogin,
        setToken
    }
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}