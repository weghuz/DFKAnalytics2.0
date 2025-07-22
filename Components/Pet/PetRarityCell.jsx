import React from "react";
import Common from "../../public/Pet/Common.gif";
import Uncommon from "../../public/Pet/Uncommon.gif";
import Rare from "../../public/Pet/Rare.gif";
import Legendary from "../../public/Pet/Legendary.gif";
import Mythic from "../../public/Pet/Mythic.gif";
import Image from "next/image";
import { Box, Tooltip } from "@mui/material";
import { rarities } from "../../Logic/HeroBase";

export default function PetRarityCell({ rarity }) {
  const gem = () => {
    switch (rarity) {
      case 0:
        return (
          <Image
            src={Common}
            layout={"fixed"}
            width={20}
            height={20}
            alt="Common"
          />
        );
      case 1:
        return <Image src={Uncommon} alt="Uncommon" width={23} height={23} />;
      case 2:
        return <Image src={Rare} alt="Rare" width={23} height={23} />;
      case 3:
        return <Image src={Legendary} alt="Legendary" width={24} height={23} />;
      case 4:
        return (
          <Image
            src={Mythic}
            layout={"fixed"}
            width={22}
            height={25}
            alt="Mythic"
          />
        );
    }
  };

  return (
    <Tooltip placement="right" title={rarities[rarity]}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "right",
          padding: "2px",
        }}
      >
        {gem()}
      </Box>
    </Tooltip>
  );
}
