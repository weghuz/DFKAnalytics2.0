import BlueEgg from "../public/Pet/Eggs/BlueEgg.png"
import GreyEgg from "../public/Pet/Eggs/GreyEgg.png"
import GreenEgg from "../public/Pet/Eggs/GreenEgg.png"
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
  },
  {
    value: 2,
    label: <Image src={GreenEgg} layout={"fixed"} width={20} height={20} />
  }
]
export const PetProfessionBonusNames = [
  { value: "1,80,160,10001,10080,10160,20001,20080,20160", label: "Unrevealed" },
  { value: "2,81,161", label: "Efficient Angler" },
  { value: "3,82,162", label: "Bountiful Catch" },
  { value: "4,83,163,10004,10083,10163", label: "Keen Eye" },
  { value: "5,84,164,10005,10084,10164", label: "Fortune Seeker" },
  { value: "6,85,165,10006,10085,10165,20005,20084,20164", label: "Clutch Collector" },
  { value: "7,86,166,10007,10086,10166,20006,20085,20165", label: "Runic Discoveries" },
  { value: "8,87,167", label: "Skilled Angler" },
  { value: "9,88,168", label: "Astute Angler" },
  { value: "10,89,169,10010,10089,10169,20009,20088,20168", label: "Bonus Bounty" },
  { value: "11,90,170,10011,10090,10170,20010,20089,20169", label: "Gaia's Chosen" },
  { value: "171", label: "Innate Angler" },
  { value: "10002,10081,10061", label: "Efficient Scavenger" },
  { value: "10003,10082,10162", label: "Bountiful Haul" },
  { value: "10008,10087,10167", label: "Skilled Scavenger" },
  { value: "10009,10088,10168", label: "Astute Scavenger" },
  { value: "10171", label: "Innate Scavenger" },
  { value: "20002,20081,20161", label: "Efficient Greenskeeper" },
  { value: "20003,20082,20162", label: "Bountiful Harvest" },
  { value: "20004,20083,20163", label: "Second Chance" },
  { value: "20007,20086,20166", label: "Skilled Greenskeeper" },
  { value: "20008,20087,20167", label: "Astute Greenskeeper" },
  { value: "20090,20170", label: "Power Surge" },
  { value: "20171", label: "Innate Greenskeeper" }
]
