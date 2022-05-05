import { Dialog, Table } from "@mui/material";
import React from "react";
import { classVars, FullName } from "../../Logic/HeroBase";
import ElementCell from "../Hero/ElementCell";
import HeroId from "../Hero/HeroId";
import PJBadge from "../Hero/PJBadge";
import PriceCell from "../Hero/PriceCell";
import RarityCell from "../Hero/RarityCell";

export default function HeroDetails({ hero, clear }) {
  const getStatColor = (stat) => {
    if (stat == hero.statBoost1 && stat == hero.statBoost2) {
      return "purple";
    } else if (stat == hero.statBoost1) {
      return "green";
    } else if (stat == hero.statBoost2) {
      return "royalblue";
    } else {
      return "white";
    }
  };
  const getProfessionColor = (profession) => {
    if (profession == hero.profession) {
      return "green";
    } else {
      return "white";
    }
  };
  return (
    <Dialog open={true} onClose={clear} fullWidth={true} maxWidth="md">
      <div
        className="row bg-dark text-white py-2 mx-0"
        style={{ padding: "0 10%" }}
      >
        <div className="col-12">
          <div className="row text-center">
            <div className="col-12">
              <h3>
                <HeroId>{hero.id}</HeroId> - {FullName(hero)}
              </h3>
            </div>
            <div className="col-sm-4">Level {hero.level}</div>
            <div className="col-sm-4">{hero.mainClass}</div>
            <div className="col-sm-4 d-flex justify-content-center">
              <div style={{ maxWidth: "20px" }}>
                <ElementCell>{hero.element}</ElementCell>
              </div>
            </div>
            <div className="col-sm-4">
              {hero.gender == "male" ? "♂️" : "♀️"}
            </div>
            <div className="col-sm-4">{hero.subClass}</div>
            <div className="col-sm-4">{hero.shiny ? "Shiny" : "Ordinary"}</div>
            <div className="col-sm-4">Generation: {hero.generation}</div>
            <div className="col-sm-4 d-flex justify-content-center">
              Price:{" "}
              <div style={{ marginLeft: "10px", maxWidth: "60px" }}>
                <PriceCell>{hero}</PriceCell>
              </div>
            </div>
            <div className="col-sm-4 justify-content-center d-flex">
              <div style={{ maxWidth: "35px" }}>
                <RarityCell rarity={hero.rarity} />
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <div style={{ marginLeft: "10px", maxWidth: "60px" }}>
                {hero.pjStatus == "SURVIVED" && <PJBadge></PJBadge>}
                {hero.pjStatus == "DIED" &&
                  `${FullName(
                    hero
                  )} died a glorious death at sea looking to discover the promised land of Crystalvale.`}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <h5>Stats</h5>
        </div>
        <div className="col-6 text-end">
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
        </div>
        <div className="col-6">
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
            <span style={{ color: getStatColor("LCK") }}>LCK</span>: {hero.luck}{" "}
            (+
            {hero.luck - classVars[hero.mainClass].base.lck})
          </div>
        </div>
        <div className="col-12 text-center mt-2">
          <h5>Professions</h5>
        </div>
        <div className="col-6 text-end">
          <div>
            <span style={{ color: getProfessionColor("mining") }}>Mining</span>:{" "}
            {hero.mining / 10}
          </div>
          <div>
            <span style={{ color: getProfessionColor("foraging") }}>
              Foraging
            </span>
            : {hero.foraging / 10}
          </div>
        </div>
        <div className="col-6">
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
        </div>
        <div className="col-6 text-end">Class Score: {hero.classScore}</div>
        <div className="col-6">Growth Score: {hero.growthScore}</div>
        <h5 className="text-center">Growth</h5>
        <div className="overflow-auto">
          <table className="table-bordered w-100">
            <thead>
              <tr>
                <th>Class</th>
                <th>STR</th>
                <th>DEX</th>
                <th>AGI</th>
                <th>VIT</th>
                <th>END</th>
                <th>INT</th>
                <th>WIS</th>
                <th>LCK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Main: {hero.mainClass}</th>

                <th>{parseFloat(hero.strengthGrowthP.toFixed(2))}</th>
                <th>{parseFloat(hero.dexterityGrowthP.toFixed(2))}</th>
                <th>{parseFloat(hero.agilityGrowthP.toFixed(2))}</th>
                <th>{parseFloat(hero.vitalityGrowthP.toFixed(2))}</th>
                <th>{parseFloat(hero.enduranceGrowthP.toFixed(2))}</th>
                <th>{parseFloat(hero.intelligenceGrowthP.toFixed(2))}</th>
                <th>{parseFloat(hero.wisdomGrowthP.toFixed(2))}</th>
                <th>{parseFloat(hero.luckGrowthP.toFixed(2))}</th>
              </tr>
              <tr>
                <th>Sub: {hero.subClass}</th>
                <th>{parseFloat(hero.strengthGrowthS.toFixed(2))}</th>
                <th>{parseFloat(hero.dexterityGrowthS.toFixed(2))}</th>
                <th>{parseFloat(hero.agilityGrowthS.toFixed(2))}</th>
                <th>{parseFloat(hero.vitalityGrowthS.toFixed(2))}</th>
                <th>{parseFloat(hero.enduranceGrowthS.toFixed(2))}</th>
                <th>{parseFloat(hero.intelligenceGrowthS.toFixed(2))}</th>
                <th>{parseFloat(hero.wisdomGrowthS.toFixed(2))}</th>
                <th>{parseFloat(hero.luckGrowthS.toFixed(2))}</th>
              </tr>
              <tr>
                <th>Total</th>
                <th>
                  {parseFloat(
                    (hero.strengthGrowthS + hero.strengthGrowthP).toFixed(2)
                  )}
                </th>
                <th>
                  {parseFloat(
                    (hero.dexterityGrowthP + hero.dexterityGrowthS).toFixed(2)
                  )}
                </th>
                <th>
                  {parseFloat(
                    (hero.agilityGrowthP + hero.agilityGrowthS).toFixed(2)
                  )}
                </th>
                <th>
                  {parseFloat(
                    (hero.vitalityGrowthP + hero.vitalityGrowthS).toFixed(2)
                  )}
                </th>
                <th>
                  {parseFloat(
                    (hero.enduranceGrowthP + hero.enduranceGrowthS).toFixed(2)
                  )}
                </th>
                <th>
                  {parseFloat(
                    (
                      hero.intelligenceGrowthP + hero.intelligenceGrowthS
                    ).toFixed(2)
                  )}
                </th>
                <th>
                  {parseFloat(
                    (hero.wisdomGrowthP + hero.wisdomGrowthS).toFixed(2)
                  )}
                </th>
                <th>
                  {parseFloat((hero.luckGrowthP + hero.luckGrowthS).toFixed(2))}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <h5 className="text-center">Recessives</h5>
        <div className="overflow-auto">
          <table className="table-bordered  w-100">
            <thead>
              <tr>
                <th>Stat</th>
                <th>D</th>
                <th>R1</th>
                <th>R2</th>
                <th>R3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Class</td>
                <td>{hero.mainClass}</td>
                <td>{hero.R1.mainClass}</td>
                <td>{hero.R2.mainClass}</td>
                <td>{hero.R3.mainClass}</td>
              </tr>
              <tr>
                <td>Subclass</td>
                <td>{hero.subClass}</td>
                <td>{hero.R1.subClass}</td>
                <td>{hero.R2.subClass}</td>
                <td>{hero.R3.subClass}</td>
              </tr>
              <tr>
                <td>Profession</td>
                <td>{hero.profession}</td>
                <td>{hero.R1.profession}</td>
                <td>{hero.R2.profession}</td>
                <td>{hero.R3.profession}</td>
              </tr>
              <tr>
                <td>SB1</td>
                <td>{hero.statBoost1}</td>
                <td>{hero.R1.statBoost1}</td>
                <td>{hero.R2.statBoost1}</td>
                <td>{hero.R3.statBoost1}</td>
              </tr>
              <tr>
                <td>SB2</td>
                <td>{hero.statBoost2}</td>
                <td>{hero.R1.statBoost2}</td>
                <td>{hero.R2.statBoost2}</td>
                <td>{hero.R3.statBoost2}</td>
              </tr>
              <tr>
                <td>Active 1</td>
                <td>{hero.active1}</td>
                <td>{hero.R1.active1}</td>
                <td>{hero.R2.active1}</td>
                <td>{hero.R3.active1}</td>
              </tr>
              <tr>
                <td>Active 2</td>
                <td>{hero.active2}</td>
                <td>{hero.R1.active2}</td>
                <td>{hero.R2.active2}</td>
                <td>{hero.R3.active2}</td>
              </tr>
              <tr>
                <td>Passive 1</td>
                <td>{hero.passive1}</td>
                <td>{hero.R1.passive1}</td>
                <td>{hero.R2.passive1}</td>
                <td>{hero.R3.passive1}</td>
              </tr>
              <tr>
                <td>Passive 2</td>
                <td>{hero.passive2}</td>
                <td>{hero.R1.passive2}</td>
                <td>{hero.R2.passive2}</td>
                <td>{hero.R3.passive2}</td>
              </tr>
              <tr>
                <td>Element</td>
                <td>
                  <div style={{ maxWidth: "20px" }}>
                    <ElementCell>{hero.element}</ElementCell>
                  </div>
                </td>
                <td>
                  <div style={{ maxWidth: "20px" }}>
                    <ElementCell>{hero.R1.element}</ElementCell>
                  </div>
                </td>
                <td>
                  <div style={{ maxWidth: "20px" }}>
                    <ElementCell>{hero.R2.element}</ElementCell>
                  </div>
                </td>
                <td>
                  <div style={{ maxWidth: "20px" }}>
                    <ElementCell>{hero.R3.element}</ElementCell>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Status Unknown 1</td>
                <td>{hero.statsUnknown1}</td>
                <td>{hero.R1.statsUnknown1}</td>
                <td>{hero.R2.statsUnknown1}</td>
                <td>{hero.R3.statsUnknown1}</td>
              </tr>
              <tr>
                <td>Status Unknown 2</td>
                <td>{hero.statsUnknown2}</td>
                <td>{hero.R1.statsUnknown2}</td>
                <td>{hero.R2.statsUnknown2}</td>
                <td>{hero.R3.statsUnknown2}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Dialog>
  );
}
