import React from "react";
import Common from "../../public/Gems/Common.png";
import Uncommon from "../../public/Gems/Uncommon.png";
import Rare from "../../public/Gems/Rare.png";
import Legendary from "../../public/Gems/Legendary.png";
import Mythic from "../../public/Gems/Mythic.png";
import Image from "next/image";
import { Box, Tooltip } from "@mui/material";
import { rarities } from "../../Logic/HeroBase";

export default function RarityCell({ rarity, width, height }) {
  const gem = () => {
    switch (rarity) {
      case 0:
        return <Image src={Common} alt="Common" />;
      case 1:
        return <Image src={Uncommon} alt="Uncommon" />;
      case 2:
        return <Image src={Rare} alt="Rare" />;
      case 3:
        return <Image src={Legendary} alt="Legendary" />;
      case 4:
        return <Image src={Mythic} alt="Mythic" />;
    }
  };

  return(
  <Tooltip placement="left" title={rarities[rarity]}>
    <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>{gem()}</Box>
  </Tooltip>);
}