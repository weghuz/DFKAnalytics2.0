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
        query: `{hero(id:"${id}")${heroData}}`,
      }),
    });
  };

  const result = useQuery(
    ["request", id],
    async () => {
      if (id) {
        let request = await testRequest();
        if (request.status >= 200 || request.status <= 300) {
          return await request.json();
        } else {
          console.log("Error: ", request);
        }
      } else {
        console.log("Invalid ID", id);
      }
    },
    {
      onSuccess: (data) => {
        if (!data) {
          return;
        }
        if (typeof data.errors !== "undefined") {
          console.log(data.errors[0].message);
        }
        let hero = data.data.hero;
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
