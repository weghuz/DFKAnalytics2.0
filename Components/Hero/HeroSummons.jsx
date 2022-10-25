import { LinearProgress } from "@mui/material"
import React from "react"

export default function HeroSummons({ children }) {
  const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN)
  return (
    <LinearProgress value={children.HeroSummons}>HeroSummons</LinearProgress>
  )
}
