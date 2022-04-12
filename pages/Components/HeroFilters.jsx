import React, { useState, useEffect } from "react";
import DFKBase from "../../Logic/DFKBase";
import SelectItem from "./Filters/Select";
import Slider from "@mui/material/Slider";

export default function HeroFilters() {
  const [mainClass, setMainClass] = useState([]);
  const [subClass, setSubClass] = useState([]);
  const [rarities, setRarities] = useState([]);
  const [professions, setProfessions] = useState([]);
  const [SB1, setSB1] = useState([]);
  const [SB2, setSB2] = useState([]);
  const [rarity, setRarity] = useState([0, 4]);

  useEffect(() => {
    console.log(mainClass);
  }, [mainClass, subClass, rarities, professions]);
  const ClearFilters = () => {
    setMainClass([]);
    setSubClass([]);
    setRarities([]);
    setProfessions([]);
  };

  return (
    <div className="container">
      <div className="row">
        <SelectItem title="Class" values={mainClass} setValues={setMainClass}>
          {DFKBase.Classes}
        </SelectItem>
        <SelectItem title="Subclass" values={subClass} setValues={setSubClass}>
          {DFKBase.Classes}
        </SelectItem>
        <SelectItem
          title="Profession"
          values={professions}
          setValues={setProfessions}
        >
          {DFKBase.Professions}
        </SelectItem>
        <div className="col-md-3 col-6">
          <Slider
            getAriaLabel={(val) => {
              switch (val) {
                case 1:
                  return "Uncommon";
                case 2:
                  return "Rare";
                case 3:
                  return "Legendary";
                case 4:
                  return "Mythic";
                default:
                  return `Common`;
              }
            }}
            valueLabelDisplay="auto"
            value={rarity}
            min={0}
            max={4}
            size="small"
            marks={[
              { value: 0, label: `C` },
              { value: 1, label: "UC" },
              { value: 2, label: "R" },
              { value: 3, label: "L" },
              { value: 4, label: "M" },
            ]}
            onChange={(e, val) => {
              setRarity(val);
            }}
            onChangeCommitted={(e, val) => {
              console.log(val);
            }}
            gap={0}
            disableSwap={false}
            track={false}
            sx={{ color: "#0074D9" }}
            valueLabelFormat={(val) => {
              switch (val) {
                case 1:
                  return "Uncommon";
                case 2:
                  return "Rare";
                case 3:
                  return "Legendary";
                case 4:
                  return "Mythic";
                default:
                  return `Common`;
              }
            }}
            getAriaValueText={() => "valuetext"}
          />
        </div>
        <SelectItem
          title="+2 Stats"
          color="#11BB11"
          values={SB1}
          setValues={setSB1}
        >
          {DFKBase.StatBoosts}
        </SelectItem>
        <SelectItem
          title="2%/4% Growth"
          color="#0055FF"
          values={SB2}
          setValues={setSB2}
        >
          {DFKBase.StatBoosts}
        </SelectItem>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-sm btn-secondary" onClick={ClearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
}
