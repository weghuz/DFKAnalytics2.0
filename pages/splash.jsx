import React from "react"
import { Box, Card, CardContent, Grid, Typography } from "@mui/material"
import Image from "next/image"
import PetData from "../public/Splash/PetData.png"
import HeroTableData from "../public/Splash/HeroTableData.png"
import WalletHeroes from "../public/Splash/WalletHeroes.png"

export default function Splash() {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        sx={{
          width: "896px",
          height: "504px",
          overflow: "hidden",
          padding: "4px"
        }}
      >
        <Typography variant={"h5"} textAlign={"center"}>
          DFKAnalytics: unleash your inner analyst
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
                width: "100%"
              }}
            >
              <CardContent
                sx={{
                  overflow: "hidden",
                  padding: "5px"
                }}
              >
                <b>Heroes</b>
                <p>Analyze heroes with powerful data visualisation tools.</p>
                <p>Over 100 data points for heroes.</p>
                <p>Tables with views to visualize the whole market.</p>
                <Box sx={{ width: "100%", overflow: "hidden" }}>
                  <Image
                    src={HeroTableData}
                    layout={"fixed"}
                    width={677}
                    height={145}
                  ></Image>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ width: "100%", height: "100%" }}>
              <CardContent>
                <b>Pets</b>
                <p>Search the market for specific traits.</p>
                <p>Find out if you{`'`}ve got any rare pets.</p>
                <p>Over 20 data points for pets.</p>
                <p>Pet details with images and more data to come.</p>
                <Box sx={{ width: "100%", overflow: "hidden" }}>
                  <Image
                    src={PetData}
                    layout={"fixed"}
                    width={419}
                    height={106}
                  ></Image>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={9}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <b>Wallet</b>
                <p>
                  Get an overview into your wallet and get to know your pets and
                  heroes.
                </p>
                <p>Search your wallets for specific heroes or pets.</p>
                <p>
                  Highlight traits that interests you and get an overview today.
                </p>
                <p>
                  Connect with your Metamask or just paste your 0x address to
                  view your heroes.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <p>Full Tavern</p>
                <p>Auctions</p>
                <p>Sold Heroes</p>
                <p>Sold Pets</p>
                <p>In depth stats & genes</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
