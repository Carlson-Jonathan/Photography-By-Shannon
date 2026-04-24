import { useState } from 'react';
import { AppBar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as styles from '../styles/NavigationBarHamburger';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavigationBarHamburger = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={styles.navContainer}>

      <IconButton color="inherit" onClick={openMenu} sx={styles.menuButton}>
        <MenuIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClick} sx={styles.menu}>
        <MenuItem component={Link} to={'/'} onClick={() => handleClick('home')} sx={styles.menuItem}>Home</MenuItem>
        <MenuItem component={Link} to={'/portfolio'} onClick={() => handleClick('portfolio')} sx={styles.menuItem}>Portfolio</MenuItem>
        <MenuItem component={Link} to={'/prices'} onClick={() => handleClick('prices')} sx={styles.menuItem}>Prices</MenuItem>
        <MenuItem component={Link} to={'/locations'} onClick={() => handleClick('locations')} sx={styles.menuItem}>Locations</MenuItem>
        <MenuItem component={Link} to={'/proofs'} onClick={() => handleClick('client proof')} sx={styles.menuItem}>Client Proof</MenuItem>
        <MenuItem component={Link} to={'/contact'} onClick={() => handleClick('contact')} sx={styles.menuItem}>Contact</MenuItem>
        <MenuItem component={Link} to={'/about'} onClick={() => handleClick('about')} sx={styles.menuItem}>About</MenuItem>
        <MenuItem component={Link} to={'/cart'} onClick={() => handleClick('cart')} sx={styles.menuItem}><ShoppingCartIcon /></MenuItem>
      </Menu>
        
    </AppBar>
  );
};

export default NavigationBarHamburger;