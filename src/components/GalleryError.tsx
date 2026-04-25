import { useState } from "react";
import { Box, Typography, Button, Collapse } from "@mui/material";

export const GalleryError = ({ errorMessage }: { errorMessage: string | null }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ textAlign: "center", p: 2 }}>
      <Typography variant="h6">
        We are having trouble displaying this gallery.
      </Typography>

      <Typography variant="body2" sx={{ mt: 1 }}>
        Please try refreshing the page.
      </Typography>

      <Button
        size="small"
        onClick={() => setOpen((prev) => !prev)}
        sx={{ mt: 1, textTransform: "none" }}
      >
        {open ? "Hide details" : "Show details"}
      </Button>

      <Collapse in={open}>
        <Box
          sx={{
            mt: 1,
            p: 1,
            backgroundColor: "#f5f5f5",
            borderRadius: 1,
            fontFamily: "monospace",
            fontSize: "0.75rem",
            textAlign: "left",
            overflowX: "auto",
          }}
        >
          {errorMessage}
        </Box>
      </Collapse>
    </Box>
  );
};

export default GalleryError;