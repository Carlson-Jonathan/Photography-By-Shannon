import { Home, Portfolio, Prices, Locations, Proofs, Contact, About, Cart } from '@pages';
import { NavigationBar, NavigationBarHamburger, Footer } from '@components';
import { Routes, Route } from 'react-router-dom';
import { Box, Typography } from '@mui/material'
import { useScreenSize } from '@utils';
import * as styles from '@styles/App';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const App = () => {
  const displaySize: string = useScreenSize();

  return (
<Box sx={styles.page}>
  <Typography sx={styles.siteName}>
    PHOTOGRAPHY BY SHANNON
  </Typography>

  {displaySize === 'large' ? <NavigationBar /> : <NavigationBarHamburger />}

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/prices" element={<Prices />} />
    <Route path="/locations" element={<Locations />} />
    <Route path="/proofs" element={<Proofs />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>

  <Footer />
</Box>
  );
};

export default App;
