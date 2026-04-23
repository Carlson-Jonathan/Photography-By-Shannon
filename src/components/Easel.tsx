import * as styles from '../styles/Easel';
import { Box, Typography } from '@mui/material';

const Easel = ({displaySize}: {displaySize: string}) => {
  return <>
      <Box sx={styles.container}>
        <Typography className='fillerText'>Display Size:</Typography>
        <Typography className='fillerText'>{displaySize}</Typography>
      </Box>
  </>
};

export default Easel;