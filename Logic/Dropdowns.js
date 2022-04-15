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
    { value: "warrior", label: "Warrior" },
    { value: "knight", label: "Knight" },
    { value: "thief", label: "Thief" },
    { value: "archer", label: "Archer" },
    { value: "pirate", label: "Pirate" },
    { value: "monk", label: "Monk" },
    { value: "priest", label: "Priest" },
    { value: "wizard", label: "Wizard" },
  ],
  PJSurvivor: [
    { value: "SURVIVED", label: <PJBadge /> },
    { value: "DIED", label: "RIP" },
    { value: "null", label: "No" },
  ],
};
