import { Box, Tooltip } from "@mui/material"
import Image from "next/image"
import React from "react"
import Jade from "../../public/Jade.png"
import CVID from "../../public/CVID.png"
import SDID from "../../public/SDID10.png"

export default function PetId({ children }) {
  return (
    <>
      {children.originRealm == "SER2" ? (
        <Tooltip
          placement="right"
          title="Serendale on Klaytn ID. Starts at 2000000000001."
        >
          <Box sx={{ display: "inline-block" }}>
            <Image
              layout={"fixed"}
              width={10}
              height={10}
              objectFit={"fill"}
              src={Jade}
            />
            #{children.id - 2000000000000}
          </Box>
        </Tooltip>
      ) : children.originRealm == "SER1" ? (
        <Tooltip placement="right" title="Serendale 1 ID. Starts at 1.">
          <Box sx={{ display: "inline-block" }}>
            <Image
              layout={"fixed"}
              width={10}
              height={10}
              objectFit={"fill"}
              src={SDID}
            />
            #{children.id}
          </Box>
        </Tooltip>
      ) : (
        <Tooltip
          placement="right"
          title="Crystalvale ID. Starts at 1000000000001."
        >
          <Box sx={{ display: "inline-block" }}>
            <Image layout={"fixed"} width={9} height={10} src={CVID} />#
            {parseInt(children.id) - 1000000000000}
          </Box>
        </Tooltip>
      )}
    </>
  )
}
