import { createContext, useEffect, useMemo, useState } from "react";
import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../Components/Layout";
import Context from "../Context/Context";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import ThemeOptions from "../General/ThemeOptions";
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const [theme, setTheme] = useState("dark");
  const ToggleTheme = () =>
    setTheme((theme) => {
      theme = theme == "light" ? "dark" : "light";
      window.localStorage.setItem("prefers-color-scheme", theme);
      console.log(theme);
      return theme;
    });
  const [query, setQuery] = useState({
    query: "",
    wallet: "",
    toggleTheme: ToggleTheme,
    invalidateQueries: () => {
      queryClient.invalidateQueries();
    },
  });
  useEffect(() => {
    let storedColorScheme = window.localStorage.getItem("prefers-color-scheme");
    if (storedColorScheme == "light") {
      ToggleTheme();
    }
  }, []);
  console.log(query);
  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={{ query, setQuery }}>
        <ThemeProvider
          theme={theme == "light" ? ThemeOptions.light : ThemeOptions.dark}
        >
          <CssBaseline />
          <Layout Title={"DFKAnalytics"}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Context.Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
