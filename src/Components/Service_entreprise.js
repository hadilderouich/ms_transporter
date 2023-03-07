import { Box,  Typography } from '@mui/material'
import React from 'react'
import { Col, Row } from 'reactstrap'
import Hello from './Hello'
import Image from './Image'
import Text from './Text'
function Service_entreprise() {
    const itemData = [
        {
            url:require('./Images/enreprise1.jpg'),
        },
        {
            url:require('./Images/enreprise2.jpg'),
        },
        {
            url:require('./Images/enreprise3.jpg'),
        },
        {
            url:require('./Images/enreprise4.jpg'),
        }
    ]
    const title ='Services entreprise';
    const text='Le déménagement entreprise se dépend de la livraison des produits de différents types, par exemple les produits cosmétiques, vêtements et les électroménagers en toute sécurité et l’intégrité des actifs, le respect des délais et la satisfaction du client. De plus, une main-d’œuvre spécialisée pour l’emballage, le déballage, le chargement et le déchargement et tous les services offerts.';
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

export default Service_entreprise
