import * as styles from '@styles/Home';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box 
      sx={styles.container} 
      component="img"
      src="/public/images/slideShow/Sample.jpg"
      alt="Image not found">
    </Box>
  )
};

export default Home;