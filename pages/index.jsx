import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import { Box } from "@mui/system";
import Image from "next/image";
import CommunitySpotlight from "../public/CommunitySpotlight.jpg";

export default function index() {
  const localDate = () => {
    let d = new Date("2022-06-04T19:00");
    d.setUTCFullYear(2022);
    d.setUTCMonth(5);
    d.setUTCDate(4);
    d.setUTCHours(17);

    return d.toLocaleString("en-GB");
  };
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={12} textAlign={"center"}>
          <Typography variant="h4" component="div">
            {`Welcome to DFKAnalytics 2.0`}
          </Typography>
        </Grid>
        <Grid container item sm={12}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {`Community Spotlight`}
              </Typography>
              <Typography variant="h6" component="div"></Typography>
              <Box display={"flex"} justifyContent={"center"}>
                <a
                  href="https://www.youtube.com/watch?v=sBOjWZ17r0s"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Image
                    layout={"fixed"}
                    width={800}
                    height={450}
                    src={CommunitySpotlight}
                    alt={"Community Spotlight"}
                  />
                </a>
              </Box>
              <Typography variant="body2">
                <Box>{`A Candor Gander: DFK Unmasked - Weghuz`}</Box>
                <Box>{localDate()}</Box>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://www.youtube.com/watch?v=sBOjWZ17r0s"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  {"Youtube Link"}
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid container item sm={7}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {`DFKAnalytics official discord channel!`}
              </Typography>
              <Typography variant="body2">
                {`Provide feedback about the site, chat with people about DFKA and Heroes/Pets or just hang out.`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href={"https://discord.gg/kuy5tSrH9C"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  {"DFKAnalytics Discord"}
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid container item sm={5}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {`Metamask Login`}
              </Typography>
              <Typography variant="body2">
                {`Using your metamask or just providing your 0x address manually
                to search or analyse your own heroes and pets.`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link href={"/Wallet/"}>{`Log in`}</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid container item sm={5}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {`Pets are here`}
              </Typography>
              <Typography variant="body2">
                {`and they're here to stay! If you want to find the right pet for
                you or just have a looksie at what's available on the market
                click below.`}
                <br />
                {`Now with even more powerful search tools.`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link href={"/pet/"}>{`Pets`}</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid container item sm={7}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {`Discover Hero NFTs`}
              </Typography>
              <Typography variant="body2">
                {`Discover heroes using the powerful query tools of DFKAnalytics.
                There are 81 different columns you can expose in the tables
                comparing hundreds of heroes at a time. There are filters that
                aren't available ingame yet like Perilous Journey stats and even
                a filters for hero names.`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link href={"/hero/"}>{`Heroes`}</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid container item sm={12}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {`For those who prefer the old experience`}
              </Typography>
              <Typography variant="body2">
                {`the site is still running. You can go there to get the old
                DFKAnalytics experience anytime you'd like. It's not going away.`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href={"https://dfkanalytics.azurewebsites.net"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >{`DFKAnalytics 1.0`}</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
