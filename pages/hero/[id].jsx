import { useState } from "react";
import { useQuery } from "react-query";
import { base, heroData } from "../../Logic/Query";
import HeroDetails from "../../Components/Hero/HeroDetails";
import { useRouter } from "next/router";
import {
  ClassScore,
  getRecessives,
  GrowthScore,
  TrainStat,
} from "../../Logic/HeroBase";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function HeroId() {
  const [heroDetails, setHeroDetails] = useState(null);
  const [failed, setFailed] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const testRequest = async () => {
    return fetch(base, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: `{hero(id:"${id}"){${heroData}}}`,
      }),
    });
  };

  const result = useQuery(
    ["request", id],
    async () => {
      console.log(id);
      return await (await testRequest()).json();
    },
    {
      onSuccess: (data) => {
        let hero = data.data.hero;
        console.log(hero);
        if (hero == null) {
          setFailed(true);
          return;
        }
        getRecessives(hero);
        ClassScore(hero);
        GrowthScore(hero);
        TrainStat(hero);
        hero.stats = { hp: hero.hp };
        console.log(hero);
        setHeroDetails(hero);
      },
    }
  );
  return (
    <>
      {failed && (
        <Box textAlign={"center"} color={"error.main"}>
          <Typography variant="h2">Failed to load Hero {id}</Typography>
        </Box>
      )}
      {heroDetails !== null && <HeroDetails hero={heroDetails} />}
    </>
  );
}
