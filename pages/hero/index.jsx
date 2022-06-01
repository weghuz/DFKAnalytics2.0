import { useContext, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import HeroFilters from "../../Components/HeroFilters";
import { base, heroData } from "../../Logic/Query";
import RequestContext from "../../Context/Context";
import { Button, LinearProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { columnDefs } from "../../Logic/GridTableColumns";
import useIndex from "../../Store/HeroesStore";
import DFKATable from "../../Components/Table/DFKATable";
import { useRouter } from "next/router";

export default function Home({ id }) {
  const hideFilters = useIndex((state) => state.hideFilters);
  const toggleFilters = useIndex((state) => state.toggleFilters);
  const visibilityModel = useIndex((state) => state.visibilityModel);
  const setVisibilityModel = useIndex((state) => state.setVisibilityModel);
  const heroes = useIndex((state) => state.heroes);
  const setHeroes = useIndex((state) => state.setHeroes);
  const [first, setFirst] = useState(100);
  const [skip, setSkip] = useState(0);
  const router = useRouter();
  const clickedHero = (hero) => {
    router.push(`/hero/[id]`, `/hero/${hero.id}`);
  };
  const lastRequest = useRef();
  const requestContext = useContext(RequestContext);
  // console.log(
  //   `{heroes(first:${first},skip:${skip},${
  //     requestContext.query.query.length > 0
  //       ? `where: {${requestContext.query.query}`
  //       : ``
  //   }){${heroData}}}`
  // );
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
        setHeroes(data.heroes, false);
      },
    }
  );
  useEffect(() => {
    if (lastRequest.current == requestContext.query.query) {
      return;
    }
    // console.log("Clear Search");
    lastRequest.current = requestContext.query.query;
    setHeroes([], true);
    setSkip((s) => 0);
    setFirst((f) => 100);
  });
  useEffect(() => {
    let columnsVisibilityModel = JSON.parse(
      localStorage.getItem("IndexColumnVisiblityModel")
    );
    console.log(columnsVisibilityModel);
    if (columnsVisibilityModel !== null) {
      setVisibilityModel(columnsVisibilityModel);
    }
    console.log(visibilityModel);
    let filterVisible = JSON.parse(
      localStorage.getItem("IndexHeroFilterVisible")
    );
    if (hideFilters != filterVisible && filterVisible !== null) {
      console.log(hideFilters, filterVisible);
      toggleFilters();
    }
  }, []);
  return (
    <>
      <Grid container justifyContent="center" marginBottom={1}>
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h5">Heroes Tavern</Typography>
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
        includeSalePrice={true}
        onSaleDefault={true}
        visible={hideFilters}
      />
      {result.isLoading && (
        <LinearProgress style={{ height: 10, margin: "5px 50px" }} />
      )}
      <DFKATable
        rows={heroes}
        columns={columnDefs}
        visibilityChanged={setVisibilityModel}
        columnVisibilityModel={visibilityModel}
        onRowClick={clickedHero}
      />
    </>
  );
}
