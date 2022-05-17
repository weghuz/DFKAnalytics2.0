import { useContext, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import HeroFilters from "../Components/HeroFilters";
import HeroTable from "../Components/Table/HeroTable";
import { base, heroData } from "../Logic/Query";
import RequestContext from "../Context/Context";
import { Button, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import useFilterState from "../Store/Store";

export default function Home() {
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
        ? `where: {${requestContext.query.query}`
        : ``
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
            ? `where: {${requestContext.query.query}`
            : ``
        }){${heroData}}}`,
      }),
    });
  };
  const result = useQuery(
    ["request", requestContext.query.query + first + skip],
    async () => {
      return {
        q: requestContext.query.query,
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

        if (result.q != requestContext.query.query) {
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
    if (lastRequest.current == requestContext.query.query) {
      console.log("Didn't clear search");
      return;
    }
    console.log("Clear Search");
    lastRequest.current = requestContext.query.query;
    updateHeroes.current([], true);
    setSkip((s) => 0);
    setFirst((f) => 100);
  });
  return (
    <>
      <Grid container justifyContent="center" marginBottom={1}>
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
        includeSalePrice={true}
        onSaleDefault={true}
        visible={hideFilters}
      />
      {result.isLoading && (
        <LinearProgress style={{ height: 10, margin: "5px 50px" }} />
      )}
      <HeroTable update={(updateFunc) => (updateHeroes.current = updateFunc)} />
    </>
  );
}
