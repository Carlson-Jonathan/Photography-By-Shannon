import { Box, Typography } from "@mui/material";
import * as styles from '@styles/Prices';
import PriceCard from "@/components/PriceCard";

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PortraitIcon from '@mui/icons-material/Portrait';
import PrintIcon from '@mui/icons-material/Print';

const Prices = () => {

  const sessionStyle = {
    textAlign: 'center',

    '& .MuiTypography-root': { 
      fontSize: '1rem',
      
      '&.price': {
        fontSize: '2rem',
        fontWeight: '600',
        margin: '0.75rem 0',
      },
    }
  }

  const printsStyle = {
    width: '100%',
    padding: '1rem 3rem',

    '& .MuiTypography-root': {
      fontSize: '1.25rem',
      fontWeight: '300',
    },
    
    '& .lineItem':{
      display: 'flex',
      justifyContent: 'space-between',
    },
  };

  const sessionContent = () => {
    return <Box sx={sessionStyle}>
      <Typography className='price'>$50 / hour</Typography>
      <Typography >Includes travel within the Madison / Huntsville area.
        Additional time may be added in 30 minute increments.</Typography>
    </Box>
  };

  const headshot = () => {
    return <Box sx={sessionStyle}>
      <Typography className='price'>$75</Typography>
      <Typography >10 minute studio session. Includes 1 digital image with copyright release.
        Additional time may be added in 30 minute increments.</Typography>
    </Box>
  };

  const prints = () => {
    return <Box sx={printsStyle}>
      <Box className='lineItem'><Typography>Wallets (x8)</Typography><Typography>$15</Typography></Box>
      <Box className='lineItem'><Typography>4x6</Typography><Typography>$8</Typography></Box>
      <Box className='lineItem'><Typography>5x7</Typography><Typography>$12</Typography></Box>
      <Box className='lineItem'><Typography>8x10</Typography><Typography>$20</Typography></Box>
      <Box className='lineItem'><Typography>11x14</Typography><Typography>$40</Typography></Box>
      <Box className='lineItem'><Typography>16x20</Typography><Typography>$70</Typography></Box>
      <Box className='lineItem'><Typography>20x30</Typography><Typography>$100</Typography></Box>
    </Box>
  };

  const digital = () => {
    return <>
      <Box sx={printsStyle}>
      <Box className='lineItem'><Typography>20x30</Typography><Typography>$100</Typography></Box>
      <Box className='lineItem'><Typography>20x30</Typography><Typography>$100</Typography></Box>
      </Box>
      <Typography sx={{textAlign: 'center' }}>Includes copyright release. Delivered via CD or USB drive. Additional session time: $150/hour</Typography>
    </>
  };

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  return ( <>
    <Box sx={styles.page}>
       <Box sx={styles.pricePair}>
        <PriceCard icon={CameraAltIcon} title={'Session'} content={sessionContent()}/>
        <PriceCard icon={PrintIcon} title={'Prints'} content={prints()} />
      </Box>
      <Box sx={styles.pricePair}>
        <PriceCard icon={PortraitIcon} title={'Professional Headshot' } content={headshot()}/>
        <PriceCard icon={PhotoLibraryIcon} title={'Digital Images'} content={digital()}/>
      </Box>
    </Box>
    <Box></Box>
  </>
  );
};

export default Prices;