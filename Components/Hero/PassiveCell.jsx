import { Box, Tooltip } from "@mui/material"
import React from "react"

export default function PassiveCell({ children }) {
  const PassiveSkills = {
    Basic1: <Box>Duelist</Box>,
    Basic2: <Box>Clutch</Box>,
    Basic3: <Box>Foresight</Box>,
    Basic4: <Box>Headstrong</Box>,
    Basic5: <Box>Clear Vision</Box>,
    Basic6: <Box>Fearless</Box>,
    Basic7: <Box>Chatterbox</Box>,
    Basic8: <Box>Stalwart</Box>,
    Advanced1: <Box sx={{ color: "success.main" }}>Leadership</Box>,
    Advanced2: <Box sx={{ color: "success.main" }}>Efficient</Box>,
    Advanced3: <Box sx={{ color: "success.main" }}>Intimidation</Box>,
    Advanced4: <Box sx={{ color: "success.main" }}>Toxic</Box>,
    Elite1: <Box sx={{ color: "primary.main" }}>Giant Slayer</Box>,
    Elite2: <Box sx={{ color: "primary.main" }}>Last Stand</Box>,
    Transcendent1: <Box sx={{ color: "error.main" }}>Second Life</Box>
  }
  return (
    <Tooltip
      sx={{ marginRight: 1 }}
      title={
        <>
          {PassiveSkills[children]}
          {` is a Passive skill of tier ${children}`}
        </>
      }
    >
      <Box>{PassiveSkills[children]}</Box>
    </Tooltip>
  )
}
