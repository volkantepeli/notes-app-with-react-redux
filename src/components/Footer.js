import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    const [value, setValue] = React.useState(0);
  return (
    <div className='footer'>
        <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        
        <BottomNavigationAction  label="Linkedin" icon={<LinkedInIcon />} />
        <BottomNavigationAction label="Github" icon={<GitHubIcon />} />
        
      </BottomNavigation>
    </Box>
    </div>
  )
}

export default Footer