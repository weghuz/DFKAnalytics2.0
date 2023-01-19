const { Box } = require("@mui/material")
const {
  default: DarkSummonBadgeImage
} = require("../Components/Hero/DarkSummonBadgeImage")
const { default: PJBadge } = require("../Components/Hero/PJBadge")
module.exports = {
  EyeColors: [
    { value: 0, label: <Box sx={{ color: "#203997" }}>Blue </Box> },
    { value: 2, label: <Box sx={{ color: "#896693" }}>Pink </Box> },
    { value: 4, label: <Box sx={{ color: "#8d7136" }}>Brown </Box> },
    { value: 6, label: <Box sx={{ color: "#bb3f55" }}>Rouge </Box> },
    { value: 8, label: <Box sx={{ color: "#2494a2" }}>Azure </Box> },
    { value: 10, label: <Box sx={{ color: "#0d7634" }}>Green </Box> },
    { value: 12, label: <Box sx={{ color: "#613d8a" }}>Purple</Box> },
    { value: 14, label: <Box sx={{ color: "#a41e12" }}>Red </Box> }
  ],
  SkinColors: [
    { value: 0, label: <Box sx={{ color: "#e6a861" }}>Honey</Box> },
    { value: 2, label: <Box sx={{ color: "#f1ca9e" }}>Vanilla</Box> },
    { value: 4, label: <Box sx={{ color: "#e5ac91" }}>Peach</Box> },
    { value: 6, label: <Box sx={{ color: "#c58135" }}>Bronze</Box> },
    { value: 8, label: <Box sx={{ color: "#aa5c38" }}>Almond</Box> },
    { value: 10, label: <Box sx={{ color: "#985e1c" }}>Golden</Box> },
    { value: 12, label: <Box sx={{ color: "#7b4a11" }}>Toffee</Box> },
    { value: 14, label: <Box sx={{ color: "#57340c" }}>Cocoa</Box> }
  ],
  HairColors: [
    { value: 0, label: <Box sx={{ color: "#ab9159" }}>Basic1</Box> },
    { value: 1, label: <Box sx={{ color: "#af3853" }}>Basic2</Box> },
    { value: 2, label: <Box sx={{ color: "#578761" }}>Basic3</Box> },
    { value: 3, label: <Box sx={{ color: "#068483" }}>Basic4</Box> },
    { value: 4, label: <Box sx={{ color: "#48321e" }}>Basic5</Box> },
    { value: 5, label: <Box sx={{ color: "#66489e" }}>Basic6</Box> },
    { value: 6, label: <Box sx={{ color: "#ca93a7" }}>Basic7</Box> },
    { value: 7, label: <Box sx={{ color: "#62a7e6" }}>Basic8</Box> },
    { value: 8, label: <Box sx={{ color: "#c34b1e" }}>Basic9</Box> },
    { value: 9, label: <Box sx={{ color: "#d7bc65" }}>Basic10</Box> },
    { value: 10, label: <Box sx={{ color: "#513f4f" }}>Basic11</Box> },
    { value: 11, label: <Box sx={{ color: "#d48b41" }}>Basic12</Box> },
    { value: 16, label: <Box sx={{ color: "#326988" }}>Advanced1</Box> },
    { value: 17, label: <Box sx={{ color: "#9b68ab" }}>Advanced2</Box> },
    { value: 18, label: <Box sx={{ color: "#8d6b3a" }}>Advanced3</Box> },
    { value: 19, label: <Box sx={{ color: "#566377" }}>Advanced4</Box> },
    { value: 20, label: <Box sx={{ color: "#275435" }}>Advanced5</Box> },
    { value: 21, label: <Box sx={{ color: "#77b23c" }}>Advanced6</Box> },
    { value: 24, label: <Box sx={{ color: "#880016" }}>Elite1</Box> },
    { value: 25, label: <Box sx={{ color: "#353132" }}>Elite2</Box> },
    { value: 26, label: <Box sx={{ color: "#dbfbf5" }}>Elite3</Box> },
    {
      value: 28,
      label: <Box sx={{ color: "#8f9bb3" }}>Transcendent1</Box>
    }
  ],
  AppendageColor: [
    { value: 0, label: <Box sx={{ color: "#c5bfa7" }}>Basic1</Box> },
    { value: 1, label: <Box sx={{ color: "#a88b47" }}>Basic2</Box> },
    { value: 2, label: <Box sx={{ color: "#58381e" }}>Basic3</Box> },
    { value: 3, label: <Box sx={{ color: "#566f7d" }}>Basic4</Box> },
    { value: 4, label: <Box sx={{ color: "#2a386d" }}>Basic5</Box> },
    { value: 5, label: <Box sx={{ color: "#3f2e40" }}>Basic6</Box> },
    { value: 6, label: <Box sx={{ color: "#830e18" }}>Basic7</Box> },
    { value: 7, label: <Box sx={{ color: "#6f3a3c" }}>Basic8</Box> },
    { value: 8, label: <Box sx={{ color: "#cddef0" }}>Basic9</Box> },
    { value: 9, label: <Box sx={{ color: "#df7126" }}>Basic10</Box> },
    { value: 10, label: <Box sx={{ color: "#835138" }}>Basic11</Box> },
    { value: 11, label: <Box sx={{ color: "#86a637" }}>Basic12</Box> },
    { value: 16, label: <Box sx={{ color: "#6b173c" }}>Advanced1</Box> },
    { value: 17, label: <Box sx={{ color: "#a0304d" }}>Advanced2</Box> },
    { value: 18, label: <Box sx={{ color: "#78547c" }}>Advanced3</Box> },
    { value: 19, label: <Box sx={{ color: "#352a51" }}>Advanced4</Box> },
    { value: 20, label: <Box sx={{ color: "#147256" }}>Advanced5</Box> },
    { value: 21, label: <Box sx={{ color: "#cf7794" }}>Advanced6</Box> },
    { value: 24, label: <Box sx={{ color: "#c29d35" }}>Elite1</Box> },
    { value: 25, label: <Box sx={{ color: "#353132" }}>Elite2</Box> },
    { value: 26, label: <Box sx={{ color: "#77b5cf" }}>Elite3</Box> },
    {
      value: 28,
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
      value: 0,
      label: "B1 Poisoned Blade"
    },
    { value: 1, label: "B2 Blinding Winds" },
    { value: 2, label: "B3 Heal" },
    { value: 3, label: "B4 Cleanse" },
    { value: 4, label: "B5 Iron Skin" },
    { value: 5, label: "B6 Speed" },
    { value: 6, label: "B7 Critical Aim" },
    { value: 7, label: "B8 Deathmark" },
    {
      value: 16,
      label: <Box sx={{ color: "success.main" }}>A1 Exhaust</Box>
    },
    {
      value: 17,
      label: <Box sx={{ color: "success.main" }}>A2 Daze</Box>
    },
    {
      value: 18,
      label: <Box sx={{ color: "success.main" }}>A3 Explosion</Box>
    },
    {
      value: 19,
      label: <Box sx={{ color: "success.main" }}>A4 Hardened Shield</Box>
    },
    {
      value: 24,
      label: <Box sx={{ color: "primary.main" }}>E1 Stun</Box>
    },
    {
      value: 25,
      label: <Box sx={{ color: "primary.main" }}>E2 Second Wind</Box>
    },
    {
      value: 28,
      label: <Box sx={{ color: "error.main" }}>Ex1 Resurrection</Box>
    }
  ],
  PassiveSkills: [
    { value: 0, label: "B1 Duelist" },
    { value: 1, label: "B2 Clutch" },
    { value: 2, label: "B3 Foresight" },
    { value: 3, label: "B4 Headstrong" },
    { value: 4, label: "B5 Clear Vision" },
    { value: 5, label: "B6 Fearless" },
    { value: 6, label: "B7 Chatterbox" },
    { value: 7, label: "B8 Stalwart" },
    {
      value: 16,
      label: <Box sx={{ color: "success.main" }}>A1 Leadership</Box>
    },
    {
      value: 17,
      label: <Box sx={{ color: "success.main" }}>A2 Efficient</Box>
    },
    {
      value: 18,
      label: <Box sx={{ color: "success.main" }}>A3 Intimidation</Box>
    },
    {
      value: 19,
      label: <Box sx={{ color: "success.main" }}>A4 Toxic</Box>
    },
    {
      value: 24,
      label: <Box sx={{ color: "primary.main" }}>E1 Giant Slayer</Box>
    },
    {
      value: 25,
      label: <Box sx={{ color: "primary.main" }}>E2 Last Stand</Box>
    },
    {
      value: 28,
      label: <Box sx={{ color: "error.main" }}>Ex1 Second Life</Box>
    }
  ],
  Professions: [
    { value: 0, label: "Mining" },
    { value: 2, label: "Gardening" },
    { value: 4, label: "Fishing" },
    { value: 6, label: "Foraging" }
  ],
  StatNames: [
    { value: 0, label: "Strength" },
    { value: 2, label: "Agility" },
    { value: 4, label: "Intelligence" },
    { value: 6, label: "Wisdom" },
    { value: 8, label: "Luck" },
    { value: 10, label: "Vitality" },
    { value: 12, label: "Endurance" },
    { value: 14, label: "Dexterity" }
  ],
  StatBoosts: [
    { value: 0, label: "STR" },
    { value: 2, label: "AGI" },
    { value: 4, label: "INT" },
    { value: 6, label: "WIS" },
    { value: 8, label: "LCK" },
    { value: 10, label: "VIT" },
    { value: 12, label: "END" },
    { value: 14, label: "DEX" }
  ],
  Rarities: [
    { value: 0, label: "Common" },
    { value: 1, label: "Uncommon" },
    { value: 2, label: "Rare" },
    { value: 3, label: "Legendary" },
    { value: 4, label: "Mythic" }
  ],
  Classes: [
    { value: 0, label: "Warrior" },
    { value: 1, label: "Knight" },
    { value: 2, label: "Thief" },
    { value: 3, label: "Archer" },
    { value: 4, label: "Priest" },
    { value: 5, label: "Wizard" },
    { value: 6, label: "Monk" },
    { value: 7, label: "Pirate" },
    { value: 8, label: "Berserker" },
    { value: 9, label: "Seer" },
    { value: 10, label: "Legionnaire" },
    { value: 11, label: "Scholar" },
    { value: 16, label: "Paladin" },
    { value: 17, label: "DarkKnight" },
    { value: 18, label: "Summoner" },
    { value: 19, label: "Ninja" },
    { value: 20, label: "Shapeshifter" },
    { value: 21, label: "Bard" },
    { value: 24, label: "Dragoon" },
    { value: 25, label: "Sage" },
    { value: 26, label: "SpellBow" },
    { value: 28, label: "DreadKnight" }
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
