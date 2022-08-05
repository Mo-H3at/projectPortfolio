import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function PortfolioProfile() {
    return (
      <Box >
        <Typography variant="h4" sx={{textAlign: 'center'}}>
          Professional Profile
        </Typography>
        
        <Typography paragraph sx={{textAlign: 'justify'}}>
          An erudite, intellectually curious, and self-driven Information Technology student with an innate ability of understanding task, assignment and any other work presented. 
          Has completed two years of tertiary studies with a current of 18 distinctions. I’m a good team player and can thoroughly do my work with minimal issues, able to take criticism well and open to improving work where need be.
          I’m a quick learner, was able to gain experience in website development and leadership skills in a varsity project.
        </Typography>

       <Typography paragraph sx={{textAlign: 'justify'}}>
          Assisted SAR Electronics SA with their intranet. 
          Currently looking for an opportunity to join a well-established and skills growth company and to create a career in web development, software development and software testing.
      </Typography>
      </Box>
    )
  }