import { useContext, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import HeroFilters from "../Components/HeroFilters";
import HeroTable from "../Components/Table/HeroTable";
import { base, heroData } from "../Logic/Query";
import RequestContext from "../Context/Context";
import MetaMask from "../Components/Wallet/MetaMask";
import { Button, Grid, LinearProgress } from "@mui/material";
import useFilterState from "../Store/Store";

export default function Wallet() {
  const hideFilters = useFilterState(state => state.hideFilters)
  const toggleFilters = useFilterState(state => state.toggleFilters)
  const [first, setFirst] = useState(100);
  const [skip, setSkip] = useState(0);
  const updateHeroes = useRef();
  const lastRequest = useRef();
  const requestContext = useContext(RequestContext);
  console.log(
    `{heroes(first:${first},skip:${skip},${
      requestContext.query.query.length > 0
        ? `where: {owner: "${requestContext.query.wallet}", ${requestContext.query.query}`
        : `where: {owner: "${requestContext.query.wallet}"}`
    }){${heroData}}}`
  );
  const testRequest = async () => {
    return fetch(base, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: `{heroes(first:${first},skip:${skip},${
          requestContext.query.query.length > 0
            ? `where: {owner: "${requestContext.query.wallet}", ${requestContext.query.query}`
            : `where: {owner: "${requestContext.query.wallet}"}`
        }){${heroData}}}`,
      }),
    });
  };
  const result = useQuery(
    [
      "request",
      requestContext.query.query + requestContext.query.wallet + first + skip,
    ],
    async () => {
      return {
        q: requestContext.query.query + requestContext.query.wallet,
        res: await (await testRequest()).json(),
      };
    },
    {
      onSuccess: async (result) => {
        console.log(result);
        let data = result.res.data;
        if (data == null) {
          return;
        }
        console.log(
          result.q,
          "\n",
          requestContext.query.query + requestContext.query.wallet
        );
        if (
          result.q !=
          requestContext.query.query + requestContext.query.wallet
        ) {
          return;
        }
        if (first == data.heroes.length) {
          setSkip((s) => s + first);
          setFirst((f) => 1000);
        }
        updateHeroes.current(data.heroes, false);
      },
    }
  );

  useEffect(() => {
    if (
      lastRequest.current ==
      requestContext.query.query + requestContext.query.wallet
    ) {
      console.log("Didn't clear search");
      return;
    }
    console.log("Clear Search");
    lastRequest.current =
      requestContext.query.query + requestContext.query.wallet;
    updateHeroes.current([], true);
    setSkip((s) => 0);
    setFirst((f) => 100);
  });
  return (
    <>
      <Grid container columnSpacing={2} marginBottom={1} justifyContent="center">
        <Grid item>
          <MetaMask />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color={hideFilters ? "primary" : "secondary"}
            onClick={toggleFilters}
          >
            Filters
          </Button>
        </Grid>
      </Grid>
      <HeroFilters
        onSaleDefault={false}
        includeSalePrice={false}
        visible={hideFilters}
      />
      {result.isLoading && (
        <LinearProgress style={{ height: 10, margin: "5px 50px" }} />
      )}
      <HeroTable update={(updateFunc) => (updateHeroes.current = updateFunc)} />
    </>
  );
}
