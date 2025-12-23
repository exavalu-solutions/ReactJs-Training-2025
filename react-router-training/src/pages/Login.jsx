import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = ({setIsLogin}) => {
    const navigate = useNavigate();
    const handleLogin = () => {
        // some login
        setIsLogin(true);
        navigate("/home");
    }

    return (
        <button onClick={handleLogin}>Login</button>
    )
}
