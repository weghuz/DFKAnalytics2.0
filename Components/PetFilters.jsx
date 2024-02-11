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
import PetBonusSlider from "./PetFilters/PetBonusSlider"
import PetRaritySlider from "./PetFilters/PetRaritySlider"
import Jade from "../public/Jade.png"
import Image from "next/image"
import IdInput from "./Filters/IdInput"
import SelectItem from "./Filters/SelectItem"
import {
  PetBackgrounds,
  PetEggTypes,
  PetElements,
  PetProfessionBonusNames
} from "../Logic/PetDropdownOptions"
import NumberSlider from "./Filters/NumberSlider"
import Pet03StarSlider from "./PetFilters/Pet03StarSlider"

export default function PetFilters({
  visible,
  useStore,
  includeSalePrice,
  initiate
}) {
  const minSalePrice = useStore((state) => state.minSalePrice)
  const setMinSalePrice = useStore((state) => state.setMinSalePrice)
  const maxSalePrice = useStore((state) => state.maxSalePrice)
  const setMaxSalePrice = useStore((state) => state.setMaxSalePrice)
  const bonusCount = useStore((state) => state.bonusCount)
  const setBonusCount = useStore((state) => state.setBonusCount)
  const combatBonus = useStore((state) => state.combatBonus)
  const setCombatBonus = useStore((state) => state.setCombatBonus)
  const craftBonus = useStore((state) => state.craftBonus)
  const setCraftBonus = useStore((state) => state.setCraftBonus)
  const profBonus = useStore((state) => state.profBonus)
  const setProfBonus = useStore((state) => state.setProfBonus)
  const profBonusName = useStore((state) => state.profBonusName)
  const setProfBonusName = useStore((state) => state.setProfBonusName)
  const rarity = useStore((state) => state.rarity)
  const setRarity = useStore((state) => state.setRarity)
  const idInput = useStore((state) => state.idInput)
  const setIdInput = useStore((state) => state.setIdInput)
  const eggType = useStore((state) => state.eggType)
  const setEggType = useStore((state) => state.setEggType)
  const element = useStore((state) => state.element)
  const setElement = useStore((state) => state.setElement)
  const background = useStore((state) => state.background)
  const setBackground = useStore((state) => state.setBackground)
  const forSale = useStore((state) => state.forSale)
  const setForSale = useStore((state) => state.setForSale)
  const currentRealm = useStore((state) => state.currentRealm)
  const setCurrentRealm = useStore((state) => state.setCurrentRealm)
  const clearFilters = useStore((state) => state.clearFilters)
  const setFilter = useStore((state) => state.setFilter)
  const pets = useStore((state) => state.pets)
  /* mapping from: https://devs.defikingdoms.com/nfts/pets#gathering-profession-bonus */
  const bonusMap = [
    /* 0-star values */
    [ 0, 10000, 20000, 30000, 40000, 50000, 60000, 70000 ],
    /* 1-star values */
    [
          1,     2,     3,     4,     5,     6,     7,     8,     9,    10,    11,
      10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009, 10010, 10011,
      20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011,
      30001, 30002, 30003, 30004, 30005, 30006, 30007, 30008, 30009, 30010, 30011,
      40001, 40002, 40003, 40004, 40005, 40006, 40007, 40008, 40009, 40010, 40011,
      50001, 50002, 50003, 50004, 50005, 50006, 50007, 50008, 50009, 50010, 50011,
      60001, 60002, 60003, 60004, 60005, 60006, 60007, 60008, 60009, 60010, 60011,
      70001, 70002, 70003, 70004, 70005, 70006, 70007, 70008, 70009, 70010, 70011,
    ],
    /* 2-star values */
    [
         80,    81,    82,    83,    84,    85,    86,    87,    88,    89,    90,
      10080, 10081, 10082, 10083, 10084, 10085, 10086, 10087, 10088, 10089, 10090,
      20080, 20081, 20082, 20083, 20084, 20085, 20086, 20087, 20088, 20089, 20090,
      30080, 30081, 30082, 30083, 30084, 30085, 30086, 30087, 30088, 30089, 30090,
      40080, 40081, 40082, 40083, 40084, 40085, 40086, 40087, 40088, 40089, 40090,
      50080, 50081, 50082, 50083, 50084, 50085, 50086, 50087, 50088, 50089, 50090,
      60080, 60081, 60082, 60083, 60084, 60085, 60086, 60087, 60088, 60089, 60090,
      70080, 70081, 70082, 70083, 70084, 70085, 70086, 70087, 70088, 70089, 70090,
    ],
    /* 3-star values */
    [
        160,   161,   162,   163,   164,   165,   166,   167,   168,   169,   170,   171,
      10160, 10161, 10162, 10163, 10164, 10165, 10166, 10167, 10168, 10169, 10170, 10171,
      20160, 20161, 20162, 20163, 20164, 20165, 20166, 20167, 20168, 20169, 20170, 20171,
      30160, 30161, 30162, 30163, 30164, 30165, 30166, 30167, 30168, 30169, 30170, 30171,
      40160, 40161, 40162, 40163, 40164, 40165, 40166, 40167, 40168, 40169, 40170, 40171,
      50160, 50161, 50162, 50163, 50164, 50165, 50166, 50167, 50168, 50169, 50170, 50171,
      60160, 60161, 60162, 60163, 60164, 60165, 60166, 60167, 60168, 60169, 60170, 60171,
      70160, 70161, 70162, 70163, 70164, 70165, 70166, 70167, 70168, 70169, 70170, 70171,
    ],
  ]
  useEffect(() => {
    if (pets.length == 0 && initiate) {
      UpdateQuery()
    }
  }, [])
  const GetBonusValues = (minStars, maxStars) => {
    let values = ``
    for (let i = 0; i <= 3; i++) {
      if (i >= minStars && i <= maxStars) {
        if (values != ``) {
          values += `,`
        }
        values += bonusMap[i].join(",")
      }
    }
    return values
  }
  const UpdateQuery = () => {
    let filters = ``,
      order = ``
    if (forSale && includeSalePrice) {
      filters += `salePrice_not:null,`
      order = `orderBy:salePrice`
    } else {
      order = `orderBy:id`
    }
    console.log(eggType)
    if (eggType.length > 0) {
      filters += `eggType_in: [`
      eggType.forEach((c, i) => {
        filters += `${c.value}`
        if (i < eggType.length - 1) {
          filters += `,`
        }
      })
      filters += `],`
    }
    if (element.length > 0) {
      filters += `element_in: [`
      element.forEach((c, i) => {
        filters += `${c.value}`
        if (i < element.length - 1) {
          filters += `,`
        }
      })
      filters += `],`
    }
    if (background.length > 0) {
      filters += `background_in: [`
      background.forEach((c, i) => {
        filters += `${c.value}`
        if (i < background.length - 1) {
          filters += `,`
        }
      })
      filters += `],`
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
    let profBonusFilter = []
    let profBonusFilter1 = ``
    let profBonusFilter2 = ``
    if (profBonus[0] > 1 || profBonus[1] < 3) {
      profBonusFilter1 = GetBonusValues(profBonus[0], profBonus[1])
    }
    if (profBonusName.length > 0) {
      profBonusName.forEach((c, i) => {
        profBonusFilter2 += `${c.value}`
        if (i < profBonusName.length - 1) {
          profBonusFilter2 += `,`
        }
      })
    }
    if ((profBonusFilter1.length > 0) && (profBonusFilter2.length > 0)) {
      // Merge where both values exist
      profBonusFilter = profBonusFilter1.split(",").filter(v => profBonusFilter2.split(",").indexOf(v) > -1)
      // if none match set to an empty query
      if (profBonusFilter.length == 0) {
        profBonusFilter = [ 0 ]
      }
    }
    else if (profBonusFilter1.length > 0) {
      profBonusFilter = profBonusFilter1.split(",")
    }
    else if (profBonusFilter2.length > 0) {
      profBonusFilter = profBonusFilter2.split(",")
    }
    if (profBonusFilter.length > 0) {
      filters += `profBonus_in:[${profBonusFilter.join(",")}],`
    }
    if (craftBonus[0] > 0 || craftBonus[1] < 3) {
      filters += `craftBonus_in:[${GetBonusValues(craftBonus[0], craftBonus[1])}],`
    }
    if (bonusCount[0] !== 1) {
      filters += `bonusCount_gte:${bonusCount[0]},`
    }
    if (bonusCount[1] !== 3) {
      filters += `bonusCount_lte:${bonusCount[1]},`
    }
    if (combatBonus[0] > 0 || combatBonus[1] < 3) {
      filters += `combatBonus_in:[${GetBonusValues(combatBonus[0], combatBonus[1])}],`
    }
    if (rarity[0] !== 0) {
      filters += `rarity_gte: ${rarity[0]},`
    }
    if (rarity[1] !== 4) {
      filters += `rarity_lte:${rarity[1]},`
    }
    if (idInput.length > 0) {
      console.log(idInput)
      let splitIds = idInput.split(/,| |\n/)
      let addys = splitIds.filter((id) => id.length == 42)
      let petId = splitIds.filter(
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
        } else if (petId.length != 0) {
          console.log("petId", petId)
          filters += "id_in: ["
          petId.forEach((id, i) => {
            filters += `"${id}"`
            if (i < petId.length - 1) {
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
                { value: "CRY", label: "CRY" }
              ]}
            </SelectItem>
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
            <SelectItem
              title={"Prof. Bonus Name"}
              values={profBonusName}
              setValues={setProfBonusName}
            >
              {PetProfessionBonusNames}
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
                  label: <div>1</div>
                },
                {
                  value: 2,
                  label: <div>2</div>
                },
                {
                  value: 3,
                  label: <div>3</div>
                }
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
                          src={Jade}
                          alt="Jade"
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
                          src={Jade}
                          alt="Jade"
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
