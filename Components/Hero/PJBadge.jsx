import React from "react";
import Image from "next/image";
import Survived from "../../public/pjsurvivor.png";
import { Tooltip } from "@mui/material";

export default function PJBadge() {
  return (
    <Tooltip placement="left" title="Survived">
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image src={Survived} alt="Survived" height="27" width="28" />
      </div>
    </Tooltip>
  );
}
