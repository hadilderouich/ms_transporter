import { TextField, Typography  , Button} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'reactstrap'

function Inscription() {
  return (
    <div className='Inscrition'>
      <form className='inscri'>
            <Box sx={ { ml:22 }}>
            <Typography variant='h6'>Inscription</Typography><br/>
            </Box>
            <Row>
            <Col><TextField  label="Nom" variant="outlined" /></Col>
            <Col><TextField  label="Prenom" variant="outlined" style={{ paddingBottom:20}} /></Col>
            </Row>
            <Row>
            <Col><TextField  label="Email" variant="outlined" style={{ paddingBottom:20}} /></Col> 
            <Col><TextField  label="Téléphone" variant="outlined" style={{ paddingBottom:20}} /></Col>
            </Row>
            <Row>
            <Col><TextField  label="Mot de passe" variant="outlined" style={{ paddingBottom:20}} /></Col>
            <Col><TextField  label="Confirmer  mot de passe" variant="outlined" style={{ paddingBottom:20}} /></Col>
            </Row>
                <Box sx={{ '& button': { ml:20} }}>
                <Button variant='contained'  size="large" style={{ backgroundColor:'#2D2876'}} >Inscrire</Button>
            </Box>
        </form>
    </div>
  )
}

export default Inscription
