import {
  Box,
  Container,
  Dialog,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { classVars, FullName } from "../../Logic/HeroBase";
import DFKATable from "../Table/DFKATable";
import ClassScoreCell from "./ClassScoreCell";
import ElementCell from "./ElementCell";
import GrowthScoreCell from "./GrowthScoreCell";
import HeroId from "./HeroId";
import PJBadge from "./PJBadge";
import PriceCell from "./PriceCell";
import RarityCell from "./RarityCell";

export default function HeroDetails({ hero }) {
  const theme = useTheme();
  const getStatColor = (stat) => {
    if (stat == hero.statBoost1 && stat == hero.statBoost2) {
      return theme.palette.info.main;
    } else if (stat == hero.statBoost1) {
      return theme.palette.success.main;
    } else if (stat == hero.statBoost2) {
      return theme.palette.primary.main;
    } else {
      return "";
    }
  };
  const getProfessionColor = (profession) => {
    if (profession == hero.profession) {
      return theme.palette.success.main;
    } else {
      return "";
    }
  };
  const getGrowthColumns = () => {
    return [
      { headerName: "Class", field: "class", width: 100 },
      { headerName: "STR", field: "strengthGrowth", width: 60 },
      { headerName: "DEX", field: "dexterityGrowth", width: 60 },
      { headerName: "AGI", field: "agilityGrowth", width: 60 },
      { headerName: "VIT", field: "vitalityGrowth", width: 60 },
      { headerName: "END", field: "enduranceGrowth", width: 60 },
      { headerName: "INT", field: "intelligenceGrowth", width: 60 },
      { headerName: "WIS", field: "wisdomGrowth", width: 60 },
      { headerName: "LCK", field: "luckGrowth", width: 60 },
    ];
  };
  const getGrowthRows = () => {
    let rows = [
      {
        id: "class",
        class: `main:${hero.mainClass}`,
        strengthGrowth: parseFloat(hero.strengthGrowthP.toFixed(2)),
        dexterityGrowth: parseFloat(hero.dexterityGrowthP.toFixed(2)),
        agilityGrowth: parseFloat(hero.agilityGrowthP.toFixed(2)),
        vitalityGrowth: parseFloat(hero.vitalityGrowthP.toFixed(2)),
        enduranceGrowth: parseFloat(hero.enduranceGrowthP.toFixed(2)),
        intelligenceGrowth: parseFloat(hero.intelligenceGrowthP.toFixed(2)),
        wisdomGrowth: parseFloat(hero.wisdomGrowthP.toFixed(2)),
        luckGrowth: parseFloat(hero.luckGrowthP.toFixed(2)),
      },
      {
        id: "subclass",
        class: `sub:${hero.subClass}`,
        strengthGrowth: parseFloat(hero.strengthGrowthS.toFixed(2)),
        dexterityGrowth: parseFloat(hero.dexterityGrowthS.toFixed(2)),
        agilityGrowth: parseFloat(hero.agilityGrowthS.toFixed(2)),
        vitalityGrowth: parseFloat(hero.vitalityGrowthS.toFixed(2)),
        enduranceGrowth: parseFloat(hero.enduranceGrowthS.toFixed(2)),
        intelligenceGrowth: parseFloat(hero.intelligenceGrowthS.toFixed(2)),
        wisdomGrowth: parseFloat(hero.wisdomGrowthS.toFixed(2)),
        luckGrowth: parseFloat(hero.luckGrowthS.toFixed(2)),
      },
      {
        id: "total",
        class: "Total",
        strengthGrowth: parseFloat(
          (hero.strengthGrowthS + hero.strengthGrowthP).toFixed(2)
        ),
        dexterityGrowth: parseFloat(
          (hero.dexterityGrowthP + hero.dexterityGrowthS).toFixed(2)
        ),
        agilityGrowth: parseFloat(
          (hero.agilityGrowthP + hero.agilityGrowthS).toFixed(2)
        ),
        vitalityGrowth: parseFloat(
          (hero.vitalityGrowthP + hero.vitalityGrowthS).toFixed(2)
        ),
        enduranceGrowth: parseFloat(
          (hero.enduranceGrowthP + hero.enduranceGrowthS).toFixed(2)
        ),
        intelligenceGrowth: parseFloat(
          (hero.intelligenceGrowthP + hero.intelligenceGrowthS).toFixed(2)
        ),
        wisdomGrowth: parseFloat(
          (hero.wisdomGrowthP + hero.wisdomGrowthS).toFixed(2)
        ),
        luckGrowth: parseFloat(
          (hero.luckGrowthP + hero.luckGrowthS).toFixed(2)
        ),
      },
    ];
    return rows;
  };
  const getRecessiveColumns = () => {
    return [
      { headerName: "Stat", field: "Stat" },
      { headername: "D", field: "D" },
      { headername: "R1", field: "R1" },
      { headername: "R2", field: "R2" },
      { headername: "R3", field: "R3" },
    ];
  };
  const getRecessiveRows = () => {
    return [
      {
        id: "mainClass",
        Stat: "mainClass",
        D: hero.mainClass,
        R1: hero.R1.mainClass,
        R2: hero.R2.mainClass,
        R3: hero.R3.mainClass,
      },
      {
        id: "subClass",
        Stat: "subClass",
        D: hero.subClass,
        R1: hero.R1.subClass,
        R2: hero.R2.subClass,
        R3: hero.R3.subClass,
      },
      {
        id: "profession",
        Stat: "profession",
        D: hero.profession,
        R1: hero.R1.profession,
        R2: hero.R2.profession,
        R3: hero.R3.profession,
      },
      {
        id: "statBoost1",
        Stat: "SB1",
        D: hero.statBoost1,
        R1: hero.R1.statBoost1,
        R2: hero.R2.statBoost1,
        R3: hero.R3.statBoost1,
      },
      {
        id: "statBoost2",
        Stat: "SB2",
        D: hero.statBoost2,
        R1: hero.R1.statBoost2,
        R2: hero.R2.statBoost2,
        R3: hero.R3.statBoost2,
      },
      {
        id: "active1",
        Stat: "active1",
        D: hero.active1,
        R1: hero.R1.active1,
        R2: hero.R2.active1,
        R3: hero.R3.active1,
      },
      {
        id: "active2",
        Stat: "active2",
        D: hero.active2,
        R1: hero.R1.active2,
        R2: hero.R2.active2,
        R3: hero.R3.active2,
      },
      {
        id: "passive1",
        Stat: "passive1",
        D: hero.passive1,
        R1: hero.R1.passive1,
        R2: hero.R2.passive1,
        R3: hero.R3.passive1,
      },
      {
        id: "passive2",
        Stat: "passive2",
        D: hero.passive2,
        R1: hero.R1.passive2,
        R2: hero.R2.passive2,
        R3: hero.R3.passive2,
      },
      {
        id: "element",
        Stat: "element",
        D: hero.element,
        R1: hero.R1.element,
        R2: hero.R2.element,
        R3: hero.R3.element,
      },
      {
        id: "Status Unknown 2",
        Stat: "SU2",
        D: hero.statsUnknown2,
        R1: hero.R1.statsUnknown2,
        R2: hero.R2.statsUnknown2,
        R3: hero.R3.statsUnknown2,
      },
      {
        id: "Status Unknown 1",
        Stat: "SU1",
        D: hero.statsUnknown1,
        R1: hero.R1.statsUnknown1,
        R2: hero.R2.statsUnknown1,
        R3: hero.R3.statsUnknown1,
      },
    ];
  };
  return (
    <Grid container justifyContent={"center"}>
      <Grid
        container
        justifyContent={"center"}
        alignSelf={"center"}
        spacing={2}
        bgcolor={"background.default"}
      >
        <Grid
          container
          item
          textAlign={"center"}
          xs={12}
          lg={8}
          justifyContent={"center"}
        >
          <Grid item xs={12}>
            <Typography variant={"h5"} marginY={1}>
              <HeroId>{hero.heroId ? hero.heroId : hero.id}</HeroId> -{" "}
              {FullName(hero)}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            {hero.mainClass}
          </Grid>
          <Grid item xs={6} sm={4}>
            {hero.subClass}
          </Grid>
          <Grid item xs={6} sm={4}>
            Level {hero.level}
          </Grid>
          <Grid item container xs={6} sm={4} justifyContent={"center"}>
            <Grid item sx={{ maxWidth: "20px" }}>
              <ElementCell>{hero.element}</ElementCell>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4}>
            {hero.gender == "male" ? "♂️" : "♀️"}
          </Grid>
          <Grid item xs={6} sm={4}>
            {hero.shiny ? "Shiny" : "Ordinary"}
          </Grid>
          <Grid item xs={6} sm={4}>
            Generation: {hero.generation}
          </Grid>
          <Grid item container justifyContent={"center"} xs={6} sm={4}>
            Price:{" "}
            <Grid item style={{ marginLeft: "10px", minWidth: "60px" }}>
              <PriceCell>{hero}</PriceCell>
            </Grid>
          </Grid>
          <Grid item container justifyContent={"center"} xs={6} sm={4}>
            <Grid item style={{ maxWidth: "35px" }}>
              <RarityCell rarity={hero.rarity} />
            </Grid>
          </Grid>
          <Grid item container justifyContent={"center"} xs={12}>
            <Grid item style={{ marginLeft: "10px", maxWidth: "60px" }}>
              {hero.pjStatus == "SURVIVED" && <PJBadge></PJBadge>}
              {hero.pjStatus == "DIED" &&
                `${FullName(
                  hero
                )} died a glorious death at sea looking to discover the promised land of Crystalvale.`}
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} justifyContent={"center"}>
          <Grid container item maxWidth={900}>
            <Grid container item sm={6} xs={12} columnSpacing={2}>
              <Grid item xs={12} textAlign={"center"}>
                <Typography variant="h5">Stats</Typography>
              </Grid>
              <Grid item xs={6} textAlign={"end"}>
                <div>
                  <span style={{ color: getStatColor("STR") }}>STR</span>:{" "}
                  {hero.strength} (+
                  {hero.strength - classVars[hero.mainClass].base.str})
                </div>
                <div>
                  <span style={{ color: getStatColor("AGI") }}>AGI</span>:{" "}
                  {hero.agility} (+
                  {hero.agility - classVars[hero.mainClass].base.agi})
                </div>
                <div>
                  <span style={{ color: getStatColor("END") }}>END</span>:{" "}
                  {hero.endurance} (+
                  {hero.endurance - classVars[hero.mainClass].base.end})
                </div>
                <div>
                  <span style={{ color: getStatColor("WIS") }}>WIS</span>:{" "}
                  {hero.wisdom} (+
                  {hero.wisdom - classVars[hero.mainClass].base.wis})
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <span style={{ color: getStatColor("DEX") }}>DEX</span>:{" "}
                  {hero.dexterity} (+
                  {hero.dexterity - classVars[hero.mainClass].base.dex})
                </div>
                <div>
                  <span style={{ color: getStatColor("VIT") }}>VIT</span>:{" "}
                  {hero.vitality} (+
                  {hero.vitality - classVars[hero.mainClass].base.vit})
                </div>
                <div>
                  <span style={{ color: getStatColor("INT") }}>INT</span>:{" "}
                  {hero.intelligence} (+
                  {hero.intelligence - classVars[hero.mainClass].base.int})
                </div>
                <div>
                  <span style={{ color: getStatColor("LCK") }}>LCK</span>:{" "}
                  {hero.luck} (+
                  {hero.luck - classVars[hero.mainClass].base.lck})
                </div>
              </Grid>
            </Grid>
            <Grid container item sm={6} xs={12} columnSpacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" textAlign={"center"}>
                  Professions
                </Typography>
              </Grid>
              <Grid item xs={6} textAlign={"end"}>
                <div>
                  <span style={{ color: getProfessionColor("mining") }}>
                    Mining
                  </span>
                  : {hero.mining / 10}
                </div>
                <div>
                  <span style={{ color: getProfessionColor("foraging") }}>
                    Foraging
                  </span>
                  : {hero.foraging / 10}
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <span style={{ color: getProfessionColor("gardening") }}>
                    Gardening
                  </span>
                  : {hero.gardening / 10}
                </div>
                <div>
                  <span style={{ color: getProfessionColor("fishing") }}>
                    Fishing
                  </span>
                  : {hero.fishing / 10}
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item columnSpacing={2}>
            <Grid container item xs={6} justifyContent={"end"}>
              <Grid item xs={12} textAlign={"end"}>
                Class Score:
              </Grid>
              <Grid item maxWidth={50}>
                <ClassScoreCell>{hero}</ClassScoreCell>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              Growth Score:
              <Box maxWidth={50}>
                <GrowthScoreCell>{hero}</GrowthScoreCell>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item sm={12} xl={6}>
          <Grid item xs={12}>
            <Typography variant={"h5"} textAlign={"center"}>
              Growth
            </Typography>
            <DFKATable
              columns={getGrowthColumns()}
              rows={getGrowthRows()}
            ></DFKATable>
          </Grid>
        </Grid>
        <Grid item xs={12} xl={6}>
          <Typography variant={"h5"} textAlign={"center"}>
            Recessives
          </Typography>
          <DFKATable
            columns={getRecessiveColumns()}
            rows={getRecessiveRows()}
          ></DFKATable>
        </Grid>
      </Grid>
    </Grid>
  );
}
