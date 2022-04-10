import React, { useState, useEffect } from "react";
import SelectItem from "./Filters/Select";

export default function HeroFilters() {
  const [mainClass, setMainClass] = useState([]);
  const [subClass, setSubClass] = useState([]);
  const [rarities, setRarities] = useState([]);
  const [professions, setProfessions] = useState([]);
  const profession = [
    { value: "mining", label: "Mining" },
    { value: "foraging", label: "Foraging" },
    { value: "gardening", label: "Gardening" },
    { value: "fishing", label: "Fishing" },
  ];
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
  const heroStatBoost = [
    "STR",
    "DEX",
    "AGI",
    "VIT",
    "END",
    "INT",
    "WIS",
    "LCK",
  ];
  const heroRarity = [
    { value: "Common"   },
    { value: "Uncommon" },
    { value: "Rare"     },
    { value: "Legendary"},
    { value: "Mythic"   },
  ];
  const classes = [
    { value: "warrior", label: "Warrior" },
    { value: "knight", label: "Knight" },
    { value: "thief", label: "Thief" },
    { value: "archer", label: "Archer" },
    { value: "pirate", label: "Pirate" },
    { value: "monk", label: "Monk" },
    { value: "priest", label: "Priest" },
    { value: "wizard", label: "Wizard" },
  ];
  useEffect(() => {
    console.log(mainClass);
  }, [mainClass, subClass, rarities, professions]);
  const ClearFilters = () => {
    setMainClass([]);
    setSubClass([]);
    setRarities([]);
    setProfessions([]);
  }
  return (
    <div className="container">
      <div className="row">
        <SelectItem title="Class" values={mainClass} setValues={setMainClass}>
          {classes}
        </SelectItem>
        <SelectItem title="Subclass" values={subClass} setValues={setSubClass}>
          {classes}
        </SelectItem>
        <SelectItem title="Profession" values={professions} setValues={setProfessions}>
          {profession}
        </SelectItem>
        <SelectItem label="value" values={rarities} setValues={setRarities}>
          {heroRarity}
        </SelectItem>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-sm btn-secondary" onClick={ClearFilters}>Clear Filters</button>
      </div>
    </div>
  );
}