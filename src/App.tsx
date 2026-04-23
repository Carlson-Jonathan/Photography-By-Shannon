import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Prices from './pages/Prices';
import Locations from './pages/Locations';
import Proofs from './pages/Proofs';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';
import * as styles from './styles/App';
import { Box, Typography } from '@mui/material'
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { useScreenSize } from './Utilities';
import NavigationBarHamburger from './components/NavigationBarHamburger';

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
    <Route path="/" element={<Home displaySize={displaySize} />} />
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
