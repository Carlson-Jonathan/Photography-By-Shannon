import { AppBar, Button, Box } from '@mui/material';
import * as styles from '../styles/NavigationBar';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  const handleClick = (item: string) => {
    console.log('\'' + item + '\'' + ' was clicked!');
  };

  return (
    <AppBar position="static" sx={styles.navContainer}>
      <Box sx={styles.navItems}>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
        <Button color="inherit" component={Link} to="/prices">Prices</Button>
        <Button color="inherit" component={Link} to="/locations">Locations</Button>
        <Button color="inherit" component={Link} to="/proofs">Client Proof</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/cart"><ShoppingCartIcon /></Button>
      </Box>
    </AppBar>
  );
};

export default NavBar;