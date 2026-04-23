import * as styles from '../styles/Footer';
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={styles.container}>
      <Typography className='fillerText'>
        Copyright Photography By Shannon 2026
      </Typography>    
    </Box>
  );
};

export default Footer;