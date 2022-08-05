import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PortfolioSkills from "./PortfolioSkills";
import Career from "./info/CareerSummary";
import EduQuals from "./info/Education&Qualifcation";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PortfolioExperience() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: '#101010' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Box></Box>
        <Tabs value={value} onChange={handleChange} variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          textColor="secondary"
         indicatorColor="secondary"
          >
          <Tab sx={{color:'white'}} wrapped label="Core Skills" {...a11yProps(0)} />
          <Tab sx={{color:'white'}} wrapped label="Career Summary" {...a11yProps(1)} />
          <Tab sx={{color:'white'}} wrapped label="Education / Qualifications" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel component='div' value={value} index={0} >
        <PortfolioSkills/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Career/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EduQuals/>
      </TabPanel>
    </Box>
  );
}
