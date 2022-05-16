import React from "react";
import { FixSalePrice } from "../../Logic/HeroBase";
import Image from "next/image";
import Jewel from "../../public/Jewel.png";
import Crystal from "../../public/Crystal.png";
import { Grid, Tooltip } from "@mui/material";

export default function PriceCell({ children }) {
  return (
    <>
      {children.purchasePrice ? (
        <Tooltip
          placement="right"
          title={`This hero was sold for ${FixSalePrice(
            children.purchasePrice
          )} Jewel.`}
        >
          <Grid container spacing={2} justifyContent={"space-between"}>
            <Grid item>{FixSalePrice(children.purchasePrice)}</Grid>
            <Grid item>
              <Image src={Jewel} alt="Jewel" height="24px" width="24px" />
            </Grid>
          </Grid>
        </Tooltip>
      ) : children.saleAuction || children.assistingPrice ? (
        children.network == "dfk" ? (
          <Tooltip
            placement="right"
            title={`This hero is being ${
              children.saleAuction ? "Sold" : "Rented out"
            } in CrystalVale for Crystal.`}
          >
            <Grid container spacing={2} justifyContent={"space-between"}>
              <Grid item>
                {children.saleAuction
                  ? FixSalePrice(children.salePrice)
                  : FixSalePrice(children.assistingPrice)}
              </Grid>
              <Grid item>
                <Image src={Crystal} alt="Crystal" height="24px" width="24px" />
              </Grid>
            </Grid>
          </Tooltip>
        ) : (
          <Tooltip
            placement="right"
            title={`This hero is being ${
              children.saleAuction ? "Sold" : "Rented out"
            } in Serendale for Jewel.`}
          >
            <Grid container spacing={2} justifyContent={"space-between"}>
              <Grid item>
                {children.saleAuction
                  ? FixSalePrice(children.salePrice)
                  : FixSalePrice(children.assistingPrice)}
              </Grid>
              <Grid item>
                <Image src={Jewel} alt="Jewel" height="24px" width="24px" />
              </Grid>
            </Grid>
          </Tooltip>
        )
      ) : (
        ""
      )}
    </>
  );
}
