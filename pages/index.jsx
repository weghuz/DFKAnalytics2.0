import { useContext, useRef, useState } from "react";
import { useQuery } from "react-query";
import HeroFilters from "../Components/HeroFilters";
import HeroTable from "../Components/Table/HeroTable";
import { base, heroData } from "../Logic/Query";
import RequestContext from "../Context/Context";
import { Button, Dialog } from "@mui/material";
export default function Home() {
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
        query: `{heroes(first:100, ${
          requestContext.query.query.length > 0 ? "where:{" : ""
        }${requestContext.query.query}${
          requestContext.query.query.length > 0 ? "}" : ""
        }, orderBy:salePrice, orderDirection:asc){${heroData}}}`,
      }),
    });
  };

  const result = useQuery(
    ["request", requestContext.query.query],
    testRequest,
    {
      onSuccess: async (result) => {
        let json = await result.json();
        if (json.data == null) {
          return;
        }
        console.log("rerender");
        updateHeroes.current(json.data.heroes);
      },
    }
  );
  return (
    <>
      <div>
        <div className="text-center mb-3">
          <Button
            variant="contained"
            color={filtersHidden ? "primary" : "secondary"}
            onClick={toggleFilters}
          >
            Filters
          </Button>
        </div>
        <div>
          <HeroFilters
            includeSalePrice={true}
            onSaleDefault={true}
            ref={filtersRef}
          />
        </div>
      </div>
      <HeroTable
        isLoading={result.isLoading}
        update={(updateFunc) => (updateHeroes.current = updateFunc)}
      />
    </>
  );
}
