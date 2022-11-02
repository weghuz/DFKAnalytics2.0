import { Box, Button, Dialog, Grid } from "@mui/material"
import React from "react"
import HeroDetails from "./HeroDetails"
import { useRouter } from "next/router"

export default function HeroDetailsModal({ hero, setHero }) {
  const router = useRouter()
  const navigateHero = () => {
    window.open(`/hero/${hero.id}`, `_blank`)
  }
  return (
    <Dialog
      open={hero !== null}
      maxWidth={"xl"}
      onClose={() => {
        setHero((h) => null)
      }}
    >
      <Grid
        container
        sx={{ paddingBottom: "1px" }}
        bgcolor={"background.default"}
      >
        <Grid item xs={6}>
          <Button variant={"text"} color={"primary"} onClick={navigateHero}>
            Show External Page
          </Button>
        </Grid>
        <Grid container item xs={6}>
          <Grid
            item
            xs={12}
            sx={{ justifyContent: "flex-end", display: "flex" }}
          >
            <Button
              variant={"text"}
              color={"error"}
              onClick={() => setHero((h) => null)}
              sx={{ textColor: "red" }}
            >
              X
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {hero !== null && <HeroDetails hero={hero}></HeroDetails>}
    </Dialog>
  )
}
