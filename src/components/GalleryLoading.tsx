import { Box, Typography } from "@mui/material";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const GalleryLoading = () => {
  const pulseKeyframes = {
    "@keyframes pulse": {
      "0%": { opacity: 0.4, transform: "scale(1)" },
      "50%": { opacity: 1, transform: "scale(1.05)" },
      "100%": { opacity: 0.4, transform: "scale(1)" }
    }
  };
  
  const container = {
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    ...pulseKeyframes
  };
  
  const pulseBox = {
    display: "flex",
    gap: 1
  };

  const dotStyle = (i: number) => ({
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "primary.main",
    animation: "pulse 1.2s infinite",
    animationDelay: `${i * 0.15}s`
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  return (
    <Box sx={container}>
      <Box sx={pulseBox}>
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={dotStyle(i)}
          />
        ))}
      </Box>

      <Typography variant="body2" color="text.secondary">
        Loading images…
      </Typography>
    </Box>
  );
};

export default GalleryLoading;