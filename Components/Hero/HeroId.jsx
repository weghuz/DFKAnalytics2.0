import { Box, Tooltip } from "@mui/material";
import Image from "next/image";
import React from "react";
import sdid from "../../public/SDID.png";

export default function HeroId({ children }) {
  console.log("test");
  return (
    <>
      {parseInt(children) > 1000000000000 ? (
        <Tooltip
          placement="right"
          title="Crystalvale ID. Starts at 1000000000001."
        >
          <Box sx={{ display: "inline-block" }}>
            <img style={{ width: "10px", height: "10px" }} src="./CVID.png" /> #
            {parseInt(children) - 1000000000000}
          </Box>
        </Tooltip>
      ) : (
        <Tooltip placement="right" title="Serendale ID. Starts at 1.">
          <Box sx={{ display: "inline-block" }}>
            <img style={{ width: "10px", height: "10px" }} src="./SDID10.png" />{" "}
            #{children}
          </Box>
        </Tooltip>
      )}
    </>
  );
}
