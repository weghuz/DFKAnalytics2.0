import { Box, Tooltip } from "@mui/material";
import React from "react";

export default function CombatBonus({ children }) {
  const bonusType = () => {
    if (children.combatBonus) {
      return "Combat";
    }
  };
  const bonus = () => {
    switch (children.combatBonus) {
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
      placement={`top`}
      title={`You can filter the column for star amounts (0, 1, 2 or 3).`}
    >
      <Box>
        {bonusType()} {bonus()}
      </Box>
    </Tooltip>
  );
}
