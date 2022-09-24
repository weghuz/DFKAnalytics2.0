import React from "react";
import strength from "../../public/statstones/strength.gif";
import dexterity from "../../public/statstones/dexterity.gif";
import agility from "../../public/statstones/agility.gif";
import vitality from "../../public/statstones/vitality.gif";
import endurance from "../../public/statstones/endurance.gif";
import wisdom from "../../public/statstones/wisdom.gif";
import intelligence from "../../public/statstones/intelligence.gif";
import luck from "../../public/statstones/luck.gif";
import health from "../../public/health.png";
import mana from "../../public/mana.png";
import mining from "../../public/Items/gold.png";
import foraging from "../../public/Items/ragweed.png";
import gardening from "../../public/Items/milkweed.png";
import fishing from "../../public/Items/frostbloater.png";
import { Grid, Input, InputAdornment, InputLabel } from "@mui/material";
import Image from "next/image";
export default function NumberInput({ name, value, setValue, step = 0 }) {
  let adornment = strength;
  switch (name) {
    case "mining":
      adornment = mining;
      break;
    case "gardening":
      adornment = gardening;
      break;
    case "foraging":
      adornment = foraging;
      break;
    case "fishing":
      adornment = fishing;
      break;
    case "health":
      adornment = health;
      break;
    case "mana":
      adornment = mana;
      break;
    case "strength":
      adornment = strength;
      break;
    case "dexterity":
      adornment = dexterity;
      break;
    case "agility":
      adornment = agility;
      break;
    case "vitality":
      adornment = vitality;
      break;
    case "endurance":
      adornment = endurance;
      break;
    case "wisdom":
      adornment = wisdom;
      break;
    case "intelligence":
      adornment = intelligence;
      break;
    case "luck":
      adornment = luck;
      break;
  }
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <InputLabel htmlFor={name} className="text-white">
        Min {name[0].toUpperCase() + name.slice(1)}{" "}
        {step != false ? `(Steps: ${step})` : ""}
      </InputLabel>
      <Input
        placeholder="0"
        value={value}
        id="name"
        onChange={(e) => setValue(e.target.value)}
        sx={{ width: "100%" }}
        type="number"
        startAdornment={
          <InputAdornment position="start" sx={{ width: "30px" }}>
            <Image
              src={adornment}
              alt={name}
              width={name == "health" || name == "mana" ? 16 : 24}
              height={name == "health" || name == "mana" ? 16 : 24}
            ></Image>
          </InputAdornment>
        }
      ></Input>
    </Grid>
  );
}
