import { Box } from "@mui/material";
import React from "react";

export default function HeroColorCell({ children }) {
  return (
    <div>
      <Box
        sx={{
          fontWeight: 1000,
          color: `#${children}`,
        }}
      >
        {children}
      </Box>
    </div>
  );
}
