

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
    }
  }