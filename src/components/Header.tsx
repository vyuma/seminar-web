import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

interface HeaderProps {
  colorMode: {
    toggleColorMode: () => void;
  };
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ colorMode, onMenuClick }) => {
  const theme = useTheme();

  return (
    <AppBar position="static" component="header">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography 
          variant="h6" 
          component={RouterLink} 
          to="/" 
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
        >
          全国自主ゼミの会
        </Typography>
        <Box>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
