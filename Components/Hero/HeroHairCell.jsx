import { Box, Tooltip } from "@mui/material";
import React from "react";
import { cosmeticTier, hairStyle } from "../../Logic/HeroBase";
import useUser from "../../Store/UserStore";

export default function HeroHairCell({ hero }) {
  const visualDisplayType = useUser((state) => state.visualDisplayType);

  const display = () => {
    switch (visualDisplayType[0].value) {
      case "Name":
        return hairStyle[hero.gender][hero.hairStyle];
      case "Raw":
        return hero.hairStyle;
      case "Tier":
        return cosmeticTier[hero.hairStyle];
    }
  };
  const tooltip = () => {
    switch (visualDisplayType[0].value) {
      case "Name":
        return (
          <>
            Raw: {hero.hairStyle}
            <br /> Tier: {cosmeticTier[hero.hairStyle]}
          </>
        );
      case "Raw":
        return (
          <>
            Name: {hairStyle[hero.gender][hero.hairStyle]}
            <br /> Tier: {cosmeticTier[hero.hairStyle]}
          </>
        );
      case "Tier":
        return (
          <>
            Raw: {hero.hairStyle}
            <br /> Name: {hairStyle[hero.gender][hero.hairStyle]}
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
