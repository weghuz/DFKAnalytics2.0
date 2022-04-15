import request, { gql } from "graphql-request";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import HeroFilters from "../Components/HeroFilters";
import Layout from "../Components/Layout";
import HeroTable from "../Components/Table/HeroTable";
import { ClassScore, GrowthScore, getRecessives } from "../Logic/HeroBase";
import { base, heroData } from "../Logic/Query";

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [render, setRender] = useState(false);
  const testRequest = async () => {
    return request(
      base,
      gql`
          {
            heroes(first:100, where:{salePrice_not:null}, orderBy:salePrice, orderDirection:asc)
            {
              ${heroData}
            }
          }
          `
    );
  };
  const UpdateHeroes = (newHeroes) => {
    
    newHeroes.forEach((h) => {
      getRecessives(h);
      ClassScore(h);
      GrowthScore(h);
      h.id = h.numberId;
    });
    setHeroes(newHeroes);
    setRender(true);
  }
  const result = useQuery("request", testRequest, {
    onSuccess:(result) => UpdateHeroes(result.heroes)
  });
  return (
    <>
        <HeroFilters />
        <HeroTable isLoading={result.isLoading}>
          {render ? heroes.map((h) => {
                return h;
              }) : []}
        </HeroTable>
    </>
  );
}
