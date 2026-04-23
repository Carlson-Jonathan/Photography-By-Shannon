import { useState } from 'react';
import { AppBar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as styles from '../styles/NavigationBarHamburger';

const NavigationBarHamburger = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (item: string) => {
    console.log(item + ' was clicked!');
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={styles.navContainer}>

      <IconButton color="inherit" onClick={openMenu} sx={styles.menuButton}>
        <MenuIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClick} sx={styles.menu}>
        <MenuItem onClick={() => handleClick('home')} sx={styles.menuItem}>Home</MenuItem>
        <MenuItem onClick={() => handleClick('portfolio')} sx={styles.menuItem}>Portfolio</MenuItem>
        <MenuItem onClick={() => handleClick('prices')} sx={styles.menuItem}>Prices</MenuItem>
        <MenuItem onClick={() => handleClick('locations')} sx={styles.menuItem}>Locations</MenuItem>
        <MenuItem onClick={() => handleClick('client proof')} sx={styles.menuItem}>Client Proof</MenuItem>
        <MenuItem onClick={() => handleClick('contact')} sx={styles.menuItem}>Contact</MenuItem>
        <MenuItem onClick={() => handleClick('about')} sx={styles.menuItem}>About</MenuItem>
      </Menu>
        
    </AppBar>
  );
};

export default NavigationBarHamburger;