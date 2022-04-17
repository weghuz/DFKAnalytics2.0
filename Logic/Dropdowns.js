const { default: PJBadge } = require("../Components/Hero/PJBadge");

module.exports = {
  Professions: [
    { value: "mining", label: "Mining" },
    { value: "foraging", label: "Foraging" },
    { value: "gardening", label: "Gardening" },
    { value: "fishing", label: "Fishing" },
  ],
  StatNames: [
    { value: "Strength", label: "Strength" },
    { value: "Dexterity", label: "Dexterity" },
    { value: "Agility", label: "Agility" },
    { value: "Vitality", label: "Vitality" },
    { value: "Endurance", label: "Endurance" },
    { value: "Intelligence", label: "Intelligence" },
    { value: "Wisdom", label: "Wisdom" },
    { value: "Luck", label: "Luck" },
  ],
  StatBoosts: [
    { value: "STR", label: "STR" },
    { value: "DEX", label: "DEX" },
    { value: "AGI", label: "AGI" },
    { value: "VIT", label: "VIT" },
    { value: "END", label: "END" },
    { value: "INT", label: "INT" },
    { value: "WIS", label: "WIS" },
    { value: "LCK", label: "LCK" },
  ],
  Rarities: [
    { value: "Common", label: "Common" },
    { value: "Uncommon", label: "Uncommon" },
    { value: "Rare", label: "Rare" },
    { value: "Legendary", label: "Legendary" },
    { value: "Mythic", label: "Mythic" },
  ],
  Classes: [
    { value: "Warrior", label: "Warrior" },
    { value: "Knight", label: "Knight" },
    { value: "Thief", label: "Thief" },
    { value: "Archer", label: "Archer" },
    { value: "Pirate", label: "Pirate" },
    { value: "Monk", label: "Monk" },
    { value: "Priest", label: "Priest" },
    { value: "Wizard", label: "Wizard" },
    { value: "Paladin", label: "Paladin" },
    { value: "DarkKnight", label: "DarkKnight" },
    { value: "Ninja", label: "Ninja" },
    { value: "Summoner", label: "Summoner" },
    { value: "Dragoon", label: "Dragoon" },
    { value: "Sage", label: "Sage" },
    { value: "DreadKnight", label: "DreadKnight" },
  ],
  PJSurvivor: [
    { value: "SURVIVED", label: <PJBadge /> },
    { value: "DIED", label: "RIP" },
    { value: "null", label: "No" },
  ],
};
