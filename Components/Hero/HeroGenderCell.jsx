import { Box, Tooltip } from "@mui/material"
import React from "react"

export default function HeroGenderCell({ children }) {
  return (
    <Tooltip placement="right" title={`${children}`}>
      <Box sx={{ align: "center" }}>{children == "male" ? "♂️" : "♀️"}</Box>
    </Tooltip>
  )
}
