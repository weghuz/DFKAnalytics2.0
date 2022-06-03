import { useEffect } from "react";
import { useQuery } from "react-query";
import HeroFilters from "../../Components/HeroFilters";
import { base } from "../../Logic/Query";
import { Button, LinearProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { columnDefs } from "../../Logic/GridTableColumns";
import useIndex from "../../Store/HeroesStore";
import DFKATable from "../../Components/Table/DFKATable";
import { useRouter } from "next/router";

export default function Home() {
  const hideFilters = useIndex((state) => state.hideFilters);
  const toggleFilters = useIndex((state) => state.toggleFilters);
  const visibilityModel = useIndex((state) => state.visibilityModel);
  const setVisibilityModel = useIndex((state) => state.setVisibilityModel);
  const heroes = useIndex((state) => state.heroes);
  const setHeroes = useIndex((state) => state.setHeroes);
  const initiateStore = useIndex((state) => state.initiateStore);
  const query = useIndex((state) => state.query);
  const setFilter = useIndex((state) => state.setFilter);
  const attempt = useIndex((state) => state.attempt);
  const skip = useIndex((state) => state.skip);
  const first = useIndex((state) => state.first);
  const router = useRouter();
  const clickedHero = (hero) => {
    router.push(`/hero/[id]`, `/hero/${hero.id}`);
  };

  const testRequest = async () => {
    return fetch(base, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: query,
      }),
    });
  };

  const result = useQuery(
    ["request", query + attempt + skip + first],
    async () => {
      if (query.length > 0) {
        let request = await testRequest();
        if (request.status >= 200 && request.status <= 300) {
          let json = await request.json();
          let data = json.data;
          console.log(data.heroes);

          setHeroes(data.heroes);
        } else {
          console.log("error: ", request);
        }
      }
    }
  );

  useEffect(() => {
    initiateStore();
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
        setFilter={setFilter}
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
