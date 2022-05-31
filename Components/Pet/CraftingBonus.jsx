import { Box, Tooltip } from "@mui/material";
import React from "react";

export default function CraftingBonus({ children }) {
  const bonusType = () => {
    if (children.craftBonus) {
      switch (children.elementName) {
        case "fire":
          return "Blacksmithing";
        case "water":
          return "Goldsmithing";
        case "earth":
          return "Armorsmithing";
        case "wind":
          return "Woodworking";
        case "lightning":
          return "Leatherworking";
        case "ice":
          return "Tailoring";
      }
    }
  };
  const bonus = () => {
    switch (children.craftBonus) {
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
      title={`Crafting bonus is mapped to the pets element. ${bonusType()} is mapped to ${
        children.elementName
      }`}
      placement={"right"}
    >
      <Box>
        {bonusType()} {bonus()}
      </Box>
    </Tooltip>
  );
}
