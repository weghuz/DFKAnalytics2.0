import React from "react"
import Image from "next/image"
import DarkSummonedLevelup from "../../public/dark_summon_levelup.png"
import DarkSummonBadgeImage from "./DarkSummonBadgeImage"
import { Box, Tooltip } from "@mui/material"

export default function DarkSummonBadge({ children, size }) {
  if (children.darkSummoned) {
    let levelsLeft = children.darkSummonLevels - children.level
    if (levelsLeft < 1) {
      return (
        <Tooltip
          placement="top"
          title={`This hero was Dark Summoned with ${
            children.darkSummonLevels - 1
          } extra levels.`}
        >
          <Box sx={{ display: "inline-block", marginX: "5px" }}>
            <DarkSummonBadgeImage size={size} />
          </Box>
        </Tooltip>
      )
    } else {
      return (
        <Tooltip
          placement="top"
          title={`This hero was Dark Summoned with ${
            children.darkSummonLevels - 1
          } extra levels.`}
        >
          <Box sx={{ display: "inline-block", marginX: "5px" }}>
            <Image
              src={DarkSummonedLevelup}
              layout="fixed"
              width={size}
              height={size}
            />{" "}
            <Box sx={{ display: "inline-block", width: "1px", height: "1px" }}>
              <Box
                sx={{
                  width: `${size * 0.65}px`,
                  height: `${size * 0.65}px`,
                  position: "relative",
                  top: `-${size * 0.5}px`,
                  left: `-${size * 0.5}px`,
                  backgroundColor: "black",
                  borderRadius: "50%",
                  textAlign: "center"
                }}
              >
                <Box
                  sx={{
                    paddingTop: `${size * 0.03}px`,
                    fontSize: `${size * 0.4}px`
                  }}
                >
                  +{levelsLeft}
                </Box>
              </Box>
            </Box>
          </Box>
        </Tooltip>
      )
    }
  } else {
    return ""
  }
}
