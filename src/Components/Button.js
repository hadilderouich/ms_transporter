import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Button1() {
    const navigate = useNavigate();
    
    const Login = () => {
        navigate("/Login");
    }

    return (
        <div>
            <Button onClick={Login}>Login</Button>
        </div>
    )
}

export default Button1
