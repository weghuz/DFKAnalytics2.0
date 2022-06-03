import { useContext, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import HeroFilters from "../../Components/HeroFilters";
import { base, heroData } from "../../Logic/Query";
import RequestContext from "../../Context/Context";
import MetaMask from "../../Components/Wallet/MetaMask";
import { Button, Grid, LinearProgress, Typography } from "@mui/material";
import { columnDefs } from "../../Logic/GridTableColumns";
import useWallet from "../../Store/WalletStore";
import DFKATable from "../../Components/Table/DFKATable";
import useWalletHeroes from "../../Store/WalletHeroesStore";
import { useRouter } from "next/router";

export default function Wallet() {
  const hideFilters = useWalletHeroes((state) => state.hideFilters);
  const toggleFilters = useWalletHeroes((state) => state.toggleFilters);
  const visibilityModel = useWalletHeroes((state) => state.visibilityModel);
  const setVisibilityModel = useWalletHeroes(
    (state) => state.setVisibilityModel
  );
  const heroes = useWalletHeroes((state) => state.heroes);
  const setHeroes = useWalletHeroes((state) => state.setHeroes);
  const initiateStore = useWalletHeroes((state) => state.initiateStore);
  const query = useWalletHeroes((state) => state.query);
  const skip = useWalletHeroes((state) => state.skip);
  const attempt = useWalletHeroes((state) => state.attempt);
  const first = useWalletHeroes((state) => state.first);
  const setAddress = useWalletHeroes((state) => state.setAddress);
  const address = useWallet((state) => state.address);
  const setFilter = useWalletHeroes((state) => state.setFilter);

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
        let auctionsRequest = await requestheroes();
        if (auctionsRequest.status >= 200 && auctionsRequest.status <= 300) {
          let json = await auctionsRequest.json();
          console.log(json.data);
          let heroes = json.data.heroes;
          setHeroes(heroes, false);
        }
      }
    }
  );
  useEffect(() => {
    initiateStore();
  }, []);
  useEffect(() => {
    console.log(address);
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
            onClick={toggleFilters}
          >
            Filters
          </Button>
        </Grid>
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h5">Your Heroes</Typography>
        </Grid>
      </Grid>
      <HeroFilters
        onSaleDefault={false}
        includeSalePrice={false}
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
