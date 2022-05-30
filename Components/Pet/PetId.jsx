import { Box, Tooltip } from "@mui/material";
import Image from "next/image";
import React from "react";
import CVID from "../../public/CVID.png";
import SDID from "../../public/SDID10.png";

export default function PetId({ children }) {
  return (
    <>
      {children.network == "hmy" ? (
        <Tooltip
          placement="right"
          title="Crystalvale ID. Starts at 1000000000001."
        >
          <Box sx={{ display: "inline-block" }}>
            <Image layout={"fixed"} width={9} height={10} src={CVID} />#
            {parseInt(children) - 1000000000000}
          </Box>
        </Tooltip>
      ) : (
        <Tooltip placement="right" title="Serendale ID. Starts at 1.">
          <Box sx={{ display: "inline-block" }}>
            <Image
              layout={"fixed"}
              width={10}
              height={10}
              objectFit={"fill"}
              src={SDID}
            />
            #{children}
          </Box>
        </Tooltip>
      )}
    </>
  );
}
