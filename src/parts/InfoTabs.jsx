import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StoryTelling from './information/Storytelling';
import GameplayInfo from './information/GameplayInfo';
import PassionInfo from './information/PassionInfo';
import MusicInfo from './information/MusicInfo';

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

export default function InfoTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
     <Grid item align="center" xs={12}>
                    <Typography variant="h4">
                       The reasons
                    </Typography>
                </Grid>
      <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} 
         variant="scrollable"
         scrollButtons="auto"
         aria-label="scrollable auto tabs example">
          <Tab label="Story Telling" {...a11yProps(0)} />
          <Tab label="Gameplay" {...a11yProps(1)} />
          <Tab label="Music" {...a11yProps(2)} />
          <Tab label="Passion" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <StoryTelling/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GameplayInfo/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MusicInfo/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PassionInfo/>
      </TabPanel>
    </Box>
  );
}
