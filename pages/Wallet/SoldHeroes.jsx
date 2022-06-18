import { Button, Grid, LinearProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useQuery } from "react-query";
import MetaMask from "../../Components/Wallet/MetaMask";
import { base, heroData } from "../../Logic/Query";
import { columnDefs } from "../../Logic/GridTableColumns";
import DFKATable from "../../Components/Table/DFKATable";
import { useRouter } from "next/router";
import useWallet from "../../Store/WalletStore";
import useWalletAuctions from "../../Store/WalletAuctions/WalletAuctionsStore";
import useWalletAuctionsPersist from "../../Store/WalletAuctions/WalletAuctionsPersistStore";
import { FixSalePrice } from "../../Logic/HeroBase";

export default function Auctions() {
  const visibilityModel = useWalletAuctionsPersist(
    (state) => state.visibilityModel
  );
  const setVisibilityModel = useWalletAuctionsPersist(
    (state) => state.setVisibilityModel
  );
  const setHeroes = useWalletAuctions((state) => state.setHeroes);
  const heroes = useWalletAuctions((state) => state.heroes);
  const query = useWalletAuctions((state) => state.query);
  const skip = useWalletAuctions((state) => state.skip);
  const setAddress = useWalletAuctions((state) => state.setAddress);
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
      let requestId = query;
      let auctionsRequest = await requestAuctions();
      if (auctionsRequest.status >= 200 && auctionsRequest.status <= 300) {
        let json = await auctionsRequest.json();
        console.log(json.data);
        let auctions = json.data.saleAuctions;
        console.log(auctions);
        let heroes = auctions.map((a) => {
          a.tokenId.purchasePrice = FixSalePrice(a.purchasePrice);
          a.tokenId.heroId = a.tokenId.id;
          a.tokenId.id = a.id;
          return a.tokenId;
        });
        setHeroes(heroes, requestId);
      }
    }
  });
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
