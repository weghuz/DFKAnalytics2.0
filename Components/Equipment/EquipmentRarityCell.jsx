import React from "react";
import Common from "../../public/Pet/Common.gif";
import Rare from "../../public/Pet/Rare.gif";
import Mythic from "../../public/Pet/Mythic.gif";
import Image from "next/image";
import { Box, Tooltip } from "@mui/material";
import { rarities } from "../../Logic/HeroBase";

export default function EquipmentRarityCell({ rarity }) {
  const gem = () => {
    switch (rarity) {
      case 0:
        return <Image src={Common} alt="Common" layout={"fixed"} width={20} height={20} />;
      case 1,2:
        return <Image src={Rare} alt="Rare" width={23} height={23} />;
      case 3,4:
        return <Image src={Mythic} alt="Mythic" layout={"fixed"} width={22} height={25} />;
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
