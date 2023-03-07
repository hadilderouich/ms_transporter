import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Image from './Image'
import Liste_service from './Liste_service'
import Login from './Login'
import Service_domiciel from './Service_domiciel'
import Service_entreprise from './Service_entreprise'

function Nous_service() {
  return (
    <div>
      <BrowserRouter>
        <Liste_service/> 
            <Routes>
                <Route path="/"  element={<Service_domiciel/>}/>
                <Route path="/ServiceEntreprise" element={<Service_entreprise/>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Nous_service
