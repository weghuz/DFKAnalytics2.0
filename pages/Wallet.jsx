import { useContext, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import HeroFilters from "../Components/HeroFilters";
import HeroTable from "../Components/Table/HeroTable";
import { base, heroData } from "../Logic/Query";
import RequestContext from "../Context/Context";
import MetaMask from "../Components/Wallet/MetaMask";
import { Button } from "@mui/material";

export default function Wallet() {
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
  const testRequest = async () => {
    return fetch(base, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: `{heroes(first:${first}, skip:${skip}, where:{${requestContext.query.wallet},${requestContext.query.query}}, orderBy:salePrice, orderDirection:asc){${heroData}}}`,
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
        console.log(result.q, requestContext.query.query);
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
      <div className="text-center mb-3">
        <MetaMask />
        <Button
          className="mx-2"
          variant="contained"
          color={filtersHidden ? "primary" : "secondary"}
          onClick={toggleFilters}
        >
          Filters
        </Button>
      </div>

      <HeroFilters
        onSaleDefault={false}
        includeSalePrice={false}
        ref={filtersRef}
      />
      <HeroTable
        isLoading={result.isLoading}
        update={(updateFunc) => (updateHeroes.current = updateFunc)}
      />
    </>
  );
}
