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
    switch (children.profBonus) {
      case 1:
        return "⭐";
      case 80:
        return "⭐⭐";
      case 160:
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
