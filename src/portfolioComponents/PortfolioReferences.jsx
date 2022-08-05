import React from 'react';
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import PortfolioRefCard from "./PortfolioRefCards";


let references = [{name: 'Ronald Qobolo', occupation:'Student Representative Council President',
                     email:'ronaldtrqobolo@outlook.com', contactNumber: 'Contact details available on request'},
                     {name: 'Jacqueline', occupation:'Belgium Campus-Admin',
                     email:'Info@belgiumcampus.ac.za', contactNumber: '010 593 5368'},
                     {name: 'Jochen Dannenhauer', occupation:'SAR Electronic sa - Managing director',
                     email:'Rsa@sar.biz', contactNumber: '012 523 9300'},]


export default function PortfolioReferences() {
    return  (
      <Box >
          <Grid container spacing={2}>
              <Grid item align="center" xs={12}>
                  <Typography variant="h4">
                     References
                  </Typography>
              </Grid>
          {references.map((refs, i)=> {
          return (
              <Grid  key={i} item sx={{m:1, backgroundColor: 'black', color: 'white'}}
                xs={12} md={5.7}  >
              <PortfolioRefCard {...refs} />
              </Grid>
          );
      })}
          </Grid>
      </Box>  
  );
  }