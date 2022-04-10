import React, { useState, useEffect } from "react";
import Image from "next/image";
import DFKLogo from "../../../public/DFKLogo.png";
import style from './Navbar.module.css'
import Link from 'next/link'
import MetaMask from '../MetaMask'

export default function Navbar() {
  const [address, setAddress] = useState("");
  return (
    <div className={style.Navbar}>
      <span className={style.text}><Link href="/">DFKAnalytics</Link> a</span>
      <a className={style.DFKLogo} href="https://defikingdoms.com/" target="_blank" rel="noreferrer">
        <Image className={style.Img} alt="DeFi Kingdoms Logo"  placeholder="blur" src={DFKLogo} height="30" width="184" />
      </a>
      <span className={style.text}>third party site</span>
      <div className={style.navigation}>
        <Link href={"/"}>Home</Link>
        <Link href={"/Auctions"}>Auctions</Link>
        <Link href={"/Wallet"}>Wallet</Link>
        <Link href={"/Resources"}>Resources</Link>
        <Link href={"/About"}>About</Link>
      </div>
    </div>
  );
}
