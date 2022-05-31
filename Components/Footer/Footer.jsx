import { Container, Grid } from "@mui/material";
import React from "react";
import Style from "./Footer.module.css";
import Image from "next/image";
import Twitter from "../../public/Socials/Twitter.svg";
import Discord from "../../public/Socials/Discord.svg";
export default function Footer() {
  return (
    <Container className={Style.Footer}>
      <Grid
        container
        spacing={3}
        justifyContent={"center"}
        paddingBottom={"200px"}
      >
        <Grid item>
          <a href="https://twitter.com/Weghuz" target="_blank" rel="noreferrer">
            <Image
              src={Twitter}
              layout={"fixed"}
              width={24}
              height={24}
            ></Image>
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://discord.gg/kuy5tSrH9C"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={Discord}
              layout={"fixed"}
              width={24}
              height={24}
            ></Image>
          </a>
        </Grid>
      </Grid>
    </Container>
  );
}
