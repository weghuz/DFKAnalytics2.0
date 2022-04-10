import React from "react";
import Head from "next/head";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children, Title }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{Title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
      <div id="modalContainer" />
    </>
  );
}
