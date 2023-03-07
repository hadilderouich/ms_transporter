import React from 'react'
import { NavLink } from 'react-router-dom'

function Liste_service() {
  return (
    <div className='menu1'>
        <div className="ul1" >
        <NavLink  to="/" exact activeClassName="active"  className="li1" >Service Domiciel </NavLink>             
        <NavLink  to="/ServiceEntreprise"  className="li1" >ServiceEntreprise </NavLink> 
        </div>
    </div>
  )
}

export default Liste_service
