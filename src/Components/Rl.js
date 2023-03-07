import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Button1 from './Button'
import Inscription from './Inscription'
import Login from './Login'

function Rl() {
  return (
    <div>
        <BrowserRouter/>
            <Button1/>
                <Routes>
                    <Route path="/inscri" element={<Inscription/>}/>
                    <Route path="/Login" element={<Login/>}/>
                </Routes>
    </div>
  )
}

export default Rl
