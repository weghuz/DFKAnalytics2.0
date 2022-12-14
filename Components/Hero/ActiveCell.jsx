import { Box, Tooltip } from "@mui/material"
import React from "react"
export default function ActiveCell({ children }) {
  const ActiveSkills = {
    Basic1: <Box>Poisoned Blade</Box>,
    Basic2: <Box>Blinding Winds</Box>,
    Basic3: <Box>Heal</Box>,
    Basic4: <Box>Cleanse</Box>,
    Basic5: <Box>Iron Skin</Box>,
    Basic6: <Box>Speed</Box>,
    Basic7: <Box>Critical Aim</Box>,
    Basic8: <Box>Deathmark</Box>,
    Advanced1: <Box sx={{ color: "success.main" }}>Exhaust</Box>,
    Advanced2: <Box sx={{ color: "success.main" }}>Daze</Box>,
    Advanced3: <Box sx={{ color: "success.main" }}>Explosion</Box>,
    Advanced4: <Box sx={{ color: "success.main" }}>Hardened Shield</Box>,
    Elite1: <Box sx={{ color: "primary.main" }}>Stun</Box>,
    Elite2: <Box sx={{ color: "primary.main" }}>Second Wind</Box>,
    Transcendent1: <Box sx={{ color: "error.main" }}>Resurrection</Box>
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
