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

export default function index() {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h4">{`Welcome to DFKAnalytics 2.0`}</Typography>
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
              <Link href={"https://discord.gg/kuy5tSrH9C"} passhref>
                <Button size="small">{"DFKAnalytics Discord"}</Button>
              </Link>
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
              <Link href={"/Wallet/"} passhref>
                <Button size="small">{`Log in`}</Button>
              </Link>
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
              <Link href={"/Pets/"} passhref>
                <Button size="small">{`Pets`}</Button>
              </Link>
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
              <Link href={"/Heroes/"} passhref>
                <Button size="small">{`Heroes`}</Button>
              </Link>
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
              <a href={"https://dfkanalytics.azurewebsites.net"}>
                <Button size="small">{`DFKAnalytics 1.0`}</Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
