import { useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import HeroFilters from "../Components/HeroFilters";
import HeroTable from "../Components/Table/HeroTable";
import {
  ClassScore,
  GrowthScore,
  getRecessives,
  TrainStat,
} from "../Logic/HeroBase";
import { base, heroData } from "../Logic/Query";
import RequestContext from "../Context/Context";
import { Button } from "@mui/material";

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [render, setRender] = useState(false);
  const [filterVisible, setFilterVisible] = useState(true);
  const toggleFilters = () => {
    setFilterVisible((v) => !v);
  };
  useEffect(() => {
    setFilterVisible(false);
  }, []);
  const requestContext = useContext(RequestContext);
  console.log(
    `${requestContext.query.query.length > 0 ? "where:{" : ""}${
      requestContext.query.query
    }${requestContext.query.query.length > 0 ? "}" : ""}`
  );
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

  const UpdateHeroes = (newHeroes) => {
    newHeroes.forEach((h) => {
      getRecessives(h);
      ClassScore(h);
      GrowthScore(h);
      TrainStat(h);
      h.id = h.numberId;
    });
    setHeroes(newHeroes);
    console.log(newHeroes);
    setRender(true);
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
        UpdateHeroes(json.data.heroes);
      },
    }
  );
  return (
    <>
      <div>
        <div className="text-center">
          <Button variant="contained" color={filterVisible?"primary":"secondary"} onClick={toggleFilters}>
            Filters
          </Button>
        </div>
        <div>
          <HeroFilters includeSalePrice={true} onSaleDefault={true} visible={filterVisible} />
        </div>
      </div>
      <HeroTable isLoading={result.isLoading}>
        {render
          ? heroes.map((h) => {
              return h;
            })
          : []}
      </HeroTable>
    </>
  );
}
