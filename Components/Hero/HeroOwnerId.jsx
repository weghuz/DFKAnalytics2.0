import { Button, Popover, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useRef } from "react"
import { useState } from "react"
import { useMemo } from "react"

export default function HeroOwnerId({ children }) {
  const id = useMemo(() => {
    if (children.owner == null) return children.owner
    if (children.owner.id == "undefined") return null
    return children.owner.id
  })
  const [popoverAnchor, setPopoverAnchor] = useState(null)
  const CopyToClipboard = (e) => {
    setPopoverAnchor(e.target)
    console.log(e.target.innerHTML.trim())
    navigator.clipboard.writeText(e.target.innerHTML.trim())
  }
  return (
    <>
      <Box
        variant={"text"}
        onClick={CopyToClipboard}
        sx={{
          overflow: "auto",
          cursor: "pointer",
          color: "primary.main",
          display: "inline-block"
        }}
      >
        {id}
      </Box>
      <Popover
        open={Boolean(popoverAnchor)}
        anchorEl={popoverAnchor}
        onClose={() => setPopoverAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <Typography sx={{ p: 2 }}>0x copied to clipboard.</Typography>
      </Popover>
    </>
  )
}
