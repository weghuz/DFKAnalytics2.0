import React, { useState, useEffect, useContext } from "react";
import DFKBase, { PJSurvivor } from "../Logic/Dropdowns";
import Image from "next/image";
import Jewel from "../public/Jewel.png";
import SelectItem from "./Filters/SelectItem";
import RaritySlider from "./Filters/RaritySlider";
import NumberSlider from "./Filters/NumberSlider";
import { Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import RequestContext from "../Context/Context";
import SelectItemSingle from "./Filters/SelectItemSingle";
import {
  femaleFirstNames,
  FirstName,
  lastNames,
  maleFirstNames,
} from "../Logic/HeroBase";

export default function HeroFilters() {
  const [mainClass, setMainClass] = useState([]);
  const [subClass, setSubClass] = useState([]);
  const [professions, setProfessions] = useState([]);
  const [SB1, setSB1] = useState([]);
  const [SB2, setSB2] = useState([]);
  const [PJ, setPJ] = useState([]);
  const [rarity, setRarity] = useState([0, 4]);
  const [generation, setGeneration] = useState([0, 14]);
  const [summons, setSummons] = useState([0, 10]);
  const [level, setLevel] = useState([0, 100]);
  const [minSalePrice, setMinSalePrice] = useState(0);
  const [maxSalePrice, setMaxSalePrice] = useState(9999999);
  const [mFName, setMFName] = useState([]);
  const [fFName, setFFName] = useState([]);
  const [lName, setLName] = useState([]);
  const queryContext = useContext(RequestContext);
  let clearRarity = null,
    clearGeneration = null,
    clearSummons = null,
    clearLevel = null;

  const UpdateQuery = () => {
    let query = ``;
    if (mainClass.length > 0) {
      query += `mainClass_in: [`;
      mainClass.forEach((c, i) => {
        query += `"${c.value}"`;
        if (i < mainClass.length - 1) {
          query += `,`;
        }
      });
      query += `],`;
    }
    if (subClass.length > 0) {
      query += `subClass_in: [`;
      subClass.forEach((c, i) => {
        query += `"${c.value}"`;
        if (i < subClass.length - 1) {
          query += `,`;
        }
      });
      query += `],`;
    }
    if (professions.length > 0) {
      query += `profession_in: [`;
      professions.forEach((c, i) => {
        query += `"${c.value}"`;
        if (i < professions.length - 1) {
          query += `,`;
        }
      });
      query += `],`;
    }
    if (SB1.length > 0) {
      query += `statBoost1_in: [`;
      SB1.forEach((c, i) => {
        query += `"${c.value}"`;
        if (i < SB1.length - 1) {
          query += `,`;
        }
      });
      query += `],`;
    }

    if (SB2.length > 0) {
      query += `statBoost2_in: [`;
      SB2.forEach((c, i) => {
        query += `"${c.value}"`;
        if (i < SB2.length - 1) {
          query += `,`;
        }
      });
      query += `],`;
    }
    if (PJ.length > 0) {
      if (PJ[0].value === "null") {
        query += `pjStatus: ${PJ[0].value},`;
      } else {
        query += `pjStatus: "${PJ[0].value}",`;
      }
    }
    if (lName.length > 0) {
      query += `lastName_in: [`;
      lName.forEach((c, i) => {
        query += `${c.value}`;
        if (i < lName.length - 1) {
          query += `,`;
        }
      });
      query += `],`;
    }
    if (mFName.length > 0) {
      query += `firstName_in: [`;
      mFName.forEach((c, i) => {
        query += `${c.value}`;
        if (i < mFName.length - 1) {
          query += `,`;
        }
      });
      query += `],gender:"male",`;
    } else if (fFName.length > 0) {
      query += `firstName_in: [`;
      fFName.forEach((c, i) => {
        query += `${c.value}`;
        if (i < fFName.length - 1) {
          query += `,`;
        }
      });
      query += `],gender:"female",`;
    }
    console.log(rarity);
    query += `rarity_gte: ${rarity[0]}, rarity_lte:${rarity[1]},`;
    query += `generation_gte: ${generation[0]}, generation_lte:${generation[1]},`;
    query += `summonsRemaining_gte: ${summons[0]}, summonsRemaining_lte:${
      summons[1] == 10 ? 11 : summons[1]
    },`;
    query += `level_gte: ${level[0]}, level_lte:${level[1]},`;
    query += `salePrice_gte: "${minSalePrice}000000000000000000", salePrice_lte:"${maxSalePrice}000000000000000000",`;
    queryContext.setQuery({ ...queryContext.query, query });
    console.log(queryContext.query.query);
    queryContext.query.invalidateQueries();
  };

  useEffect(() => {
    UpdateQuery();
  }, [
    mainClass,
    subClass,
    rarity,
    professions,
    SB1,
    SB2,
    PJ,
    generation,
    summons,
    level,
    fFName,
    mFName,
    lName,
  ]);
  const ClearFilters = () => {
    setMainClass([]);
    setSubClass([]);
    setProfessions([]);
    setSB1([]);
    setSB2([]);
    setPJ([]);
    setRarity([0, 4]);
    setGeneration([0, 14]);
    setSummons([0, 10]);
    setLevel([0, 100]);
    setMinSalePrice(0);
    setMaxSalePrice(9999999);
    clearRarity();
    clearGeneration();
    clearSummons();
    clearLevel();
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
        <SelectItemSingle title="PJ Status" values={PJ} setValues={setPJ}>
          {DFKBase.PJSurvivor}
        </SelectItemSingle>
        <RaritySlider
          setQueryRarity={setRarity}
          clear={(clearFunc) => (clearRarity = clearFunc)}
        />
        <NumberSlider
          title={"Generation"}
          clear={(clearFunc) => (clearGeneration = clearFunc)}
          min={0}
          max={14}
          callback={(val) => setGeneration(val)}
          marks={[
            { value: 0, label: <div style={{ fontSize: "11px" }}>0</div> },
            { value: 1, label: <div style={{ fontSize: "11px" }}>1</div> },
            { value: 2, label: <div style={{ fontSize: "11px" }}>2</div> },
            { value: 3, label: <div style={{ fontSize: "11px" }}>3</div> },
            { value: 4, label: <div style={{ fontSize: "11px" }}>4</div> },
            { value: 5, label: <div style={{ fontSize: "11px" }}>5</div> },
            { value: 6, label: <div style={{ fontSize: "11px" }}>6</div> },
            { value: 7, label: <div style={{ fontSize: "11px" }}>7</div> },
            { value: 8, label: <div style={{ fontSize: "11px" }}>8</div> },
            { value: 9, label: <div style={{ fontSize: "11px" }}>9</div> },
            { value: 10, label: <div style={{ fontSize: "11px" }}>10</div> },
            { value: 11, label: <div style={{ fontSize: "11px" }}>11</div> },
            { value: 12, label: <div style={{ fontSize: "11px" }}>12</div> },
            { value: 13, label: <div style={{ fontSize: "11px" }}>13</div> },
            { value: 14, label: <div style={{ fontSize: "11px" }}>14</div> },
          ]}
        />
        <NumberSlider
          title={"Summons"}
          clear={(clearFunc) => (clearSummons = clearFunc)}
          min={0}
          max={10}
          callback={(val) => setSummons(val)}
          marks={[
            { value: 0, label: <div style={{ fontSize: "11px" }}>0</div> },
            { value: 1, label: <div style={{ fontSize: "11px" }}>1</div> },
            { value: 2, label: <div style={{ fontSize: "11px" }}>2</div> },
            { value: 3, label: <div style={{ fontSize: "11px" }}>3</div> },
            { value: 4, label: <div style={{ fontSize: "11px" }}>4</div> },
            { value: 5, label: <div style={{ fontSize: "11px" }}>5</div> },
            { value: 6, label: <div style={{ fontSize: "11px" }}>6</div> },
            { value: 7, label: <div style={{ fontSize: "11px" }}>7</div> },
            { value: 8, label: <div style={{ fontSize: "11px" }}>8</div> },
            { value: 9, label: <div style={{ fontSize: "11px" }}>9</div> },
            { value: 10, label: <div style={{ fontSize: "11px" }}>10</div> },
          ]}
        />
        <NumberSlider
          title={"Level"}
          clear={(clearFunc) => (clearLevel = clearFunc)}
          marks={[
            { value: 0, label: 0 },
            { value: 25, label: 25 },
            { value: 50, label: 50 },
            { value: 75, label: 75 },
            { value: 100, label: 100 },
          ]}
          min={0}
          max={100}
          callback={(val) => setLevel(val)}
        />
        <div className="col-sm-6 col-md-4 col-xl-3 my-1">
          <InputLabel htmlFor="minPrice" className="text-white">
            Min Price
          </InputLabel>
          <Input
            placeholder="0"
            value={minSalePrice}
            id="minPrice"
            onChange={(e) => setMinSalePrice(e.target.value)}
            onBlur={(e) => UpdateQuery()}
            sx={{ color: "white", width: "100%" }}
            type="number"
            startAdornment={
              <InputAdornment position="start" sx={{ width: "30px" }}>
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
            value={maxSalePrice}
            id="maxPrice"
            onChange={(e) => setMaxSalePrice(e.target.value)}
            onBlur={(e) => UpdateQuery()}
            sx={{ color: "white", width: "100%" }}
            type="number"
            startAdornment={
              <InputAdornment position="start" sx={{ width: "30px" }}>
                <Image src={Jewel} alt="Jewel" width={24} height={24}></Image>
              </InputAdornment>
            }
          ></Input>
        </div>
        {fFName.length == 0 && <SelectItem
          title="Male First Names"
          values={mFName}
          setValues={setMFName}
        >
          {maleFirstNames.map((n, i) => {
            return { value: i, label: n };
          })}
        </SelectItem>}
        {mFName.length == 0 && <SelectItem
          title="Female First Names"
          values={fFName}
          setValues={setFFName}
        >
          {femaleFirstNames.map((n, i) => {
            return { value: i, label: n };
          })}
        </SelectItem>}
        <SelectItem title="Last Name" values={lName} setValues={setLName}>
          {lastNames.map((n, i) => {
            return { value: i, label: n };
          })}
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
