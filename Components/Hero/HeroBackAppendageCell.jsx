import { Box, Tooltip } from "@mui/material";
import React from "react";
import { backAppendage, cosmeticTier } from "../../Logic/HeroBase";
import useUser from "../../Store/UserStore";

export default function HeroBackAppendageCell({ hero }) {
  const visualDisplayType = useUser((state) => state.visualDisplayType);

  const display = () => {
    switch (visualDisplayType[0].value) {
      case "Name":
        return backAppendage[hero.backAppendage];
      case "Raw":
        return hero.backAppendage;
      case "Tier":
        return cosmeticTier[hero.backAppendage];
      default:
        return hero.backAppendage;
    }
  };
  const tooltip = () => {
    switch (visualDisplayType[0].value) {
      case "Name":
        return (
          <>
            Raw: {hero.backAppendage}
            <br /> Tier: {cosmeticTier[hero.backAppendage]}
          </>
        );
      case "Raw":
        return (
          <>
            Name: {backAppendage[hero.backAppendage]}
            <br /> Tier: {cosmeticTier[hero.backAppendage]}
          </>
        );
      case "Tier":
        return (
          <>
            Raw: {hero.backAppendage}
            <br /> Name: {backAppendage[hero.backAppendage]}
          </>
        );
      default:
        return (
          <>
            Name: {backAppendage[hero.backAppendage]}
            <br /> Tier: {cosmeticTier[hero.backAppendage]}
          </>
        );
    }
  };
  return (
    <Tooltip placement={"top"} title={tooltip()}>
      <Box>{display()}</Box>
    </Tooltip>
  );
}
