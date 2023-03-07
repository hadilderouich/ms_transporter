import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
const textStyle={
    lineHeight: '26pt',
    paddingTop:'7%',
    paddingLeft:'7%',
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'system-ui',
  }
  const titleStyle={
    paddingTop: '20%',
    paddingLeft:'7%',
    textAlign:'left',
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'system-ui'
  }
function Text(props) {
    const title=props.title;
    const text=props.text;
  return (
    <div>
        <Typography variant='h4' style={titleStyle} >
        {title}
        </Typography>
        <Typography  style={textStyle} >
          {text}
        </Typography>
    </div>
  )
}

export default Text
