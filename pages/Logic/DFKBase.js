const sb1 = "Chartreuse",
  sb2 = "DeepSkyBlue",
  sb12 = "HotPink";
const professions = ["mining", "foraging", "gardening", "fishing"];
const professionStats = {
  mining: ["strength", "endurance"],
  foraging: ["intelligence", "dexterity"],
  gardening: ["vitality", "wisdom"],
  fishing: ["agility", "luck"],
};
const heroStats = [
  "Strength",
  "Dexterity",
  "Agility",
  "Vitality",
  "Endurance",
  "Intelligence",
  "Wisdom",
  "Luck",
];
const heroStatBoost = ["STR", "DEX", "AGI", "VIT", "END", "INT", "WIS", "LCK"];
var heroRarity = ["Common", "Uncommon", "Rare", "Legendary", "Mythic"];
const rarityBonus = [0, 2, 4, 7, 10];
const classes = [
  "warrior",
  "knight",
  "thief",
  "archer",
  "pirate",
  "monk",
  "priest",
  "wizard",
];
const maxXP = [
  2000, 3000, 4000, 5000, 6000, 8000, 10000, 12000, 16000, 20000, 24000, 28000,
  32000,
];
const statsGenesMap = {
  0: "class",
  1: "subClass",
  2: "profession",
  3: "passive1",
  4: "passive2",
  5: "active1",
  6: "active2",
  7: "statBoost1",
  8: "statBoost2",
  9: "statsUnknown1",
  10: "element",
  11: "statsUnknown2",
};

module.exports = {

  GrowthScore: function GrowthScore(hero) {
    if (hero.growthScore == undefined) {
      GrowthsToRealNumbers(hero);
    }
    let r1 = RemoveBaseGrowth(hero);
    let r2 = AddRarityGrowth(r1);
    let r3 = SumPandSGrowth(r2);
    let r4 = MultiplyGrowthByBaseGrowth(r3);
    let score = SumGrowth(r4);
    return score.toFixed(3);
  },

  GrowthsToRealNumbers: function GrowthsToRealNumbers(hero) {
    hero.strengthGrowthP /= 10000;
    hero.dexterityGrowthP /= 10000;
    hero.agilityGrowthP /= 10000;
    hero.vitalityGrowthP /= 10000;
    hero.enduranceGrowthP /= 10000;
    hero.intelligenceGrowthP /= 10000;
    hero.wisdomGrowthP /= 10000;
    hero.luckGrowthP /= 10000;
    hero.strengthGrowthS /= 10000;
    hero.dexterityGrowthS /= 10000;
    hero.agilityGrowthS /= 10000;
    hero.vitalityGrowthS /= 10000;
    hero.enduranceGrowthS /= 10000;
    hero.intelligenceGrowthS /= 10000;
    hero.wisdomGrowthS /= 10000;
    hero.luckGrowthS /= 10000;
    return hero;
  },

  RemoveBaseGrowth: function RemoveBaseGrowth(hero) {
    let returnHero = Object.assign({}, hero);
    returnHero.strengthGrowthP =
      hero.strengthGrowthP - classVars[hero.mainClass].growth.str;
    returnHero.dexterityGrowthP =
      hero.dexterityGrowthP - classVars[hero.mainClass].growth.dex;
    returnHero.agilityGrowthP =
      hero.agilityGrowthP - classVars[hero.mainClass].growth.agi;
    returnHero.vitalityGrowthP =
      hero.vitalityGrowthP - classVars[hero.mainClass].growth.vit;
    returnHero.enduranceGrowthP =
      hero.enduranceGrowthP - classVars[hero.mainClass].growth.end;
    returnHero.intelligenceGrowthP =
      hero.intelligenceGrowthP - classVars[hero.mainClass].growth.int;
    returnHero.wisdomGrowthP =
      hero.wisdomGrowthP - classVars[hero.mainClass].growth.wis;
    returnHero.luckGrowthP =
      hero.luckGrowthP - classVars[hero.mainClass].growth.lck;
    return returnHero;
  },

  AddRarityGrowth: function AddRarityGrowth(hero) {
    let returnHero = Object.assign({}, hero);
    let bonus = rarityBonus[hero.rarity];
    let statBonus = bonus / 40;
    returnHero.strengthGrowthP = hero.strengthGrowthP + statBonus;
    returnHero.dexterityGrowthP = hero.dexterityGrowthP + statBonus;
    returnHero.agilityGrowthP = hero.agilityGrowthP + statBonus;
    returnHero.vitalityGrowthP = hero.vitalityGrowthP + statBonus;
    returnHero.enduranceGrowthP = hero.enduranceGrowthP + statBonus;
    returnHero.intelligenceGrowthP = hero.intelligenceGrowthP + statBonus;
    returnHero.wisdomGrowthP = hero.wisdomGrowthP + statBonus;
    returnHero.luckGrowthP = hero.luckGrowthP + statBonus;
    return returnHero;
  },

  SumPandSGrowth: function SumPandSGrowth(hero) {
    let returnHero = Object.assign({}, hero);
    returnHero.strengthGrowthP += hero.strengthGrowthS;
    returnHero.dexterityGrowthP += hero.dexterityGrowthS;
    returnHero.agilityGrowthP += hero.agilityGrowthS;
    returnHero.vitalityGrowthP += hero.vitalityGrowthS;
    returnHero.enduranceGrowthP += hero.enduranceGrowthS;
    returnHero.intelligenceGrowthP += hero.intelligenceGrowthS;
    returnHero.wisdomGrowthP += hero.wisdomGrowthS;
    returnHero.luckGrowthP += hero.luckGrowthS;
    return returnHero;
  },

  MultiplyGrowthByBaseGrowth: function MultiplyGrowthByBaseGrowth(hero) {
    let returnHero = Object.assign({}, hero);
    returnHero.strengthGrowthP =
      hero.strengthGrowthP * classVars[hero.mainClass].growth.str;
    returnHero.dexterityGrowthP =
      hero.dexterityGrowthP * classVars[hero.mainClass].growth.dex;
    returnHero.agilityGrowthP =
      hero.agilityGrowthP * classVars[hero.mainClass].growth.agi;
    returnHero.vitalityGrowthP =
      hero.vitalityGrowthP * classVars[hero.mainClass].growth.vit;
    returnHero.enduranceGrowthP =
      hero.enduranceGrowthP * classVars[hero.mainClass].growth.end;
    returnHero.intelligenceGrowthP =
      hero.intelligenceGrowthP * classVars[hero.mainClass].growth.int;
    returnHero.wisdomGrowthP =
      hero.wisdomGrowthP * classVars[hero.mainClass].growth.wis;
    returnHero.luckGrowthP =
      hero.luckGrowthP * classVars[hero.mainClass].growth.lck;
    return returnHero;
  },

  SumGrowth: function SumGrowth(hero) {
    let sum = 0;
    sum += hero.strengthGrowthP;
    sum += hero.dexterityGrowthP;
    sum += hero.agilityGrowthP;
    sum += hero.vitalityGrowthP;
    sum += hero.enduranceGrowthP;
    sum += hero.intelligenceGrowthP;
    sum += hero.wisdomGrowthP;
    sum += hero.luckGrowthP;

    switch (hero.mainClass) {
      case "DarkKnight":
      case "Ninja":
      case "Paladin":
      case "Summoner":
        sum = sum * 1.14285;
        break;
      case "Dragoon":
      case "Sage":
        sum = sum * 1.33334;
        break;
      case "DreadKnight":
        sum = sum * 1.6;
        break;
      default:
        break;
    }
    return sum;
  },

  ClassScore: function ClassScore(hero) {
    let r1 = RemoveBase(hero);
    let r2 = RemoveAverageLevels(r1);
    let r3 = MultiplyBaseByGrowth(r2);
    return SumStats(r3);
  },

  RemoveBase: function RemoveBase(hero) {
    let returnHero = Object.assign({}, hero);
    returnHero.strength = hero.strength - classVars[hero.mainClass].base.str;
    returnHero.dexterity = hero.dexterity - classVars[hero.mainClass].base.dex;
    returnHero.agility = hero.agility - classVars[hero.mainClass].base.agi;
    returnHero.vitality = hero.vitality - classVars[hero.mainClass].base.vit;
    returnHero.endurance = hero.endurance - classVars[hero.mainClass].base.end;
    returnHero.intelligence =
      hero.intelligence - classVars[hero.mainClass].base.int;
    returnHero.wisdom = hero.wisdom - classVars[hero.mainClass].base.wis;
    returnHero.luck = hero.luck - classVars[hero.mainClass].base.lck;
    return returnHero;
  },

  RemoveAverageLevels: function RemoveAverageLevels(hero) {
    let returnHero = Object.assign({}, hero);
    returnHero.strength =
      hero.strength - classVars[hero.mainClass].growth.str * (hero.level - 1);
    returnHero.dexterity =
      hero.dexterity - classVars[hero.mainClass].growth.dex * (hero.level - 1);
    returnHero.agility =
      hero.agility - classVars[hero.mainClass].growth.agi * (hero.level - 1);
    returnHero.vitality =
      hero.vitality - classVars[hero.mainClass].growth.vit * (hero.level - 1);
    returnHero.endurance =
      hero.endurance - classVars[hero.mainClass].growth.end * (hero.level - 1);
    returnHero.intelligence =
      hero.intelligence -
      classVars[hero.mainClass].growth.int * (hero.level - 1);
    returnHero.wisdom =
      hero.wisdom - classVars[hero.mainClass].growth.wis * (hero.level - 1);
    returnHero.luck =
      hero.luck - classVars[hero.mainClass].growth.lck * (hero.level - 1);
    return returnHero;
  },

  MultiplyBaseByGrowth: function MultiplyBaseByGrowth(hero) {
    let returnHero = Object.assign({}, hero);
    returnHero.strength = hero.strength * classVars[hero.mainClass].growth.str;
    returnHero.dexterity =
      hero.dexterity * classVars[hero.mainClass].growth.dex;
    returnHero.agility = hero.agility * classVars[hero.mainClass].growth.agi;
    returnHero.vitality = hero.vitality * classVars[hero.mainClass].growth.vit;
    returnHero.endurance =
      hero.endurance * classVars[hero.mainClass].growth.end;
    returnHero.intelligence =
      hero.intelligence * classVars[hero.mainClass].growth.int;
    returnHero.wisdom = hero.wisdom * classVars[hero.mainClass].growth.wis;
    returnHero.luck = hero.luck * classVars[hero.mainClass].growth.lck;
    return returnHero;
  },

  SumStats: function SumStats(hero) {
    let sum = 0;
    sum += hero.strength;
    sum += hero.dexterity;
    sum += hero.agility;
    sum += hero.vitality;
    sum += hero.endurance;
    sum += hero.intelligence;
    sum += hero.wisdom;
    sum += hero.luck;
    return sum.toFixed(2);
  },
  
  auctionColumnDefs: {
    Id: {
      title: "AID",
      data: "saleAuction.id",
    },
    "Starting Price": {
      title: "Start Price",
      data: "saleAuction.startingPrice",
      render: (d, mode) => {
        if (mode == "display") {
          if (d == "null") {
            return null;
          }
          return (
            d +
            `<img class="mb-1 ms-1" src="/Jewel.png" width="20" height="20"/>`
          );
        }
        return d;
      },
    },
    "Purchase Price": {
      title: "End Price",
      data: "saleAuction.startingPrice",
      render: (d, mode) => {
        if (mode == "display") {
          if (d == "null") {
            return null;
          }
          return (
            d +
            `<img class="mb-1 ms-1" src="/Jewel.png" width="20" height="20"/>`
          );
        }
        return d;
      },
    },
    "Start Time": {
      title: "Start",
      data: "saleAuction.startedAt",
      render: (d) => {
        return d.toLocaleString();
      },
    },
    "Ended Time": {
      title: "End",
      data: "saleAuction.startedAt",
      render: (d) => {
        return d.toLocaleString();
      },
    },
    Duration: {
      title: "Duration",
      data: "saleAuction.duration",
      render: (d) => {
        return d;
      },
    },
  },

  columnDefs: {
    Cost: {
      title: "Cost",
      data: (d) => {
        return d;
      },
      render: (data, mode) => {
        //if (data.privateAuctionProfile != null) {
        //    console.log(data.privateAuctionProfile);
        //    return "Private"
        //}
        if (mode == "display") {
          if (data.salePrice == "null") {
            return null;
          }
          return (
            FixSalePrice(data.salePrice) +
            `<img class="mb-1 ms-1" src="/Jewel.png" width="20" height="20"/>`
          );
        }
        return FixSalePrice(data.salePrice);
      },
    },
    Id: {
      title: "Id",
      data: "numberId",
    },
    Rarity: {
      title: "Rarity",
      data: (d) => {
        return d;
      },
      render: (data, mode) => {
        if (mode == "display") {
          return heroRarity[data.rarity];
        }
        return data.rarity;
      },
    },
    Class: {
      title: "Class",
      data: "mainClass",
    },
    "Class R1": {
      title: "ClassR1",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return hero.R1.class;
      },
    },
    "Class Recessives": {
      title: "Class+",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return `D: ${hero.mainClass}<br>R1: ${hero.R1.class}<br>R2: ${hero.R2.class}<br>R3: ${hero.R3.class}`;
      },
    },
    Subclass: {
      title: "Subclass",
      data: "subClass",
    },
    "Subclass R1": {
      title: "SubR1",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return hero.R1.subClass;
      },
    },
    "Subclass Recessives": {
      title: "Subclass+",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return `D: ${hero.subClass}<br>R1: ${hero.R1.subClass}<br>R2: ${hero.R2.subClass}<br>R3: ${hero.R3.subClass}`;
      },
    },
    Level: {
      title: "Lvl",
      data: "level",
    },
    XP: {
      title: "XP",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        if (mode == "display") {
          return `${hero.xp}/${maxXP[hero.level - 1] / 1000}k`;
        }
        return hero.level * 100000000 + hero.xp;
      },
    },
    "XP Current": {
      title: "XPC",
      data: "xp",
    },
    "XP Max": {
      title: "XPM",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return maxXP[hero.level - 1];
      },
    },
    Shiny: {
      title: "Shiny",
      data: "shiny",
    },
    Generation: {
      title: "Gen",
      data: "generation",
      render: (data, mode) => {
        if (mode == "display") {
          return `${data}`;
        }
        return data;
      },
    },
    Summons: {
      title: "Sum",
      data: (d) => {
        return d;
      },
      render: (data, mode) => {
        if (data.generation == 0) {
          if (mode == "display") {
            return `${data.summons}/∞`;
          }
          if (data.summons < 11) {
            return 11;
          }
          return data.summons;
        }
        if (mode == "display") {
          return `${data.summonsRemaining}/${data.maxSummons}`;
        }
        return data.summonsRemaining;
      },
    },
    GenSum: {
      title: "Gen|Sum",
      data: (d) => {
        return d;
      },
      render: (data, mode) => {
        if (data.generation == 0) {
          if (mode == "display") {
            return `${data.generation} | ${data.summons}/∞`;
          }
          if (data.summons < 11) {
            return 11;
          }
          return data.summons;
        }
        if (mode == "display") {
          return `${data.generation} | ${data.summonsRemaining}/${data.maxSummons}`;
        }
        return data.summonsRemaining;
      },
    },
    Health: {
      title: "HP",
      data: "hp",
    },
    Mana: {
      title: "MP",
      data: "mp",
    },
    "Stat Boost 1(Green +2)": {
      title: "SB1",
      data: "statBoost1",
    },
    "Stat Boost 1 R1": {
      title: "SB1R1",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return hero.R1.statBoost1;
      },
    },
    "Stat Boost 1 Recessives": {
      title: "SB1+",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return `D: ${hero.statBoost1}<br>R1: ${hero.R1.statBoost1}<br>R2: ${hero.R2.statBoost1}<br>R3: ${hero.R3.statBoost1}`;
      },
    },
    "Stat Boost 2(Blue Growth)": {
      title: "SB2",
      data: "statBoost2",
    },
    "Stat Boost 2 R1": {
      title: "SB2R1",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return hero.R1.statBoost2;
      },
    },
    "Stat Boost 2 Recessives": {
      title: "SB2+",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return `D: ${hero.statBoost2}<br>R1: ${hero.R1.statBoost2}<br>R2: ${hero.R2.statBoost2}<br>R3: ${hero.R3.statBoost2}`;
      },
    },
    Profession: {
      title: "Profession",
      data: "profession",
    },
    "Profession Recessives": {
      title: "Profession",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return `D: ${hero.profession}<br>R1: ${hero.R1.profession}<br>R2: ${hero.R2.profession}<br>R3: ${hero.R3.profession}`;
      },
    },
    "Profession R1": {
      title: "ProfR1",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return hero.R1.profession;
      },
    },
    "PJ Survivor": {
      title: "PJ",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        if (hero.pjStatus == null) {
          return "No";
        } else if (hero.pjStatus == "SURVIVED") {
          return "Yes";
        }
        return "RIP";
      },
    },
    "Perilous Journey Survival Rate": {
      title: "Survival(Srv)",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        let rank = 0;
        switch (hero.mainClass) {
          case "DarkKnight":
          case "Ninja":
          case "Paladin":
          case "Summoner":
            rank = 1;
            break;
          case "Dragoon":
          case "Sage":
            rank = 2;
            break;
          case "DreadKnight":
            rank = 3;
            break;
          default:
            break;
        }
        if (mode == "display") {
          if (hero.generation == 0) {
            return 100 + "%";
          }
          return (
            34 +
            hero.level +
            hero.rarity * (2 + hero.rarity) +
            2 * rank * (1 + rank) +
            "%"
          );
        }
        if (hero.generation == 0) {
          return 100;
        }
        return (
          34 +
          hero.level +
          hero.rarity * (2 + hero.rarity) +
          2 * rank * (1 + rank)
        );
      },
    },
    "Perilous Journey Average Crystals": {
      title: "Avg Crystals",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        if (hero.generation == 0) {
          return 0;
        }
        let rank = 0;
        switch (hero.mainClass) {
          case "DarkKnight":
          case "Ninja":
          case "Paladin":
          case "Summoner":
            rank = 1;
            break;
          case "Dragoon":
          case "Sage":
            rank = 2;
            break;
          case "DreadKnight":
            rank = 3;
            break;
          default:
            break;
        }
        let survivalRate =
          34 +
          hero.level +
          hero.rarity * (2 + hero.rarity) +
          2 * rank * (1 + rank);
        let deathRate = 100 - survivalRate;
        return ((survivalRate / 100) * rarityCrystalReward(hero)).toFixed(2);
      },
    },
    "Perilous Journey Death Rate": {
      title: "Death(Dth)",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        let rank = 0;
        switch (hero.mainClass) {
          case "DarkKnight":
          case "Ninja":
          case "Paladin":
          case "Summoner":
            rank = 1;
            break;
          case "Dragoon":
          case "Sage":
            rank = 2;
            break;
          case "DreadKnight":
            rank = 3;
            break;
          default:
            break;
        }
        if (mode == "display") {
          if (hero.generation == 0) {
            return 0 + "%";
          }
          return (
            100 -
            (34 +
              hero.level +
              hero.rarity * (2 + hero.rarity) +
              2 * rank * (1 + rank))
          );
        }
        if (hero.generation == 0) {
          return 0;
        }
        return (
          100 -
          34 +
          hero.level +
          hero.rarity * (2 + hero.rarity) +
          2 * rank * (1 + rank)
        );
      },
    },
    "Perilous Journey Average Jewels": {
      title: "Avg Jewels",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        if (hero.generation == 0) {
          return 0;
        }
        let rank = 0;
        switch (hero.mainClass) {
          case "DarkKnight":
          case "Ninja":
          case "Paladin":
          case "Summoner":
            rank = 1;
            break;
          case "Dragoon":
          case "Sage":
            rank = 2;
            break;
          case "DreadKnight":
            rank = 3;
            break;
          default:
            break;
        }
        let survivalRate =
          34 +
          hero.level +
          hero.rarity * (2 + hero.rarity) +
          2 * rank * (1 + rank);
        let deathRate = 100 - survivalRate;
        return ((deathRate / 100) * rarityJewelReward(hero)).toFixed(2);
      },
    },
    "Perilous Journey Survival Crystals": {
      title: "Srv Crystals",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        if (hero.generation == 0) {
          return 0;
        }
        return rarityCrystalReward(hero);
      },
    },
    "Perilous Journey Survival Tickets": {
      title: "Srv Tickets",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        if (hero.generation == 0) {
          return 0;
        }
        let rank = 0;
        switch (hero.mainClass) {
          case "DarkKnight":
          case "Ninja":
          case "Paladin":
          case "Summoner":
            rank = 1;
            break;
          case "Dragoon":
          case "Sage":
            rank = 2;
            break;
          case "DreadKnight":
            rank = 3;
            break;
          default:
            break;
        }
        return hero.level + 2 * hero.rarity + 2 * rank;
      },
    },
    "Perilous Journey Death Jewels": {
      title: "Dth Jewels",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        if (hero.generation == 0) {
          return 0;
        }
        return rarityJewelReward(hero);
      },
    },
    "Perilous Journey Death Runes": {
      title: "Dth Runes",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        if (hero.generation == 0) {
          return "None";
        }
        if (mode == "display") {
          switch (hero.level) {
            case 1:
              return "None";
            case 2:
              return "1x Shvas";
            case 3:
              return "1x Shvas";
            case 4:
              return "2x Shvas<br>1x Moksha";
            case 5:
              return "2x Shvas<br>1x Moksha";
            case 6:
              return "3x Shvas<br>1x Moksha";
            case 7:
              return "3x Shvas<br>1x Moksha";
            case 8:
              return "4x Shvas<br>2x Moksha";
            case 9:
              return "4x Shvas<br>2x Moksha";
            case 10:
              return "5x Shvas<br>2x Moksha";
          }
        }
        return hero.level;
      },
    },
    "Perilous Journey Death Stones": {
      title: "Dth Stones",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        if (hero.generation == 0) {
          return "None";
        }
        return rarityStonesReward(hero);
      },
    },
    "Perilous Journey Death Tickets": {
      title: "Dth Tickets",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        if (hero.generation == 0) {
          return 0;
        }
        let rank = 0;
        switch (hero.mainClass) {
          case "DarkKnight":
          case "Ninja":
          case "Paladin":
          case "Summoner":
            rank = 1;
            break;
          case "Dragoon":
          case "Sage":
            rank = 2;
            break;
          case "DreadKnight":
            rank = 3;
            break;
          default:
            break;
        }
        return hero.level + 2 * hero.rarity + 2 * rank;
      },
    },
    "Total Stats": {
      title: "Totstat",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return parseInt(SumStats(hero)).toFixed(0);
      },
    },
    Statgain: {
      title: "Statgain",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return parseInt(SumStats(RemoveBase(hero))).toFixed(0);
      },
    },
    Statgain: {
      title: "Statgain",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return parseInt(SumStats(RemoveBase(hero))).toFixed(0);
      },
    },

    "Max Stamina": {
      title: "MStam",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        let currStam = CurrentStamina(hero);
        if (mode == "display") {
          return parseInt(25 + parseInt(hero.level) / 2);
        }
        return parseInt(25 + parseInt(hero.level) / 2);
      },
    },
    "Current Stamina": {
      title: "Stam",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        let currStam = CurrentStamina(hero);
        if (mode == "display") {
          return currStam;
        }
        return currStam;
      },
    },
    Stamina: {
      title: "Stam",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        let currStam = CurrentStamina(hero);
        if (mode == "display") {
          return `${currStam}/${parseInt(25 + parseInt(hero.level) / 2)}`;
        }
        return `${currStam}/${parseInt(25 + parseInt(hero.level) / 2)}`;
      },
    },
    "Stamina Full In": {
      title: "SMaxIn",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        let fullTime = FullTimeHours(hero);
        if (fullTime == 0) {
          return null;
        } else {
          if (mode == "display") {
            return fullTime + `H`;
          }
          return fullTime;
        }
      },
    },
    "Stamina Full At": {
      title: "Stamina Full At",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        let fullTime = FullTime(hero);
        if (fullTime == 0) {
          return null;
        } else {
          return fullTime.toLocaleString();
        }
      },
    },
    "Profession Stats": {
      title: "ProfStat",
      data: (d) => {
        return d;
      },
      render: (data, mode) => {
        return (
          data[professionStats[data.profession][0]] +
          data[professionStats[data.profession][1]]
        );
      },
    },
    "Profession Skill*2 + Stat": {
      title: "SkillProfStat",
      data: (d) => {
        return d;
      },
      render: (data, mode) => {
        return (
          data[professionStats[data.profession][0]] +
          data[professionStats[data.profession][1]] +
          data[data.profession] * 0.2
        ).toFixed(1);
      },
    },
    Element: {
      title: "Element",
      data: "element",
    },
    "Element Recessive": {
      title: "Element+",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return `D: ${hero.element}<br>R1: ${hero.R1.element}<br>R2: ${hero.R2.element}<br>R3: ${hero.R3.element}`;
      },
    },
    "Element R1": {
      title: "ElementR1",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return hero.R1.element;
      },
    },
    "Class Score": {
      title: "Class Score",
      data: "classScore",
    },
    "Class Score/Jewel": {
      title: "C Score/J",
      data: (d) => {
        return d;
      },
      render: (hero) => {
        if (hero.salePrice == null) {
          return hero.salePrice;
        }
        return (hero.classScore / FixSalePrice(hero.salePrice)).toFixed(5);
      },
    },
    "Growth Score": {
      title: "Growth Score",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return hero.growthScore;
      },
    },
    "Growth Score/Jewel": {
      title: `G Score/J`,
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        if (hero.salePrice == null) {
          return hero.salePrice;
        }
        return (hero.growthScore / FixSalePrice(hero.salePrice)).toFixed(5);
      },
    },
    Active1: {
      title: "Active1",
      data: "active1",
    },
    "Active1 Recessive": {
      title: "Active1",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return `D: ${hero.active1}<br>R1: ${hero.R1.active1}<br>R2: ${hero.R2.active1}<br>R3: ${hero.R3.active1}`;
      },
    },
    "Active1 R1": {
      title: "A1R1",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return hero.R1.active1;
      },
    },
    Active2: {
      title: "Active2",
      data: "active2",
    },
    "Active2 R1": {
      title: "A2R1",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return hero.R1.active2;
      },
    },
    "Active2 Recessive": {
      title: "Active2",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return `D: ${hero.active2}<br>R1: ${hero.R1.active2}<br>R2: ${hero.R2.active2}<br>R3: ${hero.R3.active2}`;
      },
    },
    Passive1: {
      title: "Passive1",
      data: "passive1",
    },
    "Passive1 R1": {
      title: "P1R1",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return hero.R1.passive1;
      },
    },
    "Passive1 Recessive": {
      title: "Passive1",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return `D: ${hero.passive1}<br>R1: ${hero.R1.passive1}<br>R2: ${hero.R2.passive1}<br>R3: ${hero.R3.passive1}`;
      },
    },
    Passive2: {
      title: "Passive2",
      data: "passive2",
    },
    "Passive2 R1": {
      title: "P2R1",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return hero.R1.passive2;
      },
    },
    "Passive2 Recessive": {
      title: "Passive2",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return `D: ${hero.passive2}<br>R1: ${hero.R1.passive2}<br>R2: ${hero.R2.passive2}<br>R3: ${hero.R3.passive1}`;
      },
    },
    "Stats Unknown 1": {
      title: "SU1",
      data: "statsUnknown1",
    },
    "Stats Unknown 1 R1": {
      title: "SU1R1",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return hero.R1.statsUnknown1;
      },
    },
    "Stats Unknown 1 Recessive": {
      title: "SU1+",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return `D: ${hero.statsUnknown1}<br>R1: ${hero.R1.statsUnknown1}<br>R2: ${hero.R2.statsUnknown1}<br>R3: ${hero.R3.statsUnknown1}`;
      },
    },
    "Stats Unknown 2": {
      title: "SU2",
      data: "statsUnknown2",
    },
    "Stats Unknown 2 R1": {
      title: "SU2R1",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return hero.R1.statsUnknown2;
      },
    },
    "Stats Unknown 2 Recessive": {
      title: "SU2+",
      data: (d) => {
        return d;
      },
      render: (hero, mode) => {
        return `D: ${hero.statsUnknown2}<br>R1: ${hero.R1.statsUnknown2}<br>R2: ${hero.R2.statsUnknown2}<br>R3: ${hero.R3.statsUnknown2}`;
      },
    },
    "Mining Profession Skill": {
      title: "Min",
      data: (d) => {
        return d.mining / 10;
      },
    },
    "Foraging Profession Skill": {
      title: "For",
      data: (d) => {
        return d.foraging / 10;
      },
    },
    "Fishing Profession Skill": {
      title: "Fis",
      data: (d) => {
        return d.fishing / 10;
      },
    },
    "Gardening Profession Skill": {
      title: "Gar",
      data: (d) => {
        return d.gardening / 10;
      },
    },
    "Profession Skill": [
      {
        title: "Foraging",
        data: "foraging",
        render: (prof) => {
          return prof / 10;
        },
      },
      {
        title: "Fishing",
        data: "fishing",
        render: (prof) => {
          return prof / 10;
        },
      },
      {
        title: "Gardening",
        data: "gardening",
        render: (prof) => {
          return prof / 10;
        },
      },
      {
        title: "Mining",
        data: "mining",
        render: (prof) => {
          return prof / 10;
        },
      },
    ],
    Stats: [
      {
        title: "Str",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "STR" && d.statBoost2 == "STR") {
              return `<span style="color:${sb12}">${d.strength}</span>`;
            }
            if (d.statBoost1 == "STR") {
              return `<span style="color:${sb1}">${d.strength}</span>`;
            } else if (d.statBoost2 == "STR") {
              return `<span style="color:${sb2}">${d.strength}</span>`;
            }
          }
          return d.strength;
        },
      },
      {
        title: "Dex",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "DEX" && d.statBoost2 == "DEX") {
              return `<span style="color:${sb12}">${d.dexterity}</span>`;
            }
            if (d.statBoost1 == "DEX") {
              return `<span style="color:${sb1}">${d.dexterity}</span>`;
            } else if (d.statBoost2 == "DEX") {
              return `<span style="color:${sb2}">${d.dexterity}</span>`;
            }
          }
          return d.dexterity;
        },
      },
      {
        title: "Agi",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "AGI" && d.statBoost2 == "AGI") {
              return `<span style="color:${sb12}">${d.agility}</span>`;
            }
            if (d.statBoost1 == "AGI") {
              return `<span style="color:${sb1}">${d.agility}</span>`;
            } else if (d.statBoost2 == "AGI") {
              return `<span style="color:${sb2}">${d.agility}</span>`;
            }
          }
          return d.agility;
        },
      },
      {
        title: "Vit",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "VIT" && d.statBoost2 == "VIT") {
              return `<span style="color:${sb12}">${d.vitality}</span>`;
            }
            if (d.statBoost1 == "VIT") {
              return `<span style="color:${sb1}">${d.vitality}</span>`;
            } else if (d.statBoost2 == "VIT") {
              return `<span style="color:${sb2}">${d.vitality}</span>`;
            }
          }
          return d.vitality;
        },
      },
      {
        title: "End",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "END" && d.statBoost2 == "END") {
              return `<span style="color:${sb12}">${d.endurance}</span>`;
            }
            if (d.statBoost1 == "END") {
              return `<span style="color:${sb1}">${d.endurance}</span>`;
            } else if (d.statBoost2 == "END") {
              return `<span style="color:${sb2}">${d.endurance}</span>`;
            }
          }
          return d.endurance;
        },
      },
      {
        title: "Int",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "INT" && d.statBoost2 == "INT") {
              return `<span style="color:${sb12}">${d.intelligence}</span>`;
            }
            if (d.statBoost1 == "INT") {
              return `<span style="color:${sb1}">${d.intelligence}</span>`;
            } else if (d.statBoost2 == "INT") {
              return `<span style="color:${sb2}">${d.intelligence}</span>`;
            }
          }
          return d.intelligence;
        },
      },
      {
        title: "Wis",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "WIS" && d.statBoost2 == "WIS") {
              return `<span style="color:${sb12}">${d.wisdom}</span>`;
            }
            if (d.statBoost1 == "WIS") {
              return `<span style="color:${sb1}">${d.wisdom}</span>`;
            } else if (d.statBoost2 == "WIS") {
              return `<span style="color:${sb2}">${d.wisdom}</span>`;
            }
          }
          return d.wisdom;
        },
      },
      {
        title: "lck",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "LCK" && d.statBoost2 == "LCK") {
              return `<span style="color:${sb12}">${d.luck}</span>`;
            }
            if (d.statBoost1 == "LCK") {
              return `<span style="color:${sb1}">${d.luck}</span>`;
            } else if (d.statBoost2 == "LCK") {
              return `<span style="color:${sb2}">${d.luck}</span>`;
            }
          }
          return d.luck;
        },
      },
    ],
    "Primary Stat Growth": [
      {
        title: "StrG",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "STR") {
              return `<span style="color:${sb2}">${(
                d.strengthGrowthP * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.strengthGrowthP * 100).toFixed(2)}%`;
            }
          }
          return (d.strengthGrowthP * 100).toFixed(2);
        },
      },
      {
        title: "DexG",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "DEX") {
              return `<span style="color:${sb2}">${(
                d.dexterityGrowthP * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.dexterityGrowthP * 100).toFixed(2)}%`;
            }
          }
          return (d.dexterityGrowthP * 100).toFixed(2);
        },
      },
      {
        title: "AgiG",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "AGI") {
              return `<span style="color:${sb2}">${(
                d.agilityGrowthP * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.agilityGrowthP * 100).toFixed(2)}%`;
            }
          }
          return (d.agilityGrowthP * 100).toFixed(2);
        },
      },
      {
        title: "VitG",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "VIT") {
              return `<span style="color:${sb2}">${(
                d.vitalityGrowthP * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.vitalityGrowthP * 100).toFixed(2)}%`;
            }
          }
          return (d.vitalityGrowthP * 100).toFixed(2);
        },
      },
      {
        title: "EndG",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "END") {
              return `<span style="color:${sb2}">${(
                d.enduranceGrowthP * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.enduranceGrowthP * 100).toFixed(2)}%`;
            }
          }
          return (d.enduranceGrowthP * 100).toFixed(2);
        },
      },
      {
        title: "IntG",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "INT") {
              return `<span style="color:${sb2}">${(
                d.intelligenceGrowthP * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.intelligenceGrowthP * 100).toFixed(2)}%`;
            }
          }
          return (d.intelligenceGrowthP * 100).toFixed(2);
        },
      },
      {
        title: "WisG",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "WIS") {
              return `<span style="color:${sb2}">${(
                d.wisdomGrowthP * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.wisdomGrowthP * 100).toFixed(2)}%`;
            }
          }
          return (d.wisdomGrowthP * 100).toFixed(2);
        },
      },
      {
        title: "lckG",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "LCK") {
              return `<span style="color:${sb2}">${(
                d.luckGrowthP * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.luckGrowthP * 100).toFixed(2)}%`;
            }
          }
          return (d.luckGrowthP * 100).toFixed(2);
        },
      },
    ],
    "Secondary Stat Growth": [
      {
        title: "Strg",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "STR") {
              return `<span style="color:${sb2}">${(
                d.strengthGrowthS * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.strengthGrowthS * 100).toFixed(2)}%`;
            }
          }
          return (d.strengthGrowthS * 100).toFixed(2);
        },
      },
      {
        title: "Dexg",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "DEX") {
              return `<span style="color:${sb2}">${(
                d.dexterityGrowthS * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.dexterityGrowthS * 100).toFixed(2)}%`;
            }
          }
          return (d.dexterityGrowthS * 100).toFixed(2);
        },
      },
      {
        title: "Agig",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "AGI") {
              return `<span style="color:${sb2}">${(
                d.agilityGrowthS * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.agilityGrowthS * 100).toFixed(2)}%`;
            }
          }
          return (d.agilityGrowthS * 100).toFixed(2);
        },
      },
      {
        title: "Vitg",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "VIT") {
              return `<span style="color:${sb2}">${(
                d.vitalityGrowthS * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.vitalityGrowthS * 100).toFixed(2)}%`;
            }
          }
          return (d.vitalityGrowthS * 100).toFixed(2);
        },
      },
      {
        title: "Endg",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "END") {
              return `<span style="color:${sb2}">${(
                d.enduranceGrowthS * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.enduranceGrowthS * 100).toFixed(2)}%`;
            }
          }
          return (d.enduranceGrowthS * 100).toFixed(2);
        },
      },
      {
        title: "Intg",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "INT") {
              return `<span style="color:${sb2}">${(
                d.intelligenceGrowthS * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.intelligenceGrowthS * 100).toFixed(2)}%`;
            }
          }
          return (d.intelligenceGrowthS * 100).toFixed(2);
        },
      },
      {
        title: "Wisg",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "WIS") {
              return `<span style="color:${sb2}">${(
                d.wisdomGrowthS * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.wisdomGrowthS * 100).toFixed(2)}%`;
            }
          }
          return (d.wisdomGrowthS * 100).toFixed(2);
        },
      },
      {
        title: "lckg",
        data: (d) => {
          return d;
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost2 == "LCK") {
              return `<span style="color:${sb2}">${(
                d.luckGrowthS * 100
              ).toFixed(2)}%</span>`;
            } else {
              return `${(d.luckGrowthS * 100).toFixed(2)}%`;
            }
          }
          return (d.luckGrowthS * 100).toFixed(2);
        },
      },
    ],
    "Statgain Split": [
      {
        title: "Str-",
        data: (d) => {
          return RemoveBase(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "STR" && d.statBoost2 == "STR") {
              return `<span style="color:${sb12}">${d.strength}</span>`;
            }
            if (d.statBoost1 == "STR") {
              return `<span style="color:${sb1}">${d.strength}</span>`;
            } else if (d.statBoost2 == "STR") {
              return `<span style="color:${sb2}">${d.strength}</span>`;
            }
          }
          return d.strength;
        },
      },
      {
        title: "Dex-",
        data: (d) => {
          return RemoveBase(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "DEX" && d.statBoost2 == "DEX") {
              return `<span style="color:${sb12}">${d.dexterity}</span>`;
            }
            if (d.statBoost1 == "DEX") {
              return `<span style="color:${sb1}">${d.dexterity}</span>`;
            } else if (d.statBoost2 == "DEX") {
              return `<span style="color:${sb2}">${d.dexterity}</span>`;
            }
          }
          return d.dexterity;
        },
      },
      {
        title: "Agi-",
        data: (d) => {
          return RemoveBase(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "AGI" && d.statBoost2 == "AGI") {
              return `<span style="color:${sb12}">${d.agility}</span>`;
            }
            if (d.statBoost1 == "AGI") {
              return `<span style="color:${sb1}">${d.agility}</span>`;
            } else if (d.statBoost2 == "AGI") {
              return `<span style="color:${sb2}">${d.agility}</span>`;
            }
          }
          return d.agility;
        },
      },
      {
        title: "Vit-",
        data: (d) => {
          return RemoveBase(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "VIT" && d.statBoost2 == "VIT") {
              return `<span style="color:${sb12}">${d.vitality}</span>`;
            }
            if (d.statBoost1 == "VIT") {
              return `<span style="color:${sb1}">${d.vitality}</span>`;
            } else if (d.statBoost2 == "VIT") {
              return `<span style="color:${sb2}">${d.vitality}</span>`;
            }
          }
          return d.vitality;
        },
      },
      {
        title: "End-",
        data: (d) => {
          return RemoveBase(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "END" && d.statBoost2 == "END") {
              return `<span style="color:${sb12}">${d.endurance}</span>`;
            }
            if (d.statBoost1 == "END") {
              return `<span style="color:${sb1}">${d.endurance}</span>`;
            } else if (d.statBoost2 == "END") {
              return `<span style="color:${sb2}">${d.endurance}</span>`;
            }
          }
          return d.endurance;
        },
      },
      {
        title: "Int-",
        data: (d) => {
          return RemoveBase(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "INT" && d.statBoost2 == "INT") {
              return `<span style="color:${sb12}">${d.intelligence}</span>`;
            }
            if (d.statBoost1 == "INT") {
              return `<span style="color:${sb1}">${d.intelligence}</span>`;
            } else if (d.statBoost2 == "INT") {
              return `<span style="color:${sb2}">${d.intelligence}</span>`;
            }
          }
          return d.intelligence;
        },
      },
      {
        title: "Wis-",
        data: (d) => {
          return RemoveBase(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "WIS" && d.statBoost2 == "WIS") {
              return `<span style="color:${sb12}">${d.wisdom}</span>`;
            }
            if (d.statBoost1 == "WIS") {
              return `<span style="color:${sb1}">${d.wisdom}</span>`;
            } else if (d.statBoost2 == "WIS") {
              return `<span style="color:${sb2}">${d.wisdom}</span>`;
            }
          }
          return d.wisdom;
        },
      },
      {
        title: "lck-",
        data: (d) => {
          return RemoveBase(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "LCK" && d.statBoost2 == "LCK") {
              return `<span style="color:${sb12}">${d.luck}</span>`;
            }
            if (d.statBoost1 == "LCK") {
              return `<span style="color:${sb1}">${d.luck}</span>`;
            } else if (d.statBoost2 == "LCK") {
              return `<span style="color:${sb2}">${d.luck}</span>`;
            }
          }
          return d.luck;
        },
      },
    ],
    "Statgain Split Weights": [
      {
        title: "Str%",
        data: (d) => {
          return MultiplyBaseByGrowth(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "STR" && d.statBoost2 == "STR") {
              return `<span style="color:${sb12}">${d.strength.toFixed(
                2
              )}</span>`;
            }
            if (d.statBoost1 == "STR") {
              return `<span style="color:${sb1}">${d.strength.toFixed(
                2
              )}</span>`;
            } else if (d.statBoost2 == "STR") {
              return `<span style="color:${sb2}">${d.strength.toFixed(
                2
              )}</span>`;
            }
          }
          return d.strength.toFixed(2);
        },
      },
      {
        title: "Dex%",
        data: (d) => {
          return MultiplyBaseByGrowth(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "DEX" && d.statBoost2 == "DEX") {
              return `<span style="color:${sb12}">${d.dexterity.toFixed(
                2
              )}</span>`;
            }
            if (d.statBoost1 == "DEX") {
              return `<span style="color:${sb1}">${d.dexterity.toFixed(
                2
              )}</span>`;
            } else if (d.statBoost2 == "DEX") {
              return `<span style="color:${sb2}">${d.dexterity.toFixed(
                2
              )}</span>`;
            }
          }
          return d.dexterity.toFixed(2);
        },
      },
      {
        title: "Agi%",
        data: (d) => {
          return MultiplyBaseByGrowth(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "AGI" && d.statBoost2 == "AGI") {
              return `<span style="color:${sb12}">${d.agility.toFixed(
                2
              )}</span>`;
            }
            if (d.statBoost1 == "AGI") {
              return `<span style="color:${sb1}">${d.agility.toFixed(
                2
              )}</span>`;
            } else if (d.statBoost2 == "AGI") {
              return `<span style="color:${sb2}">${d.agility.toFixed(
                2
              )}</span>`;
            }
          }
          return d.agility.toFixed(2);
        },
      },
      {
        title: "Vit%",
        data: (d) => {
          return MultiplyBaseByGrowth(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "VIT" && d.statBoost2 == "VIT") {
              return `<span style="color:${sb12}">${d.vitality.toFixed(
                2
              )}</span>`;
            }
            if (d.statBoost1 == "VIT") {
              return `<span style="color:${sb1}">${d.vitality.toFixed(
                2
              )}</span>`;
            } else if (d.statBoost2 == "VIT") {
              return `<span style="color:${sb2}">${d.vitality.toFixed(
                2
              )}</span>`;
            }
          }
          return d.vitality.toFixed(2);
        },
      },
      {
        title: "End%",
        data: (d) => {
          return MultiplyBaseByGrowth(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "END" && d.statBoost2 == "END") {
              return `<span style="color:${sb12}">${d.endurance.toFixed(
                2
              )}</span>`;
            }
            if (d.statBoost1 == "END") {
              return `<span style="color:${sb1}">${d.endurance.toFixed(
                2
              )}</span>`;
            } else if (d.statBoost2 == "END") {
              return `<span style="color:${sb2}">${d.endurance.toFixed(
                2
              )}</span>`;
            }
          }
          return d.endurance.toFixed(2);
        },
      },
      {
        title: "Int%",
        data: (d) => {
          return MultiplyBaseByGrowth(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "INT" && d.statBoost2 == "INT") {
              return `<span style="color:${sb12}">${d.intelligence.toFixed(
                2
              )}</span>`;
            }
            if (d.statBoost1 == "INT") {
              return `<span style="color:${sb1}">${d.intelligence.toFixed(
                2
              )}</span>`;
            } else if (d.statBoost2 == "INT") {
              return `<span style="color:${sb2}">${d.intelligence.toFixed(
                2
              )}</span>`;
            }
          }
          return d.intelligence.toFixed(2);
        },
      },
      {
        title: "Wis%",
        data: (d) => {
          return MultiplyBaseByGrowth(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "WIS" && d.statBoost2 == "WIS") {
              return `<span style="color:${sb12}">${d.wisdom.toFixed(
                2
              )}</span>`;
            }
            if (d.statBoost1 == "WIS") {
              return `<span style="color:${sb1}">${d.wisdom.toFixed(2)}</span>`;
            } else if (d.statBoost2 == "WIS") {
              return `<span style="color:${sb2}">${d.wisdom.toFixed(2)}</span>`;
            }
          }
          return d.wisdom.toFixed(2);
        },
      },
      {
        title: "lck%",
        data: (d) => {
          return MultiplyBaseByGrowth(d);
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "LCK" && d.statBoost2 == "LCK") {
              return `<span style="color:${sb12}">${d.luck.toFixed(2)}</span>`;
            }
            if (d.statBoost1 == "LCK") {
              return `<span style="color:${sb1}">${d.luck.toFixed(2)}</span>`;
            } else if (d.statBoost2 == "LCK") {
              return `<span style="color:${sb2}">${d.luck.toFixed(2)}</span>`;
            }
          }
          return d.luck.toFixed(2);
        },
      },
    ],
    "Statgain Split Weights Remove Base": [
      {
        title: "Str-%",
        data: (d) => {
          return MultiplyBaseByGrowth(RemoveBase(d));
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "STR" && d.statBoost2 == "STR") {
              return `<span style="color:${sb12}">${d.strength.toFixed(
                2
              )}</span>`;
            }
            if (d.statBoost1 == "STR") {
              return `<span style="color:${sb1}">${d.strength.toFixed(
                2
              )}</span>`;
            } else if (d.statBoost2 == "STR") {
              return `<span style="color:${sb2}">${d.strength.toFixed(
                2
              )}</span>`;
            }
          }
          return d.strength.toFixed(2);
        },
      },
      {
        title: "Dex-%",
        data: (d) => {
          return MultiplyBaseByGrowth(RemoveBase(d));
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "DEX" && d.statBoost2 == "DEX") {
              return `<span style="color:${sb12}">${d.dexterity.toFixed(
                2
              )}</span>`;
            }
            if (d.statBoost1 == "DEX") {
              return `<span style="color:${sb1}">${d.dexterity.toFixed(
                2
              )}</span>`;
            } else if (d.statBoost2 == "DEX") {
              return `<span style="color:${sb2}">${d.dexterity.toFixed(
                2
              )}</span>`;
            }
          }
          return d.dexterity.toFixed(2);
        },
      },
      {
        title: "Agi-%",
        data: (d) => {
          return MultiplyBaseByGrowth(RemoveBase(d));
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "AGI" && d.statBoost2 == "AGI") {
              return `<span style="color:${sb12}">${d.agility.toFixed(
                2
              )}</span>`;
            }
            if (d.statBoost1 == "AGI") {
              return `<span style="color:${sb1}">${d.agility.toFixed(
                2
              )}</span>`;
            } else if (d.statBoost2 == "AGI") {
              return `<span style="color:${sb2}">${d.agility.toFixed(
                2
              )}</span>`;
            }
          }
          return d.agility.toFixed(2);
        },
      },
      {
        title: "Vit-%",
        data: (d) => {
          return MultiplyBaseByGrowth(RemoveBase(d));
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "VIT" && d.statBoost2 == "VIT") {
              return `<span style="color:${sb12}">${d.vitality.toFixed(
                2
              )}</span>`;
            }
            if (d.statBoost1 == "VIT") {
              return `<span style="color:${sb1}">${d.vitality.toFixed(
                2
              )}</span>`;
            } else if (d.statBoost2 == "VIT") {
              return `<span style="color:${sb2}">${d.vitality.toFixed(
                2
              )}</span>`;
            }
          }
          return d.vitality.toFixed(2);
        },
      },
      {
        title: "End-%",
        data: (d) => {
          return MultiplyBaseByGrowth(RemoveBase(d));
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "END" && d.statBoost2 == "END") {
              return `<span style="color:${sb12}">${d.endurance.toFixed(
                2
              )}</span>`;
            }
            if (d.statBoost1 == "END") {
              return `<span style="color:${sb1}">${d.endurance.toFixed(
                2
              )}</span>`;
            } else if (d.statBoost2 == "END") {
              return `<span style="color:${sb2}">${d.endurance.toFixed(
                2
              )}</span>`;
            }
          }
          return d.endurance.toFixed(2);
        },
      },
      {
        title: "Int-%",
        data: (d) => {
          return MultiplyBaseByGrowth(RemoveBase(d));
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "INT" && d.statBoost2 == "INT") {
              return `<span style="color:${sb12}">${d.intelligence.toFixed(
                2
              )}</span>`;
            }
            if (d.statBoost1 == "INT") {
              return `<span style="color:${sb1}">${d.intelligence.toFixed(
                2
              )}</span>`;
            } else if (d.statBoost2 == "INT") {
              return `<span style="color:${sb2}">${d.intelligence.toFixed(
                2
              )}</span>`;
            }
          }
          return d.intelligence.toFixed(2);
        },
      },
      {
        title: "Wis-%",
        data: (d) => {
          return MultiplyBaseByGrowth(RemoveBase(d));
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "WIS" && d.statBoost2 == "WIS") {
              return `<span style="color:${sb12}">${d.wisdom.toFixed(
                2
              )}</span>`;
            }
            if (d.statBoost1 == "WIS") {
              return `<span style="color:${sb1}">${d.wisdom.toFixed(2)}</span>`;
            } else if (d.statBoost2 == "WIS") {
              return `<span style="color:${sb2}">${d.wisdom.toFixed(2)}</span>`;
            }
          }
          return d.wisdom.toFixed(2);
        },
      },
      {
        title: "Lck-%",
        data: (d) => {
          return MultiplyBaseByGrowth(RemoveBase(d));
        },
        render: (d, mode) => {
          if (mode == "display") {
            if (d.statBoost1 == "LCK" && d.statBoost2 == "LCK") {
              return `<span style="color:${sb12}">${d.luck.toFixed(2)}</span>`;
            }
            if (d.statBoost1 == "LCK") {
              return `<span style="color:${sb1}">${d.luck.toFixed(2)}</span>`;
            } else if (d.statBoost2 == "LCK") {
              return `<span style="color:${sb2}">${d.luck.toFixed(2)}</span>`;
            }
          }
          return d.luck.toFixed(2);
        },
      },
    ],
    "Previous Owner": [
      {
        title: "POwner",
        data: "previousOwner",
        render: (pOwner) => {
          if (pOwner == null) return null;
          return pOwner.name;
        },
      },
      {
        title: "POwner Address",
        data: "previousOwner",
        render: (pOwner) => {
          if (pOwner == null) return null;
          return pOwner.id;
        },
      },
    ],
    Owner: [
      {
        title: "Owner",
        data: "owner",
        render: (owner) => {
          if (owner == null) return owner;
          if (owner.name == "undefined") return null;
          return owner.name;
        },
      },
      {
        title: "Owner Address",
        data: "owner",
        render: (owner) => {
          if (owner == null) return owner;
          if (owner.id == "undefined") return null;
          return owner.id;
        },
      },
    ],
    Name: {
      title: "Name",
      data: (d) => {
        return d;
      },
      render: (hero) => {
        return FullName(hero);
      },
    },
  },

  FullName: function FullName(hero) {
    return `${FirstName(hero)} ${LastName(hero)}`;
  },

  FirstName: function FirstName(hero) {
    if (hero.gender == "male") {
      return (
        maleFirstNames[hero.firstName][0].toUpperCase() +
        maleFirstNames[hero.firstName].substr(
          1,
          maleFirstNames[hero.firstName].length - 1
        )
      );
    } else {
      return (
        femaleFirstNames[hero.firstName][0].toUpperCase() +
        femaleFirstNames[hero.firstName].substr(
          1,
          femaleFirstNames[hero.firstName].length - 1
        )
      );
    }
  },

  LastName: function LastName(hero) {
    return (
      lastNames[hero.lastName][0].toUpperCase() +
      lastNames[hero.lastName].substr(1, lastNames[hero.lastName].length - 1)
    );
  },

  GrowthScore: function GrowthScore(hero) {
    if (hero.growthScore == undefined) {
      GrowthsToRealNumbers(hero);
    }
    let r1 = RemoveBaseGrowth(hero);
    let r2 = AddRarityGrowth(r1);
    let r3 = SumPandSGrowth(r2);
    let r4 = MultiplyGrowthByBaseGrowth(r3);
    let score = SumGrowth(r4);
    return score.toFixed(3);
  },

  GrowthsToRealNumbers: function GrowthsToRealNumbers(hero) {
    hero.strengthGrowthP /= 10000;
    hero.dexterityGrowthP /= 10000;
    hero.agilityGrowthP /= 10000;
    hero.vitalityGrowthP /= 10000;
    hero.enduranceGrowthP /= 10000;
    hero.intelligenceGrowthP /= 10000;
    hero.wisdomGrowthP /= 10000;
    hero.luckGrowthP /= 10000;
    hero.strengthGrowthS /= 10000;
    hero.dexterityGrowthS /= 10000;
    hero.agilityGrowthS /= 10000;
    hero.vitalityGrowthS /= 10000;
    hero.enduranceGrowthS /= 10000;
    hero.intelligenceGrowthS /= 10000;
    hero.wisdomGrowthS /= 10000;
    hero.luckGrowthS /= 10000;
    return hero;
  },

  RemoveBaseGrowth: function RemoveBaseGrowth(hero) {
    let returnHero = Object.assign({}, hero);
    returnHero.strengthGrowthP =
      hero.strengthGrowthP - classVars[hero.mainClass].growth.str;
    returnHero.dexterityGrowthP =
      hero.dexterityGrowthP - classVars[hero.mainClass].growth.dex;
    returnHero.agilityGrowthP =
      hero.agilityGrowthP - classVars[hero.mainClass].growth.agi;
    returnHero.vitalityGrowthP =
      hero.vitalityGrowthP - classVars[hero.mainClass].growth.vit;
    returnHero.enduranceGrowthP =
      hero.enduranceGrowthP - classVars[hero.mainClass].growth.end;
    returnHero.intelligenceGrowthP =
      hero.intelligenceGrowthP - classVars[hero.mainClass].growth.int;
    returnHero.wisdomGrowthP =
      hero.wisdomGrowthP - classVars[hero.mainClass].growth.wis;
    returnHero.luckGrowthP =
      hero.luckGrowthP - classVars[hero.mainClass].growth.lck;
    return returnHero;
  },

  AddRarityGrowth: function AddRarityGrowth(hero) {
    let returnHero = Object.assign({}, hero);
    let bonus = rarityBonus[hero.rarity];
    let statBonus = bonus / 40;
    returnHero.strengthGrowthP = hero.strengthGrowthP + statBonus;
    returnHero.dexterityGrowthP = hero.dexterityGrowthP + statBonus;
    returnHero.agilityGrowthP = hero.agilityGrowthP + statBonus;
    returnHero.vitalityGrowthP = hero.vitalityGrowthP + statBonus;
    returnHero.enduranceGrowthP = hero.enduranceGrowthP + statBonus;
    returnHero.intelligenceGrowthP = hero.intelligenceGrowthP + statBonus;
    returnHero.wisdomGrowthP = hero.wisdomGrowthP + statBonus;
    returnHero.luckGrowthP = hero.luckGrowthP + statBonus;
    return returnHero;
  },

  SumPandSGrowth: function SumPandSGrowth(hero) {
    let returnHero = Object.assign({}, hero);
    returnHero.strengthGrowthP += hero.strengthGrowthS;
    returnHero.dexterityGrowthP += hero.dexterityGrowthS;
    returnHero.agilityGrowthP += hero.agilityGrowthS;
    returnHero.vitalityGrowthP += hero.vitalityGrowthS;
    returnHero.enduranceGrowthP += hero.enduranceGrowthS;
    returnHero.intelligenceGrowthP += hero.intelligenceGrowthS;
    returnHero.wisdomGrowthP += hero.wisdomGrowthS;
    returnHero.luckGrowthP += hero.luckGrowthS;
    return returnHero;
  },

  MultiplyGrowthByBaseGrowth: function MultiplyGrowthByBaseGrowth(hero) {
    let returnHero = Object.assign({}, hero);
    returnHero.strengthGrowthP =
      hero.strengthGrowthP * classVars[hero.mainClass].growth.str;
    returnHero.dexterityGrowthP =
      hero.dexterityGrowthP * classVars[hero.mainClass].growth.dex;
    returnHero.agilityGrowthP =
      hero.agilityGrowthP * classVars[hero.mainClass].growth.agi;
    returnHero.vitalityGrowthP =
      hero.vitalityGrowthP * classVars[hero.mainClass].growth.vit;
    returnHero.enduranceGrowthP =
      hero.enduranceGrowthP * classVars[hero.mainClass].growth.end;
    returnHero.intelligenceGrowthP =
      hero.intelligenceGrowthP * classVars[hero.mainClass].growth.int;
    returnHero.wisdomGrowthP =
      hero.wisdomGrowthP * classVars[hero.mainClass].growth.wis;
    returnHero.luckGrowthP =
      hero.luckGrowthP * classVars[hero.mainClass].growth.lck;
    return returnHero;
  },

  SumGrowth: function SumGrowth(hero) {
    let sum = 0;
    sum += hero.strengthGrowthP;
    sum += hero.dexterityGrowthP;
    sum += hero.agilityGrowthP;
    sum += hero.vitalityGrowthP;
    sum += hero.enduranceGrowthP;
    sum += hero.intelligenceGrowthP;
    sum += hero.wisdomGrowthP;
    sum += hero.luckGrowthP;

    switch (hero.mainClass) {
      case "DarkKnight":
      case "Ninja":
      case "Paladin":
      case "Summoner":
        sum = sum * 1.14285;
        break;
      case "Dragoon":
      case "Sage":
        sum = sum * 1.33334;
        break;
      case "DreadKnight":
        sum = sum * 1.6;
        break;
      default:
        break;
    }
    return sum;
  },

  ClassScore: function ClassScore(hero) {
    let r1 = RemoveBase(hero);
    let r2 = RemoveAverageLevels(r1);
    let r3 = MultiplyBaseByGrowth(r2);
    return SumStats(r3);
  },

  RemoveBase: function RemoveBase(hero) {
    let returnHero = Object.assign({}, hero);
    returnHero.strength = hero.strength - classVars[hero.mainClass].base.str;
    returnHero.dexterity = hero.dexterity - classVars[hero.mainClass].base.dex;
    returnHero.agility = hero.agility - classVars[hero.mainClass].base.agi;
    returnHero.vitality = hero.vitality - classVars[hero.mainClass].base.vit;
    returnHero.endurance = hero.endurance - classVars[hero.mainClass].base.end;
    returnHero.intelligence =
      hero.intelligence - classVars[hero.mainClass].base.int;
    returnHero.wisdom = hero.wisdom - classVars[hero.mainClass].base.wis;
    returnHero.luck = hero.luck - classVars[hero.mainClass].base.lck;
    return returnHero;
  },

  RemoveAverageLevels: function RemoveAverageLevels(hero) {
    let returnHero = Object.assign({}, hero);
    returnHero.strength =
      hero.strength - classVars[hero.mainClass].growth.str * (hero.level - 1);
    returnHero.dexterity =
      hero.dexterity - classVars[hero.mainClass].growth.dex * (hero.level - 1);
    returnHero.agility =
      hero.agility - classVars[hero.mainClass].growth.agi * (hero.level - 1);
    returnHero.vitality =
      hero.vitality - classVars[hero.mainClass].growth.vit * (hero.level - 1);
    returnHero.endurance =
      hero.endurance - classVars[hero.mainClass].growth.end * (hero.level - 1);
    returnHero.intelligence =
      hero.intelligence -
      classVars[hero.mainClass].growth.int * (hero.level - 1);
    returnHero.wisdom =
      hero.wisdom - classVars[hero.mainClass].growth.wis * (hero.level - 1);
    returnHero.luck =
      hero.luck - classVars[hero.mainClass].growth.lck * (hero.level - 1);
    return returnHero;
  },

  MultiplyBaseByGrowth: function MultiplyBaseByGrowth(hero) {
    let returnHero = Object.assign({}, hero);
    returnHero.strength = hero.strength * classVars[hero.mainClass].growth.str;
    returnHero.dexterity =
      hero.dexterity * classVars[hero.mainClass].growth.dex;
    returnHero.agility = hero.agility * classVars[hero.mainClass].growth.agi;
    returnHero.vitality = hero.vitality * classVars[hero.mainClass].growth.vit;
    returnHero.endurance =
      hero.endurance * classVars[hero.mainClass].growth.end;
    returnHero.intelligence =
      hero.intelligence * classVars[hero.mainClass].growth.int;
    returnHero.wisdom = hero.wisdom * classVars[hero.mainClass].growth.wis;
    returnHero.luck = hero.luck * classVars[hero.mainClass].growth.lck;
    return returnHero;
  },

  SumStats: function SumStats(hero) {
    let sum = 0;
    sum += hero.strength;
    sum += hero.dexterity;
    sum += hero.agility;
    sum += hero.vitality;
    sum += hero.endurance;
    sum += hero.intelligence;
    sum += hero.wisdom;
    sum += hero.luck;
    return sum.toFixed(2);
  },

  FullTime: function FullTime(hero) {
    let currSecond = new Date().getTime() / 1000;
    if (currSecond > hero.staminaFullAt) {
      return 0;
    } else {
      let current = new Date(hero.staminaFullAt * 1000);
      return current;
    }
  },

  FullTimeHours: function FullTimeHours(hero) {
    let currSecond = new Date().getTime() / 1000;
    if (currSecond > hero.staminaFullAt) {
      return 0;
    } else {
      let current = (hero.staminaFullAt - currSecond) / 3600;
      return current.toFixed(2);
    }
  },

  CurrentStamina: function CurrentStamina(hero) {
    let currSecond = new Date().getTime() / 1000;
    if (currSecond > hero.staminaFullAt) {
      return hero.stamina;
    } else {
      return (
        hero.stamina - ((hero.staminaFullAt - currSecond) / 1200).toFixed(0)
      );
    }
  },

  FixSalePrice: function FixSalePrice(price) {
    return (price * 0.000000000000000001).toFixed(1);
  },

  getRecessives: function getRecessives(hero) {
    const rawKai = genesToKai(BigInt(hero.statGenes.toString()))
      .split(" ")
      .join("");
    const genes = {};
    const Dominant = {};
    const R1 = {};
    const R2 = {};
    const R3 = {};
    const genePoolArray = [];
    for (const k in rawKai.split("")) {
      if (rawKai.hasOwnProperty(k)) {
        const trait = statsGenesMap[Math.floor(Number(k) / 4)];

        const kai = rawKai[k];
        const valueNum = kai2dec(kai);
        genes[trait] = choices[trait][valueNum];
        genePoolArray.push(genes[trait]);

        for (let i = 0; i < genePoolArray.length; i++) {
          if (
            i == 0 ||
            i == 4 ||
            i == 8 ||
            i == 12 ||
            i == 16 ||
            i == 20 ||
            i == 24 ||
            i == 28 ||
            i == 32 ||
            i == 36 ||
            i == 40 ||
            i == 44
          ) {
            R3[trait] = genePoolArray[i];
          } else if (
            i == 1 ||
            i == 5 ||
            i == 9 ||
            i == 13 ||
            i == 17 ||
            i == 21 ||
            i == 25 ||
            i == 29 ||
            i == 33 ||
            i == 37 ||
            i == 41 ||
            i == 45
          ) {
            R2[trait] = genePoolArray[i];
          } else if (
            i == 2 ||
            i == 6 ||
            i == 10 ||
            i == 14 ||
            i == 18 ||
            i == 22 ||
            i == 26 ||
            i == 30 ||
            i == 34 ||
            i == 38 ||
            i == 42 ||
            i == 46
          ) {
            R1[trait] = genePoolArray[i];
          } else if (
            i == 3 ||
            i == 7 ||
            i == 11 ||
            i == 15 ||
            i == 19 ||
            i == 23 ||
            i == 27 ||
            i == 31 ||
            i == 35 ||
            i == 39 ||
            i == 43 ||
            i == 47
          ) {
            Dominant[trait] = genePoolArray[i];
          }
        }
      }
    }
    hero.R1 = R1;
    hero.R2 = R2;
    hero.R3 = R3;
    return;
  },
};

function HeroTable(id, heroes, cols) {
  console.log(heroes, cols);
  if (typeof cols == "undefined" || typeof heroes == "undefined") {
    return;
  }
  if ($.fn.dataTable.isDataTable(id)) {
    $(id).DataTable().clear().destroy();
    $(id).html("");
  }
  heroes.forEach((h) => {
    getRecessives(h);
  });
  heroes.forEach((h) => {
    h.classScore = ClassScore(h);
  });
  heroes.forEach((h) => {
    h.growthScore = GrowthScore(h);
  });
  loadedHeroTable = $(id).DataTable({
    dom: `<"row"<"col-md-4"l><"col-md-8"p>>t<"row"<"col-md-4"l><"col-md-8"p><"col-md-6"B><"col-md-6 text-end"i>>`,
    buttons: ["copy", "excel", "csv"],
    stateSave: true,
    data: heroes,
    lengthMenu: [
      [10, 25, 50, 100, 200, 500, 1000, -1],
      [10, 25, 50, 100, 200, 500, 1000, "ALL"],
    ],
    scrollX: true,
    searching: true,
    pageLength: 25,
    order: [0, "asc"],
    columns: cols,
    rowCallback: (row, data) => {
      $(row)
        .unbind("click")
        .click(() => {
          console.log(data);
          OpenHero(data.numberId);
        });
      switch (data.rarity) {
        case 4:
          $(row).css("background-color", "#4e007b");
          break;
        case 3:
          $(row).css("background-color", "#813500");
          break;
        case 2:
          $(row).css("background-color", "#003a87");
          break;
        case 1:
          $(row).css("background-color", "#006c15");
          break;
        default:
          $(row).css("background-color", "#5f5f5f");
          break;
      }
    },
    initComplete: function (row) {
      let liveFiltering = "";
      cols.forEach((c, i) => {
        liveFiltering += `<div class="col-3 col-md-2" style="display:inline-block;"><input class="TableFilter form-control form-control-sm" type="text" placeholder="Search ${c.title}" oninput="SearchColumn(${i}, this.value)"></div>`;
      });

      $("#liveFilters").html(liveFiltering);
    },
  });
  ClearTableSearches();
  return loadedHeroTable;
}

function ClearTableSearches() {
  loadedHeroTable.columns().search("").draw();
  $(".TableFilter").val("");
}

function SearchColumn(index, val) {
  console.log(index, val);
  loadedHeroTable.column(index).search(val).draw();
}

function genesToKai(genes) {
  const ALPHABET = "123456789abcdefghijkmnopqrstuvwx";
  const BASE = BigInt(ALPHABET.length);

  let buf = "";
  while (genes >= BASE) {
    const mod = genes % BASE;
    buf = ALPHABET[Number(mod)] + buf;
    genes = (genes - mod) / BASE;
  }

  buf = ALPHABET[Number(genes)] + buf;

  buf = buf.padStart(48, "1");

  return buf.replace(/(.{4})/g, "$1 ");
}

function kai2dec(kai) {
  const ALPHABET = "123456789abcdefghijkmnopqrstuvwx";
  return ALPHABET.indexOf(kai);
}

const visualGenesMap = {
  0: "gender",
  1: "headAppendage",
  2: "backAppendage",
  3: "background",
  4: "hairStyle",
  5: "hairColor",
  6: "visualUnknown1",
  7: "eyeColor",
  8: "skinColor",
  9: "appendageColor",
  10: "backAppendageColor",
  11: "visualUnknown2",
};
var heroClasses = [
  "Warrior",
  "Knight",
  "Thief",
  "Archer",
  "Priest",
  "Wizard",
  "Monk",
  "Pirate",
  "Paladin",
  "DarkKnight",
  "Summoner",
  "Ninja",
  "Dragoon",
  "Sage",
  "DreadKnight",
];

var classVars = {
  Warrior: {
    growth: {
      str: 0.75,
      dex: 0.7,
      agi: 0.5,
      vit: 0.65,
      end: 0.65,
      int: 0.2,
      wis: 0.2,
      lck: 0.2,
    },
    base: {
      str: 11,
      dex: 8,
      agi: 7,
      vit: 9,
      end: 8,
      int: 5,
      wis: 5,
      lck: 7,
    },
  },
  Knight: {
    growth: {
      str: 0.7,
      dex: 0.55,
      agi: 0.45,
      vit: 0.75,
      end: 0.75,
      int: 0.2,
      wis: 0.25,
      lck: 0.35,
    },
    base: {
      str: 10,
      dex: 6,
      agi: 6,
      vit: 10,
      end: 10,
      int: 5,
      wis: 6,
      lck: 7,
    },
  },
  Thief: {
    growth: {
      str: 0.55,
      dex: 0.55,
      agi: 0.7,
      vit: 0.5,
      end: 0.45,
      int: 0.25,
      wis: 0.35,
      lck: 0.65,
    },
    base: {
      str: 7,
      dex: 8,
      agi: 10,
      vit: 6,
      end: 6,
      int: 6,
      wis: 7,
      lck: 10,
    },
  },
  Archer: {
    growth: {
      str: 0.55,
      dex: 0.8,
      agi: 0.5,
      vit: 0.5,
      end: 0.6,
      int: 0.4,
      wis: 0.25,
      lck: 0.4,
    },
    base: {
      str: 7,
      dex: 12,
      agi: 7,
      vit: 6,
      end: 7,
      int: 7,
      wis: 6,
      lck: 8,
    },
  },
  Priest: {
    growth: {
      str: 0.3,
      dex: 0.3,
      agi: 0.4,
      vit: 0.5,
      end: 0.6,
      int: 0.7,
      wis: 0.8,
      lck: 0.4,
    },
    base: {
      str: 5,
      dex: 6,
      agi: 6,
      vit: 6,
      end: 7,
      int: 10,
      wis: 13,
      lck: 7,
    },
  },
  Wizard: {
    growth: {
      str: 0.3,
      dex: 0.3,
      agi: 0.4,
      vit: 0.5,
      end: 0.5,
      int: 0.8,
      wis: 0.8,
      lck: 0.4,
    },
    base: {
      str: 5,
      dex: 6,
      agi: 6,
      vit: 6,
      end: 6,
      int: 12,
      wis: 12,
      lck: 7,
    },
  },
  Monk: {
    growth: {
      str: 0.6,
      dex: 0.6,
      agi: 0.6,
      vit: 0.6,
      end: 0.55,
      int: 0.25,
      wis: 0.5,
      lck: 0.3,
    },
    base: {
      str: 8,
      dex: 8,
      agi: 8,
      vit: 8,
      end: 8,
      int: 6,
      wis: 8,
      lck: 6,
    },
  },
  Pirate: {
    growth: {
      str: 0.7,
      dex: 0.7,
      agi: 0.5,
      vit: 0.6,
      end: 0.55,
      int: 0.2,
      wis: 0.2,
      lck: 0.55,
    },
    base: {
      str: 9,
      dex: 9,
      agi: 7,
      vit: 8,
      end: 7,
      int: 5,
      wis: 5,
      lck: 10,
    },
  },
  Paladin: {
    growth: {
      str: 0.8,
      dex: 0.4,
      agi: 0.35,
      vit: 0.8,
      end: 0.8,
      int: 0.3,
      wis: 0.65,
      lck: 0.4,
    },
    base: {
      str: 10,
      dex: 6,
      agi: 6,
      vit: 10,
      end: 10,
      int: 6,
      wis: 10,
      lck: 7,
    },
  },
  DarkKnight: {
    growth: {
      str: 0.85,
      dex: 0.55,
      agi: 0.35,
      vit: 0.75,
      end: 0.6,
      int: 0.7,
      wis: 0.35,
      lck: 0.35,
    },
    base: {
      str: 14,
      dex: 7,
      agi: 6,
      vit: 11,
      end: 7,
      int: 8,
      wis: 6,
      lck: 6,
    },
  },
  Summoner: {
    growth: {
      str: 0.45,
      dex: 0.45,
      agi: 0.5,
      vit: 0.5,
      end: 0.5,
      int: 0.85,
      wis: 0.85,
      lck: 0.4,
    },
    base: {
      str: 6,
      dex: 7,
      agi: 7,
      vit: 6,
      end: 6,
      int: 14,
      wis: 12,
      lck: 7,
    },
  },
  Ninja: {
    growth: {
      str: 0.5,
      dex: 0.75,
      agi: 0.85,
      vit: 0.5,
      end: 0.4,
      int: 0.5,
      wis: 0.4,
      lck: 0.6,
    },
    base: {
      str: 7,
      dex: 10,
      agi: 12,
      vit: 7,
      end: 6,
      int: 7,
      wis: 6,
      lck: 10,
    },
  },
  Dragoon: {
    growth: {
      str: 0.8,
      dex: 0.65,
      agi: 0.65,
      vit: 0.6,
      end: 0.7,
      int: 0.5,
      wis: 0.6,
      lck: 0.5,
    },
    base: {
      str: 11,
      dex: 9,
      agi: 8,
      vit: 8,
      end: 10,
      int: 7,
      wis: 9,
      lck: 8,
    },
  },
  Sage: {
    growth: {
      str: 0.4,
      dex: 0.4,
      agi: 0.75,
      vit: 0.6,
      end: 0.5,
      int: 0.9,
      wis: 0.9,
      lck: 0.55,
    },
    base: {
      str: 6,
      dex: 6,
      agi: 8,
      vit: 7,
      end: 6,
      int: 15,
      wis: 15,
      lck: 7,
    },
  },
  DreadKnight: {
    growth: {
      str: 0.85,
      dex: 0.75,
      agi: 0.6,
      vit: 0.65,
      end: 0.75,
      int: 0.65,
      wis: 0.65,
      lck: 0.6,
    },
    base: {
      str: 15,
      dex: 8,
      agi: 8,
      vit: 10,
      end: 11,
      int: 8,
      wis: 8,
      lck: 7,
    },
  },
};

const choices = {
  gender: { 1: "male", 3: "female" },
  background: {
    0: "desert",
    2: "forest",
    4: "plains",
    6: "island",
    8: "swamp",
    10: "mountains",
    12: "city",
    14: "arctic",
  },
  class: {
    0: "warrior",
    1: "knight",
    2: "thief",
    3: "archer",
    4: "priest",
    5: "wizard",
    6: "monk",
    7: "pirate",
    16: "paladin",
    17: "darkKnight",
    18: "summoner",
    19: "ninja",
    24: "dragoon",
    25: "sage",
    28: "dreadKnight",
  },
  skinColor: {
    0: "c58135",
    2: "f1ca9e",
    4: "985e1c",
    6: "57340c",
    8: "e6a861",
    10: "7b4a11",
    12: "e5ac91",
    14: "aa5c38",
  },
  hairColor: {
    0: "ab9159",
    1: "af3853",
    2: "578761",
    3: "068483",
    4: "48321e",
    5: "66489e",
    6: "ca93a7",
    7: "62a7e6",
    16: "d7bc65",
    17: "9b68ab",
    18: "8d6b3a",
    19: "566377",
    24: "880016",
    25: "353132",
    28: "8f9bb3",
  },
  eyeColor: {
    0: "203997",
    2: "896693",
    4: "bb3f55",
    6: "0d7634",
    8: "8d7136",
    10: "613d8a",
    12: "2494a2",
    14: "a41e12",
  },
  appendageColor: {
    0: "c5bfa7",
    1: "a88b47",
    2: "58381e",
    3: "566f7d",
    4: "2a386d",
    5: "3f2e40",
    6: "830e18",
    7: "6f3a3c",
    16: "6b173c",
    17: "a0304d",
    18: "78547c",
    19: "352a51",
    24: "c29d35",
    25: "211f1f",
    28: "d7d7d7",
  },
  backAppendageColor: {
    0: "c5bfa7",
    1: "a88b47",
    2: "58381e",
    3: "566f7d",
    4: "2a386d",
    5: "3f2e40",
    6: "830e18",
    7: "6f3a3c",
    16: "6b173c",
    17: "a0304d",
    18: "78547c",
    19: "352a51",
    24: "c29d35",
    25: "211f1f",
    28: "d7d7d7",
  },
  hairStyle: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    24: 24,
    25: 25,
    28: 28,
  },
  backAppendage: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    24: 24,
    25: 25,
    28: 28,
  },
  headAppendage: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    24: 24,
    25: 25,
    28: 28,
  },
  subClass: {
    0: "warrior",
    1: "knight",
    2: "thief",
    3: "archer",
    4: "priest",
    5: "wizard",
    6: "monk",
    7: "pirate",
    16: "paladin",
    17: "darkKnight",
    18: "summoner",
    19: "ninja",
    24: "dragoon",
    25: "sage",
    28: "dreadKnight",
  },
  profession: {
    0: "mining",
    2: "gardening",
    4: "fishing",
    6: "foraging",
  },
  passive1: {
    0: "Basic1",
    1: "Basic2",
    2: "Basic3",
    3: "Basic4",
    4: "Basic5",
    5: "Basic6",
    6: "Basic7",
    7: "Basic8",
    16: "Advanced1",
    17: "Advanced2",
    18: "Advanced3",
    19: "Advanced4",
    24: "Elite1",
    25: "Elite2",
    28: "Transcendent1",
  },
  passive2: {
    0: "Basic1",
    1: "Basic2",
    2: "Basic3",
    3: "Basic4",
    4: "Basic5",
    5: "Basic6",
    6: "Basic7",
    7: "Basic8",
    16: "Advanced1",
    17: "Advanced2",
    18: "Advanced3",
    19: "Advanced4",
    24: "Elite1",
    25: "Elite2",
    28: "Transcendent1",
  },
  active1: {
    0: "Basic1",
    1: "Basic2",
    2: "Basic3",
    3: "Basic4",
    4: "Basic5",
    5: "Basic6",
    6: "Basic7",
    7: "Basic8",
    16: "Advanced1",
    17: "Advanced2",
    18: "Advanced3",
    19: "Advanced4",
    24: "Elite1",
    25: "Elite2",
    28: "Transcendent1",
  },
  active2: {
    0: "Basic1",
    1: "Basic2",
    2: "Basic3",
    3: "Basic4",
    4: "Basic5",
    5: "Basic6",
    6: "Basic7",
    7: "Basic8",
    16: "Advanced1",
    17: "Advanced2",
    18: "Advanced3",
    19: "Advanced4",
    24: "Elite1",
    25: "Elite2",
    28: "Transcendent1",
  },
  statBoost1: {
    0: "STR",
    2: "AGI",
    4: "INT",
    6: "WIS",
    8: "LCK",
    10: "VIT",
    12: "END",
    14: "DEX",
  },
  statBoost2: {
    0: "STR",
    2: "AGI",
    4: "INT",
    6: "WIS",
    8: "LCK",
    10: "VIT",
    12: "END",
    14: "DEX",
  },
  element: {
    0: "fire",
    2: "water",
    4: "earth",
    6: "wind",
    8: "lightning",
    10: "ice",
    12: "light",
    14: "dark",
  },
  visualUnknown1: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
    13: 13,
    14: 14,
    15: 15,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    24: 24,
    25: 25,
    28: 28,
  },
  visualUnknown2: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
    13: 13,
    14: 14,
    15: 15,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    24: 24,
    25: 25,
    28: 28,
  },
  statsUnknown1: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
    13: 13,
    14: 14,
    15: 15,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    24: 24,
    25: 25,
    28: 28,
  },
  statsUnknown2: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
    13: 13,
    14: 14,
    15: 15,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    24: 24,
    25: 25,
    28: 28,
  },
};

var femaleFirstNames = [
  "Alexandria",
  "Romy",
  "Jenina",
  "Gemma",
  "Trinette",
  "Heike",
  "Odila",
  "Jocelyne",
  "Tracy",
  "Ryann",
  "Cathleen",
  "Chiana",
  "Nichole",
  "Arely",
  "Vicky",
  "Manuela",
  "Manny",
  "Zoey",
  "Jacqui",
  "Aiglentina",
  "Melanee",
  "Ramona",
  "Aislinn",
  "Geralyn",
  "Rea",
  "Cam",
  "Berdine",
  "Ayasha",
  "Katelynn",
  "Camryn",
  "Doro",
  "Favor",
  "Elfrida",
  "Fortunat",
  "Mallorie",
  "Teagan",
  "Chloris",
  "Germain",
  "Allete",
  "Charlot",
  "Jenine",
  "Vanesa",
  "Isabell",
  "Verena",
  "Tatiana",
  "Rolande",
  "Delight",
  "Gatty",
  "Ashtyn",
  "Queena",
  "Kylee",
  "Shirley",
  "Chanelle",
  "Leondra",
  "Shanice",
  "Elinore",
  "Cosette",
  "Madolen",
  "Faralda",
  "Reilly",
  "Harley",
  "Ayanna",
  "Janina",
  "Shawna",
  "Paulina",
  "Sadie",
  "Dragana",
  "Veronique",
  "Manhattan",
  "Savannah",
  "Fabiana",
  "Merla",
  "Arlett",
  "Amabelle",
  "Gisele",
  "Adriene",
  "Kierra",
  "Diamanta",
  "Kunissa",
  "Marianna",
  "Laney",
  "Aveline",
  "Lauretta",
  "Mireya",
  "Gallia",
  "Katelyn",
  "Jamie",
  "Mia",
  "Roux",
  "Leontina",
  "Hildegard",
  "Deborah",
  "Lena",
  "Brandy",
  "Kasey",
  "Cinzia",
  "Gertraut",
  "Charity",
  "Alysha",
  "Maiken",
  "Patricia",
  "Angelia",
  "Kendall",
  "Daggy",
  "Valerie",
  "Damien",
  "Udele",
  "Jenni",
  "Andra",
  "Jessamina",
  "Alyson",
  "Destini",
  "Dian",
  "Hedwig",
  "Roxana",
  "Brita",
  "Aubrie",
  "Robinetta",
  "Ireland",
  "Estee",
  "Claudette",
  "Angela",
  "Carly",
  "Ute",
  "Orane",
  "Agnese",
  "Missye",
  "Ingeborg",
  "Hubertine",
  "Montana",
  "Adeline",
  "Melina",
  "Mavise",
  "Adriana",
  "Ashlin",
  "Euphrasia",
  "Giuseppa",
  "Ignatia",
  "Leilena",
  "Kenia",
  "Amedea",
  "Sandy",
  "Alex",
  "Gianna",
  "Nadina",
  "Taite",
  "Linette",
  "Xenia",
  "Rene",
  "Hazel",
  "Estrid",
  "Brynn",
  "Kimbell",
  "Waldburg",
  "Janessa",
  "Kunigunda",
  "Lolo",
  "Marley",
  "Carmelia",
  "Ciara",
  "Vafara",
  "Marija",
  "Lilli",
  "Laurel",
  "Zerla",
  "Pyper",
  "Bronja",
  "Neeske",
  "Sissi",
  "Evangelina",
  "Alarise",
  "Catherine",
  "Catharina",
  "Dianna",
  "Serilde",
  "Iwana",
  "Cherelle",
  "Ariel",
  "Alaine",
  "Pamelina",
  "Fearne",
  "Rhea",
  "Nancy",
  "Kaylah",
  "Frida",
  "Floriana",
  "Maryl",
  "Connie",
  "Leonela",
  "Palma",
  "Odile",
  "Ashi",
  "Joie",
  "Jasmyne",
  "Ginette",
  "Desirat",
  "Debora",
  "Adelaide",
  "Margot",
  "Fara",
  "Else",
  "Georgine",
  "Yara",
  "Kelli",
  "Esdras",
  "Madeline",
  "Leonore",
  "Avon",
  "Elfi",
  "Ulitta",
  "Jutta",
  "Fanette",
  "Carolyn",
  "Sasha",
  "Sasna",
  "Bobbi",
  "Alexis",
  "Elisa",
  "Henriette",
  "Ruth",
  "Lacene",
  "Tatyana",
  "Gretti",
  "Nanon",
  "Emmalee",
  "Alfonsine",
  "Klara",
  "Mabelle",
  "Annika",
  "Fleur",
  "Julchen",
  "Ariadne",
  "Elmina",
  "Dortje",
  "Karoly",
  "Abella",
  "Ratna",
  "Rownan",
  "Wibeke",
  "Eve",
  "Norma",
  "Meike",
  "Ortelia",
  "Livia",
  "Edithe",
  "Berta",
  "Lea",
  "Nata",
  "Aceline",
  "Natalia",
  "Valentina",
  "Leopoldine",
  "Philippa",
  "Erme",
  "Aget",
  "Klarinda",
  "Graziella",
  "Arianna",
  "Conradine",
  "Mckenna",
  "Winola",
  "Erin",
  "Serhilde",
  "Monserrat",
  "Trinity",
  "Janelle",
  "Sophie",
  "Harmony",
  "Alonza",
  "Mone",
  "Ulita",
  "Sinja",
  "Kara",
  "Candice",
  "Jonna",
  "Eglantina",
  "Berte",
  "Tamara",
  "Alma",
  "Mai",
  "Arabela",
  "Regina",
  "Ottilie",
  "Joceline",
  "Daralis",
  "Clementia",
  "Ahrelar",
  "Vhassoyor",
  "Vynah",
  "Foriris",
  "Faenios",
  "Flaeranar",
  "Pahronnis",
  "Flaererah",
  "Bahelar",
  "Fyllaris",
  "Bahelion",
  "Dirroran",
  "Vhasserris",
  "Eranerah",
  "Baerrorlan",
  "Baerrirah",
  "Essiris",
  "Iranyris",
  "Sanirah",
  "Faenoyor",
  "Maegiris",
  "Ormymion",
  "Drennyris",
  "Harterah",
  "Vynaenor",
  "Pahryl",
  "Irnatis",
  "Vhassios",
  "Maraan",
  "Nahiris",
  "Flaerah",
  "Hartohr",
  "Ostaar",
  "Vhassoran",
  "Marys",
  "Aenyr",
  "Hestassar",
  "Hartoyor",
  "Hotonnis",
  "Fyllinar",
  "Iranaenor",
  "Nestohr",
  "Pahrelion",
  "Hestolis",
  "Drennel",
  "Drennassar",
  "Hartaar",
  "Ormoyor",
  "Maegoyor",
  "Ostiros",
  "Nesten",
  "Nestelion",
  "Fyllyrion",
  "Paenios",
  "Aenassar",
  "Sanoris",
  "Baerraan",
  "Dirrahran",
  "Eranelar",
  "Ormerris",
  "Dynelar",
  "Hotyris",
  "Maegyrion",
  "Hotoris",
  "Maryr",
  "Naerios",
  "Drennios",
  "Ostel",
  "Stassohrin",
  "Drenniris",
  "Bahiris",
  "Stassah",
  "Forelion",
  "Ormar",
  "Flaerar",
  "Baerrymion",
  "Iranymion",
  "Essanar",
  "Vollerah",
  "Ennatis",
  "Orlelion",
  "Irroran",
  "Flaeryl",
  "Anerinar",
  "Vhassohr",
  "Paenorlan",
  "Sorroran",
  "Irrar",
  "Pahrel",
  "Paenoris",
  "Nesterion",
  "Irranar",
  "Anerolis",
  "Phassyrion",
  "Hartahran",
  "Hotenohr",
  "Naererah",
  "Phassyl",
  "Forohrin",
  "Naerassar",
  "Drennah",
  "Aenys",
  "Ostiris",
  "Stassahran",
  "Ostios",
  "Faeniris",
  "Essyris",
  "Marelion",
  "Faenyrion",
  "Hotah",
  "Hestonnis",
  "Brenelar",
  "Vhassymion",
  "Foranar",
  "Iranelar",
  "Hotaar",
  "Nahyl",
  "Aenonnis",
  "Foren",
  "Ahraan",
  "Ennelion",
  "Irnonnis",
  "Pahraris",
  "Eranos",
  "Hesten",
  "Maegiros",
  "Paenin",
  "Orlerah",
  "Moparis",
  "Nestios",
  "Fyllanar",
  "Irrel",
  "Vynios",
  "Irraan",
  "Iraninar",
  "Flaeriris",
  "Aneronnis",
  "Phassenohr",
  "Sanelar",
  "Naererion",
  "Ennoran",
  "Aeninar",
  "Iranaris",
  "Essohr",
  "Sorrahran",
  "Sanelion",
  "Foryris",
  "Brenahran",
  "Pahrerah",
  "Ahrelion",
  "Drennenohr",
  "Paenenohr",
  "Fylloyor",
  "Ahrah",
  "Anerios",
  "Anerorlan",
  "Essoran",
  "Baerrin",
  "Eranonnis",
  "Osterion",
  "Paenerah",
  "Fyllaan",
  "Brenaan",
  "Orlerris",
  "Maegolis",
  "Irrios",
  "Aeniris",
  "Paenoran",
  "Hestyl",
  "Dynion",
  "Sorrerah",
  "Mopatis",
  "Orlin",
  "Paenohrin",
  "Maegassar",
  "Irnos",
  "Iranen",
  "Stassiros",
  "Sanenohr",
  "Hartaan",
  "Naeriris",
  "Foros",
  "Vollos",
  "Vhassanar",
  "Irren",
  "Mopelion",
  "Hartys",
  "Hartin",
  "Vollyris",
  "Brenyr",
  "Pahrirah",
  "Naerelar",
  "Bahaar",
  "Irnyr",
  "Pahroran",
  "Sorrerion",
  "Hotirah",
  "Marerris",
  "Vhassion",
  "Sorroyor",
  "Dirrelion",
  "Aneriris",
  "Vollaan",
  "Hotiris",
  "Drenniros",
  "Bahassar",
  "Mopenohr",
  "Drennen",
  "Irrenohr",
  "Fyllerris",
  "Hotoyor",
  "Iraniris",
  "Flaerel",
  "Sorrirah",
  "Mopahran",
  "Fyllel",
  "Drennymion",
  "Ahriris",
  "Pahryris",
  "Ostoyor",
  "Paenelion",
  "Vhassahran",
  "Ahrassar",
  "Irnassar",
  "Vhassyl",
  "Aneroyor",
  "Iranaar",
  "Sorrys",
  "Drennerion",
  "Ostaenor",
  "Vynelar",
  "Baerrolis",
  "Paenyrion",
  "Stassin",
  "Bahoran",
  "Dynohrin",
  "Vhasselion",
  "Nestyrion",
  "Maegys",
  "Anererah",
  "Marel",
  "Faenion",
  "Baerroris",
  "Bahion",
  "Anerar",
  "Vynolis",
  "Hestaar",
  "Vollyr",
  "Anerin",
  "Irnoris",
  "Hestys",
  "Vollahran",
  "Naeryrion",
  "Enniris",
  "Paenatis",
  "Paeninar",
  "Bahohrin",
  "Vollanar",
  "Esserah",
  "Hesterah",
  "Vynaan",
  "Forys",
  "Sanaan",
  "Bahoris",
  "Paenerris",
  "Hartar",
  "Enniros",
  "Aenyris",
  "Ormiros",
  "Hotaris",
  "Dirren",
  "Baerratis",
  "Phaedrene",
  "Euniala",
  "Thellione",
  "Kasaia",
  "Elaera",
  "Timeope",
  "Amathania",
  "Thesothoe",
  "Irile",
  "Orialla",
  "Hekiphae",
  "Thaelessa",
  "Dephala",
  "Sofolis",
  "Pronora",
  "Melale",
  "Basialla",
  "Astomela",
  "Aegale",
  "Timothee",
  "Iphamia",
  "Nikassa",
  "Laodestra",
  "Phenochis",
  "Phoebinca",
  "Meleusa",
  "Lasthiala",
  "Melosa",
  "Chionitheme",
  "Maeriala",
  "Ianusa",
  "Rhenene",
  "Pheladia",
  "Doriala",
  "Cilleira",
  "Hyrephone",
  "Auxerine",
  "Thellotis",
  "Aderine",
  "Telepharpia",
  "Naesynome",
  "Lastheusa",
  "Ipheris",
  "Kasyllis",
  "Isime",
  "Hellaia",
  "Anastelaia",
  "Phenyllis",
  "Harmissa",
  "Eideope",
  "Dynothoe",
  "Adopis",
  "Timamene",
  "Endene",
  "Damippe",
  "Naesime",
  "Aegyse",
  "Thaliera",
  "Chionora",
  "Egopis",
  "Althanie",
  "Antephone",
  "Dynosyne",
  "Basamna",
  "Kasomene",
  "Ianthaera",
  "Andryllis",
  "Timothoe",
  "Phaedrona",
  "Perelle",
  "Cilaera",
  "Agathiope",
  "Ianthiore",
  "Dianima",
  "Semaleia",
  "Agereia",
  "Timare",
  "Ismale",
  "Hesiphae",
  "Phaeriope",
  "Barbica",
  "Asoiala",
  "Cillone",
  "Hyrmamna",
  "Antiope",
  "Rhenaia",
  "Theophochis",
  "Calenope",
  "Melothea",
  "Ianilla",
  "Cilliche",
  "Ionina",
  "Maerista",
  "Ionolis",
  "Parthereia",
  "Argele",
  "Basereia",
  "Delone",
  "Eviche",
  "Tryphitheme",
  "Caeousa",
  "Orothea",
  "Anastenia",
  "Metyllis",
  "Ionothea",
  "Hypsitheme",
  "Argadia",
  "Parthano",
  "Amarhamna",
  "Naesinna",
  "Canenope",
  "Chionile",
  "Kassiopis",
  "Amathesilea",
  "Orephone",
  "Chryseris",
  "Actelaia",
  "Theophane",
  "Hekano",
  "Isena",
  "Arteusa",
  "Dynica",
  "Adele",
  "Aikothoe",
  "Polomeda",
  "Philatea",
  "Phaerime",
  "Eidithoe",
  "Deinice",
  "Thaelosyne",
  "Hellanassa",
  "Demynome",
  "Katythia",
  "Agaromela",
  "Ionusa",
  "Caeanassa",
  "Aikomela",
  "Nikerine",
  "Chrysede",
  "Telephadina",
  "Pyrhousa",
  "Amathaia",
  "Sofolea",
  "Antameia",
  "Dyneira",
  "Iomassa",
  "Omphatea",
  "Appynome",
  "Philinna",
  "Chrysiolea",
  "Katadina",
  "Cythippe",
  "Iomochis",
  "Thalobe",
  "Kharopis",
  "Actochis",
  "Aeraea",
  "Basyllis",
  "Chionea",
  "Endialla",
  "Kallousa",
  "Katenope",
  "Phellamene",
  "Rhenippe",
  "Eudestra",
  "Olothoe",
  "Delathe",
  "Lasthilla",
  "Hyrmiolea",
  "Eupholea",
  "Pheriope",
  "Demomene",
  "Lalaleia",
  "Hippeda",
  "Iria",
  "Caeitrite",
  "Ageris",
  "Sophonia",
  "Harmiolea",
  "Moniphae",
  "Monoreia",
  "Ismaste",
  "Timinca",
  "Diomime",
  "Nesima",
  "Polon",
  "Agomela",
  "Irothea",
  "Andrarpia",
  "Astobe",
  "Sophedeia",
  "Phoebanassa",
  "Phoebaleia",
  "Partheis",
  "Amarheope",
  "Phaeneda",
  "Alcusa",
  "Ampyse",
  "Laodamene",
  "Pyrhochis",
  "Hermephone",
  "Kharania",
  "Kassephone",
  "Oreithochis",
  "Aedyse",
  "Appochis",
  "Isatea",
  "Sophosyne",
  "Achona",
  "Aegusa",
  "Dephasia",
  "Megamene",
  "Asteris",
  "Monaris",
  "Hippobe",
  "Semon",
  "Callynome",
  "Argia",
  "Helleira",
  "Hippithoe",
  "Elelle",
  "Phenatea",
  "Irestra",
  "Hippica",
  "Melyllis",
  "Nesilla",
  "Hyrmamia",
  "Demare",
  "Kasaris",
  "Sofithoe",
  "Dianiera",
  "Agaronia",
  "Theophedeia",
  "Harmone",
  "Barbosyne",
  "Hypsothoe",
  "Phoebine",
  "Dephessa",
  "Ionelaia",
  "Nesotis",
  "Telephione",
  "Argyle",
  "Iolile",
  "Kason",
  "Phoebaea",
  "Cythynome",
  "Pronyne",
  "Telephestra",
  "Argeia",
  "Kydano",
  "Hypselaia",
  "Thellona",
  "Kalosyne",
  "Myraea",
  "Kalyle",
  "Aedane",
  "Megamia",
  "Oreithiala",
  "Dianele",
  "Irima",
  "Kateda",
  "Cilehe",
  "Kasosa",
  "Irarpia",
  "Aedehe",
  "Demope",
  "Aeriche",
  "Diomima",
  "Sofite",
  "Khlorina",
  "Antile",
  "Theline",
  "Basiala",
  "Phineia",
  "Nesione",
  "Laloreia",
  "Elione",
  "Hekite",
  "Aegine",
  "Theopheope",
  "Rhenousa",
  "Perippe",
  "Euphonia",
  "Ireris",
  "Polaia",
  "Iphione",
  "Hekeira",
  "Monothoe",
  "Cythatea",
  "Elolea",
  "Argynome",
  "Appyne",
  "Khloriope",
  "Phaerotis",
  "Galenia",
  "Telephamia",
  "Basobe",
  "Kasseda",
  "Thaeleina",
  "Harmonia",
  "Zeuxoli",
  "Aphylla",
  "Diascia",
  "Dentaria",
  "Ravennae",
  "Rosemaris",
  "Gillia",
  "Bay",
  "Corneloris",
  "Endeis",
  "Prosymeina",
  "Asperata",
  "Typhina",
  "Nemesia",
  "Brasenia",
  "Willow",
  "Dindora",
  "Poinsenia",
  "Clovelia",
  "Philiale",
  "Mellaniphe",
  "Ammi",
  "Ehretia",
  "Ruta",
  "Sanguinea",
  "Sanguinia",
  "Nettala",
  "Mahoganaea",
  "Pilyphei",
  "Ida",
  "Krigia",
  "Valeriana",
  "Anchusa",
  "Calendula",
  "Aconi",
  "Geranara",
  "Zinnia",
  "Nettelia",
  "Ilo",
  "Nedali",
  "Cembra",
  "Euptellea",
  "Amabalis",
  "Borbonia",
  "Apricoris",
  "Olivae",
  "Pellitea",
  "Lavendea",
  "Amphitrite",
  "Nelaira",
  "Pumila",
  "Ipomea",
  "Asari",
  "Lizei",
  "Eucalia",
  "Gargetha",
  "Tuliphis",
  "Cloverica",
  "Orseis",
  "Helleori",
  "Ramnella",
  "Genista",
  "Cinerea",
  "Pallida",
  "Hibiscis",
  "Barbarina",
  "Daisy",
  "Rosenea",
  "Oronia",
  "Bolina",
  "Briza",
  "Datura",
  "Deodara",
  "Ashae",
  "Poinsettis",
  "Mahogania",
  "Laromedia",
  "Olyrei",
  "Lavandula",
  "Salmiana",
  "Julianae",
  "Aristolochia",
  "Galya",
  "Boabaya",
  "Arfajis",
  "Tasselis",
  "Perseisise",
  "Amphilio",
  "Allium",
  "Ajuga",
  "Tobira",
  "Epigaea",
  "Clovea",
  "Bambolis",
  "Haldiphe",
  "Lilia",
  "Kymopoleia",
  "Ianassa",
  "Tipularia",
  "Arborea",
  "Selloana",
  "Olivea",
  "Sycamoris",
  "Aconite",
  "Lavendoris",
  "Aia",
  "Eunoste",
  "Viola",
  "Asarifolia",
  "Brodiaea",
  "Trillis",
  "Cinnamae",
  "Berrilis",
  "Crimisa",
  "Idaise",
  "Balsamina",
  "Cydonia",
  "Ixia",
  "Haldine",
  "Brier",
  "Hollae",
  "Themise",
  "Klaia",
  "Milla",
  "Neillia",
  "Abies",
  "Pinea",
  "Maple",
  "Haldi",
  "Morelia",
  "Asterope",
  "Robinia",
  "Oleracea",
  "Brassica",
  "Iris",
  "Lilise",
  "Psalicanthise",
  "Meilitae",
  "Gloriosa",
  "Nandina",
  "Hollia",
  "Ivis",
  "Cottonae",
  "Thymea",
  "Thisobei",
  "Phrixa",
  "Anemonella",
  "Aucuparia",
  "Eucomis",
  "Harlequinis",
  "Osagia",
  "Cornelae",
  "Ambrosia",
  "Terephine",
  "Celaeno",
  "Arenaris",
  "Armeria",
  "Edulis",
  "Anaphalis",
  "Hempe",
  "Fernia",
  "Clymene",
  "Pasithelle",
  "Rubra",
  "Acalypha",
  "Melica",
  "Cannabinum",
  "Olive",
  "Fernoris",
  "Birchis",
  "Aria",
  "Amorpha",
  "Copallina",
  "Primula",
  "Matelea",
  "Hollis",
  "Haldia",
  "Tasselia",
  "Echise",
  "Nelida",
  "Angelonia",
  "Habenaria",
  "Gratiola",
  "Gazania",
  "Pellitorina",
  "Laurelia",
  "Anuthei",
  "Elata",
  "Amianthium",
  "Adina",
  "Albizia",
  "Baye",
  "Cloverae",
  "Pudina",
  "Iahhel",
  "Lailah",
  "Daphiel",
  "Oriash",
  "Purah",
  "Diniel",
  "Laylah",
  "Gadriel",
  "Vretiel",
  "Aliyah",
  "Kristiel",
  "Haniel",
  "Karael",
  "Remiel",
  "Caphriel",
  "Penemuel",
  "Tabbris",
  "Asteraoth",
  "Esme",
  "Zarall",
  "Ooniemme",
  "Tabris",
  "Sanvi",
  "Eiael",
  "Tartys",
  "Gzrel",
  "Anaphiel",
  "Hester",
  "Oriel",
  "Irin",
  "Naaririel",
  "Minda",
  "Telantes",
  "Armaita",
  "Puriel",
  "Layla",
  "Chasan",
  "Ruhiel",
  "Azazel",
  "Iaoel",
  "Elemiah",
  "Cassiel",
  "Taharial",
  "Usiu",
  "Naomi",
  "Araquiel",
  "Isda",
  "Maion",
  "Mihr",
  "Amnayel",
  "Ophanim",
  "Anahita",
  "Sariel",
  "Matariel",
  "Raguel",
  "Gadiel",
  "Gadreel",
  "Cadriel",
  "Hadramiel",
  "Amitiel",
  "Empyrean",
  "Atrugiel",
  "Asheal",
  "Yahoel",
  "Dumah",
  "Amriel",
  "Peniel",
  "Oriphiel",
  "Kalmiya",
  "Humatiel",
  "Rahmiel",
  "Ramiel",
  "Harahel",
  "Dubbiel",
  "Saraqael",
  "Sofiel",
  "Usiel",
  "Sachiel",
  "Duma",
  "Mydaiel",
  "Exousia",
  "Peliel",
  "Morael",
  "Jamaerah",
  "Phounebiel",
  "Sahaqiel",
  "Asariel",
  "Quabriel",
  "Asuriel",
  "Haamiah",
  "Mattia",
  "Micah",
  "Amaliel",
  "Ariuk",
  "Zazriel",
  "Suriel",
  "Gezuriya",
  "Remliel",
  "Jabril",
  "Mumiah",
  "Gamaliel",
  "Sybil",
  "Hemah",
  "Germael",
  "Maliel",
  "Pamyel",
  "Andromeda",
  "Nemamiah",
  "Gavreel",
  "Dabriel",
  "Feota",
  "Ophiel",
  "Mumiel",
  "Raduriel",
  "Habriel",
  "Vohamanah",
  "Ithuriel",
  "Gatriel",
  "Saraquiel",
  "Aarin",
  "Adriel",
  "Orifiel",
  "Nuriel",
  "Labbiel",
  "Temperance",
  "Rachel",
  "Portia",
  "Malaliel",
  "Sarandiel",
  "Izrail",
  "Douma",
  "Sachael",
  "Zuriel",
  "Theliel",
  "Dahlia",
  "Domiel",
  "Asaph",
  "Sizouze",
  "Mahanaim",
  "Arael",
  "Saniel",
  "Vequaniel",
  "Shoftiel",
  "Hadriel",
  "Yofie",
  "Felice",
  "Halaliel",
  "Ambriel",
  "Mastema",
  "Nanael",
  "Aeshma",
  "Seraph",
  "Semyaza",
  "Iofiel",
  "Hayliel",
  "das",
  "bleth",
  "b\xf3ng",
  "mughdi",
  "t\xe9phn\xecth",
  "tiphnea",
  "imh\xe9ll",
  "ed\xe9nghann",
  "lioslangheil",
  "dinnlal\xfaa",
  "tiol",
  "cesh",
  "sul",
  "l\xecn\xfai",
  "braoibhgro",
  "blioghde",
  "ninnlai",
  "sethn\xe1gh\xfai",
  "blubunonn",
  "a\xedrchear\xfais",
  "brish",
  "bung",
  "coth",
  "\xfaib\xedo",
  "nufel",
  "n\xfaamir",
  "turche",
  "l\xf3inbhughann",
  "breatiora",
  "f\xedragh\xecon",
  "nath",
  "cis",
  "sol",
  "bremer",
  "fonbhioll",
  "ebu",
  "ruanul",
  "catine",
  "r\xe1rdr\xedbler",
  "sireagh\xf3i",
  "br\xf3nn",
  "sang",
  "bra\xedll",
  "ang\xed",
  "br\xe1lla",
  "bl\xf3int\xf3nn",
  "blat\xeds",
  "ubhlaoini",
  "rirch\xecrno",
  "muathnumhnith",
  "cith",
  "br\xecs",
  "c\xecoll",
  "\xe9dhne",
  "eab\xe9",
  "\xedrnu",
  "olm\xe1th",
  "brechebl\xf3i",
  "agsanaoith",
  "\xedrbh\xe9bhlon",
  "fas",
  "lall",
  "sun",
  "\xe9nnlosh",
  "nemphnill",
  "ciannu",
  "tithchen",
  "\xecbhn\xe9stra\xed",
  "ighnob\xe9sh",
  "t\xe9llemhen",
  "ceth",
  "b\xe9th",
  "bles",
  "nirbea",
  "talbholl",
  "riphna",
  "dioslias",
  "cilliogo",
  "raoingas\xfai",
  "dedhn\xf3bhlell",
  "bloth",
  "l\xf3ll",
  "fosh",
  "borbhi",
  "bremphn\xe9nn",
  "r\xe1nnus",
  "lannlis",
  "dinnla\xedmh\xe1",
  "mernimhe",
  "natami",
  "nur",
  "maill",
  "b\xf3ir",
  "nillo",
  "ilmhaoi",
  "ma\xedlmh\xe9",
  "blonneth",
  "br\xe9lmh\xfaiblash",
  "odhnalu",
  "fell\xecorn\xec",
  "ton",
  "fil",
  "bl\xf3ng",
  "daphne",
  "einga",
  "blodhnann",
  "bechi",
  "\xe1teba\xed",
  "beighistr\xfainn",
  "f\xecbubhl\xf3",
  "song",
  "cil",
  "nann",
  "eg\xecth",
  "fillir",
  "b\xe1irbhi",
  "arbheth",
  "br\xecnnl\xecorn\xecng",
  "lat\xecorn\xe1in",
  "legumhnua",
  "rosh",
  "bril",
  "f\xecong",
  "\xfaimhin",
  "n\xedbun",
  "\xe9ghno",
  "\xf3m\xf3ish",
  "ubanghion",
  "a\xedstosa\xed",
  "lent\xedblath",
  "tonn",
  "brur",
  "lioth",
  "\xe9runn",
  "bluch\xfaa",
  "nemphnei",
  "\xedfu",
  "f\xe1istibhl\xf3il",
  "annastrio",
  "l\xe1ghniso",
  "cung",
  "duth",
  "b\xedng",
  "offra",
  "a\xedbhn\xfai",
  "bl\xecnnli",
  "ethra",
  "lomsarni",
  "orn\xe1gaoing",
  "cobisu",
  "lel",
  "br\xecon",
  "blith",
  "r\xecmson",
  "ubh\xe1i",
  "unn\xf3ith",
  "\xe1ilbh\xedol",
  "\xe9chn\xf3laoi",
  "disteis\xedll",
  "eslornai",
  "brual",
  "bluar",
  "suth",
  "l\xe1imni",
  "damn\xe9l",
  "merann",
  "orchi",
  "eirbhabhlash",
  "baoitaoilo",
  "ang\xecogheall",
  "ca\xedth",
  "f\xfaang",
  "sal",
  "migsa",
  "\xectr\xed",
  "bra\xedstu",
  "culma",
  "merdruas\xf3sh",
  "f\xe1mn\xeconel",
  "siathr\xecora\xed",
  "dor",
  "ra\xedng",
  "bros",
  "bugsa",
  "ego",
  "imne",
  "blimoth",
  "\xe1imnongha",
  "cumnabhlus",
  "leachnionenn",
  "r\xfaish",
  "s\xeds",
  "tubhi",
  "b\xfaichil",
  "besl\xe1l",
  "\xe9l\xecr",
  "dotig\xe9nn",
  "costr\xedomhu",
  "oslubhloth",
  "Elly",
  "Birma",
  "Rowlie",
  "Velwyn",
  "Munsten",
  "Kalena",
  "Gjahild",
  "Hildis",
  "Thodis",
  "Sreborg",
  "Igla",
  "Dalny",
  "Igna",
  "Arna",
  "Yglis",
  "Elinhild",
  "Gjalla",
  "Svarny",
  "Frethe",
  "Nethe",
  "Diswyn",
  "Viggin",
  "Disrine",
  "Munlin",
  "Arsten",
  "Fasa",
  "Thonhild",
  "Gjavild",
  "Steinda",
  "Dalda",
  "Jenrine",
  "Jenmilla",
  "Frenrit",
  "Ferlina",
  "Yrlina",
  "Nella",
  "Amarny",
  "Nolly",
  "Frenna",
  "Vrelga",
  "Igrima",
  "Myrne",
  "Asrey",
  "Munrey",
  "Dalrine",
  "Vreritte",
  "Nenna",
  "Ingirit",
  "Kriyah",
  "Arnerthe",
  "Bermilla",
  "Anry",
  "Yrwyn",
  "Ygnora",
  "Lenritte",
  "Freborg",
  "Grenna",
  "Sraritte",
  "Gesa",
  "Elirie",
  "Rowrin",
  "Anlie",
  "Fjorness",
  "Lenda",
  "Harry",
  "Sreyah",
  "Mathera",
  "Grally",
  "Gjalga",
  "Camilsa",
  "Yrsten",
  "Harthine",
  "Svanthine",
  "Svanny",
  "Yrry",
  "Breldis",
  "Arnesa",
  "Svayah",
  "Ulenda",
  "Frera",
  "Gilna",
  "Grinthine",
  "Frenlina",
  "Fjorwen",
  "Ynwen",
  "Brenna",
  "Gjalene",
  "Hrerny",
  "Svavild",
  "Thothe",
  "Disya",
  "Munlis",
  "Nelrit",
  "Neldis",
  "Viglin",
  "Srelly",
  "Karit",
  "Dalsa",
  "Hrerit",
  "Norit",
  "Nerileth",
  "Reyfiel",
  "Keymoira",
  "Mornik",
  "Jenelin",
  "Tamagereth",
  "Mango",
  "Cupcake",
  "Abyss",
  "Dawn",
  "Ravahana",
  "Keycaryn",
  "Liafina",
  "Enguled",
  "Tallin",
  "Asdoc",
  "Briny",
  "Jamie",
  "Magenta",
  "Yasmine",
  "Presstina",
  "Presralei",
  "Orileth",
  "Morder",
  "Wuensyn",
  "Bewena",
  "Nebula",
  "Cassia",
  "Frances",
  "Gypsum",
  "Daebanise",
  "Venjyre",
  "Torrora",
  "Pawen",
  "Lalyn",
  "Keletel",
  "Vilotta",
  "Scarlet",
  "Hollyann",
  "Cinder",
  "Ravadove",
  "Fawynn",
  "Uririe",
  "Berreth",
  "Wuenwenna",
  "Lanol",
  "Sugar",
  "Infinity",
  "Saira",
  "Ivy",
  "Gilsatra",
  "Miaxina",
  "Trislana",
  "Morrith",
  "Derostren",
  "Talzen",
  "Dina",
  "Jenny",
  "Serena",
  "Selenia",
  "Gillana",
  "Reyralei",
  "Daetris",
  "Treeled",
  "Ouguen",
  "Yssen",
  "Lilac",
  "Evening",
  "Nelly",
  "Sela",
  "Faestina",
  "Torkrana",
  "Ravaphine",
  "Onluen",
  "Oulis",
  "Talrith",
  "Ashley",
  "Parsley",
  "Shiny",
  "Paprika",
  "Holakrana",
  "Shacaryn",
  "Phirie",
  "Nesgereth",
  "Yteilin",
  "Berten",
  "Rachel",
  "Melanie",
  "Gerbera",
  "Emerald",
  "Presrieth",
  "Daerora",
  "Jokalyn",
  "Nelis",
  "Losaba",
  "Bertel",
  "Azore",
  "Autumn",
  "Aloha",
  "Ivy",
  "Philee",
  "Chaexina",
  "Brylana",
  "Soten",
  "Rusaba",
  "Pasled",
  "Nature",
  "Rhodie",
  "Sprinkle",
  "Karina",
  "Valfiel",
  "Gilvyre",
  "Liayra",
  "Wueguetel",
  "Consella",
  "Trerec",
  "Nature",
  "Holly",
  "Lilah",
  "Dewdrop",
  "Valhana",
  "Uriwenys",
  "Phizana",
  "Emguled",
  "Teneret",
  "Enrith",
  "Nutmeg",
  "Lemony",
  "Selene",
  "Azalea",
  "Birel",
  "Xyrfiel",
  "Zinnala",
  "Chedhuil",
  "Rorith",
  "Steluen",
  "Lynne",
  "Adriata",
  "Crabapple",
  "Midnight",
  "Shakalyn",
  "Iarharice",
  "Qihana",
  "Westyl",
  "Morsaba",
  "Anaumon",
  "Blooma",
  "Sunny",
  "Lella",
  "Gerbera",
  "Eiljyre",
  "Loracaryn",
  "Zinjyre",
  "Melcen",
  "Mornol",
  "Berder",
  "Nelly",
  "Ayanna",
  "Jessamine",
  "Aurora",
  "Yllabella",
  "Venra",
  "Neritris",
  "Cheled",
  "Lowuen",
  "Jodoc",
  "Phira",
  "Elle",
  "Dew",
  "Koko",
  "Magzorwyn",
  "Inathana",
  "Zyldove",
  "Annirel",
  "Soweguen",
  "Tammon",
  "Amethyst",
  "Cassie",
  "Tiny",
  "Mary",
  "Inaxisys",
  "Iarzorwyn",
  "Holazorwyn",
  "Aeseld",
  "Glastren",
  "Nosa",
  "Dalila",
  "Wispa",
  "Magna",
  "Indigo",
  "Dafiel",
  "Wysakalyn",
  "Bigella",
  "Fuawenna",
  "Gloicenedl",
  "Morrel",
  "Apricot",
  "Island",
  "Fern",
  "Chasma",
  "Trisxina",
  "Trisrona",
  "Ravasys",
  "Ostren",
  "Ourlyn",
  "Onstyl",
  "Star",
  "Carrot",
  "Rose",
  "Vulparia",
  "Keyfina",
  "Ararel",
  "Yllaroris",
  "Gloiuzen",
  "Passen",
  "Emdylyc",
  "Waterfall",
  "Sivelle",
  "Sela",
  "Alcyone",
  "Zinna",
  "Caileth",
  "Valzana",
  "Briarowen",
  "Ycenedl",
  "Talgen",
  "Rill",
  "Solara",
  "Marina",
  "Carrot",
  "Nerizana",
  "Inalana",
  "Gilrie",
  "Demeder",
  "Wemon",
  "Demefer",
  "Elaina",
  "Sapphire",
  "Didi",
  "Shyla",
  "Ulanala",
  "Jorel",
  "Holaxina",
  "Onedl",
  "Lowereth",
  "Oursella",
  "Carnelia",
  "Kesiray",
  "Viola",
  "Liri",
  "Holahana",
  "Dacyne",
  "Holaxina",
  "Seduil",
  "Losaba",
  "Kelten",
  "Rhodie",
  "Seaweed",
  "Loue",
  "Verey",
  "Phidove",
  "Yllaharice",
  "Wyncaryn",
  "Ceinten",
  "Tamalin",
  "Ourla",
  "Alina",
  "Nina",
  "Nyra",
  "Sienna",
  "Xilthyra",
  "Trismys",
  "Iarthana",
  "Berten",
  "Eduil",
  "Tawynn",
  "Lantana",
  "Cleo",
  "Gypsum",
  "Ember",
  "Chaelee",
  "Daevyre",
  "Arajyre",
  "Neguen",
  "Annisaba",
  "Guenlen",
  "Octavia",
  "Soleil",
  "Tess",
  "Asphodel",
  "Magthyra",
  "Xyrvyre",
  "Miathana",
  "Sowenik",
  "Guerowen",
  "Jenewynn",
  "Posey",
  "Little",
  "Tulip",
  "Sandy",
  "Hisolda",
  "Merna",
  "Deirdra",
  "Siobhan",
  "Islene",
  "Finola",
  "Bronwen",
  "Banallan",
  "Argoel",
  "Shanley",
  "Sian",
  "Kasey",
  "Rhoslyn",
  "Diorbhail",
  "Labhaoise",
  "Ailie",
  "Doireann",
  "Darcie",
  "Ederna",
  "Yseult",
  "Morwenna",
  "Murel",
  "Artaith",
  "Marsaili",
  "Muriel",
  "Heledd",
  "Campbell",
  "Kanna",
  "Kiara",
  "Wendi",
  "Cathleen",
  "Vevina",
  "Ysbail",
  "Catreena",
  "Dallas",
  "Kelsi",
  "Jenifer",
  "Honoria",
  "Struana",
  "Isolde",
  "Finnsech",
  "Fallon",
  "Morna",
  "Moira",
  "Eirianwen",
  "Dubh",
  "Sinead",
  "Idelle",
  "Tullia",
  "Dominica",
  "Casee",
  "Chiara",
  "Kelsi",
  "Barran",
  "Cathasach",
  "Kiley",
  "Cleonie",
  "Nessia",
  "Keelie",
  "Azenor",
  "Arthes",
  "Cullodena",
  "Doreen",
  "Caoimhe",
  "Jaymie",
  "Cleonie",
  "Maelona",
  "Edeen",
  "Alexina",
  "Dympna",
  "Anna",
  "Catline",
  "Minna",
  "Moina",
  "Ula",
  "Kathlene",
  "Blair",
  "Cullodina",
  "Mairona",
  "Chrissy",
  "OIwyna",
  "Elvinia",
  "Darby",
  "Creiddylad",
  "Tierney",
  "Dyllis",
  "Creiddylad",
  "Wilmot",
  "Ebrill",
  "Caethes",
  "Meredith",
  "Hiolair",
  "Elowen",
  "Phiala",
  "Withypol",
  "Sierra",
  "Paili",
  "Galena",
  "Bride",
  "Ailios",
  "Keira",
  "Glenda",
  "Hellawes",
  "Kallie",
  "Gwynedd",
  "Torra",
  "Brae",
  "Cadwyn",
  "Maoli",
  "Gorawen",
  "Darcia",
  "Mave",
  "Assana",
  "Payton",
  "Banallan",
  "Endelyon",
  "Callahan",
  "Braith",
  "Gwenn",
  "Vorgell",
  "Gormla",
  "Don",
  "Modlen",
  "Dearbhail",
  "Dierdre",
  "Eibhilin",
  "Anchoret",
  "Seana",
  "Caitlan",
  "Correena",
  "Morgelyn",
  "Maledisant",
  "Gwenno",
  "Kenzie",
  "Ornice",
  "Caireach",
  "Casidhe",
  "Brielle",
  "Gwener",
  "Mor",
  "Mab",
  "Siofra",
  "Brynda",
  "Henley",
  "Mabli",
  "Kerianne",
  "Ailionora",
  "Ann",
  "Breeda",
  "Avonmora",
  "Oonagh",
  "Irvette",
  "Tristana",
  "Devnet",
  "Flann",
  "Glenna",
  "Winnie",
  "Goewin",
  "Aoibheann",
  "Annabla",
  "Ailia",
  "Shannon",
  "Gwenifer",
  "Doireann",
  "Ina",
  "Breaca",
  "Iola",
  "Dymphna",
  "Jamey",
  "Kellyn",
  "Teige",
  "Dera",
  "Ide",
  "Dyllis",
  "Sulwyn",
  "Melwyn",
  "Adain",
  "Arial",
  "Muriel",
  "Arial",
  "Grear",
  "Aliyn",
  "Badb",
  "Doilidh",
  "Caitlinn",
  "Mari",
  "Jonee",
  "Fuamnach",
  "Drew",
  "Catriona",
  "Casidhe",
  "Elowen",
  "Attracta",
  "Catriona",
  "Eyslk",
  "Eirianwen",
  "Darcelle",
  "Calypatric",
  "Cymreiges",
  "Oilbhe",
  "Keira",
  "Tegwen",
  "Caron",
  "Addie",
  "Deidre",
  "Armes",
  "Cristin",
  "Gwyndolen",
  "Glain",
  "Erin",
  "Eithne",
  "Enit",
  "Brenda",
  "Gwyn",
  "Fionna",
  "Derry",
  "Christy",
  "Ealisaid",
  "Delaney",
  "Ciannait",
  "Kiara",
  "Jocelin",
  "Vevila",
  "Paisley",
  "Melle",
  "Sheelah",
  "Kelsee",
  "Kelli",
  "Keara",
  "Crwys",
  "Elleen",
  "Ana",
  "Anice",
  "Dierdre",
  "Coreen",
  "Dallas",
  "Vorgell",
  "Devent",
  "ElIylw",
  "Hellawes",
  "Brighid",
  "Attracta",
  "Marcharit",
  "Kyla",
  "Gwenith",
  "Moreen",
  "Grainne",
  "Telyn",
  "Caitlan",
  "Argoel",
];

var maleFirstNames = [
  "Dernere",
  "Herem\xf3d",
  "Fr\xe9abald",
  "Erkendred",
  "Fulred",
  "G\xe1rbrand",
  "Fenfara",
  "Erkenor",
  "E\xf3wine",
  "\xc9adleth",
  "H\xe9otor",
  "W\xeddheort",
  "\xc9oheort",
  "G\xe1rwine",
  "Ceorl",
  "Fulgrim",
  "Erkendig",
  "G\xe1rda",
  "Frumbeam",
  "Elfmer",
  "L\xe9odan",
  "Grimca",
  "D\xe9orbrand",
  "Gl\xe9obeam",
  "\xc9ored",
  "Fastda",
  "Elfman",
  "Holdmod",
  "Guthbrand",
  "D\xfandred",
  "\xc9adm\xf3d",
  "Full\xe1f",
  "Erkenbrand",
  "Bregdan",
  "Alor",
  "Elfdan",
  "H\xe9obeam",
  "Goldleth",
  "D\xfanman",
  "Frumbald",
  "G\xe1rl\xe1f",
  "Herefara",
  "L\xe9ofara",
  "\xc9omund",
  "L\xe9omer",
  "H\xe9omund",
  "Frumda",
  "Elfgar",
  "Fulbeam",
  "Holdling",
  "Dernm\xf3d",
  "Holdwine",
  "Fr\xe9a",
  "L\xe9ofa",
  "Fenfa",
  "Guthmer",
  "Fuldor",
  "Grimm\xf3d",
  "All\xe1f",
  "Frumcred",
  "G\xe1ror",
  "Walda",
  "Folcwine",
  "Alnere",
  "Dernleth",
  "\xc9admund",
  "Fr\xe9amod",
  "Holdl\xe1f",
  "Th\xe9ogel",
  "\xc9adig",
  "Fr\xe9al\xe1f",
  "Folca",
  "Fr\xe9aere",
  "Dernman",
  "Fastfred",
  "G\xe1rcanstan",
  "Elfthain",
  "Guthhere",
  "\xc9ohere",
  "H\xe9ostor",
  "W\xeddbeam",
  "Fenmund",
  "Frumblod",
  "Dernwine",
  "Grimmer",
  "Herudig",
  "Balling",
  "\xc9orl",
  "Fr\xe9awine",
  "Frumgar",
  "Th\xe9otor",
  "Goldman",
  "Grimling",
  "Balulf",
  "Fenhelm",
  "Herecred",
  "Dernca",
  "\xc9adca",
  "Holdheort",
  "D\xe9oror",
  "Erkentor",
  "Derndor",
  "D\xe9or",
  "Gl\xe9othain",
  "L\xe9od",
  "Holdmund",
  "Herebrand",
  "H\xe9ocanstan",
  "Folblod",
  "Elfhere",
  "L\xe9oleth",
  "D\xe9orwine",
  "Fram",
  "Fencanstan",
  "Goldda",
  "E\xf3man",
  "G\xe1rdig",
  "Heruleth",
  "Hereblod",
  "D\xfanfred",
  "Helm",
  "D\xe9orhelm",
  "Frumbrand",
  "Grimman",
  "D\xfanfara",
  "Alere",
  "Herudred",
  "Balmod",
  "\xc9omer",
  "G\xe1lm\xf3d",
  "Dernnere",
  "Guthmod",
  "Alfara",
  "Fr\xe9agel",
  "Holdgar",
  "H\xe9ocred",
  "Fastm\xf3d",
  "Erkenfa",
  "Derndred",
  "Guthbeam",
  "H\xe1thain",
  "Gamca",
  "\xc9adling",
  "Frumfa",
  "Fastbeam",
  "Guthbald",
  "H\xe9oor",
  "W\xeddred",
  "Frumgel",
  "Th\xe9obeam",
  "Folmer",
  "Elfdred",
  "Herefa",
  "H\xe9oman",
  "Guthwine",
  "\xc9ogar",
  "Grimere",
  "Gl\xe9ohere",
  "Herucred",
  "D\xe9orm\xf3d",
  "Golddan",
  "\xc9adgrim",
  "Gram",
  "Baldred",
  "Logrand",
  "Skalhyrde",
  "Iskarl",
  "Brertorn",
  "Vulfald",
  "Iwgac",
  "Bawulf",
  "Richere",
  "Nedfald",
  "Sigforn",
  "Eldhere",
  "Glummark",
  "Lydfald",
  "Borgsel",
  "Valkald",
  "Glumbrand",
  "Tarvar",
  "Norsorn",
  "Berangrim",
  "Iwtorn",
  "Wulbold",
  "Eranstyr",
  "Bartar",
  "Nardvat",
  "Valdbar",
  "Borgfald",
  "Mothhyrde",
  "Logkald",
  "Bararic",
  "Walgrim",
  "Ricmar",
  "Ricstyr",
  "Iwtar",
  "Mothtreo",
  "Vulvar",
  "Sigthorn",
  "Theoddan",
  "Wultorn",
  "Wulmund",
  "Beransorn",
  "Barmoth",
  "Lydsel",
  "Brerbald",
  "Otbeorn",
  "Alnwar",
  "Nefbert",
  "Gluthdac",
  "Arnvar",
  "Jalgrim",
  "Iwohd",
  "Thorgrim",
  "Lorrot",
  "Frothrot",
  "Ingeltorn",
  "Ricdan",
  "Frothald",
  "Alnsorn",
  "Vulhere",
  "Mornhere",
  "Ferforn",
  "Gluthgeir",
  "Bearvir",
  "Darnbald",
  "Throtfast",
  "Valdangar",
  "Theoddac",
  "Grimtan",
  "Jartaric",
  "Jarnhelm",
  "Hrothric",
  "Throtrot",
  "Isbeorn",
  "Haroric",
  "Acvir",
  "Tarard",
  "Wulvir",
  "Alnthorn",
  "Vulwald",
  "Throttreo",
  "Vulbar",
  "Erndar",
  "Ordgrim",
  "Magtar",
  "Fornaric",
  "Barbeorn",
  "Heimbald",
  "Valmark",
  "Stigdan",
  "Mothdan",
  "Mothkarl",
  "Skaldar",
  "Igmar",
  "Beornfald",
  "Othwine",
  "Bothstin",
  "Fridkar",
  "Treodhor",
  "Galforn",
  "Erngeir",
  "Agrath",
  "Galvir",
  "Valdtreo",
  "Dugmark",
  "Agdhor",
  "Acac",
  "Theodkarl",
  "Lorkar",
  "Valdbold",
  "Nedfara",
  "Ricgils",
  "Frothbrand",
  "Mothbeorn",
  "Fridtaric",
  "Heorvar",
  "Tarwald",
  "Jarnrand",
  "Acstyr",
  "Oldwar",
  "Alnangar",
  "Sigbeorn",
  "Treofast",
  "Gluthwine",
  "Heimoric",
  "Thorard",
  "Wulvar",
  "Borgric",
  "Sceothelm",
  "Ernbeorn",
  "Ingelkin",
  "Valdhor",
  "Darnvar",
  "Tarrek",
  "Alng\xe1r",
  "Darnhame",
  "Hrothwulf",
  "Baldkald",
  "Beorngils",
  "Dagrek",
  "Vulbrand",
  "Aldm\xf3d",
  "Randtorn",
  "Fridond",
  "Alnhar",
  "Norwar",
  "Erandhor",
  "Jarhar",
  "Jalfara",
  "Magrand",
  "Iwhere",
  "Mornohd",
  "Sceotkald",
  "Glumtaric",
  "Vultreo",
  "Arankar",
  "Valdkald",
  "Markald",
  "Borgrek",
  "Hrothvat",
  "Logdar",
  "Logsorn",
  "Baldard",
  "Oththorn",
  "Widwald",
  "Ottaric",
  "Lythor",
  "Ordbert",
  "Galthorn",
  "Galaric",
  "Martaric",
  "Walrath",
  "Breraric",
  "Theodhar",
  "Skolvat",
  "Nefkald",
  "Valdrath",
  "Norhame",
  "Baldgeir",
  "Sceotrath",
  "Othhame",
  "Galdhor",
  "Vulstin",
  "Bamoth",
  "Igwulf",
  "Arndar",
  "Eransorn",
  "Walsorn",
  "Bothbeorn",
  "Bearbeorn",
  "Tarwulf",
  "Darnkarl",
  "Brerkar",
  "Treohere",
  "Sceotvir",
  "Widbert",
  "Mothbar",
  "Eradfald",
  "Sigaric",
  "Darnsorn",
  "Oldbar",
  "Heimkar",
  "Bothkarl",
  "Mornfald",
  "Alnoric",
  "Hartkar",
  "Theodfast",
  "Hartvir",
  "Tarsorn",
  "Stigard",
  "Erangeir",
  "Fridwine",
  "Stigkin",
  "Oldond",
  "Eranac",
  "Widm\xf3d",
  "Loggeir",
  "Theodkald",
  "Nardstin",
  "Tarhame",
  "Valac",
  "Jarngeir",
  "Dugtar",
  "Glumstin",
  "Mothangar",
  "Vigfara",
  "Borgkar",
  "Eradoric",
  "Bastin",
  "Stigrot",
  "Vigtaric",
  "Throtthorn",
  "Nedfast",
  "Heimdam",
  "Vigvar",
  "Ricm\xf3d",
  "Vulkald",
  "Wulhyrde",
  "Nefaric",
  "Theodsorn",
  "Beorntar",
  "Valdar",
  "Ordgac",
  "Mothstyr",
  "Sigwulf",
  "Waldoric",
  "Baldaric",
  "Elmar",
  "Nathanael",
  "Pierson",
  "Clayton",
  "Rawly",
  "Tripp",
  "Kinnard",
  "Sewell",
  "Carlton",
  "Cale",
  "Brenden",
  "Barclay",
  "Priest",
  "Mansfield",
  "Henley",
  "Terrell",
  "Egerton",
  "Dobbs",
  "Mark",
  "Darwin",
  "Trace",
  "Calvin",
  "Kameron",
  "Woodrow",
  "Horton",
  "Walsh",
  "Harlan",
  "Webley",
  "Xavier",
  "Lee",
  "Domenic",
  "Redd",
  "Slade",
  "Kenelm",
  "Ackerley",
  "Marlowe",
  "Mardyth",
  "Woodward",
  "Joshua",
  "Emmett",
  "Stanwick",
  "Milten",
  "Teddy",
  "Tomlin",
  "Austyn",
  "Burt",
  "Tito",
  "Welton",
  "Emmerson",
  "Rolf",
  "Corin",
  "August",
  "Maurice",
  "Ravinger",
  "Eaton",
  "Garrison",
  "Nico",
  "Aldred",
  "Lenny",
  "Parkley",
  "Alfie",
  "Brigham",
  "Trever",
  "Neddy",
  "Ramsay",
  "Wallie",
  "Torold",
  "Pearson",
  "Tobias",
  "Nathanial",
  "Solomon",
  "Pell",
  "Teddie",
  "Al",
  "Jason",
  "Osborne",
  "Norman",
  "Weldon",
  "Archie",
  "Edwardson",
  "Perry",
  "Dale",
  "Westbrook",
  "Ted",
  "Philip",
  "Joe",
  "Nedes",
  "Preston",
  "Huey",
  "Winston",
  "Newton",
  "Edsel",
  "Redman",
  "Bond",
  "Townsend",
  "Oxton",
  "Berty",
  "Farly",
  "Floyd",
  "Cullen",
  "Chapman",
  "Simon",
  "Elbridge",
  "Kyle",
  "Nelson",
  "Welch",
  "Jerome",
  "Tye",
  "Benny",
  "Wilfred",
  "Reade",
  "Wake",
  "Jesse",
  "Charles",
  "Chaz",
  "Keven",
  "Wingate",
  "Terrence",
  "Tristan",
  "Sandon",
  "Mace",
  "Dane",
  "Shep",
  "Xzavier",
  "Brodie",
  "Oxford",
  "Bo",
  "Barnet",
  "Russell",
  "Wardell",
  "Normand",
  "Larry",
  "Fleming",
  "Dallin",
  "Craig",
  "Rod",
  "Norwyn",
  "Hadden",
  "Oscar",
  "Barklay",
  "Carleton",
  "Wylie",
  "Braedon",
  "Noel",
  "Thorn",
  "Neddie",
  "Wilfrid",
  "Bergen",
  "True",
  "Whitelaw",
  "Rab",
  "Bruno",
  "Graham",
  "Liam",
  "Kole",
  "Oswall",
  "Waggoner",
  "Frank",
  "Raven",
  "Byrne",
  "Edwin",
  "Allie",
  "Elton",
  "Paul",
  "Braxton",
  "Edvard",
  "Ravi",
  "Glenn",
  "Sandy",
  "Norvin",
  "Shane",
  "Bede",
  "Thorpe",
  "William",
  "Nickolas",
  "Davion",
  "Clarence",
  "Terris",
  "Snowdun",
  "Ralph",
  "Rob",
  "Shell",
  "Cleveland",
  "Nealson",
  "Leland",
  "Harmon",
  "Elten",
  "Forrest",
  "Elliot",
  "Kirk",
  "Booker",
  "Will",
  "Barkley",
  "Braid",
  "Brook",
  "Bolton",
  "Landen",
  "Norville",
  "Myles",
  "Neil",
  "Alf",
  "Seabert",
  "Haywood",
  "Wess",
  "Stan",
  "Carden",
  "Charley",
  "Windham",
  "Rolph",
  "Acton",
  "Thorburn",
  "Dillan",
  "Wheaton",
  "Griffin",
  "Marcel",
  "Remmy",
  "Newell",
  "Howard",
  "Justyn",
  "Welby",
  "Stanmore",
  "Emerson",
  "Hector",
  "Brent",
  "Cliff",
  "Patton",
  "Brock",
  "Johnny",
  "Gordon",
  "Frederick",
  "Harv",
  "Samson",
  "Forbes",
  "Patrick",
  "Fairfax",
  "Arley",
  "Hagley",
  "Rylee",
  "Kamron",
  "Carrington",
  "Snowden",
  "Albert",
  "Trevon",
  "Terrel",
  "Truesdale",
  "Clifton",
  "Camron",
  "Leonard",
  "Riley",
  "Bernard",
  "Reinwald",
  "Ryder",
  "Scott",
  "Weller",
  "Reinhold",
  "Wardley",
  "Neal",
  "Tucker",
  "Edward",
  "Coby",
  "Farley",
  "Gannon",
  "Wiley",
  "Wyn",
  "Bromwood",
  "Farland",
  "Darwyn",
  "Maxwell",
  "Alfred",
  "Stanway",
  "Bordan",
  "Lind",
  "Barrett",
  "Brycen",
  "Lucas",
  "Derick",
  "Luc",
  "Damien",
  "Elroy",
  "Ewart",
  "Ralf",
  "Brocton",
  "Osbert",
  "Theodore",
  "Taylor",
  "Woodruff",
  "Dean",
  "Antony",
  "Catcher",
  "Norton",
  "Devon",
  "Gilford",
  "Cleve",
  "Stroud",
  "Chad",
  "Colbert",
  "Burne",
  "Rayfield",
  "Alexzander",
  "Robby",
  "Aldrich",
  "Hutton",
  "Jessie",
  "Triston",
  "Stanly",
  "Matty",
  "Beaman",
  "Ronnie",
  "Newgate",
  "Ives",
  "Rell",
  "Nigel",
  "Brady",
  "Ross",
  "Charlton",
  "Victor",
  "Priestly",
  "Brewster",
  "Stockman",
  "Ray",
  "Pelton",
  "Rider",
  "Willie",
  "Bud",
  "Paton",
  "Donovan",
  "Cromwell",
  "Millard",
  "Warren",
  "Redwald",
  "Gower",
  "Watkins",
  "Lewis",
  "Mead",
  "Lyndon",
  "Ruthren",
  "Buster",
  "Adrien",
  "Oliver",
  "Renato",
  "Zachery",
  "Barr",
  "Ransden",
  "Edgar",
  "Winthrop",
  "udnir",
  "duwfam",
  "mudhar",
  "khadnah",
  "nuqqayr",
  "utbil",
  "bukrol",
  "lizid",
  "lamo",
  "sukraam",
  "yinna",
  "akri",
  "yuldam",
  "daafaan",
  "imo",
  "lashokr",
  "khawfam",
  "idnod",
  "wusoon",
  "qushab",
  "dannikr",
  "khasor",
  "mamrob",
  "lunol",
  "daaza",
  "bushab",
  "busa",
  "lazikr",
  "ushokr",
  "ghushayd",
  "jaqi",
  "dabrom",
  "numil",
  "tuldoos",
  "siqan",
  "yaqakr",
  "ghunakr",
  "afikr",
  "ghirwal",
  "qabaar",
  "dakrin",
  "awfol",
  "jubah",
  "makral",
  "unaath",
  "yuqqo",
  "qufooh",
  "yuwfod",
  "tazim",
  "khusom",
  "mannir",
  "ghufos",
  "ghaaqqom",
  "hildad",
  "quqqith",
  "qirwam",
  "khuwfar",
  "tufoh",
  "suqos",
  "bizos",
  "yiqqa",
  "bifakr",
  "dumroh",
  "wumrob",
  "matbayn",
  "mafa",
  "wamayth",
  "qawfoth",
  "juldoon",
  "wildih",
  "qarwom",
  "imrad",
  "yashim",
  "sidna",
  "janoh",
  "latboh",
  "tamos",
  "unor",
  "basho",
  "lubom",
  "hushoh",
  "yuthin",
  "bumo",
  "anoh",
  "durim",
  "qaqqo",
  "uqaah",
  "aashib",
  "naldokr",
  "uzas",
  "saldom",
  "murwih",
  "washakr",
  "ghutha",
  "binooh",
  "juqol",
  "abrod",
  "sasom",
  "uqqaath",
  "mima",
  "ghafil",
  "nuthab",
  "yurayl",
  "yadnin",
  "busom",
  "qumrab",
  "ghamoth",
  "laabral",
  "yuzan",
  "yanan",
  "jashikr",
  "yasah",
  "juqqoom",
  "jifos",
  "huroh",
  "khathood",
  "lanan",
  "jubaad",
  "qusoo",
  "saaban",
  "yuthar",
  "bidnil",
  "qazos",
  "uthab",
  "tudnah",
  "lunah",
  "khazim",
  "sishaas",
  "suqin",
  "nusho",
  "sisoh",
  "afib",
  "binnar",
  "khuthil",
  "yadhas",
  "yinaah",
  "khubrooh",
  "wuldas",
  "usas",
  "ubath",
  "akros",
  "budhakr",
  "mimab",
  "sasoth",
  "bannor",
  "ghirayd",
  "buqam",
  "darwin",
  "baqqar",
  "hadhath",
  "saanas",
  "unos",
  "makro",
  "mirwor",
  "suqqin",
  "wimram",
  "wuqqas",
  "babron",
  "luldab",
  "dusha",
  "yiqi",
  "kharwil",
  "afaal",
  "ghaqoob",
  "qarol",
  "tafis",
  "dashor",
  "sadhos",
  "tudnar",
  "wawfor",
  "buldab",
  "taqqath",
  "nibrab",
  "madnah",
  "jibrah",
  "ghasah",
  "ghadhom",
  "nashokr",
  "buqal",
  "khibir",
  "hifoh",
  "qaqqam",
  "qumoos",
  "hamas",
  "nashoth",
  "khaanookr",
  "hisol",
  "ghanakr",
  "dasid",
  "bifood",
  "yasos",
  "tamrayh",
  "tinas",
  "bushon",
  "bamraal",
  "suthob",
  "unnim",
  "saaldos",
  "lasom",
  "buqar",
  "varsilt",
  "brogdan",
  "celd",
  "gregald",
  "hagdodoc",
  "sornand",
  "garlol",
  "dromig",
  "redadoc",
  "gedant",
  "vogdald",
  "drannadoc",
  "calt",
  "gorrol",
  "celmodoc",
  "sogdadoc",
  "dramond",
  "dregorn",
  "grelmodoc",
  "delmac",
  "geddoc",
  "valdidoc",
  "sarlidoc",
  "zenrorn",
  "drogdic",
  "groddod",
  "hegil",
  "zald",
  "brennodoc",
  "drand",
  "zadodoc",
  "holt",
  "zorlad",
  "brarlin",
  "cogid",
  "grenint",
  "marrond",
  "zoth",
  "ronnidoc",
  "hen",
  "zelt",
  "grolmadoc",
  "sadadoc",
  "gralt",
  "sersorn",
  "hadrac",
  "vegad",
  "regradoc",
  "gegrild",
  "hegrarn",
  "delmidoc",
  "regrint",
  "mend",
  "sadint",
  "donnirn",
  "menil",
  "greldind",
  "hemant",
  "hamnin",
  "soddidoc",
  "corsol",
  "segol",
  "denrorn",
  "groldag",
  "braddadoc",
  "hadog",
  "vaddant",
  "zodrald",
  "gronnirn",
  "sand",
  "hermind",
  "vond",
  "redild",
  "gerrorn",
  "monroc",
  "coddadoc",
  "ramag",
  "sannilt",
  "vogdodoc",
  "garmald",
  "sersid",
  "varlith",
  "vanront",
  "carsoth",
  "modrant",
  "braroth",
  "ron",
  "marrith",
  "cerman",
  "gromnind",
  "gald",
  "greldidoc",
  "mannac",
  "dedrodoc",
  "con",
  "grernodoc",
  "garridoc",
  "mermald",
  "henril",
  "grerrid",
  "cegrarn",
  "galmint",
  "brold",
  "zalmidoc",
  "zodadoc",
  "drarmath",
  "harmalt",
  "drarac",
  "medint",
  "cagrarn",
  "zennalt",
  "sarnand",
  "zaldadoc",
  "zen",
  "cadan",
  "sormidoc",
  "hald",
  "sant",
  "dedroth",
  "vornidoc",
  "greth",
  "brarmoc",
  "sorn",
  "den",
  "gen",
  "dorsoc",
  "gamnol",
  "vorsidoc",
  "volt",
  "drernint",
  "zenid",
  "breld",
  "ran",
  "gonnol",
  "celdint",
  "drorodoc",
  "donnidoc",
  "carnald",
  "degdild",
  "gregdic",
  "gedil",
  "cormod",
  "brornold",
  "homnan",
  "gron",
  "harsolt",
  "vagid",
  "ragridoc",
  "medrac",
  "redrodoc",
  "cadith",
  "drogald",
  "grerlidoc",
  "mont",
  "ronnic",
  "velmith",
  "brolmadoc",
  "zomnild",
  "drarladoc",
  "hoddant",
  "hagrond",
  "hogroth",
  "honral",
  "camnin",
  "zant",
  "vald",
  "bragrag",
  "rorlarn",
  "bremilt",
  "valmold",
  "brelman",
  "man",
  "cedidoc",
  "sarnog",
  "dreddog",
  "comnodoc",
  "ceron",
  "cogradoc",
  "moradoc",
  "gegdoc",
  "hadin",
  "mannig",
  "corrodoc",
  "cerridoc",
  "grorradoc",
  "garmadoc",
  "dreddolt",
  "vonnodoc",
  "genirn",
  "rarnig",
  "dreth",
  "gelt",
  "colmig",
  "carsald",
  "velmadoc",
  "rornadoc",
  "hand",
  "carnadoc",
  "varn",
  "zannarn",
  "senrac",
  "grorn",
  "zemnold",
  "gogrog",
  "branridoc",
  "memnidoc",
  "hannand",
  "brorsild",
  "zermol",
  "brornodoc",
  "carrorn",
  "moridoc",
  "mold",
  "brenal",
  "deridoc",
  "grogdan",
  "daddoth",
  "relt",
  "hern",
  "hent",
  "zarnidoc",
  "honnadoc",
  "versolt",
  "zadild",
  "hond",
  "monnald",
  "germadoc",
  "drarmald",
  "damnag",
  "brogroc",
  "soldal",
  "droldidoc",
  "gradradoc",
  "dragind",
  "ganrol",
  "halt",
  "broddond",
  "dagdalt",
  "hedrodoc",
  "gamarn",
  "gremnal",
  "honald",
  "marmarn",
  "hanic",
  "harmald",
  "hagdath",
  "sorland",
  "vamadoc",
  "brornald",
  "haddirn",
  "ralt",
  "branid",
  "valmith",
  "magradoc",
  "gath",
  "dremal",
  "dramidoc",
  "greldith",
  "gregdoc",
  "sold",
  "veld",
  "vornoth",
  "sorladoc",
  "varnidoc",
  "ront",
  "gerrodoc",
  "hodridoc",
  "bredrac",
  "colt",
  "sarlorn",
  "modrirn",
  "dornic",
  "brorlag",
  "voldoth",
  "hagradoc",
  "gront",
  "redran",
  "dromadoc",
  "gold",
  "delt",
  "grold",
  "hemnag",
  "zamolt",
  "darridoc",
  "gomant",
  "germal",
  "seth",
  "cedont",
  "brarind",
  "drersith",
  "zannand",
  "zogralt",
  "grogdint",
  "gormild",
  "zonrodoc",
  "vogadoc",
  "moldadoc",
  "grersirn",
  "cagdodoc",
  "gon",
  "hernig",
  "gennoc",
  "garsilt",
  "hegdoth",
  "bramnad",
  "sermorn",
  "bramolt",
  "mald",
  "conridoc",
  "gend",
  "rorrilt",
  "brorloth",
  "seldadoc",
  "roddirn",
  "gramnic",
  "grornod",
  "cern",
  "cemadoc",
  "grannirn",
  "sogridoc",
  "zonnag",
  "drernild",
  "dront",
  "zermorn",
  "gredrild",
  "zeddadoc",
  "dralmolt",
  "zogrand",
  "helmant",
  "zeld",
  "endiprix",
  "ulezahr",
  "edumonar",
  "ogoqihr",
  "unior",
  "anorim",
  "kheronin",
  "eritrix",
  "efeus",
  "kroqium",
  "anviqor",
  "gophiar",
  "aneth",
  "puqihr",
  "shubeus",
  "iluxon",
  "piwix",
  "olvukalis",
  "adushan",
  "rixium",
  "rudus",
  "karhan",
  "erijahr",
  "zalius",
  "rhuvior",
  "uzohr",
  "owix",
  "envuveus",
  "ixon",
  "eforn",
  "kruqiohr",
  "adopius",
  "qremarim",
  "juzor",
  "gaxius",
  "oqihr",
  "azahl",
  "udexar",
  "pubahn",
  "ohone",
  "anvabin",
  "aqiohr",
  "onzaxium",
  "anvadus",
  "agast",
  "alegrus",
  "dhaforn",
  "etior",
  "grosim",
  "erius",
  "enveviar",
  "idus",
  "cezax",
  "onior",
  "amaex",
  "uzutarum",
  "akron",
  "carick",
  "zuwyn",
  "ofaris",
  "kobus",
  "unoprix",
  "ozageor",
  "ugron",
  "ibarin",
  "riflyn",
  "aleflyn",
  "ajamar",
  "ovior",
  "xuzax",
  "idrenaxx",
  "omazz",
  "cragorim",
  "epius",
  "krernas",
  "probus",
  "idrunitor",
  "iqirax",
  "ravras",
  "ihone",
  "oxium",
  "idozor",
  "ogakron",
  "odium",
  "qrabahn",
  "adabeus",
  "oledium",
  "onidarin",
  "edruphior",
  "olawix",
  "exius",
  "krazin",
  "oxius",
  "struzahl",
  "izawyn",
  "wibras",
  "efaris",
  "ogekey",
  "ozuleus",
  "rixar",
  "ukius",
  "ovarhan",
  "ogoras",
  "xugast",
  "vrovras",
  "ovras",
  "ipius",
  "poras",
  "evuxium",
  "anushan",
  "idium",
  "umarim",
  "ezohr",
  "shafarihm",
  "udarin",
  "komonar",
  "okore",
  "inivius",
  "igedium",
  "ibahn",
  "wudius",
  "ogihith",
  "igreronin",
  "oneus",
  "orick",
  "radus",
  "ogron",
  "qrukalis",
  "aprix",
  "druwix",
  "ohagan",
  "jumorn",
  "elin",
  "krofeus",
  "abras",
  "igahone",
  "jimorn",
  "shozor",
  "vuphiar",
  "ogeor",
  "ugrotior",
  "rhobras",
  "wiquam",
  "ilrobahn",
  "edesior",
  "urius",
  "stagast",
  "udel",
  "ukron",
  "thepius",
  "unzonitor",
  "axar",
  "trudus",
  "agarnas",
  "ubus",
  "eqor",
  "rhovius",
  "inverius",
  "ovuwyn",
  "imaex",
  "ajahr",
  "olzoveus",
  "arolius",
  "ilezor",
  "undaveus",
  "onotrix",
  "adalf",
  "ugeneth",
  "piras",
  "dhinitor",
  "ageor",
  "stezax",
  "qrojahr",
  "xalenor",
  "igomaex",
  "kuhith",
  "gorius",
  "onezin",
  "izimazz",
  "zoqirax",
  "ulzefaris",
  "ograqiohr",
  "zuneus",
  "xukron",
  "axius",
  "vifarihm",
  "igromarim",
  "arius",
  "vrabarin",
  "azohr",
  "oviar",
  "egrigorim",
  "edomazz",
  "ekey",
  "igizor",
  "trephiar",
  "uregorim",
  "inaquam",
  "avebin",
  "inurnas",
  "irestrum",
  "unobeus",
  "ozigrus",
  "cahagan",
  "ewix",
  "ozahr",
  "orazahr",
  "shiqiohr",
  "zilin",
  "elatrix",
  "oharad",
  "cubeus",
  "igrus",
  "eharad",
  "presorin",
  "idiprix",
  "inziqium",
  "edigorim",
  "ubras",
  "ewyn",
  "uzor",
  "iquam",
  "urunaxx",
  "gifeus",
  "rhimorn",
  "qrathar",
  "ohith",
  "ilrokron",
  "obus",
  "kerune",
  "atrix",
  "agenaxx",
  "ivugeor",
  "dhidel",
  "egaqihr",
  "ethar",
  "eviar",
  "udogast",
  "udeviar",
  "odobin",
  "pruflyn",
  "qrilore",
  "enzildor",
  "adorune",
  "oharis",
  "stribahn",
  "udor",
  "uvijahr",
  "odozahl",
  "uzowix",
  "evigron",
  "oromorn",
  "arlolin",
  "thidius",
  "uromarim",
  "khoneth",
  "vozor",
  "adaneus",
  "exeor",
  "udius",
  "uxius",
  "ulojahr",
  "igrirune",
  "ilzadius",
  "istrum",
  "erlalin",
  "ovirhan",
  "igemonar",
  "aruhagan",
  "urigorim",
  "inior",
  "jostrum",
  "uzeqirax",
  "odildor",
  "olveneth",
  "arlidel",
  "idomarim",
  "opius",
  "xastrum",
  "udroxeor",
  "enazor",
  "stramaex",
  "praneth",
  "exon",
  "prulenor",
  "oras",
  "aveldor",
  "ulius",
  "oduzahl",
  "evras",
  "ulizahl",
  "inuvior",
  "eflyn",
  "avutaz",
  "uveus",
  "ivephior",
  "zuxius",
  "ugutorn",
  "egodel",
  "imonar",
  "uzunitor",
  "eldor",
  "uvomarim",
  "udoneus",
  "anitor",
  "oleneus",
  "ijamar",
  "grigeor",
  "ozivior",
  "ageneus",
  "anzozax",
  "ahagan",
  "itarum",
  "strajamar",
  "onorim",
  "ulenor",
  "ozorhan",
  "uruhone",
  "defarihm",
  "ofarihm",
  "ulusim",
  "udamonar",
  "iras",
  "thilin",
  "ufaris",
  "orokore",
  "ibras",
  "kharnas",
  "ekius",
  "krugrus",
  "ondadarin",
  "ogrixar",
  "ulifaris",
  "ibin",
  "ulzufarihm",
  "igaphior",
  "usior",
  "egodalf",
  "unevras",
  "emaex",
  "ubin",
  "evithar",
  "uvubus",
  "inebus",
  "voqiohr",
  "odor",
  "aronin",
  "udruhagan",
  "eleus",
  "ogredarin",
  "olrepius",
  "inaxx",
  "axeor",
  "vadalf",
  "wuviar",
  "ugrozahl",
  "unerune",
  "iqor",
  "onvagorim",
  "umorn",
  "raxon",
  "Adalag",
  "Solmundr",
  "Lunt",
  "Sigmundr",
  "Oddmar",
  "Eddval",
  "Hamund",
  "Emund",
  "Holgeir",
  "Kormak",
  "Alfr",
  "Sigurd",
  "Ogmundr",
  "Heimdall",
  "Arnis",
  "Fjalar",
  "Asvard",
  "Agdi",
  "Brand",
  "Heimir",
  "Gardarr",
  "Eric",
  "Arnkel",
  "Ingimund",
  "Brondolf",
  "Ingvar",
  "Alwis",
  "Ingar",
  "Kiaran",
  "Arnvidar",
  "Mani",
  "Eilaf",
  "Stump",
  "Olaf",
  "Adam",
  "Audr",
  "Helgrim",
  "Hamar",
  "Einarr",
  "Gunnor",
  "Saemundr",
  "Arnstein",
  "Havarr",
  "Biarn",
  "Alrekr",
  "Ogmund",
  "Geirmund",
  "Kodran",
  "Hordr",
  "Torrad",
  "Agnar",
  "Gilling",
  "Farulf",
  "Jorundr",
  "Eilif",
  "Arnkell",
  "Bard",
  "Bild",
  "Broddr",
  "Steinar",
  "Gellir",
  "Delling",
  "Hrani",
  "Vermunds",
  "Ulf",
  "Thormodr",
  "Saemund",
  "Solvarr",
  "Gustaw",
  "Egil",
  "Gus",
  "Thrand",
  "Halstein",
  "Solmund",
  "Eyvind",
  "Valgard",
  "Vilbradr",
  "Einar",
  "Thrandr",
  "Torwald",
  "Lif",
  "Arnridr",
  "Eidr",
  "Sigmund",
  "Moldan",
  "Sigfred",
  "Hallvard",
  "Glammad",
  "Arnaldr",
  "Arnor",
  "Lodmund",
  "Gunnarr",
  "Godfrid",
  "Bondi",
  "Dag",
  "Vamod",
  "Ardgar",
  "Hermund",
  "Thormod",
  "Stig",
  "Mord",
  "Iwar",
  "Halward",
  "Booth",
  "Anskar",
  "Anlaf",
  "Fridgeir",
  "Storr",
  "Fjolmod",
  "Thorald",
  "Hergrim",
  "Otkar",
  "Nikolas",
  "Bodmodr",
  "Geirolf",
  "Valagnar",
  "Friggir",
  "Harald",
  "Balder",
  "Malcolm",
  "Varin",
  "Hromundr",
  "Erling",
  "Bjorn",
  "Asgrim",
  "yanral",
  "limphual",
  "astual",
  "naphel",
  "vudal",
  "thastaphion",
  "aemphiril",
  "bendisrius",
  "vadrasrael",
  "raesrunon",
  "galus",
  "pemael",
  "gempeon",
  "zomus",
  "palil",
  "sarostus",
  "cimephiel",
  "gotheril",
  "lenlundial",
  "efennael",
  "horeon",
  "yilthon",
  "buthion",
  "zimphrius",
  "thonnyius",
  "husesual",
  "druthugael",
  "istompual",
  "raendonnon",
  "yundufius",
  "cunnyial",
  "tumphros",
  "drilthil",
  "rumpil",
  "tideon",
  "vodilzeon",
  "anumpil",
  "vedempual",
  "peltathil",
  "thampepheon",
  "aelzel",
  "zaemphrius",
  "esius",
  "alial",
  "ilzus",
  "oribriel",
  "vampholgus",
  "thaphunlon",
  "innyillal",
  "thothulzion",
  "ilgius",
  "gilgus",
  "laedrus",
  "thaimon",
  "yubrel",
  "burudial",
  "liduzros",
  "genniril",
  "inanron",
  "nufedel",
  "ulziel",
  "hathel",
  "rudrion",
  "himrius",
  "sizreon",
  "ezrollial",
  "yemrusron",
  "thulisreon",
  "mofobrion",
  "bustifos",
  "omuthiel",
  "zulthostion",
  "nenlannyius",
  "cabranrus",
  "yomphradrael",
  "drumphius",
  "bennyael",
  "mifual",
  "conial",
  "zullial",
  "linostos",
  "nimphunnyos",
  "hamomril",
  "ethigil",
  "lumphrinrus",
  "paezeon",
  "naltius",
  "azeon",
  "sodrael",
  "gulual",
  "anrolil",
  "zuthorius",
  "masufael",
  "taellumphriel",
  "guzrigos",
  "ufeon",
  "isrion",
  "isreon",
  "zanrel",
  "unnual",
  "onnabril",
  "runnaphil",
  "pailthonius",
  "nimphiliel",
  "unennal",
  "cennel",
  "lomphros",
  "zoleon",
  "tagon",
  "olthus",
  "ogadael",
  "druthelthual",
  "dranduzius",
  "mollethus",
  "rastimiel",
  "yulthal",
  "tumil",
  "bathion",
  "cennual",
  "gezel",
  "mezreleon",
  "drimphrazril",
  "lumrozos",
  "obronros",
  "cedrenron",
  "ilael",
  "serial",
  "mudrius",
  "sethus",
  "zemphel",
  "naphizros",
  "hunnodreon",
  "usegos",
  "lendefial",
  "mumphael",
  "binnyannyon",
  "theminnual",
  "yezreliel",
  "mosanlial",
  "unlalzel",
  "leltael",
  "drinleon",
  "nothion",
  "dramphrael",
  "zaellial",
  "caefenlael",
  "ironlos",
  "nithodrael",
  "mabroral",
  "cobromael",
  "onlion",
  "yullius",
  "cadal",
  "tellon",
  "banos",
  "vanraezrion",
  "tefemphrael",
  "periliel",
  "tinlumpon",
  "volgilgil",
  "paithal",
  "gaelzael",
  "sunnius",
  "zeson",
  "lamion",
  "gilulzon",
  "erilthius",
  "drizrafial",
  "astonlus",
  "rullestiel",
  "multhal",
  "pudil",
  "vustos",
  "rinlil",
  "nulal",
  "sebrulgius",
  "befubrel",
  "igezrual",
  "bunrezril",
  "rolthollual",
  "giphus",
  "aeltion",
  "padus",
  "oston",
  "ereon",
  "draerithus",
  "thimrithael",
  "polzelthil",
  "tondozrual",
  "yenainlual",
  "yulleon",
  "drempeon",
  "mompial",
  "zolzual",
  "alziel",
  "yultifal",
  "drudozrual",
  "caebraphus",
  "thundezrion",
  "gasalal",
  "abrel",
  "gesron",
  "zigal",
  "elthius",
  "sunnial",
  "thogompus",
  "cifaltael",
  "tunampus",
  "telgugial",
  "lamephion",
  "pempil",
  "nirus",
  "codel",
  "taril",
  "elil",
  "ailondos",
  "bompebron",
  "pizophil",
  "thephesil",
  "drumremal",
  "testius",
  "mosreon",
  "thimpos",
  "ennyiel",
  "razrial",
  "sulguthon",
  "thaesonrel",
  "burinnus",
  "yilgultael",
  "idrosrial",
];

var lastNames = [
  "ironsteam",
  "boneglide",
  "havenfollower",
  "distanthunter",
  "deepeye",
  "hydrasplitter",
  "cragvalor",
  "whitfall",
  "stilldancer",
  "bronzestream",
  "threebrew",
  "monstercrusher",
  "eaglelight",
  "sunstone",
  "slateslayer",
  "hardridge",
  "mirthcrag",
  "cliffaxe",
  "cinderdancer",
  "terrastride",
  "eartharm",
  "commonspell",
  "moltenreaper",
  "spiritlance",
  "starflare",
  "icehammer",
  "autumnmoon",
  "thundertide",
  "fistward",
  "tarrenmaul",
  "stoutspell",
  "cliffshard",
  "laughingsteam",
  "swiftmaul",
  "bladeblower",
  "riversnow",
  "wyvernstrider",
  "sunwoods",
  "fardrifter",
  "hazepike",
  "mournbender",
  "duskflare",
  "moonspire",
  "watershard",
  "monsterfire",
  "eaglekeeper",
  "clearslayer",
  "warwalker",
  "whitesoar",
  "treearrow",
  "humbleshout",
  "hillflare",
  "wyvernhell",
  "marshcut",
  "foreststone",
  "lionslayer",
  "fuseorb",
  "peacewhisk",
  "dirgetrapper",
  "hawkbrow",
  "clandancer",
  "marshgrain",
  "masterflower",
  "farhunter",
  "bonekiller",
  "skullwhisper",
  "phoenixmaw",
  "cragbelly",
  "monsterdancer",
  "ambersinger",
  "orbstalker",
  "deathward",
  "bronzebone",
  "lunawind",
  "moltenspirit",
  "swiftsteel",
  "lowward",
  "grassripper",
  "peaceroar",
  "ashgrove",
  "highgaze",
  "greatdane",
  "masterwinds",
  "tuskjumper",
  "deadsurge",
  "farwolf",
  "snowlash",
  "darkbeam",
  "winterkiller",
  "silverthorn",
  "battlearrow",
  "shadowhunter",
  "pridefallow",
  "steelroar",
  "masterore",
  "rosecleaver",
  "runefallow",
  "fernstriker",
  "saurglide",
  "shadewound",
  "eaglechewer",
  "cragreaver",
  "dreamwhisk",
  "coldbough",
  "windwolf",
  "freetrack",
  "rockroar",
  "masterpunch",
  "duskmaul",
  "cheststeam",
  "loneflame",
  "pyreguard",
  "swiftwing",
  "proudsnout",
  "singlespell",
  "daybreeze",
  "nobleflame",
  "crowfall",
  "sharpscribe",
  "snowwhisper",
  "deadshot",
  "blazetrapper",
  "grassbrook",
  "treestriker",
  "amberbraid",
  "crestarm",
  "plainarm",
  "daybringer",
  "truthbleeder",
  "truthaxe",
  "spiritbinder",
  "burningrage",
  "fogmoon",
  "rainbreath",
  "forerun",
  "deepbash",
  "crestdrifter",
  "watertrack",
  "stillshield",
  "glowbinder",
  "serpentstriker",
  "evenstar",
  "ravenbreeze",
  "voidsplitter",
  "holyswallow",
  "grizzlybane",
  "evenvigor",
  "nicklecreek",
  "cliffriver",
  "dirgeore",
  "wyvernswallow",
  "foreriver",
  "blazeshard",
  "laughinglance",
  "horsetrap",
  "leafsworn",
  "sacredblood",
  "twowhirl",
  "ravengem",
  "woodscream",
  "deathgrip",
  "roughglide",
  "skyscar",
  "duskjumper",
  "youngvalor",
  "sagebelly",
  "lunatide",
  "farrowripper",
  "crowbow",
  "thunderbane",
  "fardane",
  "rumblebend",
  "lightglade",
  "threelash",
  "commonwhirl",
  "rainbough",
  "rainsun",
  "ironlight",
  "woodweaver",
  "stormbelly",
  "windscream",
  "pinesnout",
  "fistbeard",
  "brightwalker",
  "alpengloom",
  "fourblight",
  "rumblegust",
  "windswift",
  "alpengrip",
  "fourwhirl",
  "tuskgazer",
  "deadblower",
  "dirgekeep",
  "hillhelm",
  "freeswift",
  "deathdancer",
  "sharpwound",
  "simplewing",
  "mosswood",
  "cragash",
  "mildsky",
  "rapidbasher",
  "coldmark",
  "burningweaver",
  "netherhide",
  "fullswallow",
  "hammercutter",
  "simplebend",
  "goldcrag",
  "twilightscar",
  "skythorne",
  "nosevale",
  "horsesurge",
  "runeless",
  "ravensnout",
  "shadegloom",
  "dirgebender",
  "deephammer",
  "gloombreath",
  "dusteyes",
  "windhorn",
  "ravenbranch",
  "dayflower",
  "hillflow",
  "monsterspark",
  "ragebrook",
  "fullleaf",
  "truthmark",
  "flatreaper",
  "redblight",
  "mourningfollower",
  "sharpchaser",
  "titansworn",
  "tarrenmoon",
  "lunaguard",
  "mossfollower",
  "woodarm",
  "swiftdew",
  "whitebow",
  "mossbash",
  "marbletalon",
  "nightshout",
  "wolfroot",
  "clandane",
  "greatstream",
  "longcreek",
  "sacredhorn",
  "twilightflare",
  "spiderbow",
  "bouldermark",
  "hydradane",
  "tallchewer",
  "heartstar",
  "silentscar",
  "youngstrength",
  "moonbash",
  "titanforge",
  "flatgaze",
  "hydragem",
  "palegrain",
  "truthfist",
  "nethersun",
  "masterfollower",
  "horsewhisper",
  "whisperbane",
  "windbash",
  "bloodsky",
  "wolffallow",
  "rainspire",
  "fireroot",
  "bronzelight",
  "moonrun",
  "nosebeam",
  "glorybelly",
  "ragecut",
  "fourglide",
  "oatglory",
  "peacewind",
  "barleywoods",
  "hallowedtaker",
  "riverhelm",
  "peacefeather",
  "steeloak",
  "nightdream",
  "mourningglade",
  "farrowdust",
  "skullslayer",
  "serpentbreath",
  "fallencloud",
  "gorebend",
  "grayhelm",
  "deathstream",
  "solidcrag",
  "holyvigor",
  "woodbash",
  "deadrage",
  "riverbash",
  "grassbasher",
  "pridethorn",
  "fogfollower",
  "barleyshadow",
  "marshvigor",
  "elfcloud",
  "havenwhisper",
  "grizzlygrain",
  "pinegrain",
  "truebeam",
  "greatoak",
  "wolfgaze",
  "axeblossom",
  "palebloom",
  "wyvernsnout",
  "woodless",
  "eagleblaze",
  "downflow",
  "truththorne",
  "blackvalor",
  "gorecrest",
  "darkbane",
  "deathseeker",
  "proudgust",
  "mossgaze",
  "graywillow",
  "evenrider",
  "longfollower",
  "evenleaf",
  "blazeglide",
  "honorbrow",
  "fistcutter",
  "threebow",
  "alpenkiller",
  "proudcleaver",
  "paleshard",
  "flamerage",
  "windtoe",
  "masterspire",
  "palebeard",
  "crystalsworn",
  "riverkeeper",
  "bluetail",
  "feathereye",
  "paletail",
  "watertalon",
  "willowgloom",
  "darklight",
  "winterkeep",
  "golddane",
  "clawwillow",
  "autumnshield",
  "leaforb",
  "mistblade",
  "greatsorrow",
  "warflaw",
  "willowbluff",
  "ironvale",
  "frostarm",
  "richwater",
  "wheatflare",
  "sacredmane",
  "bluestar",
  "grayforce",
  "forestcutter",
  "peacebrow",
  "stillgloom",
  "shieldmane",
  "crystalbluff",
  "starflame",
  "regalbane",
  "mournfallow",
  "shadeguard",
  "truthward",
  "alpenarm",
  "hallowsplitter",
  "rumblepike",
  "lunadrifter",
  "redwound",
  "mistgaze",
  "foreheart",
  "greenslayer",
  "horsebranch",
  "clearrage",
  "barleyshout",
  "cloudcaller",
  "smartbender",
  "grandwatcher",
  "marshtalon",
  "lightmore",
  "strongfallow",
  "talltrap",
  "blackshine",
  "flatvale",
  "richgust",
  "moonthorn",
  "harddream",
  "flamegleam",
  "monstermaw",
  "fogpunch",
  "whitebrooke",
  "cragbraid",
  "clearlight",
  "shadowfang",
  "stonebash",
  "whitfallow",
  "dustwound",
  "boneflow",
  "marbledown",
  "flintbraid",
  "freepelt",
  "wildbend",
  "havencrag",
  "bouldersurge",
  "dreamdraft",
  "steelcut",
  "stillbelly",
  "blazebreeze",
  "peaceflayer",
  "lonestride",
  "hallowedorb",
  "sharpcrusher",
  "rumblespark",
  "amberflame",
  "elfbrand",
  "elfbraid",
  "downbranch",
  "stoneridge",
  "gloombane",
  "highshadow",
  "moltenrunner",
  "chestscar",
  "boulderbringer",
  "dustwatcher",
  "bearpeak",
  "ravenstar",
  "dawnglide",
  "elfash",
  "leafspirit",
  "laughingkeeper",
  "mossbluff",
  "downcloud",
  "barleyhell",
  "lionshadow",
  "lunabrooke",
  "lightwoods",
  "stillmoon",
  "hallowshout",
  "boulderaxe",
  "hillarm",
  "daywing",
  "thunderbender",
  "shadestriker",
  "flamefall",
  "fallensprinter",
  "fusemore",
  "gorepelt",
  "covenfury",
  "mirthbasher",
  "pridesprinter",
  "evenbraid",
  "nickleshield",
  "orbsword",
  "pridekeeper",
  "commonfollower",
  "foresky",
  "winterfollower",
  "mourningshout",
  "rockgrip",
  "riversinger",
  "clearhunter",
  "stoutmourn",
  "spiritstrength",
  "springkiller",
  "stormriver",
  "woodbrow",
  "serpentgrip",
  "glorymaw",
  "stageye",
  "snakethorne",
  "hallowedblossom",
  "pyrestar",
  "wyvernore",
  "youngwood",
  "riversteam",
  "freeoak",
  "lionpelt",
  "titanward",
  "darkrider",
  "dewstalker",
  "bronzehell",
  "farfist",
  "bronzedream",
  "lowstrider",
  "meadowshard",
  "raindown",
  "evenforest",
  "blazerider",
  "autumnblade",
  "farrowseeker",
  "lunabelly",
  "fernbinder",
  "rockpike",
  "richspell",
  "oceantoe",
  "summermoon",
  "truthcrusher",
  "alpenwolf",
  "flametalon",
  "rosebash",
  "mildcaller",
  "serpentsprinter",
  "riverwhirl",
  "plainsprinter",
  "clearshard",
  "spiderdane",
  "peacestriker",
  "truthstride",
  "crowless",
  "bronzeglide",
  "wheatguard",
  "honorblower",
  "solidhorn",
  "blazespirit",
  "regalforest",
  "hallowedrunner",
  "clangem",
  "snakepeak",
  "rumblereaver",
  "trueshadow",
  "sternbreeze",
  "wheatfollower",
  "caskwhisper",
  "bouldergleam",
  "hydrabreath",
  "greatbow",
  "burningsurge",
  "singlemore",
  "morningjumper",
  "stillbrace",
  "cloudsorrow",
  "stagtrapper",
  "laughinghammer",
  "nethercutter",
  "stonehair",
  "caskshine",
  "redmourn",
  "deepfang",
  "greatbend",
  "wyvernkiller",
  "covensprinter",
  "roughripper",
  "willowcrag",
  "honorblade",
  "clansky",
  "stoutpeak",
  "saurore",
  "redfist",
  "rosedream",
  "mountainrage",
  "casksong",
  "crowbone",
  "shadefallow",
  "cliffgloom",
  "bloodwatcher",
  "blackbluff",
  "oceanweaver",
  "forewhirl",
  "freefeather",
  "mirthbelly",
  "burningbinder",
  "frostlance",
  "sternmore",
  "oceanwhisper",
  "wheatfeather",
  "flameforce",
  "frostdream",
  "lowfall",
  "skullcrag",
  "hallowedcleaver",
  "hammertoe",
  "serpentmight",
  "dawngloom",
  "woodjumper",
  "skygrip",
  "willowfall",
  "rainswallow",
  "phoenixfeather",
  "darkcreek",
  "mirthsnarl",
  "snoweye",
  "wilddream",
  "lionaxe",
  "farrowbraid",
  "woodensun",
  "woodenbrace",
  "skullbreath",
  "whisperbeam",
  "highsword",
  "ferntrap",
  "holyblade",
  "battleblight",
  "rapidcrest",
  "whitespark",
  "heavysteam",
  "bloodgleam",
  "daymourn",
  "horseforge",
  "gloomspark",
  "snowwound",
  "graymourn",
  "foreswallow",
  "wyverncaller",
  "clawblower",
  "woodlash",
  "dirgepike",
  "ravenbend",
  "haveneye",
  "twothorne",
  "brightsky",
  "fogflame",
  "regalcrusher",
  "grayshadow",
  "pinewhisper",
  "marbleforest",
  "horsestrider",
  "runehair",
  "nightwoods",
  "grasshorn",
  "smartorb",
  "windlight",
  "fernflayer",
  "rosethorne",
  "swifteyes",
  "woodenbash",
  "hillhorn",
  "stagwinds",
  "marbleaxe",
  "battleriver",
  "bronzegust",
  "wiseeye",
  "nosechewer",
  "goldsky",
  "dirgesprinter",
  "treepelt",
  "glowweaver",
  "ashblade",
  "lightningdown",
  "flameflaw",
  "hydrastriker",
  "keenscream",
  "grizzlyhand",
  "helltrap",
  "steeltide",
  "sunsteam",
  "meadowkeeper",
  "meadowbane",
  "grayhammer",
  "deathtrapper",
  "cragbrook",
  "burninghair",
  "daysnout",
  "bladecreek",
  "clanwing",
  "chestbluff",
  "starjumper",
  "twosun",
  "hellbrand",
  "downkiller",
  "lionreaver",
  "mildflayer",
  "skullbreaker",
  "icestone",
  "bronzesteel",
  "farrowwood",
  "phoenixsprinter",
  "redrunner",
  "lowvalor",
  "shadowblower",
  "mossward",
  "rapidroot",
  "rumblemark",
  "duskwind",
  "pinebreaker",
  "wildgem",
  "noblevalor",
  "dayforce",
  "mistcaller",
  "axehunter",
  "horsebrand",
  "softgrain",
  "grandsong",
  "stormguard",
  "stillbasher",
  "coventrapper",
  "serpentpelt",
  "summerscream",
  "nickletrack",
  "evenore",
  "singlesun",
  "stormarm",
  "wyverntrack",
  "bronzewinds",
  "silvertrapper",
  "pinestrength",
  "goldgloom",
  "plainshine",
  "saurdoom",
  "deeplash",
  "gloomlight",
  "snowstrength",
  "prideseeker",
  "spiritwind",
  "glowbelly",
  "goldrock",
  "woodenmight",
  "havenbrew",
  "lightningspark",
  "crowhammer",
  "mourningsnow",
  "hallowblade",
  "keenwound",
  "havenleaf",
  "oceanfollower",
  "skywoods",
  "titanridge",
  "runeflame",
  "silvercaller",
  "dusksnarl",
  "horsecreek",
  "dirgeblight",
  "deadgazer",
  "wildsky",
  "phoenixmark",
  "ravenridge",
  "cragdew",
  "mossbringer",
  "peacegrip",
  "skullsun",
  "frozenbeam",
  "rapidstream",
  "laughingcutter",
  "darkbow",
  "regalroot",
  "bloodwinds",
  "wyvernflow",
  "nosesnout",
  "morningripper",
  "voidbraid",
  "solidrage",
  "softbinder",
  "ashbraid",
  "mistsong",
  "battlesun",
  "hallowedshot",
  "whisperhelm",
  "richblood",
  "snowsnarl",
  "terratalon",
  "masterdust",
  "saurash",
  "sunbrook",
  "crystalbone",
  "wolfrage",
  "freeseeker",
  "hydragust",
  "grizzlygrip",
  "wisedraft",
  "graybender",
  "forebend",
  "farrowarm",
  "shieldash",
  "flamebrow",
  "rageshout",
  "caskroot",
  "misthunter",
  "wyvernstriker",
  "elfbreaker",
  "lionlance",
  "tuskblossom",
  "terrabranch",
  "sunmantle",
  "springsnout",
  "wyvernbough",
  "regalvigor",
  "flamerun",
  "dirgesoar",
  "coldtide",
  "barleydrifter",
  "stormbloom",
  "battlesnarl",
  "rainsnout",
  "windstrength",
  "sternshadow",
  "masterbrace",
  "shadetrap",
  "lunaspear",
  "caskguard",
  "ambergloom",
  "gorefollower",
  "hillchewer",
  "havenstriker",
  "springgleam",
  "treekiller",
  "icebash",
  "freebone",
  "sharpsong",
  "shadepeak",
  "rosepunch",
  "clouddream",
  "morningdust",
  "monsterbranch",
  "swiftreaper",
  "skullsorrow",
  "pyrelance",
  "mirthtail",
  "bearbleeder",
  "terravalor",
  "spirittoe",
  "deathrage",
  "truthgrip",
  "clearash",
  "threeclaw",
  "steelslayer",
  "sterndancer",
  "youngstalker",
  "trueclaw",
  "dirgebone",
  "wildcaller",
  "glorydancer",
  "dawnshout",
  "pridepike",
  "skulldancer",
  "fourbrace",
  "freegrain",
  "dirgespark",
  "tallsworn",
  "farbrow",
  "hammerbough",
  "lowspirit",
  "raintalon",
  "mirthrun",
  "dirgemaul",
  "tallfallow",
  "humbleforest",
  "grandwater",
  "frozenfury",
  "brightdust",
  "dewguard",
  "battlesnout",
  "pyreaxe",
  "marblehand",
  "lionrage",
  "woodsnow",
  "rageflame",
  "noseblade",
  "ragejumper",
  "softsong",
  "ravenshot",
  "cliffash",
  "blazemane",
  "riverhorn",
  "wolftalon",
  "stonedraft",
  "titanstrike",
  "downstride",
  "eaglewolf",
  "eaglebloom",
  "hammerflare",
  "singlemaw",
  "orbdane",
  "boulderwatcher",
  "longfang",
  "sagethorne",
  "nicklebringer",
  "chestmantle",
  "frozengrove",
  "fistshield",
  "tarrensteel",
  "plainforge",
  "bladebraid",
  "runeheart",
  "lightpunch",
  "hazehair",
  "crowwing",
  "havenpeak",
  "battlecut",
  "runestriker",
  "hawkfire",
  "autumnflaw",
  "ironblower",
  "pyrechaser",
  "winterriver",
  "oceangaze",
  "spiderstriker",
  "earthriver",
  "snowbender",
  "shadowdraft",
  "hallowwalker",
  "fourblood",
  "cragdrifter",
  "bonewillow",
  "mildroot",
  "oatsoar",
  "twobasher",
  "burningthorne",
  "commonfury",
  "lightningforge",
  "rumblewood",
  "flatfist",
  "axewind",
  "phoenixweaver",
  "blazewatcher",
  "graybash",
  "burningroot",
  "moltenshot",
  "whitshield",
  "fullbow",
  "elfscribe",
  "crystaldane",
  "gloomspirit",
  "fullflaw",
  "hazejumper",
  "redash",
  "goregazer",
  "fullsnout",
  "darkarm",
  "skycleaver",
  "marshshard",
  "clawstream",
  "hilltrapper",
  "cinderblossom",
  "talltree",
  "hardhair",
  "shadeforce",
  "fourfallow",
  "stoneblower",
  "flamefang",
  "flintflare",
  "stormshield",
  "willowstalker",
  "silentdust",
  "horsemantle",
  "pineshard",
  "wildbringer",
  "hallowedbone",
  "downkeep",
  "sagesprinter",
  "horseblood",
  "rapidsnout",
  "clanbinder",
  "fernjumper",
  "deadforge",
  "laughingwhirl",
  "autumnhide",
  "highvalor",
  "fullbeard",
  "cloudpunch",
  "dayswallow",
  "tuskmane",
  "wheatwinds",
  "horseglory",
  "highroot",
  "terragrove",
  "marshgem",
  "bonetrapper",
  "hallowbinder",
  "dirgestalker",
  "holyrage",
  "lionswift",
  "evendrifter",
  "pridebloom",
  "paleshine",
  "whitewoods",
  "whisperpeak",
  "snakebasher",
  "tusktoe",
  "barleytrack",
  "heartbash",
  "wolfrun",
  "nightless",
  "axegazer",
  "oatdust",
  "farrowroar",
  "stormsnow",
  "lighthell",
  "wisefall",
  "redsword",
  "mournthorne",
  "greatbrow",
  "downrock",
  "highsoar",
  "starforge",
  "Grassroamer",
  "Elmdivider",
  "Timberbraider",
  "Willowvoice",
  "Timberstrength",
  "Ridgebraid",
  "Stormlaugh",
  "Wooddefender",
  "Oakenherald",
  "Raintemper",
  "Mapletail",
  "Greenmuse",
  "Peakconqueror",
  "Brushcrest",
  "Browntemper",
  "Grasseyes",
  "Peakcarver",
  "Ridgerusher",
  "Icelove",
  "Hailshadow",
  "Hazelprowler",
  "Floodeyes",
  "Stoneprowl",
  "Thornsmile",
  "Plainreveler",
  "Mapleprowl",
  "Grasssleep",
  "Timberrusher",
  "Wintertail",
  "Stormcrest",
  "Brushwatch",
  "Snowbraids",
  "Aspenfighter",
  "Oakenglow",
  "Oakenwatch",
  "Pinemarch",
  "Mossride",
  "Peakeyes",
  "Hollowvoice",
  "Cedarrunner",
  "Birchmarch",
  "Raindrinker",
  "Greenseeker",
  "Springhold",
  "Aspenreign",
  "Rainforce",
  "Dustdivider",
  "Cratershield",
  "Grovefighter",
  "Starchanter",
  "Greenslumber",
  "Grovewatch",
  "Elmpelt",
  "Earthenwatcher",
  "Bloomwhisperer",
  "Floodtail",
  "Hillcarver",
  "Elmforce",
  "Moontrampler",
  "Sunsleep",
  "Mountainleaves",
  "Ironbringer",
  "Brownmask",
  "Stonecharger",
  "Falllove",
  "Woodspell",
  "Earthenprowl",
  "Yewchaser",
  "Brushseeker",
  "Boulderrest",
  "Driftbasker",
  "Haildefender",
  "Sunforce",
  "Ridgebinder",
  "Fogshifter",
  "Starglow",
  "Summercaller",
  "Willowrunner",
  "Raintrampler",
  "Birchfader",
  "Hollowdreamer",
  "Autumnbruiser",
  "Floodbraid",
  "Stormshield",
  "Yewleaves",
  "Cedarcatcher",
  "Floodmangle",
  "Summerride",
  "Oakentwister",
  "Yewrest",
  "Falltail",
  "Moonride",
  "Stonesmile",
  "Woodprowler",
  "Fallrunner",
  "Earthencharger",
  "Plaingroom",
  "Sunleaves",
  "Willowwish",
  "Rainscorn",
  "Birchchaser",
  "Grassshifter",
  "Sunwatch",
  "Sunshadow",
  "Hazelglow",
  "Aspencharger",
  "Brownrush",
  "Pinedreamer",
  "Icebraider",
  "Oakenshadow",
  "Floodscreamer",
  "Elmspell",
  "Autumnchanter",
  "Winterdefender",
  "Forestmask",
  "Vinebraider",
  "Driftdrinker",
  "Brightshifter",
  "Creekride",
  "Grassride",
  "Laurelfader",
  "Starsign",
  "Earthenstrength",
  "Grassbraids",
  "Willowsmile",
  "Bouldermarch",
  "Timberscreamer",
  "Yewcrest",
  "Oakendefender",
  "Snowbraider",
  "Snowprowl",
  "Valleyherald",
  "Raincatcher",
  "Wintersmirk",
  "Earthenleaf",
  "Groveshadow",
  "Oakenshield",
  "Yewsign",
  "Icemangle",
  "Hilldefender",
  "Boulderwatcher",
  "Aspenguard",
  "Thornspell",
  "Plainlimp",
  "Winterlaugh",
  "Ridgehoof",
  "Aspenhold",
  "Browngatherer",
  "Hailcarver",
  "Brownrun",
  "Plainwander",
  "Driftchaser",
  "Fallsleep",
  "Creekprowler",
  "Bouldertree",
  "Vineformer",
  "Thornprowler",
  "Dustchanter",
  "Cedarblade",
  "Ridgecleanser",
  "Irontail",
  "Thornwander",
  "Earthenleaper",
  "Moonstare",
  "Laurelmask",
  "Hazelshield",
  "Irondreamer",
  "Mapledreamer",
  "Aspencarver",
  "Cedarslumber",
  "Ironcaller",
  "Rainbinder",
  "Rockshadow",
  "Valleytwister",
  "Earthenwish",
  "Icerest",
  "Craterhold",
  "Stonevoice",
  "Fogmind",
  "Ridgeleaf",
  "Greenlaugh",
  "Laurellimp",
  "Rivermangle",
  "Mountainblesser",
  "Hazelhold",
  "Hazelblade",
  "Mooncaller",
  "Willowgroom",
  "Valleymane",
  "Hailmask",
  "Floodmask",
  "Hailgatherer",
  "Hollowpelt",
  "Stonewanderer",
  "Autumnmind",
  "Cedardreamer",
  "Hailcharger",
  "Fallmangle",
  "Aspenroar",
  "Bloomprowl",
  "Thornbooster",
  "Maplestare",
  "Peakbasker",
  "Brightleaves",
  "Forestride",
  "Rainhold",
  "Elmbreaker",
  "Bircheyes",
  "Foglove",
  "Brightbasker",
  "Vinecrest",
  "Boulderwish",
  "Woodmangle",
  "Fogseeker",
  "Bouldertwister",
  "Elmbasker",
  "Forestblesser",
  "Mossrise",
  "Springrest",
  "Hollowshine",
  "Pineleaves",
  "Starmuse",
  "Thorncatcher",
  "Summershifter",
  "Fallspark",
  "Grassbearer",
  "Grovereign",
  "Starfighter",
  "Timberlimp",
  "Yewrun",
  "Forestheart",
  "Plainmask",
  "Fallreign",
  "Rockmangle",
  "Bloomseeker",
  "Winterdarter",
  "Valleywander",
  "Rainforcer",
  "Oakenleaves",
  "Aspentail",
  "Greendarter",
  "Brushheart",
  "Burrowsleep",
  "Brightbinder",
  "Stoneconqueror",
  "Brightlove",
  "Willowlaugh",
  "Brookpelt",
  "Autumnscorn",
  "Laurelblade",
  "Grassdarter",
  "Timberbark",
  "Cratermind",
  "Riverchanter",
  "Ironspark",
  "Burrowstare",
  "Elmhold",
  "Brownchanter",
  "Craterreign",
  "Brownwander",
  "Riverstare",
  "Plainguard",
  "Icepetals",
  "Autumnborne",
  "Woodblesser",
  "Moonbearer",
  "Fogleaf",
  "Mossbruiser",
  "Driftwish",
  "Moonpetals",
  "Autumnrest",
  "Boulderlove",
  "Grassmane",
  "Burrowvoice",
  "Fogfighter",
  "Autumneyes",
  "Winterwanderer",
  "Brookmuse",
  "Cedarstrength",
  "Pinepelt",
  "Snowrun",
  "Fallwander",
  "Bloomwanderer",
  "Burrowthread",
  "Driftgroom",
  "Rockwhisper",
  "Cedarcleanser",
  "Peakpelt",
  "Browngroomer",
  "Driftdancer",
  "Driftblade",
  "Dusttail",
  "Brookbruiser",
  "Peakbinder",
  "Flooddefender",
  "Laurelblesser",
  "Pinesign",
  "Vinetail",
  "Springdarter",
  "Brookbraids",
  "Brushscreamer",
  "Willowformer",
  "Oakenride",
  "Hollowvolley",
  "Grasscleanser",
  "Iceleaf",
  "Aspenpush",
  "Riverdefender",
  "Snowbearer",
  "Sunbearer",
  "Oakendancer",
  "Earthenborne",
  "Hillshifter",
  "Birchsign",
  "Rockpush",
  "Brushspark",
  "Icesign",
  "Willowdivider",
  "Hillleaf",
  "Woodglow",
  "Earthenseeker",
  "Winterwish",
  "Hollowseeker",
  "Birchheart",
  "Timbergatherer",
  "Brightforce",
  "Laurelscorn",
  "Forestforce",
  "Rockbraid",
  "Elmbark",
  "Hollowfader",
  "Browncharger",
  "Craterslumber",
  "Ridgereign",
  "Hollowforcer",
  "Hailmind",
  "Dustheart",
  "Stonetwister",
  "Grassconqueror",
  "Driftforce",
  "Brownshield",
  "Brushforce",
  "Bouldershifter",
  "Willowblossoms",
  "Hailpetals",
  "Rockborne",
  "Peakgatherer",
  "Valleydrinker",
  "Willowbraid",
  "Pinerusher",
  "Stargatherer",
  "Dustpelt",
  "Willowcharger",
  "Birchborne",
  "Mountainrunner",
  "Starshield",
  "Bouldervolley",
  "Autumnconqueror",
  "Forestdefender",
  "Springchanter",
  "Winterfighter",
  "Earthengroomer",
  "Stonebearer",
  "Moonbooster",
  "Hailwander",
  "Earthenpetals",
  "Elmhoof",
  "Forestchaser",
  "Thornstrength",
  "Woodmane",
  "Woodbooster",
  "Forestgroom",
  "Boulderconqueror",
  "Aspentemper",
  "Grassbreaker",
  "Fogconqueror",
  "Brushrush",
  "Brushtwister",
  "Hailcatcher",
  "Summermask",
  "Hailtree",
  "Brookdreamer",
  "Mountainbringer",
  "Driftseeker",
  "Greenmane",
  "Maplescorn",
  "Rainvoice",
  "Woodleaves",
  "Staltori",
  "Razsaurus",
  "Shadorg",
  "Auranulon",
  "Infergami",
  "Diaron",
  "Ataxidos",
  "Crysrigar",
  "Phadoro",
  "Amphiros",
  "Ebonragon",
  "Pyrorashi",
  "Ethetax",
  "Elephadorah",
  "Cannitori",
  "Cobalrah",
  "Stygira",
  "Blahara",
  "Bouldorg",
  "Taclydragon",
  "Cannimera",
  "Thormajin",
  "Gargangora",
  "Elecrax",
  "Aquagon",
  "Cralak",
  "Anarguar",
  "Matriborg",
  "Stenranda",
  "Basra",
  "Catasari",
  "Dawrashi",
  "Levisis",
  "Bruhara",
  "Auradius",
  "Diabloria",
  "Aerigami",
  "Grisdan",
  "Hannibapor",
  "Patrilios",
  "Taloguar",
  "Vendragon",
  "Cobalgar",
  "Scoguera",
  "Griemon",
  "Diamoron",
  "Obsidilus",
  "Hannibados",
  "Aurah",
  "Grisgon",
  "Grimmajin",
  "Somda",
  "Radoru",
  "Elechara",
  "Grisrus",
  "Cataclylios",
  "Aegami",
  "Stormera",
  "Barbarranda",
  "Grizran",
  "Ralar",
  "Crazilla",
  "Grizlus",
  "Monrus",
  "Savalios",
  "Shadoros",
  "Vicrappa",
  "Pharashi",
  "Titadius",
  "Vorlak",
  "Crimtalak",
  "Basranda",
  "Gargadusa",
  "Leviamon",
  "Cortori",
  "Cryocada",
  "Pyrotax",
  "Diamoju",
  "Supredoru",
  "Ataxigan",
  "Primatax",
  "Diabosos",
  "Monvore",
  "Crojin",
  "Onytor",
  "Phanlios",
  "Stallus",
  "Crypdan",
  "Levitul",
  "Barbarron",
  "Tusrus",
  "Infergas",
  "Aqugary",
  "Phanlaria",
  "Bastori",
  "Ebonlus",
  "Emebara",
  "Aupod",
  "Viros",
  "Titathrax",
  "Cannibalon",
  "Volegaru",
  "Brilas",
  "Pyroras",
  "Diablogar",
  "Vicitax",
  "Barda",
  "Thuntori",
  "Emragon",
  "Anardragon",
  "Scartax",
  "Cataclyrappa",
  "Volesari",
  "Nethepor",
  "Scoju",
  "Aeriranda",
  "Ethernula",
  "Diablodun",
  "Pyrodus",
  "Stalrax",
  "Saphigon",
  "Elecgira",
  "Matritra",
  "Shagar",
  "Scorlus",
  "Eboran",
  "Levimajin",
  "Griegami",
  "Britul",
  "Primebara",
  "Obsitul",
  "Glayah",
  "Aeriran",
  "Ivomutul",
  "Obsidiguar",
  "Onydon",
  "Terrax",
  "Torlas",
  "Eludun",
  "Coballon",
  "Anarran",
  "Rabitax",
  "Inferlaria",
  "Abygauros",
  "Obsididoru",
  "Atahara",
  "Phantotul",
  "Evagami",
  "Crodon",
  "Stalju",
  "Vorlas",
  "Primirus",
  "Emerazilla",
  "Gargagora",
  "Specdusa",
  "Savasaurus",
  "Evagaru",
  "Scarmajin",
  "Ferodon",
  "Emetori",
  "Siltor",
  "Fridus",
  "Matrigora",
  "Frotax",
  "Viclas",
  "Aerigira",
  "Toxlon",
  "Titavore",
  "Phandius",
  "Gigalaria",
  "Prirax",
  "Levigon",
  "Ivolak",
  "Thorsos",
  "Anagami",
  "Titagary",
  "Crysju",
  "Aethegora",
  "Silgas",
  "Grierus",
  "Suprevern",
  "Shaguma",
  "Frenlaria",
  "Primerugon",
  "Bridoro",
  "Thorlar",
  "Oregan",
  "Croria",
  "Crypmera",
  "Primarus",
  "Orelus",
  "Phibilon",
  "Gigaras",
  "Griztalak",
  "Diarah",
  "Cobanula",
  "Diablora",
  "Onydun",
  "Masdus",
  "Transus",
  "Primagary",
  "Diatori",
  "Leviathrax",
  "Grizlak",
  "Obsiron",
  "Stordusa",
  "Abysras",
  "Razgas",
  "Scarmutul",
  "Talolar",
  "Spiriyah",
  "Stalsaurus",
  "Supreguma",
  "Ferodoro",
  "Speccada",
  "Venra",
  "Elulus",
  "Screeros",
  "Tusguar",
  "Diablozilla",
  "Elugauros",
  "Diamodoru",
  "Ethergira",
  "Scorlak",
  "Cryjin",
  "Infergo",
  "Cannirappa",
  "Gargavern",
  "Cingan",
  "Crowndorah",
  "Ferosari",
  "Somcoatl",
  "Auradon",
  "Warpede",
  "Shaborg",
  "Nethguar",
  "Maslak",
  "Titanrigar",
  "Gigantra",
  "Thunzilla",
  "Saphimutul",
  "Venorus",
  "Prisus",
  "Dawtul",
  "Sharola",
  "Cataclymon",
  "Patriran",
  "Bliju",
  "Vicitra",
  "Phasos",
  "Fievore",
  "Mourgary",
  "Screegon",
  "Cobadius",
  "Fridorg",
  "Titandusa",
  "Scorgo",
  "Supreron",
  "Tranzilla",
  "Phagan",
  "Blator",
  "Savaros",
  "Griegon",
  "Irogas",
  "Stonranda",
  "Shadogary",
  "Grimmon",
  "Tranvore",
  "Titalak",
  "Anarashi",
  "Titalus",
  "Cobalmon",
  "Stygora",
  "Eluvern",
  "Nethedos",
  "Somlas",
  "Irolon",
  "Fisis",
  "Malevogauros",
  "Stengo",
  "Basgira",
  "Carnitax",
  "Croguma",
  "Phibigar",
  "Emerigar",
  "Cryohara",
  "Specras",
  "Flaran",
  "Maleranda",
  "Diablogira",
  "Stygary",
  "Chaotor",
  "Ravara",
  "Screerugon",
  "Vicigas",
  "Ebodun",
  "Flarus",
  "Grimvern",
  "Trangauros",
  "Vortra",
  "Fririgar",
  "Scodusa",
  "Venodius",
  "Slenlios",
  "Stormtori",
  "Supregira",
  "Ebonthrax",
  "Cingary",
  "Obsidorah",
  "Barbartra",
  "Patrirola",
  "Stormmutul",
  "Crownjin",
  "Diabogary",
  "Venotax",
  "Aerimon",
  "Griegauros",
  "Fiegaru",
  "Crimcoatl",
  "Anarmajin",
  "Emerarashi",
  "Savadoru",
  "Suprepede",
  "Ebondoro",
  "Cryomutul",
  "Anamera",
  "Grisjin",
  "Phantodan",
  "Levidorg",
  "Slenpod",
  "Cataclymajin",
  "Crimdan",
  "Crogaru",
  "Thunmutul",
  "Cobalmera",
  "Rabizilla",
  "Suprelas",
  "Abysdusa",
  "Anardus",
  "Cobatalak",
  "Aqugami",
  "Storzilla",
  "Nethedus",
  "Eterdos",
  "Taclydoru",
  "Flagar",
  "Stormgon",
  "Frohara",
  "Hannibadan",
  "Carniria",
  "Bruran",
  "Infergar",
  "Cataclygauros",
  "Leviacada",
  "Tusyah",
  "Cannipod",
  "Ebonvore",
  "Styborg",
  "Blilaria",
  "Cobaltor",
  "Anartori",
  "Cratalak",
  "Grieda",
  "Malegora",
  "Etherra",
  "Crypsari",
  "Blacoatl",
  "Ebolas",
  "Thunrigar",
  "Aepede",
  "Cobaldusa",
  "Cryoran",
  "Gargandius",
  "Barbartul",
  "Vicidus",
  "Phanvern",
  "Nethsos",
  "Scarron",
  "Ravasari",
  "Matrilus",
  "Crypnulon",
  "Amphirola",
  "Pyrogami",
  "Cralon",
  "Nethehara",
  "Diamocoatl",
  "Crimrigar",
  "Nethdragon",
  "Phannulon",
  "Voleragon",
  "Barbarlios",
  "Frogas",
  "Suborg",
  "Brurola",
  "Catajin",
  "Stentul",
  "Eboguera",
  "Cafferen",
  "Shermer",
  "Darry",
  "Staedmon",
  "Slate",
  "Caleman",
  "Palker",
  "Wern",
  "Taler",
  "Vaele",
  "Belmore",
  "Stokeworth",
  "Webber",
  "Torrent",
  "Prester",
  "Pyre",
  "Piler",
  "Leadbetter",
  "Glovelyn",
  "Merchin",
  "Perryn",
  "Bar",
  "Bolling",
  "Wensington",
  "Lothston",
  "Fyshe",
  "Parsin",
  "Oatwright",
  "Tascer",
  "Vallie",
  "Hetherspoon",
  "Oldflowers",
  "Garner",
  "Stonehouse",
  "Spirre",
  "Kell",
  "Krey",
  "Crowlin",
  "Cale",
  "Long",
  "Ashwood",
  "Durrandon",
  "Hersy",
  "Boggs",
  "Cannion",
  "Chaseman",
  "Ryser",
  "Brewlan",
  "Knigh",
  "Justman",
  "Costayne",
  "Codd",
  "Crakehall",
  "Goodbrother",
  "Cleaber",
  "Waker",
  "Smithe",
  "Woodgard",
  "Lanser",
  "Shatterstone",
  "Staunton",
  "Marsh",
  "Blackmyre",
  "Lefford",
  "Tavner",
  "Hayard",
  "Sringer",
  "Bayle",
  "Kannor",
  "Ruthermont",
  "Farman",
  "Grell",
  "Tollett",
  "Whitehill",
  "Tarner",
  "Fisher",
  "Barrin",
  "Cherrane",
  "Woods",
  "Mallery",
  "Doggett",
  "Dondarrion",
  "Aerin",
  "Brackwell",
  "Barner",
  "Sadelyn",
  "Woolfield",
  "Martell",
  "Cave",
  "Algood",
  "Harner",
  "Slait",
  "Lash",
  "Stewar",
  "Brask",
  "Wendwater",
  "Strong",
  "Celtigar",
  "Parren",
  "Perle",
  "Wars",
  "Chaffton",
  "Spenler",
  "Lorch",
  "Waynwood",
  "Dalt",
  "Mallister",
  "Rowan",
  "Malver",
  "Baxter",
  "Tallman",
  "Bryne",
  "Seaworth",
  "Caron",
  "Ryger",
  "Blount",
  "Edgerton",
  "Trapp",
  "Dyser",
  "Clarick",
  "Traever",
  "Slynt",
  "Sunderly",
  "Footly",
  "Kettleblack",
  "Lolliston",
  "Taner",
  "Porter",
  "Bowman",
  "Rok",
  "Pyne",
  "Hawthorne",
  "Woodwright",
  "Gardener",
  "Skinner",
  "Flay",
  "Honn",
  "Graen",
  "Wull",
  "Cordwayner",
  "Boatwright",
  "Rowman",
  "Stackspear",
  "Follard",
  "Sloane",
  "Knott",
  "Gaege",
  "Challinder",
  "Skipperth",
  "Stout",
  "Herston",
  "Lormer",
  "Cratter",
  "Thicketh",
  "Apperford",
  "Sawler",
  "Connington",
  "Cox",
  "Chyttering",
  "Hardyng",
  "Perk",
  "Carring",
  "Greenfield",
  "Wynch",
  "Spicer",
  "Charlton",
  "Harte",
  "Selle",
  "Staelle",
  "Caerlight",
  "B'zhalo",
  "O'xin",
  "M'riso",
  "Y'rhotcheh",
  "A'xer",
  "J'rexeh",
  "P'xhike",
  "U'rhomuh",
  "W'nonu",
  "J'mhhuk",
  "P'lholih",
  "C'rhaxa",
  "taoich",
  "brill",
  "cas",
  "tur\xedo",
  "naidirt",
  "fudh\xfall",
  "g\xe9aledh",
  "calbhennan",
  "pesallin",
  "demhlogh\xedr",
  "s\xf3l",
  "nam",
  "d\xedoch",
  "regnegh",
  "reminn",
  "p\xedrtho",
  "lostirt",
  "c\xe1ngagudh",
  "naolpastudh",
  "farbh\xe9altum",
  "s\xe1rd",
  "mud",
  "mall",
  "randr\xfa",
  "budbh\xfabh",
  "cuth\xedodh",
  "dirbh\xedll",
  "rurthulm\xed",
  "r\xfanl\xe1ne",
  "\xedccuthai",
  "me\xf2dh",
  "limh",
  "fomh",
  "cenmch\xf3n",
  "mernirt",
  "enghi",
  "p\xfanmchi",
  "de\xf2ch\xe9imthunn",
  "d\xe9anemord",
  "\xfalleltocht",
  "das",
  "tubh",
  "nicht",
  "d\xfannert",
  "rerthea",
  "ludhlo",
  "momhl\xed",
  "t\xf3nmolgal",
  "c\xe9amhr\xedolm\xf3mh",
  "d\xfagheli",
];
