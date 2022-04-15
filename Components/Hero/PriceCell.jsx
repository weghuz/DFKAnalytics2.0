import React from "react";
import { FixSalePrice } from "../../Logic/HeroBase";
import Image from "next/image";
import Jewel from "../../public/Jewel.png";
import { Tooltip } from "@mui/material";

export default function PriceCell({ children }) {
  return (
    <Tooltip
      placement="left"
      title={FixSalePrice(children.salePrice).toFixed(2)}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          justifyContent: "space-evenly",
        }}
      >
        <span className="me-1">
          {FixSalePrice(children.salePrice).toFixed(0)}
        </span>
        <Image src={Jewel} alt="Jewel" height="24px" width="24px" />
      </div>
    </Tooltip>
  );
}
