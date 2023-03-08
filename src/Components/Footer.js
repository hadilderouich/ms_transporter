// import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from "@mui/material";
import GoogleMapLoader from 'react-google-maps-loader';
import GoogleMap from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// const useStyles = makeStyles((theme) => ({
//     footer: {
//       marginTop: 'auto',
//       backgroundColor: theme.palette.background.paper,
//       padding: theme.spacing(6, 0),
//     },
//     map: {
//       height: '200px',
//       width: '100%',
//       marginTop: theme.spacing(3),
//     },
//   }));

  
function PageFooter ()  {
    // const classes = useStyles();
    
    // const mapOptions = {
    //   center: { lat: 40.712776, lng: -74.005974 },
    //   zoom: 13,
    //   disableDefaultUI: true,
    //   draggable: false,
    //   scrollwheel: false,
    // };
  
    return (
      <footer className='Footer'>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Location
              </Typography>
              <Typography variant="body1" gutterBottom>
                <LocationOnIcon />
                {/* <RoomIcon /> */}
                44 Rue Marcel Reggui, 45140 Saint-Jean-de-la-Ruelle, France
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <GoogleMapLoader
                params={{
                  key: 'YOUR_GOOGLE_MAPS_API_KEY',
                  libraries: 'places',
                }}
                render={(googleMaps) =>
                  googleMaps && (
                    <div className='map'>
                      <GoogleMap className='mapOptions' 
                        // bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
                        // defaultCenter={mapOptions.center}
                        // defaultZoom={mapOptions.zoom}
                      />
                    </div>
                  )
                }
              />
            </Grid>
          </Grid>
        </Container>
      </footer>
    );
  };
export default PageFooter;  