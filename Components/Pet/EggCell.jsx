import React from "react";
import Image from "next/image";

import GrayEgg from "../../public/Pet/Eggs/GrayEgg.png";
import BlueEgg from "../../public/Pet/Eggs/BlueEgg.png";
import { Box, Tooltip } from "@mui/material";

export default function EggCell({ children }) {
  const eggImage = () => {
    switch (children.eggType) {
      case 0:
        return <Image src={BlueEgg} layout={"fixed"} width={20} height={20} />;
      case 1:
        return <Image src={GrayEgg} layout={"fixed"} width={20} height={20} />;
    }
  };
  const toolTipText = () => {
    switch (children.eggType) {
      case 0:
        return `Blue pet egg (1)`;
      case 1:
        return `Gray pet egg (0)`;
    }
  };
  return (
    <>
      <Tooltip title={toolTipText()} placement={"right"}>
        <Box paddingTop={"5px"}>{eggImage()}</Box>
      </Tooltip>
    </>
  );
}
