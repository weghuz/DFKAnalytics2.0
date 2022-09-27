import { Box, Tooltip } from "@mui/material";
import React from "react";
import { appendageColorNames, appendageColorTiers } from "../../Logic/HeroBase";
import useUser from "../../Store/UserStore";

export default function HeroColorCell({ children }) {
  const visualDisplayType = useUser((state) => state.visualDisplayType);

  const display = () => {
    switch (visualDisplayType[0].value) {
      case "Name":
        return appendageColorNames[children];
      case "Raw":
        return children;
      case "Tier":
        return appendageColorTiers[children];
    }
  };
  const tooltip = () => {
    switch (visualDisplayType[0].value) {
      case "Name":
        return (
          <>
            Color hex code: #{children}
            <br /> Tier: {appendageColorTiers[children]}
          </>
        );
      case "Raw":
        return (
          <>
            Name: {appendageColorNames[children]}
            <br /> Tier: {appendageColorTiers[children]}
          </>
        );
      case "Tier":
        return (
          <>
            Color hex code: #{children}
            <br /> Name: {appendageColorNames[children]}
          </>
        );
    }
  };
  return (
    <Tooltip placement={"top"} title={tooltip()}>
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
