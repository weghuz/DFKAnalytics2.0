import { Box, Tooltip } from "@mui/material"
import Image from "next/image"
import React from "react"
import CVID from "../../public/CVID.png"
import SDID from "../../public/SDID10.png"
import SmolJade from "../../public/SmolJade.png"

export default function HeroId({ children }) {
  return (
    <>
      {parseInt(children) > 2000000000000 ? (
        <Tooltip
          placement="right"
          title="Klaytn Serendale ID. Starts at 2000000000000."
        >
          <Box sx={{ display: "inline-block" }}>
            <Image layout={"fixed"} width={15} height={15} src={SmolJade} />#
            {parseInt(children) - 2000000000000}
          </Box>
        </Tooltip>
      ) : parseInt(children) > 1000000000000 ? (
        <Tooltip
          placement="right"
          title="Crystalvale ID. Starts at 1000000000000."
        >
          <Box sx={{ display: "inline-block" }}>
            <Image layout={"fixed"} width={9} height={10} src={CVID} />#
            {parseInt(children) - 1000000000000}
          </Box>
        </Tooltip>
      ) : (
        <Tooltip placement="right" title="Serendale ID. Starts at 1.">
          <Box sx={{ display: "inline-block" }}>
            <Image
              layout={"fixed"}
              width={10}
              height={10}
              objectFit={"fill"}
              src={SDID}
            />
            #{children}
          </Box>
        </Tooltip>
      )}
    </>
  )
}
