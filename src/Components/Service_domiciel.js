import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './Image';
import Text from './Text';
import Hello from './Hello';
const itemData = [
  {
    url:require('./Images/Domicile1.jpg'),
},
{
    url:require('./Images/Domicile2.jpg'),
},
{
    url:require('./Images/Domicile3.jpg'),
}
];
const title='Services Domicile(meubles)';
const text='Solution rapide et pratique de garde-meubles pour ceux qui n’ont pas de place ou qui souhaitent simplement ranger leurs meubles, équipements et effets personnels. Le Déménagement Résidentiel commence par un état des lieux complet des objets à transporter, des choix d’emballages adaptés,une aide à l’élaboration d’un meilleur planning de réalisation du déménagement,jusqu’à la livraison finale au nouveau domicile du client.';
function Service_domiciel() { 
  return (
    <div className='Service'>
      <Hello/><br/>
          <Row>
            <Col><Text title={title} text={text} /> </Col>
            <Col><Image itemData={itemData}/></Col>
          </Row>
    </div>
  )
}

export default Service_domiciel
