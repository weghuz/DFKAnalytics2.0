import { Box, Tooltip } from "@mui/material"
import React from "react"

export default function PassiveCell({ children }) {
  const PassiveSkills = {
    Basic1: <Box>B1 Duelist</Box>,
    Basic2: <Box>B2 Clutch</Box>,
    Basic3: <Box>B3 Foresight</Box>,
    Basic4: <Box>B4 Headstrong</Box>,
    Basic5: <Box>B5 Clear Vision</Box>,
    Basic6: <Box>B6 Fearless</Box>,
    Basic7: <Box>B7 Chatterbox</Box>,
    Basic8: <Box>B8 Stalwart</Box>,
    Advanced1: <Box sx={{ color: "success.main" }}>A1 Leadership</Box>,
    Advanced2: <Box sx={{ color: "success.main" }}>A2 Efficient</Box>,
    Advanced3: <Box sx={{ color: "success.main" }}>A3 Menacing</Box>,
    Advanced4: <Box sx={{ color: "success.main" }}>A4 Toxic</Box>,
    Elite1: <Box sx={{ color: "primary.main" }}>E1 Giant Slayer</Box>,
    Elite2: <Box sx={{ color: "primary.main" }}>E2 Last Stand</Box>,
    Transcendent1: <Box sx={{ color: "error.main" }}>T1 Second Life</Box>
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
