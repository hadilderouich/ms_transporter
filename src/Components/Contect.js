import React from "react";

import { Paper, TextField, Button, Typography } from "@mui/material";
import { Col, Row } from "reactstrap";
import Textarea from '@mui/joy/Textarea';

function ContactPage() {
  return (
    <div className='Contact'>
        <div >
          <form className='form1'>
          <Typography variant='h6'>Contacter Nous</Typography><br/>
            <Row>
                <Col><TextField  label="Nom" variant="outlined"  /><br/></Col>
                <Col><TextField  label="Email" variant="outlined" style={{ paddingBottom:20}}  /><br/></Col>
            </Row>
            <Row>
                <Col><TextField  label="Téléphone" variant="outlined" /><br/></Col>
                <Col><TextField  label="Sujet" variant="outlined" style={{ paddingBottom:20}}  /><br/></Col>
            </Row>
            
            
            <Row>
            <Col><Textarea name="Plain" placeholder="Votre problème …" variant="plain" style={{ paddingBottom:20}} /></Col>
            </Row>
            
         
        <Button type="submit" variant="contained" color="success" size="large" style={{ backgroundColor:'#2D2876'}}>
          Envoyer 
        </Button>
      
    </form>
    </div>
    </div>
  );
}

export default ContactPage;
