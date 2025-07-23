import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Input,
  InputAdornment,
  InputLabel
} from "@mui/material"
import React, { useEffect } from "react"
import EquipmentRaritySlider from "./EquipmentFilters/EquipmentRaritySlider"
import Jewel from "../public/Jewel.png"
import Image from "next/image"
import IdInput from "./Filters/IdInput"
import SelectItem from "./Filters/SelectItem"
import NumberSlider from "./Filters/NumberSlider"

export const WeaponTypes = [
  { value: 1,  label: "1H Axe" },
  { value: 2,  label: "2H Axe" },
  { value: 3,  label: "Bow" },
  { value: 4,  label: "Dagger" },
  { value: 5,  label: "Gloves" },
  { value: 6,  label: "1H Mace" },
  { value: 7,  label: "2H Mace" },
  { value: 8,  label: "1H Spear" },
  { value: 9,  label: "2H Spear" },
  { value: 10, label: "Staff" },
  { value: 11, label: "1H Sword" },
  { value: 12, label: "2H Sword" },
  { value: 13, label: "Wand" }
]

export default function WeaponFilters({
  visible,
  useStore,
  includeSalePrice,
  initiate
}) {
  const currentRealm = useStore((state) => state.currentRealm)
  const setCurrentRealm = useStore((state) => state.setCurrentRealm)
  const rarity = useStore((state) => state.rarity)
  const setRarity = useStore((state) => state.setRarity)
  const weaponType = useStore((state) => state.weaponType)
  const setWeaponType = useStore((state) => state.setWeaponType)
  const minSalePrice = useStore((state) => state.minSalePrice)
  const setMinSalePrice = useStore((state) => state.setMinSalePrice)
  const maxSalePrice = useStore((state) => state.maxSalePrice)
  const setMaxSalePrice = useStore((state) => state.setMaxSalePrice)
  const idInput = useStore((state) => state.idInput)
  const setIdInput = useStore((state) => state.setIdInput)
  const forSale = useStore((state) => state.forSale)
  const setForSale = useStore((state) => state.setForSale)

  const clearFilters = useStore((state) => state.clearFilters)
  const setFilter = useStore((state) => state.setFilter)
  const weapons = useStore((state) => state.weapons)
  useEffect(() => {
    if (weapons.length == 0 && initiate) {
      UpdateQuery()
    }
  }, [])
  const UpdateQuery = () => {
    /* Exclude Visages */
    let filters = `rarity_not_in:[10,11,12],`,
      order = ``
    if (forSale && includeSalePrice) {
      filters += `salePrice_not:null,`
      order = `orderBy:salePrice`
    } else {
      order = `orderBy:id`
    }
    if (currentRealm.length > 0) {
      filters += `currentRealm_in: [`
      currentRealm.forEach((c, i) => {
        filters += `"${c.value}"`
        if (i < currentRealm.length - 1) {
          filters += `,`
        }
      })
      filters += `],`
    }
    if (rarity[0] !== 0) {
      filters += `rarity_gte: ${rarity[0]},`
    }
    if (rarity[1] !== 4) {
      filters += `rarity_lte:${rarity[1]},`
    }
    if (weaponType.length > 0) {
      filters += `weaponType_in: [`
      weaponType.forEach((c, i) => {
        filters += `${c.value}`
        if (i < weaponType.length - 1) {
          filters += `,`
        }
      })
      filters += `],`
    }
    if (idInput.length > 0) {
      console.log(idInput)
      let splitIds = idInput.split(/,| |\n/)
      let addys = splitIds.filter((id) => id.length == 42)
      let equipmentId = splitIds.filter(
        (id) =>
          id.length < 42 &&
          id.length > 0 &&
          (!isNaN(parseInt(id)) || !isNaN(id))
      )
      if (idInput.length > 0) {
        console.log(addys.length)
        if (addys.length != 0) {
          filters += "owner: "
          console.log("addys", addys)
          filters += `"${addys[0]}",`
        } else if (equipmentId.length != 0) {
          console.log("equipmentId", equipmentId)
          filters += "id_in: ["
          equipmentId.forEach((id, i) => {
            filters += `"${id}"`
            if (i < equipmentId.length - 1) {
              filters += ","
            }
          })
          filters += "],"
        }
      }
    }
    if (minSalePrice !== 0) {
      switch (forSale) {
        case true:
          filters += "salePrice_gte: "
          filters += `"${minSalePrice}000000000000000000",`
          break
        default:
          break
      }
    }
    if (maxSalePrice !== 9999999) {
      switch (forSale) {
        case true:
          filters += "salePrice_lte: "
          filters += `"${maxSalePrice}000000000000000000",`
          break
        default:
          break
      }
    }
    setFilter(filters, order)
  }
  return (
    <>
      {visible && (
        <Container>
          <Grid container columnSpacing={4}>
            <SelectItem
              title={"Current Realm"}
              values={currentRealm}
              setValues={setCurrentRealm}
            >
              {[
                { value: "SER1", label: "SER1" },
                { value: "SER2", label: "SER2" },
                { value: "CRY", label: "CRY" },
                { value: "SUN", label: "SUN" }
              ]}
            </SelectItem>
            <SelectItem
              title={"Weapon Type"}
              values={weaponType}
              setValues={setWeaponType}
            >
              {WeaponTypes}
            </SelectItem>
            <EquipmentRaritySlider
              setRarity={setRarity}
              rarity={rarity}
            ></EquipmentRaritySlider>
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
                        <Image src={Jewel} alt="Jewel" width={24} height={24}></Image>
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
                        <Image src={Jewel} alt="Jewel" width={24} height={24}></Image>
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
              label={
                "Searching multiple wallets in the API doesn't work correctly. You can only search one 0x at a time. And multiple IDs. You can't search both IDs and Wallets at the same time."
              }
              setValue={setIdInput}
            ></IdInput>
            {includeSalePrice && (
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="For Sale"
                  checked={forSale}
                  onChange={(e) => {
                    setForSale(e.target.checked)
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
                  onClick={() => {
                    let splitIds = idInput.split(/,| |\n/)
                    let addys = splitIds.filter((id) => {
                      return id.length === 42
                    })
                    let ids = splitIds.filter((id) => {
                      return id.trim() && id.length !== 42
                    })
                    console.log(ids)
                    ids = ids.map((v, i) => {
                      if (Number(v) < 1000000000000) {
                        console.log(v + 1000000000000, v)
                        return Number(v) + 1000000000000
                      }
                      console.log(v)
                      return Number(v) - 1000000000000
                    })
                    setIdInput(
                      `${addys.toString()}${
                        addys.length && ids.length ? `,` : ``
                      }${ids.toString()}`
                    )
                  }}
                >
                  Convert IDS
                </Button>
              </Grid>
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
  )
}
