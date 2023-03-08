import { Button } from '@mui/material'
import React from 'react'
import { Col, Row } from 'reactstrap'
import CalculVD from './CalculVD'

function CalculVolume() {
  return (
    <div className='calculVolum'>
     <Button className='btns'>Service Domiciel</Button>
     <Button className='btns'>Service Entreprise</Button><br/>
     <CalculVD />

    </div>
  )
}

export default CalculVolume
