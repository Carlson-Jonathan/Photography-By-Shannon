import * as styles from '../styles/Easel';
import { Box } from '@mui/material';

const Easel = ({displaySize}: {displaySize: string}) => {
  return (
    <Box 
      sx={styles.container} 
      component="img"
      src="../../public/Sample.jpg"
      alt="Image not found">
    </Box>
  )
};

export default Easel;