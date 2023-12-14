import { Box, Tooltip } from "@mui/material";
import React from "react";

export default function ProfessionBonus({ children }) {
  const bonusType = () => {
    switch (children.eggType) {
      case 0:
        return "Fishing";
      case 1:
        return "Foraging";
      case 2:
        return "Gardening";
    }
  };
  const eggType = () => {
    switch (children.eggType) {
      case 0:
        return "Blue";
      case 1:
        return "Gray";
      case 2:
        return "Green";
    }
  };
  const bonus = () => {
    let stars = 0;
    let adjBonus = children.profBonus - (10000 * children.eggType);
    if (adjBonus > 0) {
      if (adjBonus < 80)
        stars = 1;
      else if (adjBonus < 160)
        stars = 2;
      else
        stars = 3;
    }
    switch (stars) {
      case 1:
        return "⭐";
      case 2:
        return "⭐⭐";
      case 3:
        return "⭐⭐⭐";
      default:
        return "";
    }
  };
  return (
    <Tooltip
      title={`The profession bonus is mapped to the pets Egg Type. ${bonusType()} is mapped to ${eggType()} Eggs. You can filter the column for star amounts (0, 1, 2 or 3).`}
      placement={"right"}
    >
      <Box>
        {bonusType()} {bonus()}
      </Box>
    </Tooltip>
  );
}
