import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Intro from "./Intro";
import GameCardsInfo from "./CardsInfo";
import InfoTabs from "./InfoTabs";

export default function GameGrid() {
    return (
      <Box sx={{ flexGrow: 2, fontFamily: 'Saira'}}>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{p:3}}>
                <Intro/>    
          </Grid>
        </Grid> 
        <Grid>
        <GameCardsInfo/>
        </Grid>
        <Grid>
        <InfoTabs/>
        </Grid>
      </Box>
    );
  }