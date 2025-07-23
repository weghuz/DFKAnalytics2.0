import { weaponDisplayData } from "./equipmentWeaponDisplayData"
import { FixSalePrice } from "./HeroBase"

export const weaponTypes = {
    1:  "1H Axe",
    2:  "2H Axe",
    3:  "Bow",
    4:  "Dagger",
    5:  "Gloves",
    6:  "1H Mace",
    7:  "2H Mace",
    8:  "1H Spear",
    9:  "2H Spear",
    10: "Staff",
    11: "1H Sword",
    12: "2H Sword",
    13: "Wand"
}

export const weaponBonuses = {
    0:  "None",
    1:  "Gain ###% chance to inflict Banish on hit",
    2:  "Gain ###% chance to inflict Bleed on hit",
    3:  "Gain ###% chance to inflict Blind on hit",
    4:  "Gain ###% chance to inflict Burn on hit",
    5:  "Gain ###% chance to inflict Chill on hit",
    6:  "Gain ###% chance to inflict Confuse on hit",
    7:  "Gain ###% chance to inflict Daze on hit",
    8:  "Gain ###% chance to inflict Disarm on hit",
    9:  "Gain ###% chance to inflict Fear on hit",
    10: "Gain ###% chance to inflict Intimidate on hit",
    11: "Gain ###% chance to inflict Poison on hit",
    12: "Gain ###% chance to inflict Pull on hit",
    13: "Gain ###% chance to inflict Push on hit",
    14: "Gain ###% chance to inflict Silence on hit",
    15: "Gain ###% chance to inflict Sleep on hit",
    16: "Gain ###% chance to inflict Slow on hit",
    17: "Gain ###% chance to inflict Stun on hit",
    18: "Gain ###% chance to inflict Taunt on hit",
    19: "Gain ###% chance to inflict Daze on basic attack when targeting a channeling enemy",
    20: "Increase Block chance by +###%",
    21: "Increase Spell Block chance by +###%",
    22: "Increase Critical Hit damage multiplier by +###",
    23: "Increase Critical Hit chance by +###%",
    24: "Critical Hits gain ###% Lifesteal",
    25: "Gain ###% Pierce",
    26: "Increase Block damage reduction by ###%",
    27: "Increase Spell Block damage reduction by ###%",
    28: "Increase Magical Damage dealt and reduce Healing Potency by ###% each",
    29: "Increase Healing Potency and reduce Magical Damage dealt by ###% each",
    30: "Decrease Physical and Magical Defense by ###% each",
    31: "Decrease Healing Potency by ###%",
    32: "Increase Magical Damage by ###%",
    33: "Increase Physical Damage by ###%",
    34: "Gain ###% chance to Retaliate 1 upon receiving damage.",
    35: "Gain ###% chance to Retaliate 1 upon receiving physical damage.",
    36: "Gain ###% chance to Retaliate 1 upon receiving magical damage.",
    37: "Critical Hits gain ###% chance to inflict Bleed",
    38: "Critical Hits gain ###% chance to inflict Poison",
    39: "Critical Hits gain ###% chance to inflict Daze",
    40: "Critical Heals gain ###% chance to Cleanse",
    41: "Increase Critical Heal chance by +###%"
}

/*
 * TEMP: Not every weapon has had their equipRequirement field updated
 * Fix based on entries in the map below (if present)
 */
export const weaponEquipRequirementUpdateMap = {
  2: {
    1: 10,
    2: 3,
    3: 6,
    4: 10,
  },
  3: {
    1: 10,
    2: 3,
    3: 6,
    4: 10,
    5: 10,
    6: 12,
  },
  4: {
    1: 3,
    2: 6,
    3: 10,
    4: 12,
  },
  5: {
    1: 3,
    2: 6,
    3: 10,
  },
  6: {
    1: 3,
    2: 6,
    3: 10,
    4: 4,
    5: 12,
  },
  8: {
    1: 3,
    2: 6,
    3: 10,
  },
  9: {
    1: 3,
    2: 6,
    3: 10,
  },
  10: {
    1: 10,
    2: 3,
    3: 6,
    4: 10,
    5: 4,
    6: 12,
  },
  11: {
    1: 10,
    2: 3,
    3: 6,
    4: 10,
    5: 12,
  },
  12: {
    1: 12,
    2: 3,
    3: 6,
    4: 10,
    5: 6,
    6: 12,
  },
  13: {
    1: 10,
    2: 3,
    3: 6,
    4: 10,
    5: 12,
  },
}

const initiateWeapon = (eq) => {
  if (eq.displayName) {
    console.log("Already Initiated", eq)
    return false
  }
  if (eq.weaponType in weaponDisplayData) {
    eq.weaponTypeName = weaponTypes[eq.weaponType]
    if (eq.displayId in weaponDisplayData[eq.weaponType]) {
      eq.displayName = weaponDisplayData[eq.weaponType][eq.displayId].name
    }
    else {
      eq.displayName = "Unknown " + weaponTypes[eq.weaponType] + ": " + eq.displayId
    }
  }
  else {
    eq.weaponTypeName = "Unknown (" + eq.weaponType + ")"
    eq.displayName = "Unknown Weapon (" + eq.weaponType + ":" + eq.displayId + ")"
  }
  /* check for equipRequirement fix */
  if (eq.weaponType in weaponEquipRequirementUpdateMap) {
    if (eq.displayId in weaponEquipRequirementUpdateMap[eq.weaponType]) {
      eq.equipRequirement = weaponEquipRequirementUpdateMap[eq.weaponType][eq.displayId]
    }
  }
  eq.speedModifier = (1 - 2 * Math.floor(eq.speedModifier / 128)) * (eq.speedModifier % 128)
  eq.maxPotency = eq.basePotency + eq.mScalarMax1 + eq.mScalarMax2 + eq.mScalarMax3
  eq.maxDamage = eq.baseDamage + eq.pScalarMax1 + eq.pScalarMax2 + eq.pScalarMax3
  eq.attack = eq.baseDamage + "-" + eq.maxDamage
  eq.spell = eq.basePotency + "-" + eq.maxPotency
  eq.mAccuracyAtRequirement = (eq.mAccuracyAtRequirement / 10)
  eq.pAccuracyAtRequirement = (eq.pAccuracyAtRequirement / 10)
  eq.durabilityRemaining = eq.durability
  eq.durability = eq.durabilityRemaining + "/" + eq.maxDurability
  if (eq.repairsRemaining == null) {
    eq.repairsRemaining = 0
  }
  if (eq.restorationCount == null) {
    eq.restorationCount = 0
  }
  eq.repairs = eq.remainingRepairs + "/" + eq.maxRepairs
  eq.bonusScalar1 = (eq.bonusScalar1 / 10)
  eq.bonusScalar2 = (eq.bonusScalar2 / 10)
  eq.bonusScalar3 = (eq.bonusScalar3 / 10)
  eq.bonusScalar4 = (eq.bonusScalar4 / 10)
  if (eq.bonus1 in weaponBonuses) {
    eq.bonusText1 = weaponBonuses[eq.bonus1].replace("###", eq.bonusScalar1)
  }
  else {
    eq.bonusText1 = "Unknown Bonus (" + eq.bonus1 + ")"
  }
  if (eq.bonus2 in weaponBonuses) {
    eq.bonusText2 = weaponBonuses[eq.bonus2].replace("###", eq.bonusScalar2)
  }
  else {
    eq.bonusText2 = "Unknown Bonus (" + eq.bonus2 + ")"
  }
  if (eq.bonus3 in weaponBonuses) {
    eq.bonusText3 = weaponBonuses[eq.bonus3].replace("###", eq.bonusScalar3)
  }
  else {
    eq.bonusText3 = "Unknown Bonus (" + eq.bonus3 + ")"
  }
  if (eq.bonus4 in weaponBonuses) {
    eq.bonusText4 = weaponBonuses[eq.bonus4].replace("###", eq.bonusScalar4)
  }
  else {
    eq.bonusText4 = "Unknown Bonus (" + eq.bonus4 + ")"
  }
  eq.salePrice = Number(FixSalePrice(eq.salePrice))
  return true
}

export default initiateWeapon
