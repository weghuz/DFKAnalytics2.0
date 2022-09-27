import { Box, Tooltip } from "@mui/material";
import React from "react";
import { skinColorNames, skinColorTiers } from "../../Logic/HeroBase";
import useUser from "../../Store/UserStore";

export default function HeroSkinColor({ children }) {
  const visualDisplayType = useUser((state) => state.visualDisplayType);

  const display = () => {
    switch (visualDisplayType[0].value) {
      case "Name":
        return skinColorNames[children];
      case "Raw":
        return children;
      case "Tier":
        return skinColorTiers[children];
    }
  };
  const tooltip = () => {
    switch (visualDisplayType[0].value) {
      case "Name":
        return (
          <>
            Raw: {children}
            <br /> Tier: {skinColorTiers[children]}
          </>
        );
      case "Raw":
        return (
          <>
            Name: {skinColorNames[children]}
            <br /> Tier: {skinColorTiers[children]}
          </>
        );
      case "Tier":
        return (
          <>
            Raw: {children}
            <br /> Name: {skinColorNames[children]}
          </>
        );
    }
  };
  return (
    <Tooltip placement="top" title={tooltip()}>
      <Box
        sx={{
          fontWeight: 1000,
          color: `#${children}`,
        }}
      >
        {display()}
      </Box>
    </Tooltip>
  );
}
