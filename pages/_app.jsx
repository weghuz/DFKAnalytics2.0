import "bootstrap/dist/css/bootstrap.css";
import { createContext, useState } from "react";
import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../Components/Layout";
import Context from "../Context/Context";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const [query, setQuery] = useState({query: "", wallet: "", invalidateQueries: () => { queryClient.invalidateQueries() }});
  console.log(query);
  return (
    <Layout Title={"DFKAnalytics"}>
      <QueryClientProvider client={queryClient}>
        <Context.Provider value={{ query, setQuery }}>
          <Component {...pageProps} />
        </Context.Provider>
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
