import { Box, Tooltip } from "@mui/material";
import React from "react";
import { cosmeticTier, headAppendage } from "../../Logic/HeroBase";
import useUser from "../../Store/UserStore";

export default function HeroHeadAppendageCell({ hero }) {
  const visualDisplayType = useUser((state) => state.visualDisplayType);

  const display = () => {
    switch (visualDisplayType[0].value) {
      case "Name":
        return headAppendage[hero.headAppendage];
      case "Raw":
        return hero.headAppendage;
      case "Tier":
        return cosmeticTier[hero.headAppendage];
    }
  };
  const tooltip = () => {
    switch (visualDisplayType[0].value) {
      case "Name":
        return (
          <>
            Raw: {hero.headAppendage}
            <br /> Tier: {cosmeticTier[hero.headAppendage]}
          </>
        );
      case "Raw":
        return (
          <>
            Name: {headAppendage[hero.headAppendage]}
            <br /> Tier: {cosmeticTier[hero.headAppendage]}
          </>
        );
      case "Tier":
        return (
          <>
            Raw: {hero.headAppendage}
            <br /> Name: {headAppendage[hero.headAppendage]}
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
