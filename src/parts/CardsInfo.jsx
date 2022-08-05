import GameCard from "./CardsLayout";
import React from 'react';
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import MetalGear from "./gameImages/metalGear.jpg";
import DevilMayCry from "./gameImages/devilMayCry.jpg";
import NFS from "./gameImages/nfs.jpg";

//Object of games
const gameInfo = 
[
    {
     game:'Metal gear', 
     image: MetalGear,
    shortInfo: 'Metal Gear is known as one of the most iconic and yet confusing games of all time',
    shortParagraph: 'The series as a whole (namely concerning the Kojima-directed titles) is often regarded as one of the most influential of all time and has received largely critical acclaim from critics and players. Most of the numbered installments are considered to be some of the greatest video games of all time'
},
{
    game:'Devil May Cry', 
    image: DevilMayCry,
   shortInfo: 'Metal Gear is known as one of the most iconic and yet confusing games of all time',
   shortParagraph: 'The series as a whole (namely concerning the Kojima-directed titles) is often regarded as one of the most influential of all time and has received largely critical acclaim from critics and players. Most of the numbered installments are considered to be some of the greatest video games of all time'
},
{
    game:'Need For Speed', 
    image: NFS,
   shortInfo: 'Metal Gear is known as one of the most iconic and yet confusing games of all time',
   shortParagraph: 'The series as a whole (namely concerning the Kojima-directed titles) is often regarded as one of the most influential of all time and has received largely critical acclaim from critics and players. Most of the numbered installments are considered to be some of the greatest video games of all time'
},
]

export default function GameCardsInfo() {
    return (
        <Box >
            <Grid container spacing={1}>
                <Grid item align="center" xs={12}>
                    <Typography variant="h4">
                        Games to prove a point
                    </Typography>
                </Grid>
            {gameInfo.map((gameCard, i)=> {
            return (
                <Grid  key={i} item sx={{border:0.3,m:0.3, pl:1, bs:1}}
                  xs={12} sm={5.9} md={3.8} lg={3.8}>
                <GameCard {...gameCard} />
                </Grid>
            );
        })}
            </Grid>
        </Box>  
    );
}

