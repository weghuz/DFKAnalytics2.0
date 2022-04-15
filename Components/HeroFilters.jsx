import React, { useState, useEffect } from "react";
import DFKBase from "../Logic/Dropdowns";
import Image from "next/image";
import Jewel from "../public/Jewel.png";
import SelectItem from "./Filters/SelectItem";
import RaritySlider from "./Filters/RaritySlider";
import NumberSlider from "./Filters/NumberSlider";
import { Input, InputAdornment, InputLabel, TextField } from "@mui/material";

export default function HeroFilters() {
  const [mainClass, setMainClass] = useState([]);
  const [subClass, setSubClass] = useState([]);
  const [rarities, setRarities] = useState([]);
  const [professions, setProfessions] = useState([]);
  const [SB1, setSB1] = useState([]);
  const [SB2, setSB2] = useState([]);
  const [PJ, setPJ] = useState([]);

  useEffect(() => {}, [mainClass, subClass, rarities, professions]);
  const ClearFilters = () => {
    setMainClass([]);
    setSubClass([]);
    setRarities([]);
    setProfessions([]);
    setSB1([]);
    setSB2([]);
    setRarity([0, 4]);
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
        <SelectItem title="PJ Status" values={PJ} setValues={setPJ}>
          {DFKBase.PJSurvivor}
        </SelectItem>
        <RaritySlider />
        <NumberSlider
          title={"Generation"}
          min={0}
          max={14}
          callback={() => ""}
          marks={[
            { value: 0, label: <div style={{fontSize:"11px"}}>0</div> },
            { value: 1, label: <div style={{fontSize:"11px"}}>1</div> },
            { value: 2, label: <div style={{fontSize:"11px"}}>2</div> },
            { value: 3, label: <div style={{fontSize:"11px"}}>3</div> },
            { value: 4, label: <div style={{fontSize:"11px"}}>4</div> },
            { value: 5, label: <div style={{fontSize:"11px"}}>5</div> },
            { value: 6, label: <div style={{fontSize:"11px"}}>6</div> },
            { value: 7, label: <div style={{fontSize:"11px"}}>7</div> },
            { value: 8, label: <div style={{fontSize:"11px"}}>8</div> },
            { value: 9, label: <div style={{fontSize:"11px"}}>9</div> },
            { value: 10, label: <div style={{fontSize:"11px"}}>10</div> },
            { value: 11, label: <div style={{fontSize:"11px"}}>11</div> },
            { value: 12, label: <div style={{fontSize:"11px"}}>12</div> },
            { value: 13, label: <div style={{fontSize:"11px"}}>13</div> },
            { value: 14, label: <div style={{fontSize:"11px"}}>14</div> },
          ]}
        />
        <NumberSlider
          title={"Summons"}
          min={0}
          max={10}
          callback={() => ""}
          marks={[
            { value: 0, label: <div style={{fontSize:"11px"}}>0</div> },
            { value: 1, label: <div style={{fontSize:"11px"}}>1</div> },
            { value: 2, label: <div style={{fontSize:"11px"}}>2</div> },
            { value: 3, label: <div style={{fontSize:"11px"}}>3</div> },
            { value: 4, label: <div style={{fontSize:"11px"}}>4</div> },
            { value: 5, label: <div style={{fontSize:"11px"}}>5</div> },
            { value: 6, label: <div style={{fontSize:"11px"}}>6</div> },
            { value: 7, label: <div style={{fontSize:"11px"}}>7</div> },
            { value: 8, label: <div style={{fontSize:"11px"}}>8</div> },
            { value: 9, label: <div style={{fontSize:"11px"}}>9</div> },
            { value: 10, label: <div style={{fontSize:"11px"}}>10</div> }
          ]}
        />
        <NumberSlider title={"Level"} marks={[{value: 0, label: 0}, {value: 25, label: 25}, {value: 50, label: 50}, {value: 75, label: 75}, {value: 100, label:100}]} min={0} max={100} callback={() => ""} />
        <div className="col-sm-6 col-md-4 col-xl-3 my-1">
          <InputLabel htmlFor="minPrice" className="text-white">
            Min Price
          </InputLabel>
          <Input
            placeholder="0"
            id="minPrice"
            sx={{ color: "white" }}
            type="number"
            startAdornment={
              <InputAdornment position="start" sx={{width:"30px"}}>
                <Image src={Jewel} alt="Jewel" width={24} height={24}></Image>
              </InputAdornment>
            }
          ></Input>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-3 my-1">
          <InputLabel htmlFor="minPrice" className="text-white">
            Max Price
          </InputLabel>
          <Input
            placeholder="9999999"
            id="maxPrice"
            sx={{ color: "white" }}
            type="number"
            startAdornment={
              <InputAdornment position="start" sx={{width:"30px"}}>
                <Image src={Jewel} alt="Jewel" width={24} height={24}></Image>
              </InputAdornment>
            }
          ></Input>
        </div>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-sm btn-secondary" onClick={ClearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
}
