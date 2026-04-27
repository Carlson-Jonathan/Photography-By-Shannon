import { Box, Typography } from "@mui/material";
import * as styles from '@styles/Prices';
import PriceCard from "@/components/PriceCard";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PortraitIcon from '@mui/icons-material/Portrait';
import PrintIcon from '@mui/icons-material/Print';
import { useScreenSize } from "@/Utilities";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const Prices = () => {
  const screenSize = useScreenSize();

  const session = () => {
    return <Box sx={styles.session}>
      <Typography className='price'>$50 / hour</Typography>
      <Typography >Includes travel within the Madison / Huntsville area.
        Additional time may be added in 30 minute increments.</Typography>
    </Box>
  };

  const headshot = () => {
    return <Box sx={styles.session}>
      <Typography className='price'>$75</Typography>
      <Typography >10 minute studio session. Includes 1 digital image with copyright release.
        Additional time may be added in 30 minute increments.</Typography>
    </Box>
  };

  const prints = () => {
    return <Box sx={styles.prints}>
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
      <Box sx={styles.prints}>
      <Box className='lineItem'><Typography>Single Image</Typography><Typography>$40</Typography></Box>
      <Box className='lineItem'><Typography>1 Hour Session</Typography><Typography>$300</Typography></Box>
      </Box>
      <Typography sx={{textAlign: 'center' }}>Includes copyright release. Session images are delivered on a USB drive.
        Single image purchases are emailed. Additional session time: $150/hour</Typography>
    </>
  };

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  return <>
    <Box sx={styles.page}>
       <Box sx={styles.boxPair}>
        <PriceCard icon={CameraAltIcon} title={'Session'} content={session()}/>
        <PriceCard icon={PrintIcon} title={'Prints'} content={prints()} />
      </Box>
      <Box sx={styles.boxPair}>
        <PriceCard icon={PortraitIcon} title={'Professional Headshot' } content={headshot()}/>
        <PriceCard icon={PhotoLibraryIcon} title={'Digital Images'} content={digital()}/>
      </Box>
    </Box>
    {screenSize == 'small' && (<Box sx={{ height: '3rem' }} />)}
  </>;
};

export default Prices;
