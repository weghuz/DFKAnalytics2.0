import React, { useContext } from "react";
import Image from "next/image";
import DFKLogo from "../../public/DFKLogo.png";
import style from "./Navbar.module.css";
import Link from "next/link";
import { Button, Container, Grid, IconButton, MenuItem } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import Context from "../../Context/Context";
import { useTheme } from "@emotion/react";
import DropDownButton from "./DropDownButton";

export default function Navbar() {
  const theme = useTheme();
  const queryContext = useContext(Context);
  return (
    <>
      <Container className={style.Navbar}>
        <span className={style.text}>
          <Link href="/">DFKAnalytics</Link> a
        </span>
        <a
          className={style.DFKLogo}
          href="https://defikingdoms.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className={style.Img}
            alt="DeFi Kingdoms Logo"
            placeholder="blur"
            src={DFKLogo}
            height="30"
            width="184"
          />
        </a>
        <span className={style.text}>third party site</span>
      </Container>
      <Grid container spacing={1} justifyContent={"center"}>
        <Grid item>
          <Button variant={"text"}>
            <Link href={"/hero"}>Heroes</Link>
          </Button>
        </Grid>
        <Grid item>
          <Button variant={"text"}>
            <Link href={"/pet"}>Pets</Link>
          </Button>
        </Grid>
        <DropDownButton title={"Wallet"}>
          <MenuItem>
            <Link href={"/Wallet"}>Heroes</Link>
          </MenuItem>

          <MenuItem>
            <Link href={"/Wallet/soldheroes"}>Sold Heroes</Link>
          </MenuItem>

          <MenuItem>
            <Link href={"/Wallet/pets"}>Pets</Link>
          </MenuItem>
        </DropDownButton>
        <DropDownButton title={"Misc"}>
          <MenuItem variant={"text"}>
            <Link href={"/Misc/resources"}>Resources</Link>
          </MenuItem>
          <MenuItem variant={"text"}>
            <Link href={"/Misc/about"} passHref>
              About
            </Link>
          </MenuItem>
        </DropDownButton>
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => {
            queryContext.query.toggleTheme();
          }}
          color="inherit"
        >
          {theme.palette && theme.palette.mode === "dark" ? (
            <Brightness7 />
          ) : (
            <Brightness4 />
          )}
        </IconButton>
      </Grid>
    </>
  );
}
