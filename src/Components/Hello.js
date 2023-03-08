import React from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { Button, colors, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { borderRadius, fontSize } from '@mui/system';
import videoBg from './pexels-tima-miroshnichenko-6169116.mp4'
import Services from './Services';
import Nous_service from './Nous_service';
import './styles.css';
import Liste_service from './Liste_service';
function Hello() {
const navigate = useNavigate();
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
  const title1={ 
    position: 'absolute',
    top:'30%',
    left:'30%',
    right:'30%',
    bottom:'50%',
    textAlign:'center',
    fontWeight: 'bold',
    color:'#F2F3F4',
    fontFamily: 'system-ui'}
  const title2={ 
    position: 'absolute',
    top:'55%',
    left:'30%',
    right:'30%',
    bottom:'50%',
    textAlign:'center',
    fontWeight: 'bold',
    color:'#F2F3F4',
    fontFamily: 'system-ui'}
  const Connexion =()=>{
    navigate("/Login");
  }
  return (
    <div >
      <div id='/'>
    <video  src={videoBg}  autoPlay loop muted  />
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
        <li><a href='/CalculVolume'>Calcul devi</a></li>
        <li><a href='/Contact'>Contact</a></li>
      </ul>
      <Box sx={{ '& button': { ml:"62px" ,mt:"35px" } }}>
          <Button size="medium" variant="outlined" style={button} onClick={Connexion}>
            Login
          </Button>
     </Box>
     </div>
     <Typography variant="h2" gutterBottom style={title1} >
        MS Transporte est à votre service
     </Typography>
     <Typography variant="h4" style={title2}>
     Faites votre service avec nous, avec tout le confort
     </Typography>
     </div>
     <div id='service'> 
        <Liste_service/>
      </div>
    </div>
  )
}

export default Hello
