import { Box, Tooltip } from "@mui/material"
import React from "react"
import { HoursToSummon } from "../../Logic/HeroBase"

export default function HeroSummonsNext({ children }) {
  const value = HoursToSummon(children)
  return value === "Now" ? (
    <Tooltip placement={"right"} title={`Summon is available now.`}>
      <Box sx={{ color: `success.main` }}>{value}</Box>
    </Tooltip>
  ) : (
    <Tooltip
      placement={"right"}
      title={`Summon will be available in ${value} hours.`}
    >
      <Box sx={{ color: "error.main" }}>{value}</Box>
    </Tooltip>
  )
}
