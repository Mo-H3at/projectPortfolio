import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function PortfolioRefCard({name, occupation, email, contactNumber}) {
  return (
      <Box >
          <Card variant='outlined' sx={{backgroundColor: 'black', color: 'white', borderLeftWidth: 1, borderColor: 'white'}}>
      <CardContent>
        <Typography variant="body1">
         Name: {name}
        </Typography>
        <Typography variant="body1">
        Occupation: {occupation}
        </Typography>
        <Typography variant="body1">
        Email: {email}
        </Typography>
        <Typography variant="body1">
         Contact Number: {contactNumber}
        </Typography>
      </CardContent>
     
    </Card>
      </Box>
    
  );
}


