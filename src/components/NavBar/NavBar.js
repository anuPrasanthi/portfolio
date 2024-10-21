import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import '../../global.css';
import './NavBar.css'

export default function NavBar(props) {
    const {handleTheme} = props
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='primaryColor'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color='secondaryColor'
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <DarkModeIcon className='darkStyle' color='primaryColor' onClick={handleTheme}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}