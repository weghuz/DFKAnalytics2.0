import BlueEgg from "../public/Pet/Eggs/BlueEgg.png"
import GreyEgg from "../public/Pet/Eggs/GreyEgg.png"
import Image from "next/image"
export const PetBackgrounds = [
  { value: 0, label: "Stillwood Meadow" },
  { value: 1, label: "Forest Trail" },
  { value: 2, label: "Swamp of Eoxis" },
  { value: 3, label: "Vithraven Outskirts" },
  { value: 4, label: "Path of Fire" },
  { value: 5, label: "Reyalin Mountain Pass" },
  { value: 6, label: "Adelyn Side Street" },
  { value: 7, label: "Bloater Falls" },
  { value: 8, label: "Haywood Farmstead" },
  { value: 9, label: "Inner Grove" },
  { value: 10, label: "Vuhlmira Ruins" }
]
export const PetElements = [
  { value: 0, label: "fire" },
  { value: 1, label: "water" },
  { value: 2, label: "earth" },
  { value: 3, label: "wind" },
  { value: 4, label: "lightning" },
  { value: 5, label: "ice" },
  { value: 6, label: "light" },
  { value: 7, label: "dark" }
]
export const PetEggTypes = [
  {
    value: 0,
    label: <Image src={BlueEgg} layout={"fixed"} width={20} height={20} />
  },
  {
    value: 1,
    label: <Image src={GreyEgg} layout={"fixed"} width={20} height={20} />
  }
]
