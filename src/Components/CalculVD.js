import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Paper } from '@mui/material';
import LivingIcon from '@mui/icons-material/Living';
import { Box } from '@mui/system';

export default function CalculVD() {
  return (
    <Grid className='Grid'spacing={4}>
        <Box sx={{ paddingRight:5}}>
            <Card sx={{ maxWidth: 345 , marginLeft:10}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={require('./Images/salon.jpg')}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    </Grid>
  );
}
