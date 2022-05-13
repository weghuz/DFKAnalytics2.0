import { Button, LinearProgress } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import MetaMask from "../Components/Wallet/MetaMask";
import RequestContext from "../Context/Context";
import { base, heroData } from "../Logic/Query";
import HeroTable from "../Components/Table/HeroTable";

export default function Auctions() {
  const filtersRef = useRef(null);
  const [filtersHidden, setFiltersHidden] = useState(false);
  const [first, setFirst] = useState(100);
  const [skip, setSkip] = useState(0);
  const updateHeroes = useRef();
  const lastRequest = useRef();
  const toggleFilters = (e) => {
    if (typeof window) {
      filtersRef.current.classList.toggle("collapse");
      setFiltersHidden((hidden) => !hidden);
    }
  };
  const requestContext = useContext(RequestContext);
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

        if (result.q != requestContext.query.query + requestContext.query.wallet) {
          return;
        }
        if (first == data.saleAuctions.length) {
          setSkip((s) => s + first);
          setFirst((f) => 1000);
        }
        updateHeroes.current(
          data.saleAuctions.map((a) => {
            a.tokenId.purchasePrice = a.purchasePrice;
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
    updateHeroes.current([], true);
    setSkip((s) => 0);
    setFirst((f) => 100);
  });
  return (
    <>
      <div>
        <div className="text-center mb-3">
          <MetaMask />
          <Button
            variant="contained"
            color={filtersHidden ? "primary" : "secondary"}
            onClick={toggleFilters}
          >
            Filters
          </Button>
        </div>
        <div>
          {/* <HeroFilters
            includeSalePrice={true}
            onSaleDefault={true}
            ref={filtersRef}
          /> */}
          <h3 className="text-center text-white">{requestContext.query.wallet} Sold Heroes</h3>
        </div>
      </div>
      {result.isLoading && (
        <LinearProgress style={{ height: 10, margin: "5px 50px" }} />
      )}
      <HeroTable
        specialColumns={[
          {
            headerName: "Auction ID",
            field: "Auction ID",
            hide: false,
            type: "number",
            valueGetter: ({ row }) => {
              return row.saleAuction.id;
            },
          },
          {
            headerName: "Sold Price",
            field: "Sold Price",
            hide: false,
            type: "number",
            valueGetter: ({ row }) => {
              return row.saleAuction.purchasePrice;
            },
          },
        ]}
        update={(updateFunc) => (updateHeroes.current = updateFunc)}
      />
    </>
  );
}
