import React from "react"
import { Box, Card, CardContent, Grid, Typography } from "@mui/material"
import HeroGem from "../public/Gems/Mythic.png"
import MetaMask from "../public/metamask.png"
import Barkeep from "../public/Barkeep.png"
import Crystal from "../public/Crystal.png"
import Jewel from "../public/Jewel.png"
import StatStone from "../public/statstones/strength.gif"
import SummonCrystal from "../public/SummonCrystal.gif"
import BlueEgg from "../public/Pet/Eggs/BlueEgg.png"
import PetGem from "../public/Pet/Mythic.gif"
import Image from "next/image"
export default function Splash() {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        sx={{
          width: "896px",
          height: "504px",
          overflow: "hidden",
          border: "1px solid black",
          padding: "4px"
        }}
      >
        <Typography
          sx={{
            marginY: "20px"
          }}
          variant={"h3"}
          textAlign={"center"}
        >
          <a href="#">DFKAnalytics</a>: unleash your inner analyst
        </Typography>
        <Grid
          container
          sx={{
            textAlign: "center"
          }}
          columnSpacing={1}
          rowSpacing={2}
        >
          <Grid item xs={6}>
            <Card
              sx={{
                width: "100%",
                height: "100%"
              }}
            >
              <CardContent
                sx={{
                  overflow: "hidden",
                  padding: "5px",
                  fontSize: "48px"
                }}
              >
                <b>Analyze</b>
                <ul>
                  <li>
                    <Image
                      src={HeroGem}
                      layout={"fixed"}
                      width={37}
                      height={45}
                    ></Image>{" "}
                    Heroes
                  </li>
                  <li>
                    <Image
                      src={PetGem}
                      layout={"fixed"}
                      width={40}
                      height={45}
                    ></Image>{" "}
                    Pets
                  </li>
                  <li>
                    <Image
                      src={MetaMask}
                      layout={"fixed"}
                      width={50}
                      height={50}
                    ></Image>{" "}
                    Wallets
                  </li>
                  <li>
                    <Image
                      src={SummonCrystal}
                      layout={"fixed"}
                      width={50}
                      height={50}
                    ></Image>{" "}
                    Genes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ width: "100%", height: "100%" }}>
              <CardContent
                sx={{
                  overflow: "hidden",
                  padding: "5px",
                  fontSize: "38px"
                }}
              >
                <b>View and compare.</b>
                <ul>
                  <li>
                    <Image
                      src={Barkeep}
                      layout={"fixed"}
                      width={50}
                      height={50}
                    ></Image>{" "}
                    Full Tavern
                  </li>
                  <li>
                    <Image
                      src={Jewel}
                      layout={"fixed"}
                      width={45}
                      height={45}
                    ></Image>{" "}
                    Historic Auctions
                  </li>
                  <li>
                    <Image
                      src={Crystal}
                      layout={"fixed"}
                      width={45}
                      height={45}
                    ></Image>{" "}
                    Sold Heroes
                  </li>
                  <li>
                    <Image
                      src={BlueEgg}
                      layout={"fixed"}
                      width={45}
                      height={45}
                    ></Image>{" "}
                    Sold Pets
                  </li>
                  <li>
                    <Image
                      src={StatStone}
                      layout={"fixed"}
                      width={45}
                      height={45}
                    ></Image>{" "}
                    Stats
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
