import { Box, Button, Dialog } from "@mui/material";
import React from "react";
import HeroDetails from "./HeroDetails";
import { useRouter } from "next/router";

export default function HeroDetailsModal({ hero, setHero }) {
  const router = useRouter();
  const navigateHero = () => {
    window.open(`/hero/${hero.id}`, `_blank`);
  };
  return (
    <Dialog
      open={hero !== null}
      onClose={() => {
        setHero((h) => null);
      }}
    >
      <Box>
        <Button variant="contained" color={"primary"} onClick={navigateHero}>
          Show External Page
        </Button>
      </Box>
      {hero !== null && <HeroDetails hero={hero}></HeroDetails>}
    </Dialog>
  );
}
