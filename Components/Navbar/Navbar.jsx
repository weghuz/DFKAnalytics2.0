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
        <DropDownButton title={"Tavern"}>
          <Link href={"/Heroes"} passHref>
            <MenuItem>Heroes</MenuItem>
          </Link>
          <Link href={"/Pets"} passHref>
            <MenuItem>Pets</MenuItem>
          </Link>
        </DropDownButton>
        <DropDownButton title={"Wallet"}>
          <Link href={"/Wallet/"} passHref>
            <MenuItem>Heroes</MenuItem>
          </Link>
          <Link href={"/Wallet/SoldHeroes"} passHref>
            <MenuItem>Sold Heroes</MenuItem>
          </Link>
          <Link href={"/Wallet/Pets"} passHref>
            <MenuItem>Pets</MenuItem>
          </Link>
        </DropDownButton>
        <DropDownButton title={"Misc"}>
          <Link href={"/Misc/Resources"} passHref>
            <MenuItem variant={"text"}>Resources</MenuItem>
          </Link>
          <Link href={"/Misc/About"} passHref>
            <MenuItem variant={"text"}>About</MenuItem>
          </Link>
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
