import React from "react";
import Tooltip from "@mui/material/Tooltip";
import GrowthScoreTooltip from "./Tooltip/GrowthScoreTooltip";

export default function GrowthScoreCell({ children }) {
  return (
    <Tooltip
      placement="right"
      title={<GrowthScoreTooltip>{children}</GrowthScoreTooltip>}
    >
      <div>{children.growthScore}</div>
    </Tooltip>
  );
}
