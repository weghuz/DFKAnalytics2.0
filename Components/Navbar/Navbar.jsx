import React, { useEffect, useState } from "react";
import Image from "next/image";
import DFKLogo from "../../public/DFKLogo.png";
import style from "./Navbar.module.css";
import Link from "next/link";
import { Button } from "@mui/material";

export default function Navbar() {
  return (
    <div className={style.Navbar}>
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
      <div className={style.navigation}>
        <Link href={"/"} passHref>
          <Button variant={"text"}>Tavern</Button>
        </Link>
        <Link href={"/Wallet"} passHref>
          <Button variant={"text"}>Wallet</Button>
        </Link>
        <Link href={"/Auctions"} passHref>
          <Button variant={"text"} color={"warning"}>new! Auctions</Button>
        </Link>
        <Link href={"/Resources"} passHref>
          <Button variant={"text"}>Resources</Button>
        </Link>
        <Link href={"/About"} passHref>
          <Button variant={"text"}>About</Button>
        </Link>
      </div>
    </div>
  );
}
