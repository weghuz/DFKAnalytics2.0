import React from "react"
import Image from "next/image"
import Survived from "../../public/pjsurvivor.png"
import { Tooltip } from "@mui/material"

export default function PJBadge() {
  return (
    <Tooltip placement="left" title="Survived">
      <div
        style={{
          display: "inline-block",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <Image
          src={Survived}
          alt="Survived"
          layout="fixed"
          height="32"
          width="32"
        />
      </div>
    </Tooltip>
  )
}
