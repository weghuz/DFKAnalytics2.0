import React from "react";
import Tooltip from "@mui/material/Tooltip";
import ClassScoreTooltip from "./Tooltip/ClassScoreTooltip"

export default function ClassScoreCell({ children }) {
  return (
    <Tooltip
      placement="right"
      title={<ClassScoreTooltip>{children}</ClassScoreTooltip>}
    >
      <div>{children.classScore}</div>
    </Tooltip>
  );
}
