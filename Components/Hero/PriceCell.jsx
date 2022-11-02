import React from "react"
import { FixSalePrice } from "../../Logic/HeroBase"
import Image from "next/image"
import Jewel from "../../public/Jewel.png"
import Crystal from "../../public/Crystal.png"
import { Grid, Tooltip } from "@mui/material"

export default function PriceCell({ children }) {
  return (
    <>
      {children.purchasePrice ? (
        <Tooltip
          placement="right"
          title={`This hero was sold for ${children.purchasePrice} Jewel.`}
        >
          <Grid container>
            <Grid item sx={{ marginRight: "10px" }}>
              <Image src={Jewel} alt="Jewel" height="24px" width="24px" />
            </Grid>
            <Grid item sx={{ alignSelf: "left", marginTop: "5px" }}>
              {children.purchasePrice}
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
            <Grid container>
              <Grid item sx={{ marginRight: "10px" }}>
                <Image src={Crystal} alt="Crystal" height="24px" width="24px" />
              </Grid>
              <Grid item sx={{ alignSelf: "left", marginTop: "5px" }}>
                {children.saleAuction
                  ? children.salePrice
                  : children.assistingPrice}
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
            <Grid container>
              <Grid item sx={{ marginRight: "10px" }}>
                <Image src={Jewel} alt="Jewel" height="24px" width="24px" />
              </Grid>
              <Grid item sx={{ alignSelf: "left", marginTop: "5px" }}>
                {children.saleAuction
                  ? children.salePrice
                  : children.assistingPrice}
              </Grid>
            </Grid>
          </Tooltip>
        )
      ) : (
        ""
      )}
    </>
  )
}
