import { Box, Typography } from "@mui/material";
import * as styles from '@styles/About';
import { useEffect } from "react";
import { getGallery } from "../ApiUtilities";

const About = () => {

  useEffect(() => {
    getGallery('homePage').then(console.log);
  }, []);

  return (
    <Box sx={styles.generic}>
      <Typography>
        About
      </Typography>
    </Box>
  );
};

export default About;