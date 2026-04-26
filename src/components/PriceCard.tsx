import { Box, Typography } from "@mui/material";
import * as styles from '@styles/PriceCard';
import type { SvgIconComponent } from '@mui/icons-material';


type Props = {
  icon: SvgIconComponent;
  title: string;
  content: React.ReactNode;
};

const PriceCard = ({ icon: Icon, title, content }: Props) => {
  return (
    <Box sx={styles.container}>
      <Icon />
      <Typography sx={{fontSize: '1.6rem', fontWeight: '600'}}>{title}</Typography>
      {content}
    </Box>
  );
};

export default PriceCard;