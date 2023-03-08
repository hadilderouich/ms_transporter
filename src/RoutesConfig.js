import React from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import CalculVolume from './Components/CalculVolume';
import Hello from './Components/Hello';
import Inscription from './Components/Inscription'
import Liste_service from './Components/Liste_service';
import Login from './Components/Login'
import Service_domiciel from './Components/Service_domiciel';
import Service_entreprise from './Components/Service_entreprise';


function RoutesConfig() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Service_domiciel/>}/>
          <Route path="/ServiceEntreprise" element={<Service_entreprise/>}/>
          <Route  path="/" element={<Hello/>}/>
          <Route path="/inscri" element={<Inscription/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/CalculVolume" element={<CalculVolume/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesConfig;
