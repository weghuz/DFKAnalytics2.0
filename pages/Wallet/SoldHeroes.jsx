import { Button, Grid, LinearProgress, Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import MetaMask from "../../Components/Wallet/MetaMask";
import RequestContext from "../../Context/Context";
import { base, heroData } from "../../Logic/Query";
import { columnDefs } from "../../Logic/GridTableColumns";
import useAuctions from "../../Store/AuctionsStore";
import DFKATable from "../../Components/Table/DFKATable";
import { useRouter } from "next/router";

export default function Auctions() {
  const visibilityModel = useAuctions((state) => state.visibilityModel);
  const setVisibilityModel = useAuctions((state) => state.setVisibilityModel);
  const heroes = useAuctions((state) => state.heroes);
  const setHeroes = useAuctions((state) => state.setHeroes);
  const [first, setFirst] = useState(100);
  const [skip, setSkip] = useState(0);
  const lastRequest = useRef();
  const requestContext = useContext(RequestContext);
  const router = useRouter();
  const clickedHero = (hero) => {
    router.push(`/hero/${hero.id}`);
  };
  console.log(
    `{saleAuctions(first:${first},skip:${skip},where: {seller: "${requestContext.query.wallet}", purchasePrice_gt:"1"}, orderBy:startedAt, orderDirection:desc){id purchasePrice startedAt tokenId {${heroData}}}}`
  );
  const testRequest = async () => {
    return fetch(base, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: `{saleAuctions(first:${first},skip:${skip},where: {seller: "${requestContext.query.wallet}", purchasePrice_gt:"1"}, orderBy:startedAt, orderDirection:desc){id purchasePrice startedAt tokenId {${heroData}}}}`,
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

        if (
          result.q !=
          requestContext.query.query + requestContext.query.wallet
        ) {
          return;
        }
        if (first == data.saleAuctions.length) {
          setSkip((s) => s + first);
          setFirst((f) => 1000);
        }
        setHeroes(
          data.saleAuctions.map((a) => {
            a.tokenId.purchasePrice = a.purchasePrice;
            a.tokenId.heroId = a.tokenId.id;
            a.tokenId.id = a.id;
            return a.tokenId;
          }),
          false
        );
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
    setHeroes([], true);
    setSkip((s) => 0);
    setFirst((f) => 100);
  });
  useEffect(() => {
    let columnsVisibilityModel = JSON.parse(
      localStorage.getItem("AuctionsColumnVisiblityModel")
    );
    console.log(columnsVisibilityModel);
    if (columnsVisibilityModel !== null) {
      setVisibilityModel(columnsVisibilityModel);
    }
    console.log(visibilityModel);
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
