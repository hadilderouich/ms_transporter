import React from 'react';
import { NavLink } from 'react-router-dom';
import { TextField, Typography ,Button } from '@mui/material';
import { Box } from '@mui/system';



function Login() {
  return (
    <div className='Login'>
      <div >
          <form className='form'>
            <Box sx={ { ml:10 }}>
            <Typography variant='h6'>Bienvnue</Typography><br/>
            </Box>
            <label>Email</label><br/>
            <TextField  label="Email" variant="outlined" /><br/>
            <label>Mot de passe</label><br/>
            <TextField  label="Mot de passe" variant="outlined" style={{ paddingBottom:20}} /><br/>
            <Box sx={{ '& button': { ml:6} }}>
            <Button variant='contained' color="success" size="large" style={{ backgroundColor:'#2D2876'}} >Connexion</Button>
            </Box>
            <Box sx={{ mt:"20px" , ml:"70px"}}>
            {/* <Typography variant="h6" > */}
              <NavLink to="/inscri" >S'inscrire</NavLink>
             {/* </Typography> */}
             </Box>
             </form>
      </div>
    </div>
  )
}

export default Login
