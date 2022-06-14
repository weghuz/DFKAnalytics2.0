import { useEffect } from "react";
import { useQuery } from "react-query";
import HeroFilters from "../../Components/HeroFilters";
import { base } from "../../Logic/Query";
import MetaMask from "../../Components/Wallet/MetaMask";
import { Button, Grid, LinearProgress, Typography } from "@mui/material";
import { columnDefs } from "../../Logic/GridTableColumns";
import useWallet from "../../Store/WalletStore";
import DFKATable from "../../Components/Table/DFKATable";
import { useRouter } from "next/router";
import useWalletHeroes from "../../Store/WalletHeroes/WalletHeroesStore";
import useWalletHeroesPersist from "../../Store/WalletHeroes/WalletHeroesPersistStore";
import HeroColumnSetups from "../../Components/HeroColumnSetups";
export default function Wallet() {
  const hideFilters = useWalletHeroesPersist((state) => state.hideFilters);
  const toggleHideFilters = useWalletHeroesPersist(
    (state) => state.toggleHideFilters
  );
  const hideColumns = useWalletHeroesPersist((state) => state.hideColumns);
  const toggleHideColumns = useWalletHeroesPersist(
    (state) => state.toggleHideColumns
  );
  const visibilityModel = useWalletHeroesPersist(
    (state) => state.visibilityModel
  );
  const setVisibilityModel = useWalletHeroesPersist(
    (state) => state.setVisibilityModel
  );
  const heroSetup = useWalletHeroesPersist((state) => state.heroSetup);
  const setHeroSetup = useWalletHeroesPersist((state) => state.setHeroSetup);
  const heroes = useWalletHeroes((state) => state.heroes);
  const setHeroes = useWalletHeroes((state) => state.setHeroes);
  const query = useWalletHeroes((state) => state.query);
  const skip = useWalletHeroes((state) => state.skip);
  const attempt = useWalletHeroes((state) => state.attempt);
  const first = useWalletHeroes((state) => state.first);
  const setAddress = useWalletHeroes((state) => state.setAddress);
  const address = useWallet((state) => state.address);

  const router = useRouter();
  const clickedHero = (hero) => {
    router.push(`/hero/[id]`, `/hero/${hero.id}`);
  };

  const requestheroes = async () => {
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
    ["request", address + first + skip + attempt + query],
    async () => {
      if (query.length > 0 && address.length > 0) {
        let requestId = query;
        let auctionsRequest = await requestheroes();
        if (auctionsRequest.status >= 200 && auctionsRequest.status <= 300) {
          let json = await auctionsRequest.json();
          console.log(json.data);
          let heroes = json.data.heroes;
          setHeroes(heroes, requestId);
        }
      }
    }
  );
  useEffect(() => {
    setAddress(address);
  }, [address]);
  return (
    <>
      <Grid
        container
        columnSpacing={2}
        marginBottom={1}
        justifyContent="center"
      >
        <Grid item>
          <MetaMask />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color={hideFilters ? "primary" : "secondary"}
            onClick={toggleHideFilters}
          >
            Filters
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color={hideColumns ? "primary" : "secondary"}
            onClick={toggleHideColumns}
          >
            Columns
          </Button>
        </Grid>
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h5">Your Heroes</Typography>
        </Grid>
      </Grid>
      <HeroColumnSetups
        visible={hideColumns}
        visibilityModel={visibilityModel}
        setVisibilityModel={setVisibilityModel}
        currentColumnSetup={heroSetup}
        setCurrentColumnSetup={setHeroSetup}
      />
      <HeroFilters
        includeSalePrice={false}
        visible={hideFilters}
        useStore={useWalletHeroes}
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
