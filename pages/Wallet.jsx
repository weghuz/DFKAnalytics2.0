import { useContext, useRef, useState } from "react";
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
  const updateHeroes = useRef();
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
        query: `{heroes(first:500, where:{${requestContext.query.wallet},${requestContext.query.query}}, orderBy:salePrice, orderDirection:asc){${heroData}}}`,
      }),
    });
  };
  const result = useQuery(
    ["request", requestContext.query.query + requestContext.query.wallet],
    testRequest,
    {
      onSuccess: async (result) => {
        let json = await result.json();
        if (json.data == null) {
          return;
        }
        updateHeroes.current(json.data.heroes);
      },
    }
  );
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
