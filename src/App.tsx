import * as styles from './styles/App';
import { Box, Typography } from '@mui/material'
import Easel from './components/Easel';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { useScreenSize } from './Utilities';
import NavigationBarHamburger from './components/NavigationBarHamburger';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const App = () => {
  const displaySize: string = useScreenSize();

  return <>

    <Box sx={styles.page}>

      <Typography sx={styles.siteName}>PHOTOGRAPHY BY SHANNON</Typography>

      {displaySize === 'large' ? <NavigationBar />: <NavigationBarHamburger />}

      <Easel displaySize={displaySize} />

      <Footer />

    </Box>

  </>;
};

export default App;
