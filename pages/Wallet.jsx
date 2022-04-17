import { useContext, useState } from "react";
import { useQuery } from "react-query";
import HeroFilters from "../Components/HeroFilters";
import HeroTable from "../Components/Table/HeroTable";
import { ClassScore, GrowthScore, getRecessives } from "../Logic/HeroBase";
import { base, heroData } from "../Logic/Query";
import RequestContext from "../Context/Context";
import MetaMask from "../Components/Wallet/MetaMask";

export default function Wallet() {
  const [heroes, setHeroes] = useState([]);
  const [render, setRender] = useState(false);
  const requestContext = useContext(RequestContext);
  const testRequest = async () => {
    return fetch(base, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: `{heroes(first:100, where:{${requestContext.query.wallet}}, orderBy:salePrice, orderDirection:asc){${heroData}}}`,
      }),
    });
  };

  const UpdateHeroes = (newHeroes) => {
    newHeroes.forEach((h) => {
      getRecessives(h);
      ClassScore(h);
      GrowthScore(h);
      h.id = h.numberId;
    });
    setHeroes(newHeroes);
    console.log(newHeroes);
    setRender(true);
  };
  const result = useQuery(
    ["request", requestContext.query.wallet],
    testRequest,
    {
      onSuccess: async (result) => {
        let json = await result.json();
        if(json.data == null)
        {
          return;
        }
        UpdateHeroes(json.data.heroes);
      },
    }
  );
  return (
    <>
      <div className="text-center mb-3">
        <label className="font-weight-bold text-white me-2">Conntected with</label>
        <MetaMask />
      </div>
      {/* <HeroFilters /> */}
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
