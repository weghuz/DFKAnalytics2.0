import React from "react";
import { FixSalePrice } from "../../Logic/HeroBase";
import Image from "next/image";
import Jewel from "../../public/Jewel.png";
import { Grid, Tooltip } from "@mui/material";

export default function PetPriceCell({ children }) {
  return (
    <>
      {children.salePrice ? (
        <Tooltip
          placement="right"
          title={`This pet is being sold in Serendale for Jewel.`}
        >
          <Grid container justifyContent={"space-between"}>
            <Grid item sx={{ alignSelf: "center" }}>
              {FixSalePrice(children.salePrice)}
            </Grid>
            <Grid item sx={{ marginTop: "4px" }}>
              <Image src={Jewel} alt="Crystal" height="24px" width="24px" />
            </Grid>
          </Grid>
        </Tooltip>
      ) : (
        ""
      )}
    </>
  );
}
