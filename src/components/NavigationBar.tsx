import { AppBar, Button, Box } from '@mui/material';
import * as styles from '../styles/NavigationBar';

const NavBar = () => {
  const handleClick = (item: string) => {
    console.log('\'' + item + '\'' + ' was clicked!');
  };

  return (
    <AppBar position="static" sx={styles.navContainer}>
      <Box sx={styles.navItems}>
        <Button color="inherit" onClick={() => handleClick('home')}>Home</Button>
        <Button color="inherit" onClick={() => handleClick('portfolio')}>Portfolio</Button>
        <Button color="inherit" onClick={() => handleClick('prices')}>Prices</Button>
        <Button color="inherit" onClick={() => handleClick('locations')}>Locations</Button>
        <Button color="inherit" onClick={() => handleClick('client proof')}>Client Proof</Button>
        <Button color="inherit" onClick={() => handleClick('contact')}>Contact</Button>
        <Button color="inherit" onClick={() => handleClick('about')}>About</Button>
      </Box>
    </AppBar>
  );
};

export default NavBar;