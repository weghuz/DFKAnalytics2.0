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
import React, { useEffect } from "react";
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
import Pet03StarSlider from "./PetFilters/Pet03StarSlider";

export default function PetFilters({ visible, useStore, includeSalePrice }) {
  const minSalePrice = useStore((state) => state.minSalePrice);
  const setMinSalePrice = useStore((state) => state.setMinSalePrice);
  const maxSalePrice = useStore((state) => state.maxSalePrice);
  const setMaxSalePrice = useStore((state) => state.setMaxSalePrice);
  const bonusCount = useStore((state) => state.bonusCount);
  const setBonusCount = useStore((state) => state.setBonusCount);
  const combatBonus = useStore((state) => state.combatBonus);
  const setCombatBonus = useStore((state) => state.setCombatBonus);
  const craftBonus = useStore((state) => state.craftBonus);
  const setCraftBonus = useStore((state) => state.setCraftBonus);
  const profBonus = useStore((state) => state.profBonus);
  const setProfBonus = useStore((state) => state.setProfBonus);
  const rarity = useStore((state) => state.rarity);
  const setRarity = useStore((state) => state.setRarity);
  const idInput = useStore((state) => state.idInput);
  const setIdInput = useStore((state) => state.setIdInput);
  const eggType = useStore((state) => state.eggType);
  const setEggType = useStore((state) => state.setEggType);
  const element = useStore((state) => state.element);
  const setElement = useStore((state) => state.setElement);
  const background = useStore((state) => state.background);
  const setBackground = useStore((state) => state.setBackground);
  const forSale = useStore((state) => state.forSale);
  const setForSale = useStore((state) => state.setForSale);
  const clearFilters = useStore((state) => state.clearFilters);
  const setFilter = useStore((state) => state.setFilter);
  const pets = useStore((state) => state.pets);
  const bonusMap = [0, 1, 80, 160];
  useEffect(() => {
    if (pets.length == 0) {
      UpdateQuery();
    }
  }, []);
  const UpdateQuery = () => {
    let filters = ``,
      order = ``;
    if (forSale && includeSalePrice) {
      filters += `salePrice_not:null,`;
      order = `orderBy:salePrice`;
    } else {
      order = `orderBy:id`;
    }
    console.log(eggType);
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
      filters += `profBonus_gte:${bonusMap[profBonus[0]]},`;
    }
    if (profBonus[1] !== 3) {
      filters += `profBonus_lte:${bonusMap[profBonus[1]]},`;
    }
    if (craftBonus[0] !== 0) {
      filters += `craftBonus_gte:${bonusMap[craftBonus[0]]},`;
    }
    if (craftBonus[1] !== 3) {
      filters += `craftBonus_lte:${bonusMap[craftBonus[1]]},`;
    }
    if (bonusCount[0] !== 1) {
      filters += `bonusCount_gte:${bonusCount[0]},`;
    }
    if (bonusCount[1] !== 3) {
      filters += `bonusCount_lte:${bonusCount[1]},`;
    }
    if (combatBonus[0] !== 0) {
      filters += `combatBonus_gte: ${combatBonus[0]},`;
    }
    if (combatBonus[1] !== 3) {
      filters += `combatBonus_lte:${combatBonus[1]},`;
    }
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
    setFilter(filters, order);
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
              setRarity={setRarity}
              rarity={rarity}
            ></PetRaritySlider>
            <NumberSlider
              value={bonusCount}
              setValue={setBonusCount}
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
            ></NumberSlider>
            <PetBonusSlider
              bonusName={"Profession"}
              value={profBonus}
              setValue={setProfBonus}
            ></PetBonusSlider>
            <Pet03StarSlider
              bonusName={"Crafting"}
              value={craftBonus}
              setValue={setCraftBonus}
            ></Pet03StarSlider>
            <Pet03StarSlider
              bonusName={"Combat"}
              value={combatBonus}
              setValue={setCombatBonus}
            ></Pet03StarSlider>
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
                  onClick={clearFilters}
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
