import { Box, Tooltip } from "@mui/material";
import React from "react";
import { hairColor } from "../../Logic/HeroBase";

export default function HeroHairColorCell({ children }) {
  return (
    <Tooltip placement="top" title={`Color hex code: #${children}`}>
      <Box
        sx={{
          fontWeight: 1000,
          color: `#${children}`,
        }}
      >
        {hairColor[children]}
      </Box>
    </Tooltip>
  );
}
