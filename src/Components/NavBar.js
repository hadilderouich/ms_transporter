import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function NavBar() {
    const logo={
        fontSize: "20px",
        fontWeight: "bold",
        color:"#dfe3ee",
        fontFamily: "system-ui"
      }
      const button={
        fontSize: "17px",
        fontFamily: "system-ui",
        backgroundColor: "#9099a2",
        color:"#f7f7f7",
        borderColor:"#9099a2"
      }
  return (
    <div>
      <div className='menu'>
    <Box
        component="img"
        sx={{mt:1,height: 100,width: 100,}}
        src={require('./logo.png')}
      />
    <Box sx={{ mt:"40px" , mr:"20%"}}>
      <Typography variant="h6" gutterBottom
      style={logo}>
          Ms Transport
        </Typography>
      </Box>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='#service'>nous service</a></li>
        <li><a href=''>Calcul devi</a></li>
        <li><a href=''>Contact</a></li>
      </ul>
     </div>
    </div>
  )
}

export default NavBar
