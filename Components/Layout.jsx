import React from "react";
import Head from "next/head";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Box minHeight={800}>{children}</Box>
      <Footer />
      <div id="modalContainer" />
    </>
  );
}
