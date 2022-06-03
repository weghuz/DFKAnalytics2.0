import { useEffect, useState } from "react";
import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../Components/Layout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ThemeOptions from "../General/ThemeOptions";
import useUser from "../Store/UserStore";
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const theme = useUser((state) => state.theme);
  const toggleTheme = useUser((state) => state.toggleTheme);
  useEffect(() => {
    let storedColorScheme = window.localStorage.getItem("prefers-color-scheme");
    if (storedColorScheme == "light") {
      toggleTheme();
    }
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        theme={theme == "light" ? ThemeOptions.light : ThemeOptions.dark}
      >
        <CssBaseline />
        <Layout Title={"DFKAnalytics"}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
