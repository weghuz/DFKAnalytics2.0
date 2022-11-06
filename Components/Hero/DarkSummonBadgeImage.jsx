import React from "react"
import DarkSummoned from "../../public/dark_summon_badge.png"
import Image from "next/image"
export default function DarkSummonBadgeImage({ size }) {
  return (
    <Image
      src={DarkSummoned}
      alt="DarkSummoned"
      layout="fixed"
      height={size}
      width={size}
    />
  )
}
