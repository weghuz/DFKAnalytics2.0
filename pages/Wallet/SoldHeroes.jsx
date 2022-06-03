import { Button, Grid, LinearProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useQuery } from "react-query";
import MetaMask from "../../Components/Wallet/MetaMask";
import { base, heroData } from "../../Logic/Query";
import { columnDefs } from "../../Logic/GridTableColumns";
import useAuctions from "../../Store/AuctionsStore";
import DFKATable from "../../Components/Table/DFKATable";
import { useRouter } from "next/router";
import useWallet from "../../Store/WalletStore";

export default function Auctions() {
  const visibilityModel = useAuctions((state) => state.visibilityModel);
  const setVisibilityModel = useAuctions((state) => state.setVisibilityModel);
  const initiateStore = useAuctions((state) => state.initiateStore);
  const setHeroes = useAuctions((state) => state.setHeroes);
  const heroes = useAuctions((state) => state.heroes);
  const query = useAuctions((state) => state.query);
  const skip = useAuctions((state) => state.skip);
  const setAddress = useAuctions((state) => state.setAddress);
  const address = useWallet((state) => state.address);
  const router = useRouter();

  const clickedHero = (hero) => {
    router.push(`/hero/[id]`, `/hero/${hero.heroId}`);
  };

  const requestAuctions = async () => {
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
  useEffect(() => {
    setAddress(address);
  }, [address]);
  const result = useQuery(["request", query + address + skip], async () => {
    if (query.length > 0 && address.length > 0) {
      let auctionsRequest = await requestAuctions();
      if (auctionsRequest.status >= 200 && auctionsRequest.status <= 300) {
        let json = await auctionsRequest.json();
        console.log(json.data);
        let auctions = json.data.saleAuctions;
        console.log(auctions);
        let heroes = auctions.map((a) => {
          a.tokenId.purchasePrice = a.purchasePrice;
          a.tokenId.heroId = a.tokenId.id;
          a.tokenId.id = a.id;
          return a.tokenId;
        });
        setHeroes(heroes, false);
      }
    }
  });
  useEffect(() => {
    initiateStore();
  }, []);
  return (
    <>
      <Grid container marginBottom={1} spacing={1}>
        <Grid item container xs={12} justifyContent={"center"}>
          <Grid item>
            <MetaMask />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" textAlign={"center"}>
            Sold Heroes
          </Typography>
        </Grid>
      </Grid>
      {result.isLoading && (
        <LinearProgress style={{ height: 10, margin: "5px 50px" }} />
      )}
      <DFKATable
        onRowClick={clickedHero}
        rows={heroes}
        columns={columnDefs}
        columnVisibilityModel={visibilityModel}
        visibilityChanged={setVisibilityModel}
      />
    </>
  );
}
