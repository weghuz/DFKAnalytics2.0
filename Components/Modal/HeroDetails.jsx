import {
  Box,
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
import ClassScoreCell from "../Hero/ClassScoreCell";
import ElementCell from "../Hero/ElementCell";
import GrowthScoreCell from "../Hero/GrowthScoreCell";
import HeroId from "../Hero/HeroId";
import PJBadge from "../Hero/PJBadge";
import PriceCell from "../Hero/PriceCell";
import RarityCell from "../Hero/RarityCell";

export default function HeroDetails({ hero, clear }) {
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
  return (
    <Dialog open={true} onClose={clear} fullWidth={true} maxWidth="md">
      <Grid
        container
        justifyContent={"center"}
        spacing={2}
        bgcolor={"background.default"}
      >
        <Grid container item xs={12} textAlign={"center"}>
          <Grid item xs={12}>
            <Typography variant={"h5"} marginY={1}>
              <HeroId>{hero.heroId ? hero.heroId : hero.id}</HeroId> -{" "}
              {FullName(hero)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            Level {hero.level}
          </Grid>
          <Grid item xs={12} sm={4}>
            {hero.mainClass}
          </Grid>
          <Grid item container xs={12} sm={4} justifyContent={"center"}>
            <Grid item sx={{ maxWidth: "20px" }}>
              <ElementCell>{hero.element}</ElementCell>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            {hero.gender == "male" ? "♂️" : "♀️"}
          </Grid>
          <Grid item xs={12} sm={4}>
            {hero.subClass}
          </Grid>
          <Grid item xs={12} sm={4}>
            {hero.shiny ? "Shiny" : "Ordinary"}
          </Grid>
          <Grid item xs={12} sm={4}>
            Generation: {hero.generation}
          </Grid>
          <Grid item container justifyContent={"center"} xs={12} sm={4}>
            Price:{" "}
            <Grid item style={{ marginLeft: "10px", minWidth: "60px" }}>
              <PriceCell>{hero}</PriceCell>
            </Grid>
          </Grid>
          <Grid item container justifyContent={"center"} xs={12} sm={4}>
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
        <Grid item xs={12}>
          <Typography variant={"h5"} textAlign={"center"}>
            Growth
          </Typography>
        </Grid>
        <Grid item container justifyContent={"center"} xs={12}>
          <Grid item>
            <Table className="table-bordered w-100">
              <TableHead>
                <TableRow>
                  <TableCell component={"th"}>Class</TableCell>
                  <TableCell component={"th"}>STR</TableCell>
                  <TableCell component={"th"}>DEX</TableCell>
                  <TableCell component={"th"}>AGI</TableCell>
                  <TableCell component={"th"}>VIT</TableCell>
                  <TableCell component={"th"}>END</TableCell>
                  <TableCell component={"th"}>INT</TableCell>
                  <TableCell component={"th"}>WIS</TableCell>
                  <TableCell component={"th"}>LCK</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component={"th"}>Main: {hero.mainClass}</TableCell>
                  <TableCell>
                    {parseFloat(hero.strengthGrowthP.toFixed(2))}
                  </TableCell>
                  <TableCell>
                    {parseFloat(hero.dexterityGrowthP.toFixed(2))}
                  </TableCell>
                  <TableCell>
                    {parseFloat(hero.agilityGrowthP.toFixed(2))}
                  </TableCell>
                  <TableCell>
                    {parseFloat(hero.vitalityGrowthP.toFixed(2))}
                  </TableCell>
                  <TableCell>
                    {parseFloat(hero.enduranceGrowthP.toFixed(2))}
                  </TableCell>
                  <TableCell>
                    {parseFloat(hero.intelligenceGrowthP.toFixed(2))}
                  </TableCell>
                  <TableCell>
                    {parseFloat(hero.wisdomGrowthP.toFixed(2))}
                  </TableCell>
                  <TableCell>
                    {parseFloat(hero.luckGrowthP.toFixed(2))}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component={"th"}>Sub: {hero.subClass}</TableCell>
                  <TableCell>
                    {parseFloat(hero.strengthGrowthS.toFixed(2))}
                  </TableCell>
                  <TableCell>
                    {parseFloat(hero.dexterityGrowthS.toFixed(2))}
                  </TableCell>
                  <TableCell>
                    {parseFloat(hero.agilityGrowthS.toFixed(2))}
                  </TableCell>
                  <TableCell>
                    {parseFloat(hero.vitalityGrowthS.toFixed(2))}
                  </TableCell>
                  <TableCell>
                    {parseFloat(hero.enduranceGrowthS.toFixed(2))}
                  </TableCell>
                  <TableCell>
                    {parseFloat(hero.intelligenceGrowthS.toFixed(2))}
                  </TableCell>
                  <TableCell>
                    {parseFloat(hero.wisdomGrowthS.toFixed(2))}
                  </TableCell>
                  <TableCell>
                    {parseFloat(hero.luckGrowthS.toFixed(2))}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component={"th"}>Total</TableCell>
                  <TableCell>
                    {parseFloat(
                      (hero.strengthGrowthS + hero.strengthGrowthP).toFixed(2)
                    )}
                  </TableCell>
                  <TableCell>
                    {parseFloat(
                      (hero.dexterityGrowthP + hero.dexterityGrowthS).toFixed(2)
                    )}
                  </TableCell>
                  <TableCell>
                    {parseFloat(
                      (hero.agilityGrowthP + hero.agilityGrowthS).toFixed(2)
                    )}
                  </TableCell>
                  <TableCell>
                    {parseFloat(
                      (hero.vitalityGrowthP + hero.vitalityGrowthS).toFixed(2)
                    )}
                  </TableCell>
                  <TableCell>
                    {parseFloat(
                      (hero.enduranceGrowthP + hero.enduranceGrowthS).toFixed(2)
                    )}
                  </TableCell>
                  <TableCell>
                    {parseFloat(
                      (
                        hero.intelligenceGrowthP + hero.intelligenceGrowthS
                      ).toFixed(2)
                    )}
                  </TableCell>
                  <TableCell>
                    {parseFloat(
                      (hero.wisdomGrowthP + hero.wisdomGrowthS).toFixed(2)
                    )}
                  </TableCell>
                  <TableCell>
                    {parseFloat(
                      (hero.luckGrowthP + hero.luckGrowthS).toFixed(2)
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={"h5"} textAlign={"center"}>
            Recessives
          </Typography>
        </Grid>
        <Grid item>
          <TableContainer>
            <Table className="table-bordered">
              <TableHead>
                <TableRow>
                  <TableCell component={"th"}>Stat</TableCell>
                  <TableCell component={"th"}>D</TableCell>
                  <TableCell component={"th"}>R1</TableCell>
                  <TableCell component={"th"}>R2</TableCell>
                  <TableCell component={"th"}>R3</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Class</TableCell>
                  <TableCell>{hero.mainClass}</TableCell>
                  <TableCell>{hero.R1.mainClass}</TableCell>
                  <TableCell>{hero.R2.mainClass}</TableCell>
                  <TableCell>{hero.R3.mainClass}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Subclass</TableCell>
                  <TableCell>{hero.subClass}</TableCell>
                  <TableCell>{hero.R1.subClass}</TableCell>
                  <TableCell>{hero.R2.subClass}</TableCell>
                  <TableCell>{hero.R3.subClass}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Profession</TableCell>
                  <TableCell>{hero.profession}</TableCell>
                  <TableCell>{hero.R1.profession}</TableCell>
                  <TableCell>{hero.R2.profession}</TableCell>
                  <TableCell>{hero.R3.profession}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>SB1</TableCell>
                  <TableCell>{hero.statBoost1}</TableCell>
                  <TableCell>{hero.R1.statBoost1}</TableCell>
                  <TableCell>{hero.R2.statBoost1}</TableCell>
                  <TableCell>{hero.R3.statBoost1}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>SB2</TableCell>
                  <TableCell>{hero.statBoost2}</TableCell>
                  <TableCell>{hero.R1.statBoost2}</TableCell>
                  <TableCell>{hero.R2.statBoost2}</TableCell>
                  <TableCell>{hero.R3.statBoost2}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Active 1</TableCell>
                  <TableCell>{hero.active1}</TableCell>
                  <TableCell>{hero.R1.active1}</TableCell>
                  <TableCell>{hero.R2.active1}</TableCell>
                  <TableCell>{hero.R3.active1}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Active 2</TableCell>
                  <TableCell>{hero.active2}</TableCell>
                  <TableCell>{hero.R1.active2}</TableCell>
                  <TableCell>{hero.R2.active2}</TableCell>
                  <TableCell>{hero.R3.active2}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Passive 1</TableCell>
                  <TableCell>{hero.passive1}</TableCell>
                  <TableCell>{hero.R1.passive1}</TableCell>
                  <TableCell>{hero.R2.passive1}</TableCell>
                  <TableCell>{hero.R3.passive1}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Passive 2</TableCell>
                  <TableCell>{hero.passive2}</TableCell>
                  <TableCell>{hero.R1.passive2}</TableCell>
                  <TableCell>{hero.R2.passive2}</TableCell>
                  <TableCell>{hero.R3.passive2}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Element</TableCell>
                  <TableCell>
                    <div style={{ maxWidth: "20px" }}>
                      <ElementCell>{hero.element}</ElementCell>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div style={{ maxWidth: "20px" }}>
                      <ElementCell>{hero.R1.element}</ElementCell>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div style={{ maxWidth: "20px" }}>
                      <ElementCell>{hero.R2.element}</ElementCell>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div style={{ maxWidth: "20px" }}>
                      <ElementCell>{hero.R3.element}</ElementCell>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Status Unknown 1</TableCell>
                  <TableCell>{hero.statsUnknown1}</TableCell>
                  <TableCell>{hero.R1.statsUnknown1}</TableCell>
                  <TableCell>{hero.R2.statsUnknown1}</TableCell>
                  <TableCell>{hero.R3.statsUnknown1}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Status Unknown 2</TableCell>
                  <TableCell>{hero.statsUnknown2}</TableCell>
                  <TableCell>{hero.R1.statsUnknown2}</TableCell>
                  <TableCell>{hero.R2.statsUnknown2}</TableCell>
                  <TableCell>{hero.R3.statsUnknown2}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Dialog>
  );
}
