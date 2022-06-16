import React, { useEffect } from "react";
import DFKBase, { Skills, Targets } from "../Logic/Dropdowns";
import Image from "next/image";
import Jewel from "../public/Jewel.png";
import SelectItem from "./Filters/SelectItem";
import RaritySlider from "./Filters/RaritySlider";
import NumberSlider from "./Filters/NumberSlider";
import {
  Button,
  Container,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import SelectItemSingle from "./Filters/SelectItemSingle";
import { femaleFirstNames, lastNames, maleFirstNames } from "../Logic/HeroBase";
import IdInput from "./Filters/IdInput";

function HeroFilters({ includeSalePrice, visible, useStore }) {
  const mainClass = useStore((state) => state.mainClass);
  const setMainClass = useStore((state) => state.setMainClass);
  const subClass = useStore((state) => state.subClass);
  const setSubClass = useStore((state) => state.setSubClass);
  const background = useStore((state) => state.background);
  const setBackground = useStore((state) => state.setBackground);
  const professions = useStore((state) => state.professions);
  const setProfessions = useStore((state) => state.setProfessions);
  const SB1 = useStore((state) => state.SB1);
  const setSB1 = useStore((state) => state.setSB1);
  const SB2 = useStore((state) => state.SB2);
  const setSB2 = useStore((state) => state.setSB2);
  const target = useStore((state) => state.target);
  const setTarget = useStore((state) => state.setTarget);
  const PJ = useStore((state) => state.PJ);
  const setPJ = useStore((state) => state.setPJ);
  const rarity = useStore((state) => state.rarity);
  const setRarity = useStore((state) => state.setRarity);
  const generation = useStore((state) => state.generation);
  const setGeneration = useStore((state) => state.setGeneration);
  const summons = useStore((state) => state.summons);
  const setSummons = useStore((state) => state.setSummons);
  const level = useStore((state) => state.level);
  const setLevel = useStore((state) => state.setLevel);
  const minSalePrice = useStore((state) => state.minSalePrice);
  const setMinSalePrice = useStore((state) => state.setMinSalePrice);
  const maxSalePrice = useStore((state) => state.maxSalePrice);
  const setMaxSalePrice = useStore((state) => state.setMaxSalePrice);
  const mFName = useStore((state) => state.mFName);
  const setMFName = useStore((state) => state.setMFName);
  const fFName = useStore((state) => state.fFName);
  const setFFName = useStore((state) => state.setFFName);
  const lName = useStore((state) => state.lName);
  const setLName = useStore((state) => state.setLName);
  const idInput = useStore((state) => state.idInput);
  const setIdInput = useStore((state) => state.setIdInput);
  const active1 = useStore((state) => state.active1);
  const setActive1 = useStore((state) => state.setActive1);
  const active2 = useStore((state) => state.active2);
  const setActive2 = useStore((state) => state.setActive2);
  const passive1 = useStore((state) => state.passive1);
  const setPassive1 = useStore((state) => state.setPassive1);
  const passive2 = useStore((state) => state.passive2);
  const setPassive2 = useStore((state) => state.setPassive2);
  const section = useStore((state) => state.section);
  const setSection = useStore((state) => state.setSection);
  const clearFilters = useStore((state) => state.clearFilters);
  const setFilter = useStore((state) => state.setFilter);
  useEffect(() => {
    UpdateQuery();
  }, []);
  const UpdateQuery = () => {
    let query = ``;
    console.log(mainClass);
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
    if (background.length > 0) {
      query += `background_in: [`;
      background.forEach((c, i) => {
        query += `"${c.value}"`;
        if (i < background.length - 1) {
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
    if (active1.length > 0) {
      query += `active1_in: [`;
      active1.forEach((c, i) => {
        query += `"${c.value}"`;
        if (i < active1.length - 1) {
          query += `,`;
        }
      });
      query += `],`;
    }
    if (active2.length > 0) {
      query += `active2_in: [`;
      active2.forEach((c, i) => {
        query += `"${c.value}"`;
        if (i < active2.length - 1) {
          query += `,`;
        }
      });
      query += `],`;
    }
    if (passive1.length > 0) {
      query += `passive1_in: [`;
      passive1.forEach((c, i) => {
        query += `"${c.value}"`;
        if (i < passive1.length - 1) {
          query += `,`;
        }
      });
      query += `],`;
    }
    if (passive2.length > 0) {
      query += `passive2_in: [`;
      passive2.forEach((c, i) => {
        query += `"${c.value}"`;
        if (i < passive2.length - 1) {
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
    if (rarity[0] !== 0) {
      query += `rarity_gte: ${rarity[0]},`;
    }
    if (rarity[1] !== 4) {
      query += `rarity_lte:${rarity[1]},`;
    }
    if (generation[0] !== 0) {
      query += `generation_gte: ${generation[0]},`;
    }
    if (generation[1] !== 14) {
      query += ` generation_lte:${generation[1]},`;
    }
    if (summons[0] !== 0) {
      query += `summonsRemaining_gte: ${summons[0]},`;
    }
    if (summons[1] !== 10) {
      query += `summonsRemaining_lte:${summons[1] == 10 ? 11 : summons[1]},`;
    }
    if (level[0] !== 0) {
      query += `level_gte: ${level[0]},`;
    }
    if (level[1] !== 100) {
      query += `level_lte:${level[1]},`;
    }
    if (includeSalePrice) {
      if (minSalePrice !== 0) {
        switch (target[0].value) {
          case "Tavern":
            query += "salePrice_gte: ";
            query += `"${minSalePrice}000000000000000000",`;
            break;
          case "Hire":
            query += "assistingPrice_gte: ";
            query += `"${minSalePrice}000000000000000000",`;
            break;
          case "All":
            break;
        }
      }
      if (maxSalePrice !== 9999999) {
        switch (target[0].value) {
          case "Tavern":
            query += "salePrice_lte: ";
            break;
          case "Hire":
            query += "assistingPrice_lte: ";
            break;
          case "All":
            break;
        }
        query += `"${maxSalePrice}000000000000000000",`;
      }
    }
    if (idInput.length > 0) {
      if (idInput.length > 0) {
        console.log(idInput);
        let splitIds = idInput.split(/,| |\n/);
        let addys = splitIds.filter((id) => id.length == 42);
        console.log(addys.length);
        if (addys.length != 0) {
          query += "owner_in: [";
          console.log("addys", addys);
          addys.forEach((id) => {
            query += `"${id}",`;
          });
          query += "],";
        }
        let heroId = splitIds.filter(
          (id) =>
            id.length < 42 &&
            id.length > 0 &&
            (!isNaN(parseInt(id)) || !isNaN(id))
        );
        if (heroId.length != 0) {
          console.log("heroId", heroId);
          query += "numberId_in: [";
          heroId.forEach((id, i) => {
            query += `"${id}"`;
            if (i < heroId.length - 1) {
              query += ",";
            }
          });
          query += "],";
        }
      }
    }
    let order = ``;
    if (includeSalePrice) {
      switch (target[0].value) {
        case "Tavern":
          query += `salePrice_not: null`;
          order += "orderBy: salePrice";
          break;
        case "Hire":
          query += `assistingPrice_not: null`;
          order += "orderBy: assistingPrice";
          break;
        case "All":
          break;
      }
    }

    setFilter(query, order);
  };
  return (
    <>
      {visible && (
        <Container>
          <Grid
            container
            item
            marginY={1}
            justifyContent="center"
            columnSpacing={2}
          >
            <Grid item>
              <Button
                variant="contained"
                color={section == "Main" ? "primary" : "secondary"}
                onClick={() => setSection("Main")}
              >
                Main
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color={section == "Cosmetic" ? "primary" : "secondary"}
                onClick={() => setSection("Cosmetic")}
              >
                Cosmetic
              </Button>
            </Grid>
          </Grid>
          {section == "Cosmetic" && (
            <Grid container columnSpacing={2}>
              {fFName.length == 0 && (
                <SelectItem
                  title="Male First Names"
                  values={mFName}
                  setValues={setMFName}
                >
                  {maleFirstNames.map((n, i) => {
                    return { value: i, label: n };
                  })}
                </SelectItem>
              )}
              {mFName.length == 0 && (
                <SelectItem
                  title="Female First Names"
                  values={fFName}
                  setValues={setFFName}
                >
                  {femaleFirstNames.map((n, i) => {
                    return { value: i, label: n };
                  })}
                </SelectItem>
              )}
              <SelectItem title="Last Name" values={lName} setValues={setLName}>
                {lastNames.map((n, i) => {
                  return { value: i, label: n };
                })}
              </SelectItem>
            </Grid>
          )}
          {section == "Main" && (
            <Grid container columnSpacing={3}>
              {includeSalePrice && (
                <SelectItemSingle
                  title="I want to ... heroes"
                  clearable={false}
                  values={target}
                  setValues={setTarget}
                >
                  {Targets}
                </SelectItemSingle>
              )}
              <SelectItem
                title="Class"
                values={mainClass}
                setValues={setMainClass}
              >
                {DFKBase.Classes}
              </SelectItem>
              <SelectItem
                title="Subclass"
                values={subClass}
                setValues={setSubClass}
              >
                {DFKBase.Classes}
              </SelectItem>
              <SelectItem
                title="Background"
                values={background}
                setValues={setBackground}
              >
                {DFKBase.Backgrounds}
              </SelectItem>
              <SelectItem
                title="Profession"
                values={professions}
                setValues={setProfessions}
              >
                {DFKBase.Professions}
              </SelectItem>
              <SelectItemSingle
                title="PJ Status"
                values={PJ}
                setValues={setPJ}
                clearable={true}
              >
                {DFKBase.PJSurvivor}
              </SelectItemSingle>
              <SelectItem
                title="Active 1"
                values={active1}
                setValues={setActive1}
              >
                {Skills}
              </SelectItem>
              <SelectItem
                title="Active 2"
                values={active2}
                setValues={setActive2}
              >
                {Skills}
              </SelectItem>
              <SelectItem
                title="Passive 1"
                values={passive1}
                setValues={setPassive1}
              >
                {Skills}
              </SelectItem>
              <SelectItem
                title="Passive 2"
                values={passive2}
                setValues={setPassive2}
              >
                {Skills}
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
              <RaritySlider rarity={rarity} setRarity={setRarity} />
              <NumberSlider
                title={"Generation"}
                value={generation}
                setValue={setGeneration}
                min={0}
                max={14}
                marks={[
                  {
                    value: 0,
                    label: <div style={{ fontSize: "11px" }}>0</div>,
                  },
                  {
                    value: 1,
                    label: <div style={{ fontSize: "11px" }}>1</div>,
                  },
                  {
                    value: 2,
                    label: <div style={{ fontSize: "11px" }}>2</div>,
                  },
                  {
                    value: 3,
                    label: <div style={{ fontSize: "11px" }}>3</div>,
                  },
                  {
                    value: 4,
                    label: <div style={{ fontSize: "11px" }}>4</div>,
                  },
                  {
                    value: 5,
                    label: <div style={{ fontSize: "11px" }}>5</div>,
                  },
                  {
                    value: 6,
                    label: <div style={{ fontSize: "11px" }}>6</div>,
                  },
                  {
                    value: 7,
                    label: <div style={{ fontSize: "11px" }}>7</div>,
                  },
                  {
                    value: 8,
                    label: <div style={{ fontSize: "11px" }}>8</div>,
                  },
                  {
                    value: 9,
                    label: <div style={{ fontSize: "11px" }}>9</div>,
                  },
                  {
                    value: 10,
                    label: <div style={{ fontSize: "11px" }}>10</div>,
                  },
                  {
                    value: 11,
                    label: <div style={{ fontSize: "11px" }}>11</div>,
                  },
                  {
                    value: 12,
                    label: <div style={{ fontSize: "11px" }}>12</div>,
                  },
                  {
                    value: 13,
                    label: <div style={{ fontSize: "11px" }}>13</div>,
                  },
                  {
                    value: 14,
                    label: <div style={{ fontSize: "11px" }}>14</div>,
                  },
                ]}
              />
              <NumberSlider
                title={"Summons"}
                min={0}
                max={10}
                value={summons}
                setValue={setSummons}
                marks={[
                  {
                    value: 0,
                    label: <div style={{ fontSize: "11px" }}>0</div>,
                  },
                  {
                    value: 1,
                    label: <div style={{ fontSize: "11px" }}>1</div>,
                  },
                  {
                    value: 2,
                    label: <div style={{ fontSize: "11px" }}>2</div>,
                  },
                  {
                    value: 3,
                    label: <div style={{ fontSize: "11px" }}>3</div>,
                  },
                  {
                    value: 4,
                    label: <div style={{ fontSize: "11px" }}>4</div>,
                  },
                  {
                    value: 5,
                    label: <div style={{ fontSize: "11px" }}>5</div>,
                  },
                  {
                    value: 6,
                    label: <div style={{ fontSize: "11px" }}>6</div>,
                  },
                  {
                    value: 7,
                    label: <div style={{ fontSize: "11px" }}>7</div>,
                  },
                  {
                    value: 8,
                    label: <div style={{ fontSize: "11px" }}>8</div>,
                  },
                  {
                    value: 9,
                    label: <div style={{ fontSize: "11px" }}>9</div>,
                  },
                  {
                    value: 10,
                    label: <div style={{ fontSize: "11px" }}>10</div>,
                  },
                ]}
              />
              <NumberSlider
                title={"Level"}
                value={level}
                setValue={setLevel}
                marks={[
                  { value: 1, label: 1 },
                  { value: 25, label: 25 },
                  { value: 50, label: 50 },
                  { value: 75, label: 75 },
                  { value: 100, label: 100 },
                ]}
                min={1}
                max={100}
              />
              {includeSalePrice && (
                <>
                  <Grid item xs={12} sm={6} md={4} xl={3}>
                    <InputLabel htmlFor="minPrice" className="text-white">
                      Min Price
                    </InputLabel>
                    <Input
                      placeholder="0"
                      value={minSalePrice}
                      id="minPrice"
                      onChange={(e) => setMinSalePrice(e.target.value)}
                      onBlur={(e) => startUpdateTimer()}
                      sx={{ width: "100%" }}
                      type="number"
                      startAdornment={
                        <InputAdornment position="start" sx={{ width: "30px" }}>
                          <Image
                            src={Jewel}
                            alt="Jewel"
                            width={24}
                            height={24}
                          ></Image>
                        </InputAdornment>
                      }
                    ></Input>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={3}>
                    <InputLabel htmlFor="minPrice" className="text-white">
                      Max Price
                    </InputLabel>
                    <Input
                      placeholder="9999999"
                      value={maxSalePrice}
                      id="maxPrice"
                      onChange={(e) => setMaxSalePrice(e.target.value)}
                      onBlur={(e) => startUpdateTimer()}
                      sx={{ width: "100%" }}
                      type="number"
                      startAdornment={
                        <InputAdornment position="start" sx={{ width: "30px" }}>
                          <Image
                            src={Jewel}
                            alt="Jewel"
                            width={24}
                            height={24}
                          ></Image>
                        </InputAdornment>
                      }
                    ></Input>
                  </Grid>
                </>
              )}
              <IdInput
                value={idInput}
                setValue={(val) => {
                  setIdInput(val);
                  setTarget([Targets[0]]);
                }}
              />
            </Grid>
          )}
          <Grid
            container
            item
            columnSpacing={2}
            marginY={1}
            justifyContent={"center"}
          >
            <Grid item>
              <Button
                variant="contained"
                color="success"
                onClick={() => UpdateQuery()}
              >
                Search
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ marginLeft: ".5rem" }}
                variant="contained"
                color="secondary"
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
export default HeroFilters;
