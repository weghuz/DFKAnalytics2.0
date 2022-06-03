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
  useEffect(() => {
    let storedColorScheme = window.localStorage.getItem("prefers-color-scheme");
    if (storedColorScheme == "light") {
      ToggleTheme();
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
