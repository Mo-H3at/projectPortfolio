import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Intro() {
        return (
            <Box component='div' sx={{width: {sx: "100%"}, m: 2, border:1, borderColor:'purple'}}>
                <Box textAlign="center">
                    <Typography variant='h5'>
                        Hi. My name's Moagi Boikanyo. 
                    </Typography>
                    <Typography paragraph>
                         It's a pleasure to have your attention
                    </Typography>
                </Box>
                <Box sx={{p:0.5}}>
                    <Typography>
                        Email: MoagiB23@gmail.com
                    </Typography>
                    <Typography>
                        Phone Number: 063 668 9429
                    </Typography>
                </Box>
            </Box>
        )

}

