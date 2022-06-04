import { blueEggData } from "./blueEggData";
import { grayEggData } from "./grayEggData";
export const backgrounds = {
  0: "Stillwood Meadow",
  1: "Forest Trail",
  2: "Swamp of Eoxis",
  3: "Vithraven Outskirts",
  4: "Path of Fire",
  5: "Reyalin Mountain Pass",
  6: "Adelyn Side Street",
  7: "Bloater Falls",
  8: "Haywood Farmstead",
  9: "Inner Grove",
  10: "Vuhlmira Ruins",
};

const initiatePet = (pet) => {
  if (pet.displayName) {
    console.log("Already Initiated", pet);
    return false;
  }
  let data = null;
  switch (pet.eggType) {
    case 0:
      data = blueEggData[pet.appearance - 1];
      break;
    case 1:
      data = grayEggData[pet.appearance - 1];
      break;
    default:
      return;
  }
  if (data == null) {
    console.log("NULL PET", pet);
    return false;
  }
  pet.season = data.season;
  pet.appearanceRarity = data.rarity;
  pet.family = data.family;
  pet.displayName = data.displayName;
  pet.variant = data.variant;
  pet.variantRarity = data.rarity;
  pet.pool = data.pool;
  pet.credits = data.credits;
  pet.path = data.path;
  pet.backgroundName = backgrounds[pet.background];
  switch (pet.element) {
    case 0:
      pet.elementName = "fire";
      break;
    case 1:
      pet.elementName = "water";
      break;
    case 2:
      pet.elementName = "earth";
      break;
    case 3:
      pet.elementName = "wind";
      break;
    case 4:
      pet.elementName = "lightning";
      break;
    case 5:
      pet.elementName = "ice";
      break;
    case 6:
      pet.elementName = "light";
      break;
    case 7:
      pet.elementName = "dark";
      break;
  }
  return true;
};

export default initiatePet;
