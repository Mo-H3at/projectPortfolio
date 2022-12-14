import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from 'react';
import Typography from "@mui/material/Typography";

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline', mx: '4px', transform: 'scale(2)' }}
    >
      •
    </Box>
  );


export default function PortfolioSkills() {
    return ( <Box  >
      <Grid>
            <Typography variant='h6' sx={{textAlign: 'center', width:{xs: '100%'}}}>
              Skills
              </Typography>
          </Grid>
      <Grid container spacing={2} marginTop={4}>
          <Grid  sx={{mt:0.5, width: {xs:'100%',sm:'50%', md:'50%'}}}>
              <Typography variant="body2">{bull} c#</Typography>
          </Grid>
          <Grid  sx={{mt:0.5, width: {xs:'100%',sm:'50%', md:'50%'}}}>
              <Typography variant="body2">{bull} Office365</Typography>
          </Grid>
          <Grid sx={{mt:0.5, width: {xs:'100%',sm:'50%', md:'50%'}}}>
              <Typography variant="body2">{bull} Javascript</Typography>
          </Grid>
          <Grid sx={{mt:0.5, width: {xs:'100%',sm:'50%', md:'50%'}}}>
              <Typography variant="body2">{bull} My Sql Server</Typography>
          </Grid>

      </Grid>
  </Box> );
  }