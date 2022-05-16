import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  forwardRef,
} from "react";
import DFKBase, { PJSurvivor, Skills, Targets } from "../Logic/Dropdowns";
import Image from "next/image";
import Jewel from "../public/Jewel.png";
import SelectItem from "./Filters/SelectItem";
import RaritySlider from "./Filters/RaritySlider";
import NumberSlider from "./Filters/NumberSlider";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import RequestContext from "../Context/Context";
import SelectItemSingle from "./Filters/SelectItemSingle";
import { femaleFirstNames, lastNames, maleFirstNames } from "../Logic/HeroBase";
import IdInput from "./Filters/IdInput";
import { useTheme } from "@mui/system";

const HeroFilters = function HeroFilters({ includeSalePrice, visible }) {
  const theme = useTheme();
  const [mainClass, setMainClass] = useState([]);
  const [subClass, setSubClass] = useState([]);
  const [professions, setProfessions] = useState([]);
  const [SB1, setSB1] = useState([]);
  const [SB2, setSB2] = useState([]);
  const [target, setTarget] = useState([{ label: "Buy", value: "Tavern" }]);
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
  const [idInput, setIdInput] = useState("");
  const [updateTimeout, setUpdateTimeout] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [autoUpdate, setAutoUpdate] = useState(true);
  const [initiated, setInitiated] = useState(false);
  const [active1, setActive1] = useState([]);
  const [active2, setActive2] = useState([]);
  const [Passive1, setPassive1] = useState([]);
  const [Passive2, setPassive2] = useState([]);
  const [section, setSection] = useState("Main");
  const queryContext = useContext(RequestContext);
  const clearRarity = useRef(null);
  const clearGeneration = useRef(null);
  const clearSummons = useRef(null);
  const clearLevel = useRef(null);
  const UpdateCountDown = (cd) => {
    if (cd <= 0) {
      UpdateQuery();
      return;
    }
    setUpdateTimeout(
      setTimeout(() => {
        cd -= 1;
        setCountdown(cd);
        console.log(cd);
        UpdateCountDown(cd);
      }, 1000)
    );
  };

  const UpdateQuery = (forceUpdate) => {
    clearTimeout(updateTimeout);
    setCountdown(0);
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
    if (Passive1.length > 0) {
      query += `passive1_in: [`;
      Passive1.forEach((c, i) => {
        query += `"${c.value}"`;
        if (i < Passive1.length - 1) {
          query += `,`;
        }
      });
      query += `],`;
    }
    if (Passive2.length > 0) {
      query += `passive2_in: [`;
      Passive2.forEach((c, i) => {
        query += `"${c.value}"`;
        if (i < Passive2.length - 1) {
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
            break;
          case "Hire":
            query += "assistingPrice_gte: ";
            break;
          case "All":
            break;
        }
        query += `"${minSalePrice}000000000000000000",`;
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
      console.log(idInput);

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
    if (includeSalePrice) {
      switch (target[0].value) {
        case "Tavern":
          query += "salePrice_not: null} orderBy: salePrice";
          break;
        case "Hire":
          query += "assistingPrice_not: null}  orderBy: assistingPrice";
          break;
        case "All":
          if (query.length > 0) {
            query += "}";
          }
          break;
      }
    } else {
      query += "}";
    }
    console.log(query);
    if (forceUpdate || queryContext.query.query !== query) {
      queryContext.setQuery({ ...queryContext.query, query });
      console.log(queryContext.query.query);
    }
  };
  const startUpdateTimer = () => {
    if (autoUpdate) {
      clearTimeout(updateTimeout);
      setCountdown(3);
      UpdateCountDown(3);
    }
  };
  useEffect(() => {
    if (autoUpdate && initiated) {
      startUpdateTimer();
    } else {
      clearTimeout(updateTimeout);
      setCountdown(0);
    }
  }, [autoUpdate]);

  useEffect(() => {
    if (initiated) {
      startUpdateTimer();
    } else {
      UpdateQuery(true);
      setInitiated(true);
    }
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
    idInput,
    active1,
    active2,
    Passive1,
    Passive2,
    target,
  ]);
  const ClearFilters = () => {
    setMainClass([]);
    setSubClass([]);
    setProfessions([]);
    setSB1([]);
    setSB2([]);
    setTarget([{ label: "Buy", value: "Tavern" }]);
    setPJ([]);
    setRarity([0, 4]);
    setGeneration([0, 14]);
    setSummons([0, 10]);
    setLevel([0, 100]);
    if (includeSalePrice) {
      setMinSalePrice(0);
      setMaxSalePrice(9999999);
    }
    clearRarity.current();
    clearGeneration.current();
    clearSummons.current();
    clearLevel.current();
    setFFName([]);
    setMFName([]);
    setLName([]);
    setActive1([]);
    setActive2([]);
    setPassive1([]);
    setPassive2([]);
    setIdInput("");
  };
  return (
    <Container sx={{ display: `${visible ? "none" : "inherit"}` }}>
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
        <Grid container columnSpacing={3}>
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
        <Grid container columnSpacing={3} rowSpacing={1}>
          {includeSalePrice && (
            <SelectItemSingle
              title="I want to ... heroes"
              values={target}
              setValues={setTarget}
            >
              {Targets}
            </SelectItemSingle>
          )}
          <SelectItem title="Class" values={mainClass} setValues={setMainClass}>
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
            title="Profession"
            values={professions}
            setValues={setProfessions}
          >
            {DFKBase.Professions}
          </SelectItem>
          <SelectItemSingle title="PJ Status" values={PJ} setValues={setPJ}>
            {DFKBase.PJSurvivor}
          </SelectItemSingle>
          <SelectItem title="Active 1" values={active1} setValues={setActive1}>
            {Skills}
          </SelectItem>
          <SelectItem title="Active 2" values={active2} setValues={setActive2}>
            {Skills}
          </SelectItem>
          <SelectItem
            title="Passive 1"
            values={Passive1}
            setValues={setPassive1}
          >
            {Skills}
          </SelectItem>
          <SelectItem
            title="Passive 2"
            values={Passive2}
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
          <RaritySlider
            setQueryRarity={setRarity}
            clear={(clearFunc) => (clearRarity.current = clearFunc)}
          />
          <NumberSlider
            title={"Generation"}
            clear={(clearFunc) => (clearGeneration.current = clearFunc)}
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
            clear={(clearFunc) => (clearSummons.current = clearFunc)}
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
            clear={(clearFunc) => (clearLevel.current = clearFunc)}
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
          <Grid item xs={12} sm={6} md={4} xl={3}>
            <FormControlLabel
              control={<Checkbox />}
              label="Auto Update"
              checked={autoUpdate}
              onChange={(e) => {
                setAutoUpdate(e.target.checked);
              }}
            />
          </Grid>
          <IdInput
            value={idInput}
            setValue={(val) => {
              setIdInput(val);
              setTarget([Targets[0]]);
            }}
          />
        </Grid>
      )}
      <Grid container item columnSpacing={2} marginY={1} justifyContent={"center"}>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            onClick={() => UpdateQuery(true)}
          >
            Search
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ marginLeft: ".5rem" }}
            variant="contained"
            color="secondary"
            onClick={ClearFilters}
          >
            Clear Filters
          </Button>
        </Grid>
      </Grid>
      <Typography
        variant="h5"
        marginY={1}
        color={theme.palette.success.main}
        align="center"
      >
        {countdown > 0 ? `Autoupdating in ${countdown}` : ""}
      </Typography>
    </Container>
  );
};
HeroFilters.defaultProps = {
  onSaleDefault: true,
  includeSalePrice: false,
  visible: true,
};

export default HeroFilters;
