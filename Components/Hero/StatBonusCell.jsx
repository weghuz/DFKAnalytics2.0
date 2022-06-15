import { Box, Tooltip } from "@mui/material";
import React from "react";

export default function StatBonusCell({
  sb1,
  sb2,
  stat,
  statAmount,
  statName,
}) {
  if (sb1 == stat && sb2 == stat) {
    return (
      <Tooltip
        placement="right"
        title={`This hero has Stat Boost 1 and 2 on ${statName}. It means the hero got +2 ${statName} when summoned and will have +2% Primary growth and +4% Secondary growth for ${statName}.`}
      >
        <Box sx={{ color: "info.main" }}>{statAmount}</Box>
      </Tooltip>
    );
  } else if (sb1 == stat) {
    return (
      <Tooltip
        placement="right"
        title={`This hero has Stat Boost 1 on ${statName}. It means the hero got +2 ${statName} when summoned.`}
      >
        <Box sx={{ color: "success.main" }}>{statAmount}</Box>
      </Tooltip>
    );
  } else if (sb2 == stat) {
    return (
      <Tooltip
        placement="right"
        title={`This hero has Stat Boost 2 on ${statName}. It means the hero will have +2% Primary growth and +4% Secondary growth for ${statName}.`}
      >
        <Box sx={{ color: "primary.main" }}>{statAmount}</Box>
      </Tooltip>
    );
  }
  return <Box>{statAmount}</Box>;
}
