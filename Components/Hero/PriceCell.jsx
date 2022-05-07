import React from "react";
import { FixSalePrice } from "../../Logic/HeroBase";
import Image from "next/image";
import Jewel from "../../public/Jewel.png";
import Crystal from "../../public/Crystal.png";
import { Tooltip } from "@mui/material";

export default function PriceCell({ children }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        justifyContent: "space-evenly",
      }}
    >
      <span className="me-auto">
        {children.saleAuction ? parseFloat(FixSalePrice(children.salePrice).toFixed(2)) : children.assistingPrice ? parseFloat(FixSalePrice(children.assistingPrice).toFixed(2)) : ""}
      </span>
      {
      children.saleAuction || children.assistingPrice ? (
        children.network == "dfk" ? (
          <Tooltip
            placement="right"
            title={`This hero is being ${children.saleAuction ? "Sold" : "Rented out"} in CrystalVale for Crystal.`}
          >
            <span>
              <Image src={Crystal} alt="Crystal" height="24px" width="24px" />
            </span>
          </Tooltip>
        ) : (
          <Tooltip
            placement="right"
            title={`This hero is being ${children.saleAuction ? "Sold" : "Rented out"} in Serendale for Jewel.`}
          >
            <span>
              <Image src={Jewel} alt="Jewel" height="24px" width="24px" />
            </span>
          </Tooltip>
        )
      ) : (
        ""
      )}
    </div>
  );
}
