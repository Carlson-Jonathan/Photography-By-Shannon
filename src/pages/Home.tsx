import * as styles from '../styles/Home';
import { Box } from '@mui/material';

const Home = ({displaySize}: {displaySize: string}) => {
  return (
    <Box 
      sx={styles.container} 
      component="img"
      src="../../public/Sample.jpg"
      alt="Image not found">
    </Box>
  )
};

export default Home;