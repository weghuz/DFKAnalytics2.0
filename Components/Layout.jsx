import React from "react";
import Head from "next/head";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children, Title }) {
  const getTitle = () => {
    if(typeof window !== "undefined")
    {
      switch(window.location.pathname)
      {
        case "/": return "DFKAnalytics";
        case "/Auctions": return "DFKA - Auctions";
        case "/Wallet": return "DFKA - Wallet";
        case "/Resources": return "DFKA - Resources";
        case "/About": return "DFKA - About";
        default: "DFKAnalytics";
      }
    }
  }
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{getTitle()}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
      <div id="modalContainer" />
    </>
  );
}
