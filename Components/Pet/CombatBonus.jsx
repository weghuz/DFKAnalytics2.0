import { Box } from "@mui/material";
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
    <Box>
      {bonusType()} {bonus()}
    </Box>
  );
}
