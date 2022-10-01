import { Box, Tooltip } from "@mui/material";
import React from "react";
import { eyeColorNames, eyeColorTiers } from "../../Logic/HeroBase";
import useUser from "../../Store/UserStore";

export default function HeroEyeColor({ children }) {
  const visualDisplayType = useUser((state) => state.visualDisplayType);

  const display = () => {
    switch (visualDisplayType[0].value) {
      case "Name":
        return eyeColorNames[children];
      case "Raw":
        return children;
      case "Tier":
        return eyeColorTiers[children];
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
            <br /> Tier: {eyeColorTiers[children]}
          </>
        );
      case "Raw":
        return (
          <>
            Name: {eyeColorNames[children]}
            <br /> Tier: {eyeColorTiers[children]}
          </>
        );
      case "Tier":
        return (
          <>
            Color hex code: #{children}
            <br /> Name: {eyeColorNames[children]}
          </>
        );
      default:
        return (
          <>
            Name: {eyeColorNames[children]}
            <br /> Tier: {eyeColorTiers[children]}
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
