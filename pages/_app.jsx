import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../Components/Layout";
function MyApp({ Component, pageProps }) {
  const Global = React.createContext();
  const [query, setQuery] = useState({});
  const queryClient = new QueryClient();
  console.log("qClient", queryClient);
  return (
    <Layout Title={"DFKAnalytics"}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
