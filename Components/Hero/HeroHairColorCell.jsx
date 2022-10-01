import { Box, Tooltip } from "@mui/material";
import React from "react";
import { hairColorNames, hairColorTiers } from "../../Logic/HeroBase";
import useUser from "../../Store/UserStore";

export default function HeroHairColorCell({ children }) {
  const visualDisplayType = useUser((state) => state.visualDisplayType);

  const display = () => {
    switch (visualDisplayType[0].value) {
      case "Name":
        return hairColorNames[children];
      case "Raw":
        return children;
      case "Tier":
        return hairColorTiers[children];
      default:
        return children;
    }
  };
  const tooltip = () => {
    switch (visualDisplayType[0].value) {
      case "Name":
        return (
          <>
            Color hex code: #{children}
            <br /> Tier: {hairColorTiers[children]}
          </>
        );
      case "Raw":
        return (
          <>
            Name: {hairColorNames[children]}
            <br /> Tier: {hairColorTiers[children]}
          </>
        );
      case "Tier":
        return (
          <>
            Color hex code: #{children}
            <br /> Name: {hairColorNames[children]}
          </>
        );
      default:
        return (
          <>
            Name: {hairColorNames[children]}
            <br /> Tier: {hairColorTiers[children]}
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
