import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Button, Box } from '@mui/material';
import * as styles from '@styles/NavigationBar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navItemStyle = ( isActive ) => {
    return isActive ? styles.navItem : styles.navItemActive;
  };

  return (
    <AppBar position="static" sx={styles.navContainer}>
      <Box sx={styles.navItems}>
        <Button color="inherit" component={NavLink} to="/"          style={({ isActive }) => navItemStyle(isActive)}>Home</Button>
        <Button color="inherit" component={NavLink} to="/portfolio" style={({ isActive }) => navItemStyle(isActive)}>Portfolio</Button>
        <Button color="inherit" component={NavLink} to="/prices"    style={({ isActive }) => navItemStyle(isActive)}>Prices</Button>
        <Button color="inherit" component={NavLink} to="/locations" style={({ isActive }) => navItemStyle(isActive)}>Locations</Button>
        <Button color="inherit" component={NavLink} to="/proofs"    style={({ isActive }) => navItemStyle(isActive)}>Client Proof</Button>
        <Button color="inherit" component={NavLink} to="/contact"   style={({ isActive }) => navItemStyle(isActive)}>Contact</Button>
        <Button color="inherit" component={NavLink} to="/about"     style={({ isActive }) => navItemStyle(isActive)}>About</Button>
        <Button color="inherit" component={NavLink} to="/cart"      style={({ isActive }) => navItemStyle(isActive)}><ShoppingCartIcon /></Button>
      </Box>
    </AppBar>
  );
};

export default NavBar;
