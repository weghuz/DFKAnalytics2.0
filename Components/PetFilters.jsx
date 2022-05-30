import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import React, { useRef, useState } from "react";
import PetBonusSlider from "./PetFilters/PetBonusSlider";
import PetRaritySlider from "./PetFilters/PetRaritySlider";
import Jewel from "../public/Jewel.png";
import Image from "next/image";
import IdInput from "./Filters/IdInput";
import SelectItem from "./Filters/SelectItem";
import {
  PetBackgrounds,
  PetEggTypes,
  PetElements,
} from "../Logic/PetDropdownOptions";
import NumberSlider from "./Filters/NumberSlider";

export default function PetFilters({
  visible,
  includeSalePrice,
  setFilter,
  setOrder,
}) {
  const [minSalePrice, setMinSalePrice] = useState(0);
  const [maxSalePrice, setMaxSalePrice] = useState(9999999);
  const [bonusCount, setBonusCount] = useState([1, 3]);
  const [combatBonus, setCombatBonus] = useState([1, 3]);
  const [craftBonus, setCraftBonus] = useState([1, 3]);
  const [profBonus, setProfBonus] = useState([1, 3]);
  const [rarity, setRarity] = useState([0, 4]);
  const [idInput, setIdInput] = useState("");
  const [eggType, setEggType] = useState([]);
  const [element, setElement] = useState([]);
  const [background, setBackground] = useState([]);
  const [forSale, setForSale] = useState(includeSalePrice);
  const clearCombatBonus = useRef(null);
  const clearCraftBonus = useRef(null);
  const clearBonusCount = useRef(null);
  const clearProfBonus = useRef(null);
  const clearRarity = useRef(null);
  const bonusMap = [1, 80, 160];
  const UpdateQuery = () => {
    let filters = ``;
    if (forSale) {
      filters += `salePrice_not:null,`;
      setOrder(`orderBy:salePrice`);
    } else {
      setOrder(`orderBy:id`);
    }
    if (eggType.length > 0) {
      filters += `eggType_in: [`;
      eggType.forEach((c, i) => {
        filters += `${c.value}`;
        if (i < eggType.length - 1) {
          filters += `,`;
        }
      });
      filters += `],`;
    }
    if (element.length > 0) {
      filters += `element_in: [`;
      element.forEach((c, i) => {
        filters += `${c.value}`;
        if (i < element.length - 1) {
          filters += `,`;
        }
      });
      filters += `],`;
    }
    if (background.length > 0) {
      filters += `background_in: [`;
      background.forEach((c, i) => {
        filters += `${c.value}`;
        if (i < background.length - 1) {
          filters += `,`;
        }
      });
      filters += `],`;
    }

    if (profBonus[0] !== 1) {
      filters += `profBonus_gte:${bonusMap[profBonus[0] - 1]},`;
    }
    if (profBonus[1] !== 3) {
      filters += `profBonus_lte:${bonusMap[profBonus[1] - 1]},`;
    }
    if (craftBonus[0] !== 1) {
      filters += `craftBonus_gte:${bonusMap[craftBonus[0] - 1]},`;
    }
    if (craftBonus[1] !== 3) {
      filters += `craftBonus_lte:${bonusMap[craftBonus[1] - 1]},`;
    }
    if (bonusCount[0] !== 1) {
      filters += `bonusCount_gte:${bonusCount[0]},`;
    }
    if (bonusCount[1] !== 3) {
      filters += `bonusCount_lte:${bonusCount[1]},`;
    }
    // if (combatBonus[0] !== 0) {
    //   filters += `combatBonus_gte: ${combatBonus[0]},`;
    // }
    // if (combatBonus[1] !== 4) {
    //   filters += `combatBonus_lte:${combatBonus[1]},`;
    // }
    if (rarity[0] !== 0) {
      filters += `rarity_gte: ${rarity[0]},`;
    }
    if (rarity[1] !== 4) {
      filters += `rarity_lte:${rarity[1]},`;
    }
    if (idInput.length > 0) {
      if (idInput.length > 0) {
        console.log(idInput);
        let splitIds = idInput.split(/,| |\n/);
        let addys = splitIds.filter((id) => id.length == 42);
        console.log(addys.length);
        if (addys.length != 0) {
          filters += "owner_in: [";
          console.log("addys", addys);
          addys.forEach((id) => {
            filters += `"${id}",`;
          });
          filters += "],";
        }
        let petId = splitIds.filter(
          (id) =>
            id.length < 42 &&
            id.length > 0 &&
            (!isNaN(parseInt(id)) || !isNaN(id))
        );
        if (petId.length != 0) {
          console.log("petId", petId);
          filters += "id_in: [";
          petId.forEach((id, i) => {
            filters += `"${id}"`;
            if (i < petId.length - 1) {
              filters += ",";
            }
          });
          filters += "],";
        }
      }
    }
    if (includeSalePrice) {
      if (minSalePrice !== 0) {
        switch (forSale) {
          case true:
            filters += "salePrice_gte: ";
            filters += `"${minSalePrice}000000000000000000",`;
            break;
          default:
            break;
        }
      }
      if (maxSalePrice !== 9999999) {
        switch (forSale) {
          case true:
            filters += "salePrice_lte: ";
            filters += `"${maxSalePrice}000000000000000000",`;
            break;
          default:
            break;
        }
      }
    }
    setFilter(filters);
  };
  const ClearFilters = () => {
    if (includeSalePrice) {
      setMinSalePrice(0);
      setMaxSalePrice(9999999);
    }
    setForSale(true);
    setRarity([0, 4]);
    clearRarity.current();
    clearProfBonus.current();
    clearCraftBonus.current();
    clearBonusCount.current();
    // clearCombatBonus.current();
    setIdInput("");
    setBonusCount([1, 3]);
    setProfBonus([1, 3]);
    setCraftBonus([1, 3]);
    setCombatBonus([1, 3]);
    setBackground([]);
    setEggType([]);
    setElement([]);
  };
  return (
    <>
      {visible && (
        <Container>
          <Grid container columnSpacing={4}>
            <SelectItem
              title={"Egg Type"}
              values={eggType}
              setValues={setEggType}
            >
              {PetEggTypes}
            </SelectItem>
            <SelectItem
              title={"Element"}
              values={element}
              setValues={setElement}
            >
              {PetElements}
            </SelectItem>
            <SelectItem
              title={"Background"}
              values={background}
              setValues={setBackground}
            >
              {PetBackgrounds}
            </SelectItem>
            <PetRaritySlider
              setQueryRarity={setRarity}
              clear={(clearFunc) => (clearRarity.current = clearFunc)}
            ></PetRaritySlider>
            <NumberSlider
              title={"Bonus Count"}
              min={1}
              max={3}
              marks={[
                {
                  value: 1,
                  label: <div>1</div>,
                },
                {
                  value: 2,
                  label: <div>2</div>,
                },
                {
                  value: 3,
                  label: <div>3</div>,
                },
              ]}
              clear={(clearFunc) => (clearBonusCount.current = clearFunc)}
              callback={setBonusCount}
            ></NumberSlider>
            <PetBonusSlider
              bonusName={"Profession"}
              setValue={setProfBonus}
              clear={(clearFunc) => (clearProfBonus.current = clearFunc)}
            ></PetBonusSlider>
            <PetBonusSlider
              bonusName={"Crafting"}
              setValue={setCraftBonus}
              clear={(clearFunc) => (clearCraftBonus.current = clearFunc)}
            ></PetBonusSlider>
            <PetBonusSlider
              disabled={true}
              bonusName={"(Not in API yet)Combat"}
              setValue={setCombatBonus}
              clear={(clearFunc) => (clearCombatBonus.current = clearFunc)}
            ></PetBonusSlider>
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
              sx={{ marginTop: "20px" }}
              callback={() => setForSale(false)}
              value={idInput}
              setValue={setIdInput}
            ></IdInput>
            {includeSalePrice && (
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="For Sale"
                  checked={forSale}
                  onChange={(e) => {
                    setForSale(e.target.checked);
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
                  onClick={ClearFilters}
                >
                  Clear Filters
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
