const { Box } = require("@mui/material")
const {
  default: DarkSummonBadgeImage
} = require("../Components/Hero/DarkSummonBadgeImage")
const { default: PJBadge } = require("../Components/Hero/PJBadge")
module.exports = {
  EyeColors: [
    { value: "203997", label: <Box sx={{ color: "#203997" }}>Blue </Box> },
    { value: "896693", label: <Box sx={{ color: "#896693" }}>Pink </Box> },
    { value: "8d7136", label: <Box sx={{ color: "#8d7136" }}>Brown </Box> },
    { value: "bb3f55", label: <Box sx={{ color: "#bb3f55" }}>Rouge </Box> },
    { value: "2494a2", label: <Box sx={{ color: "#2494a2" }}>Azure </Box> },
    { value: "0d7634", label: <Box sx={{ color: "#0d7634" }}>Green </Box> },
    { value: "613d8a", label: <Box sx={{ color: "#613d8a" }}>Purple</Box> },
    { value: "a41e12", label: <Box sx={{ color: "#a41e12" }}>Red </Box> }
  ],
  SkinColors: [
    { value: "e6a861", label: <Box sx={{ color: "#e6a861" }}>Honey</Box> },
    { value: "f1ca9e", label: <Box sx={{ color: "#f1ca9e" }}>Vanilla</Box> },
    { value: "e5ac91", label: <Box sx={{ color: "#e5ac91" }}>Peach</Box> },
    { value: "c58135", label: <Box sx={{ color: "#c58135" }}>Bronze</Box> },
    { value: "aa5c38", label: <Box sx={{ color: "#aa5c38" }}>Almond</Box> },
    { value: "985e1c", label: <Box sx={{ color: "#985e1c" }}>Golden</Box> },
    { value: "7b4a11", label: <Box sx={{ color: "#7b4a11" }}>Toffee</Box> },
    { value: "57340c", label: <Box sx={{ color: "#57340c" }}>Cocoa</Box> }
  ],
  HairColors: [
    { value: "ab9159", label: <Box sx={{ color: "#ab9159" }}>Basic1</Box> },
    { value: "af3853", label: <Box sx={{ color: "#af3853" }}>Basic2</Box> },
    { value: "578761", label: <Box sx={{ color: "#578761" }}>Basic3</Box> },
    { value: "068483", label: <Box sx={{ color: "#068483" }}>Basic4</Box> },
    { value: "48321e", label: <Box sx={{ color: "#48321e" }}>Basic5</Box> },
    { value: "66489e", label: <Box sx={{ color: "#66489e" }}>Basic6</Box> },
    { value: "ca93a7", label: <Box sx={{ color: "#ca93a7" }}>Basic7</Box> },
    { value: "62a7e6", label: <Box sx={{ color: "#62a7e6" }}>Basic8</Box> },
    { value: "c34b1e", label: <Box sx={{ color: "#c34b1e" }}>Basic9</Box> },
    { value: "d7bc65", label: <Box sx={{ color: "#d7bc65" }}>Basic10</Box> },
    { value: "513f4f", label: <Box sx={{ color: "#513f4f" }}>Basic11</Box> },
    { value: "d48b41", label: <Box sx={{ color: "#d48b41" }}>Basic12</Box> },
    { value: "326988", label: <Box sx={{ color: "#326988" }}>Advanced1</Box> },
    { value: "9b68ab", label: <Box sx={{ color: "#9b68ab" }}>Advanced2</Box> },
    { value: "8d6b3a", label: <Box sx={{ color: "#8d6b3a" }}>Advanced3</Box> },
    { value: "566377", label: <Box sx={{ color: "#566377" }}>Advanced4</Box> },
    { value: "275435", label: <Box sx={{ color: "#275435" }}>Advanced5</Box> },
    { value: "77b23c", label: <Box sx={{ color: "#77b23c" }}>Advanced6</Box> },
    { value: "880016", label: <Box sx={{ color: "#880016" }}>Elite1</Box> },
    { value: "353132", label: <Box sx={{ color: "#353132" }}>Elite2</Box> },
    { value: "dbfbf5", label: <Box sx={{ color: "#dbfbf5" }}>Elite3</Box> },
    {
      value: "8f9bb3",
      label: <Box sx={{ color: "#8f9bb3" }}>Transcendent1</Box>
    }
  ],
  AppendageColor: [
    { value: "c5bfa7", label: <Box sx={{ color: "#c5bfa7" }}>Basic1</Box> },
    { value: "a88b47", label: <Box sx={{ color: "#a88b47" }}>Basic2</Box> },
    { value: "58381e", label: <Box sx={{ color: "#58381e" }}>Basic3</Box> },
    { value: "566f7d", label: <Box sx={{ color: "#566f7d" }}>Basic4</Box> },
    { value: "2a386d", label: <Box sx={{ color: "#2a386d" }}>Basic5</Box> },
    { value: "3f2e40", label: <Box sx={{ color: "#3f2e40" }}>Basic6</Box> },
    { value: "830e18", label: <Box sx={{ color: "#830e18" }}>Basic7</Box> },
    { value: "6f3a3c", label: <Box sx={{ color: "#6f3a3c" }}>Basic8</Box> },
    { value: "cddef0", label: <Box sx={{ color: "#cddef0" }}>Basic9</Box> },
    { value: "df7126", label: <Box sx={{ color: "#df7126" }}>Basic10</Box> },
    { value: "835138", label: <Box sx={{ color: "#835138" }}>Basic11</Box> },
    { value: "86a637", label: <Box sx={{ color: "#86a637" }}>Basic12</Box> },
    { value: "6b173c", label: <Box sx={{ color: "#6b173c" }}>Advanced1</Box> },
    { value: "a0304d", label: <Box sx={{ color: "#a0304d" }}>Advanced2</Box> },
    { value: "78547c", label: <Box sx={{ color: "#78547c" }}>Advanced3</Box> },
    { value: "352a51", label: <Box sx={{ color: "#352a51" }}>Advanced4</Box> },
    { value: "147256", label: <Box sx={{ color: "#147256" }}>Advanced5</Box> },
    { value: "cf7794", label: <Box sx={{ color: "#cf7794" }}>Advanced6</Box> },
    { value: "c29d35", label: <Box sx={{ color: "#c29d35" }}>Elite1</Box> },
    { value: "353132", label: <Box sx={{ color: "#353132" }}>Elite2</Box> },
    { value: "77b5cf", label: <Box sx={{ color: "#77b5cf" }}>Elite3</Box> },
    {
      value: "d7d7d7",
      label: <Box sx={{ color: "#d7d7d7" }}>Transcendent1</Box>
    }
  ],
  BackAppendages: [
    { value: 0, label: "B1 None" },
    { value: 1, label: "B2 Monkey Tail" },
    { value: 2, label: "B3 Cat Tail" },
    { value: 3, label: "B4 Imp Tail" },
    { value: 4, label: "B5 Minotaur Tail" },
    { value: 5, label: "B6 Daishō" },
    { value: 6, label: "B7 Kitsune Tail" },
    { value: 7, label: "B8 Zweihänder" },
    { value: 8, label: "B9 Skeletal Wings" },
    { value: 9, label: "B10 Skeletal Tail" },
    { value: 10, label: "B11 Afflicted Spikes" },
    { value: 11, label: "B12 Traveler's Pack" },
    { value: 16, label: "A1 Gryphon Wings" },
    { value: 17, label: "A2 Draconic Wings" },
    { value: 18, label: "A3 Butterfly Wings" },
    { value: 19, label: "A4 Phoenix Wings" },
    { value: 20, label: "A5 Fallen Angel" },
    { value: 21, label: "A6 Crystal Wings" },
    { value: 24, label: "E1 Aura of the Inner Grove" },
    { value: 25, label: "E2 Ancient Orbs" },
    { value: 26, label: "E3 Arachnid Legs" },
    { value: 28, label: "T1 Cecaelia Tentacles" }
  ],
  HeadAppendages: [
    { value: 0, label: "B1 None" },
    { value: 1, label: "B2 Kitsune Ears" },
    { value: 2, label: "B3 Satyr Horns" },
    { value: 3, label: "B4 Ram Horns" },
    { value: 4, label: "B5 Imp Horns" },
    { value: 5, label: "B6 Cat Ears" },
    { value: 6, label: "B7 Minotaur Horns" },
    { value: 7, label: "B8 Faun Horns" },
    { value: 8, label: "B9 Draconic Horns" },
    { value: 9, label: "B10 Fae Circlet" },
    { value: 10, label: "B11 Ragfly Antennae" },
    { value: 11, label: "B12 Royal Crown" },
    { value: 16, label: "A1 Jagged Horns" },
    { value: 17, label: "A2 Spindle Horns" },
    { value: 18, label: "A3 Bear Ears" },
    { value: 19, label: "A4 Antennae" },
    { value: 20, label: "A5 Fallen Angel Coronet" },
    { value: 21, label: "A6 Power Horn" },
    { value: 24, label: "E1 Wood Elf Ears" },
    { value: 25, label: "E2 Snow Elf Ears" },
    { value: 26, label: "E3 Cranial Wings" },
    { value: 28, label: "T1 Insight Jewel" }
  ],
  HairStylesGeneric: [
    { value: 0, label: "Basic1" },
    { value: 1, label: "Basic2" },
    { value: 2, label: "Basic3" },
    { value: 3, label: "Basic4" },
    { value: 4, label: "Basic5" },
    { value: 5, label: "Basic6" },
    { value: 6, label: "Basic7" },
    { value: 7, label: "Basic8" },
    { value: 8, label: "Basic9" },
    { value: 9, label: "Basic10" },
    { value: 10, label: "Basic11" },
    { value: 11, label: "Basic12" },
    { value: 16, label: "Advanced1" },
    { value: 17, label: "Advanced2" },
    { value: 18, label: "Advanced3" },
    { value: 19, label: "Advanced4" },
    { value: 20, label: "Advanced5" },
    { value: 21, label: "Advanced6" },
    { value: 24, label: "Elite1" },
    { value: 25, label: "Elite2" },
    { value: 26, label: "Elite3" },
    { value: 28, label: "Transcendent1" }
  ],
  HairStylesFemale: [
    { value: 0, label: "B1 Windswept" },
    { value: 1, label: "B2 Fauna" },
    { value: 2, label: "B3 Enchantress" },
    { value: 3, label: "B4 Pineapple Top" },
    { value: 4, label: "B5 Pixie" },
    { value: 5, label: "B6 Darkweave Plait" },
    { value: 6, label: "B7 Dejanira" },
    { value: 7, label: "B8 Courtly Updo" },
    { value: 8, label: "B9 Centaur Tail" },
    { value: 9, label: "B10 Lamia" },
    { value: 10, label: "B11 Casual Ponytail" },
    { value: 11, label: "B12 Wild Ponytail" },
    { value: 16, label: "A1 Vogue Locs" },
    { value: 17, label: "A2 Twin Vine Loops" },
    { value: 18, label: "A3 Sweeping Willow" },
    { value: 19, label: "A4 Odango" },
    { value: 20, label: "A5 Goddess Locks" },
    { value: 21, label: "A6 Lioness" },
    { value: 24, label: "E1 Ethereal Waterfall" },
    { value: 25, label: "E2 Kunoichi" },
    { value: 26, label: "E3 Bowlcut" },
    { value: 28, label: "T1 Lunar Light Odango" }
  ],
  HairStylesMale: [
    { value: 0, label: "B1 Battle Hawk" },
    { value: 1, label: "B2 Wolf Mane" },
    { value: 2, label: "B3 Enchanter" },
    { value: 3, label: "B4 Wild Growth" },
    { value: 4, label: "B5 Pixel" },
    { value: 5, label: "B6 Sunrise" },
    { value: 6, label: "B7 Bouffant" },
    { value: 7, label: "B8 Agleam Spike" },
    { value: 8, label: "B9 Wayfinder" },
    { value: 9, label: "B10 Faded Topknot" },
    { value: 10, label: "B11 Side Shave" },
    { value: 11, label: "B12 Ronin" },
    { value: 16, label: "A1 Gruff" },
    { value: 17, label: "A2 Rogue Locs" },
    { value: 18, label: "A3 Stone Cold" },
    { value: 19, label: "A4 Zinra's Tail" },
    { value: 20, label: "A5 Hedgehog" },
    { value: 21, label: "A6 Delinquent" },
    { value: 24, label: "E1 Skegg" },
    { value: 25, label: "E2 Shinobi" },
    { value: 26, label: "E3 Sanjo" },
    { value: 28, label: "T1 Perfect Form" }
  ],
  Targets: [
    { value: "All", label: "Find" },
    { value: "Tavern", label: "Buy" },
    { value: "Hire", label: "Hire" }
  ],
  Backgrounds: [
    { value: "arctic", label: "Arctic" },
    { value: "city", label: "City" },
    { value: "desert", label: "Desert" },
    { value: "forest", label: "Forest" },
    { value: "island", label: "Island" },
    { value: "mountains", label: "Mountains" },
    { value: "plains", label: "Plains" },
    { value: "swamp", label: "Swamp" }
  ],
  ActiveSkills: [
    {
      value: "Basic1",
      label: "B1 Poisoned Blade"
    },
    { value: "Basic2", label: "B2 Blinding Winds" },
    { value: "Basic3", label: "B3 Heal" },
    { value: "Basic4", label: "B4 Cleanse" },
    { value: "Basic5", label: "B5 Iron Skin" },
    { value: "Basic6", label: "B6 Speed" },
    { value: "Basic7", label: "B7 Critical Aim" },
    { value: "Basic8", label: "B8 Deathmark" },
    {
      value: "Advanced1",
      label: <Box sx={{ color: "success.main" }}>A1 Exhaust</Box>
    },
    {
      value: "Advanced2",
      label: <Box sx={{ color: "success.main" }}>A2 Daze</Box>
    },
    {
      value: "Advanced3",
      label: <Box sx={{ color: "success.main" }}>A3 Explosion</Box>
    },
    {
      value: "Advanced4",
      label: <Box sx={{ color: "success.main" }}>A4 Hardened Shield</Box>
    },
    {
      value: "Elite1",
      label: <Box sx={{ color: "primary.main" }}>E1 Stun</Box>
    },
    {
      value: "Elite2",
      label: <Box sx={{ color: "primary.main" }}>E2 Second Wind</Box>
    },
    {
      value: "Transcendent1",
      label: <Box sx={{ color: "error.main" }}>T1 Resurrection</Box>
    }
  ],
  PassiveSkills: [
    { value: "Basic1", label: "B1 Duelist" },
    { value: "Basic2", label: "B2 Clutch" },
    { value: "Basic3", label: "B3 Foresight" },
    { value: "Basic4", label: "B4 Headstrong" },
    { value: "Basic5", label: "B5 Clear Vision" },
    { value: "Basic6", label: "B6 Fearless" },
    { value: "Basic7", label: "B7 Chatterbox" },
    { value: "Basic8", label: "B8 Stalwart" },
    {
      value: "Advanced1",
      label: <Box sx={{ color: "success.main" }}>A1 Leadership</Box>
    },
    {
      value: "Advanced2",
      label: <Box sx={{ color: "success.main" }}>A2 Efficient</Box>
    },
    {
      value: "Advanced3",
      label: <Box sx={{ color: "success.main" }}>A3 Intimidation</Box>
    },
    {
      value: "Advanced4",
      label: <Box sx={{ color: "success.main" }}>A4 Toxic</Box>
    },
    {
      value: "Elite1",
      label: <Box sx={{ color: "primary.main" }}>E1 Giant Slayer</Box>
    },
    {
      value: "Elite2",
      label: <Box sx={{ color: "primary.main" }}>E2 Last Stand</Box>
    },
    {
      value: "Transcendent1",
      label: <Box sx={{ color: "error.main" }}>T1 Second Life</Box>
    }
  ],
  Professions: [
    { value: "mining", label: "Mining" },
    { value: "foraging", label: "Foraging" },
    { value: "gardening", label: "Gardening" },
    { value: "fishing", label: "Fishing" }
  ],
  StatNames: [
    { value: "Strength", label: "Strength" },
    { value: "Dexterity", label: "Dexterity" },
    { value: "Agility", label: "Agility" },
    { value: "Vitality", label: "Vitality" },
    { value: "Endurance", label: "Endurance" },
    { value: "Intelligence", label: "Intelligence" },
    { value: "Wisdom", label: "Wisdom" },
    { value: "Luck", label: "Luck" }
  ],
  StatBoosts: [
    { value: "STR", label: "STR" },
    { value: "DEX", label: "DEX" },
    { value: "AGI", label: "AGI" },
    { value: "VIT", label: "VIT" },
    { value: "END", label: "END" },
    { value: "INT", label: "INT" },
    { value: "WIS", label: "WIS" },
    { value: "LCK", label: "LCK" }
  ],
  Rarities: [
    { value: "Common", label: "Common" },
    { value: "Uncommon", label: "Uncommon" },
    { value: "Rare", label: "Rare" },
    { value: "Legendary", label: "Legendary" },
    { value: "Mythic", label: "Mythic" }
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
    { value: "Berserker", label: "Berserker" },
    { value: "Seer", label: "Seer" },
    { value: "Legionnaire", label: "Legionnaire" },
    { value: "Scholar", label: "Scholar" },
    { value: "Shapeshifter", label: "Shapeshifter" },
    { value: "Paladin", label: "Paladin" },
    { value: "DarkKnight", label: "DarkKnight" },
    { value: "Ninja", label: "Ninja" },
    { value: "Summoner", label: "Summoner" },
    { value: "Bard", label: "Bard" },
    { value: "Dragoon", label: "Dragoon" },
    { value: "Sage", label: "Sage" },
    { value: "SpellBow", label: "SpellBow" },
    { value: "DreadKnight", label: "DreadKnight" }
  ],
  PJSurvivor: [
    { value: "SURVIVED", label: <PJBadge /> },
    { value: "DIED", label: "RIP" },
    { value: "null", label: "No" }
  ],
  DarkSummoned: [
    {
      value: true,
      label: <DarkSummonBadgeImage size={32} />
    },
    { value: false, label: "No" }
  ]
}
