import React from "react";
import Image from "next/image";
import DFKLogo from "../../public/DFKLogo.png";
import style from "./Navbar.module.css";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  MenuItem,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import DropDownButton from "./DropDownButton";
import useUser from "../../Store/UserStore";

export default function Navbar() {
  const theme = useTheme();
  const toggleTheme = useUser((state) => state.toggleTheme);
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
            height="26"
            width="184"
          />
        </a>
        <span className={style.text}>third party site</span>
      </Container>
      <Grid container spacing={1} justifyContent={"center"}>
        <Grid item>
          <Link href={"/hero"} passHref>
            <Button variant={"text"}>Heroes</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link href={"/pet"} passHref>
            <Button variant={"text"}>Pets</Button>
          </Link>
        </Grid>
        <DropDownButton title={"Wallet"}>
          <Link href={"/Wallet"} passhref>
            <MenuItem>Heroes</MenuItem>
          </Link>
          <Link href={"/Wallet/SoldHeroes"} passhref>
            <MenuItem>Sold Heroes</MenuItem>
          </Link>

          <Link href={"/Wallet/Pets"} passhref>
            <MenuItem>Pets</MenuItem>
          </Link>
        </DropDownButton>
        <DropDownButton title={"Misc"}>
          <Link href={"/Misc/Options"} passhref>
            <MenuItem variant={"text"}>Options</MenuItem>
          </Link>
          <Link href={"/Misc/Resources"} passhref>
            <MenuItem variant={"text"}>Resources</MenuItem>
          </Link>
          <Link href={"/Misc/About"} passhref>
            <MenuItem variant={"text"}>About</MenuItem>
          </Link>
        </DropDownButton>
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => {
            toggleTheme();
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
