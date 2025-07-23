import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import Common from "../../public/Pet/Common.gif";
import Rare from "../../public/Pet/Rare.gif";
import Mythic from "../../public/Pet/Mythic.gif";
import { Grid } from "@mui/material";

export default function EquipmentRaritySlider({ setRarity, rarity }) {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <label className="font-weight-bold">Rarity</label>
      <Slider
        getAriaLabel={(val) => {
          switch (val) {
            case 1,2:
              return "Rare";
            case 3,4:
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
          {
            value: 0,
            label: <Image src={Common} alt="Common" layout={"fixed"} width={20} height={20} />,
          },
          {
            value: 2,
            label: <Image src={Rare} alt="Rare" width={23} height={23} />,
          },
          {
            value: 4,
            label: <Image src={Mythic} alt="Mythic" layout={"fixed"} width={22} height={25} />,
          },
        ]}
        onChange={(e, val) => {
          setRarity(val);
        }}
        sx={{ color: "#0074D9" }}
        valueLabelFormat={(val) => {
          switch (val) {
            case 2:
              return "Rare";
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
