import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from 'react';
import Intro from "./info/IntroandContact"
import PortfolioProfile from "./PortfolioProfile";
import PortfolioReferences from "./PortfolioReferences";
import PortfolioExperience from "./PortfolioExperience";

export default function PortfolioGrid() {
    return (
      <Box sx={{ flexGrow: 2, fontFamily: `Saira, sans-serif`, width:'95%'}}>
        <Grid>
          <Intro/>
        </Grid>
        <Grid container sx={{ border: 1, borderColor: '#101010', width: '97%', margin: 2 }} >
            <PortfolioProfile/>
        </Grid>
        <Grid sx={{ border: 1, borderColor: 'divider', margin: 2 }}>
            <PortfolioExperience/>
        </Grid>
        <Grid sx={{ border: 1, borderColor: 'divider', margin: 2 }}>
          <PortfolioReferences/>
        </Grid>
      </Box>
    );
  }