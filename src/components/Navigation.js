import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';

// import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#FFFFFF', height: '50px', marginBottom: '30px'}}>
        <Toolbar sx={{minHeight: '20px',}}>
          <Typography variant="h6" sx={{color: '#FFFFFF'}} component="div">
          <Button component={RouterLink}  to="/" sx={{color: '#000000'}}>Home</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
