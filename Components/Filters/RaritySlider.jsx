import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import Common from "../../public/Gems/Common.png";
import Uncommon from "../../public/Gems/Uncommon.png";
import Rare from "../../public/Gems/Rare.png";
import Legendary from "../../public/Gems/Legendary.png";
import Mythic from "../../public/Gems/Mythic.png";
import { Grid } from "@mui/material";

export default function RaritySlider({ rarity, setRarity }) {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <label className="font-weight-bold">Rarity</label>
      <Slider
        getAriaLabel={(val) => {
          switch (val) {
            case 1:
              return "Uncommon";
            case 2:
              return "Rare";
            case 3:
              return "Legendary";
            case 4:
              return "Mythic";
            default:
              return `Common`;
          }
        }}
        valueLabelDisplay="auto"
        value={rarity}
        min={0}
        max={4}
        size="small"
        marks={[
          { value: 0, label: <Image src={Common} alt="Common" /> },
          { value: 1, label: <Image src={Uncommon} alt="Uncommon" /> },
          { value: 2, label: <Image src={Rare} alt="Rare" /> },
          { value: 3, label: <Image src={Legendary} alt="Legendary" /> },
          { value: 4, label: <Image src={Mythic} alt="Mythic" /> },
        ]}
        onChange={(e, val) => {
          setRarity(val);
        }}
        sx={{ color: "#0074D9" }}
        valueLabelFormat={(val) => {
          switch (val) {
            case 1:
              return "Uncommon";
            case 2:
              return "Rare";
            case 3:
              return "Legendary";
            case 4:
              return "Mythic";
            default:
              return `Common`;
          }
        }}
      />
    </Grid>
  );
}
