import { Box, Tooltip } from "@mui/material"
import React from "react"
export default function ActiveCell({ children }) {
  const ActiveSkills = {
    Basic1: <Box>B1 Poisoned Blade</Box>,
    Basic2: <Box>B2 Blinding Winds</Box>,
    Basic3: <Box>B3 Heal</Box>,
    Basic4: <Box>B4 Cleanse</Box>,
    Basic5: <Box>B5 Iron Skin</Box>,
    Basic6: <Box>B6 Speed</Box>,
    Basic7: <Box>B7 Critical Aim</Box>,
    Basic8: <Box>B8 Deathmark</Box>,
    Advanced1: <Box sx={{ color: "success.main" }}>A1 Exhaust</Box>,
    Advanced2: <Box sx={{ color: "success.main" }}>A2 Daze</Box>,
    Advanced3: <Box sx={{ color: "success.main" }}>A3 Explosion</Box>,
    Advanced4: <Box sx={{ color: "success.main" }}>A4 Hardened Shield</Box>,
    Elite1: <Box sx={{ color: "primary.main" }}>E1 Stun</Box>,
    Elite2: <Box sx={{ color: "primary.main" }}>E2 Second Wind</Box>,
    Transcendent1: <Box sx={{ color: "error.main" }}>T1 Resurrection</Box>
  }
  return (
    <Tooltip
      sx={{ marginRight: "5px" }}
      title={
        <>
          {ActiveSkills[children]}
          {`is an Active skill of tier ${children}`}
        </>
      }
    >
      {ActiveSkills[children]}
    </Tooltip>
  )
}
