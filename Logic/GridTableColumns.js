const {
  calculateRequiredXp,
  SumStats,
  RemoveBase,
  CurrentStamina,
  FullTime,
  CurrentStaminaHours,
  professionStats,
  FullName,
  appendageColorOrder,
  hairColorOrder,
  eyeColorTiers,
  skinColorTiers,
  HoursToSummon,
  crafting
} = require("./HeroBase")
import { Tooltip, Typography } from "@mui/material"
import { Box } from "@mui/system"
import ActiveCell from "../Components/Hero/ActiveCell"
import ClassScoreCell from "../Components/Hero/ClassScoreCell"
import DarkSummonBadge from "../Components/Hero/DarkSummonBadge"
import ElementCell from "../Components/Hero/ElementCell"
import GrowthScoreCell from "../Components/Hero/GrowthScoreCell"
import HeroBackAppendageCell from "../Components/Hero/HeroBackAppendageCell"
import HeroColorCell from "../Components/Hero/HeroColorCell"
import HeroEyeColor from "../Components/Hero/HeroEyeColor"
import HeroHairCell from "../Components/Hero/HeroHairCell"
import HeroHairColorCell from "../Components/Hero/HeroHairColorCell"
import HeroHeadAppendageCell from "../Components/Hero/HeroHeadAppendageCell"
import HeroId from "../Components/Hero/HeroId"
import HeroOwnerId from "../Components/Hero/HeroOwnerId"
import HeroOwnerName from "../Components/Hero/HeroOwnerName"
import HeroOwner from "../Components/Hero/HeroOwnerName"
import HeroSkinColor from "../Components/Hero/HeroSkinColor"
import HeroSummonsNext from "../Components/Hero/HeroSummonsNext"
import PassiveCell from "../Components/Hero/PassiveCell"
import PJBadge from "../Components/Hero/PJBadge"
import PriceCell from "../Components/Hero/PriceCell"
import RarityCell from "../Components/Hero/RarityCell"
import StatBonusCell from "../Components/Hero/StatBonusCell"

let columnDefs = [
  {
    headerName: "Cost",
    field: "salePrice",
    type: "number",
    minWidth: 105,
    flex: 1,
    valueFormatter: ({ value }) => {
      return Number(value)
    },
    renderCell: ({ row }) => {
      return <PriceCell>{row}</PriceCell>
    }
  },
  {
    headerName: "Network",
    field: "network",
    minWidth: 50,
    flex: 1,
    valueFormatter: ({ value }) => {
      return value
    }
  },
  {
    headerName: "Summoned Time",
    field: "summonedTime",
    minWidth: 180,
    flex: 1,
    valueFormatter: ({ value }) => {
      return (
        new Date(value * 1000).toLocaleDateString() +
        " " +
        new Date(value * 1000).toLocaleTimeString()
      )
    }
  },
  {
    headerName: "Id",
    field: "id",
    minWidth: 80,
    flex: 1,
    type: "number",
    valueFormatter: ({ value }) => Number(value),
    renderCell: ({ row }) => {
      return <HeroId>{row.heroId > 0 ? row.heroId : row.id}</HeroId>
    }
  },
  {
    headerName: "Rarity",
    field: "rarity",
    type: "number",
    minWidth: 50,
    flex: 1,
    valueFormatter: ({ value }) => Number(value),
    renderCell: ({ row }) => {
      return <RarityCell rarity={row.rarity} />
    }
  },
  {
    headerName: "Class",
    field: "mainClass",
    type: "string"
  },
  {
    headerName: "ClassR1",
    field: "R1.mainClass",
    type: "string",
    valueGetter: ({ row }) => {
      return row.R1.mainClass
    }
  },
  {
    headerName: "ClassR2",
    field: "R2.mainClass",
    type: "string",
    valueGetter: ({ row }) => {
      return row.R2.mainClass
    }
  },
  {
    headerName: "ClassR3",
    field: "R3.mainClass",
    type: "string",
    valueGetter: ({ row }) => {
      return row.R3.mainClass
    }
  },
  {
    headerName: "Class+",
    field: "Class+",
    minWidth: 150,
    flex: 2,
    renderCell: ({ row }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            fontSize: "12px"
          }}
        >
          D: {row.mainClass} R1: {row.R1.mainClass}
          <br />
          R2: {row.R2.mainClass} R3: {row.R3.mainClass}
        </div>
      )
    }
  },
  {
    headerName: "Subclass",
    field: "subClass"
  },
  {
    headerName: "R1 Subclass",
    field: "R1 Subclass",
    title: "R1 Subclass",
    valueGetter: ({ row }) => {
      return row.R1.subClass
    }
  },
  {
    headerName: "R2 Subclass",
    field: "R2 Subclass",
    title: "R2 Subclass",
    valueGetter: ({ row }) => {
      return row.R2.subClass
    }
  },
  {
    headerName: "R3 Subclass",
    field: "R3 Subclass",
    title: "R3 Subclass",
    valueGetter: ({ row }) => {
      return row.R3.subClass
    }
  },
  {
    headerName: "Subclass+",
    field: "Subclass+",
    minWidth: 150,
    flex: 2,
    type: "string",
    renderCell: ({ row }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            fontSize: "12px"
          }}
        >
          D: {row.subClass} R1: {row.R1.subClass}
          <br /> R2: {row.R2.subClass} R3: {row.R3.subClass}
        </div>
      )
    }
  },
  {
    headerName: "Background",
    field: "background",
    flex: 1,
    minWidth: 90,
    type: "string"
  },
  {
    headerName: "Gender",
    field: "gender",
    flex: 1,
    minWidth: 60,
    type: "string"
  },
  {
    headerName: "Lvl",
    field: "level",
    type: "number",
    minWidth: 50,
    flex: 1,
    valueFormatter: ({ value }) => Number(value)
  },
  {
    headerName: "XP",
    field: "XP",
    flex: 1,
    minWidth: 100,
    valueGetter: ({ row }) => {
      return `${row.xp}/${calculateRequiredXp(row.level) / 1000}k`
    }
  },
  {
    headerName: "XP To Level",
    field: "XPToLevel",
    flex: 1,
    minWidth: 80,
    valueGetter: ({ row }) => {
      return calculateRequiredXp(row.level) - row.xp
    }
  },
  {
    headerName: "XP Current",
    field: "XPC",
    type: "number",
    flex: 1,
    minWidth: 80,
    valueFormatter: ({ value }) => Number(value),
    valueGetter: ({ row }) => {
      return row.xp
    }
  },
  {
    headerName: "XP Max",
    field: "XPM",
    type: "number",
    flex: 1,
    minWidth: 80,
    valueFormatter: ({ value }) => Number(value),
    valueGetter: ({ row }) => {
      return calculateRequiredXp(row.level)
    }
  },
  {
    headerName: "Shiny",
    field: "shiny",
    valueFormatter: ({ value }) => (value ? "✨" : "❌"),
    flex: 1,
    minWidth: 50
  },
  {
    headerName: "Gen",
    field: "generation",
    type: "number",
    minWidth: 50,
    flex: 1,
    valueFormatter: ({ value }) => Number(value)
  },
  {
    headerName: "Used Summons",
    field: "summons",
    type: "number",
    minWidth: 50,
    flex: 1
  },
  {
    headerName: "Summons Remaining",
    field: "summonsRemaining",
    type: "number",
    minWidth: 50,
    flex: 1
  },
  {
    headerName: "Max Summons",
    field: "maxSummons",
    type: "number",
    minWidth: 50,
    flex: 1
  },
  {
    headerName: "Summons",
    field: "Summons",
    type: "number",
    minWidth: 50,
    flex: 1,
    valueGetter: ({ row }) => {
      return Number(row.summonsRemaining)
    },
    renderCell: ({ row }) => {
      if (row.generation == 0) {
        return `${row.summons}/∞`
      }
      return `${row.summonsRemaining}/${row.maxSummons}`
    }
  },
  {
    headerName: "Next Summon",
    field: "nextSummonTime",
    minWidth: 100,
    flex: 1,
    valueGetter: ({ row }) => {
      let val = HoursToSummon(row)
      return val
    },
    renderCell: ({ row }) => {
      return <HeroSummonsNext>{row}</HeroSummonsNext>
    }
  },
  {
    headerName: "Gen|Sum",
    field: "gen|sum",
    type: "number",
    valueGetter: ({ row }) => {
      return Number(`${row.generation}${row.summonsRemaining}`)
    },
    renderCell: ({ row }) => {
      if (row.generation == 0) {
        return `${row.generation} | ${row.summons}/∞`
      }
      return `${row.generation} | ${row.summonsRemaining}/${row.maxSummons}`
    }
  },
  {
    headerName: "HP",
    field: "hp",
    minWidth: 50,
    flex: 1,
    type: "number",
    valueFormatter: ({ value }) => Number(value)
  },
  {
    headerName: "MP",
    field: "mp",
    minWidth: 50,
    flex: 1,
    type: "number",
    valueFormatter: ({ value }) => Number(value)
  },
  {
    headerName: "StatBoost 1",
    field: "statBoost1",
    minWidth: 50,
    flex: 1
  },
  {
    headerName: "SB1R1",
    field: "SB1R1",
    minWidth: 50,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R1.statBoost1
    }
  },
  {
    headerName: "SB1R2",
    field: "SB1R2",
    minWidth: 50,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R2.statBoost1
    }
  },
  {
    headerName: "SB1R3",
    field: "SB1R3",
    minWidth: 50,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R3.statBoost1
    }
  },
  {
    headerName: "SB1+",
    field: "sb1+",
    minWidth: 150,
    flex: 2,
    renderCell: ({ row }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            fontSize: "12px"
          }}
        >
          D: {row.statBoost1} R1: {row.R1.statBoost1}
          <br /> R2: {row.R2.statBoost1} R3: {row.R3.statBoost1}
        </div>
      )
    }
  },
  {
    headerName: "StatBoost 2",
    field: "statBoost2",
    minWidth: 50,
    flex: 1
  },
  {
    headerName: "SB2R1",
    field: "sb2r1",
    minWidth: 50,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R1.statBoost2
    }
  },
  {
    headerName: "SB2R2",
    field: "sb2R2",
    minWidth: 50,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R2.statBoost2
    }
  },
  {
    headerName: "SB2R3",
    field: "sb2R3",
    minWidth: 50,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R3.statBoost2
    }
  },
  {
    headerName: "SB2+",
    field: "sb2+",
    minWidth: 150,
    flex: 2,
    renderCell: ({ row }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            fontSize: "12px"
          }}
        >
          D: {row.statBoost2} R1: {row.R1.statBoost2}
          <br /> R2: {row.R2.statBoost2} R3: {row.R3.statBoost2}
        </div>
      )
    }
  },
  {
    headerName: "Train Stat",
    field: "TrainStat",
    type: "number",
    valueGetter: ({ value }) => {
      return Number(value.amount)
    },
    renderCell: ({ row }) => {
      return (
        <Tooltip
          title={
            <>
              {
                "Green stat gives +1 and Blue +3 points to a stat for questing. "
              }
              <a href={row.TrainStat.link} target="_blank" rel="noreferrer">
                {row.TrainStat.linkName}
              </a>
            </>
          }
          placement="left"
        >
          <Box sx={{ color: row.TrainStat.color }}>
            {row.TrainStat.name} {row.TrainStat.amount}
          </Box>
        </Tooltip>
      )
    }
  },
  {
    headerName: "HasValidCraftingGene",
    field: "hasValidCraftingGenes",
    minWidth: 90,
    flex: 1
  },
  {
    headerName: "Crafting",
    field: "crafting",
    minWidth: 120,
    flex: 1.5,
    valueGetter: ({ row }) => {
      if (row.hasValidCraftingGenes) {
        return `${crafting[row.statsUnknown1]} : ${crafting[row.statsUnknown2]}`
      } else {
        return `❌`
      }
    }
  },
  {
    headerName: "Crafting1",
    field: "crafting1",
    minWidth: 90,
    flex: 1,
    valueGetter: ({ row }) => {
      if (row.hasValidCraftingGenes) {
        return `${crafting[row.statsUnknown1]}`
      } else {
        return `❌`
      }
    }
  },
  {
    headerName: "Crafting2",
    field: "crafting2",
    minWidth: 90,
    flex: 1,
    valueGetter: ({ row }) => {
      if (row.hasValidCraftingGenes) {
        return `${crafting[row.statsUnknown2]}`
      } else {
        return `❌`
      }
    }
  },
  {
    headerName: "Profession",
    field: "profession"
  },
  {
    headerName: "ProfR1",
    field: "profR1",
    minWidth: 90,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R1.profession
    }
  },
  {
    headerName: "ProfR2",
    field: "profR2",
    minWidth: 90,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R2.profession
    }
  },
  {
    headerName: "ProfR3",
    field: "profR3",
    minWidth: 90,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R3.profession
    }
  },
  {
    headerName: "Profession+",
    field: "professionRecessives",
    minWidth: 100,
    flex: 1.5,
    renderCell: ({ row }) => {
      return (
        <Tooltip
          placement="left"
          title={`D: ${row.profession} R1: ${row.R1.profession} R2: ${row.R2.profession} R3: ${row.R3.profession}`}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              fontSize: "12px"
            }}
          >
            D: {row.profession.substring(0, 3)} R1:
            {row.R1.profession.substring(0, 3)}
            <br /> R2: {row.R2.profession.substring(0, 3)} R3:
            {row.R3.profession.substring(0, 3)}
          </div>
        </Tooltip>
      )
    }
  },
  {
    headerName: "Head Appendage",
    field: "headAppendage",
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(value)
    },
    renderCell: ({ row }) => {
      return <HeroHeadAppendageCell hero={row} />
    }
  },
  {
    headerName: "Appendage Color",
    field: "appendageColor",
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(appendageColorOrder[value])
    },
    renderCell: ({ row }) => {
      return <HeroColorCell>{row.appendageColor}</HeroColorCell>
    }
  },
  {
    headerName: "Back Appendage",
    field: "backAppendage",
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(value)
    },
    renderCell: ({ row }) => {
      return <HeroBackAppendageCell hero={row} />
    }
  },
  {
    headerName: "Back Appendage Color",
    field: "backAppendageColor",
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(appendageColorOrder[value])
    },
    renderCell: ({ row }) => {
      return <HeroColorCell>{row.backAppendageColor}</HeroColorCell>
    }
  },
  {
    headerName: "Hairstyle",
    field: "hairStyle",
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(value)
    },
    renderCell: ({ row }) => {
      return <HeroHairCell hero={row} />
    }
  },
  {
    headerName: "Hair Color",
    field: "hairColor",
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(hairColorOrder[value])
    },
    renderCell: ({ row }) => {
      return <HeroHairColorCell>{row.hairColor}</HeroHairColorCell>
    }
  },
  {
    headerName: "Eye color",
    field: "eyeColor",
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(eyeColorTiers[value])
    },
    renderCell: ({ row }) => {
      return <HeroEyeColor>{row.eyeColor}</HeroEyeColor>
    }
  },
  {
    headerName: "Skin color",
    field: "skinColor",
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(skinColorTiers[value])
    },
    renderCell: ({ row }) => {
      return <HeroSkinColor>{row.skinColor}</HeroSkinColor>
    }
  },
  {
    headerName: "Dark Summoned",
    field: "darkSummoned",
    type: "number",
    minWidth: 100,
    flex: 1,
    valueGetter: ({ row }) => {
      return Number(
        row.darkSummoned +
          row.darkSummonLevels -
          (row.darkSummoned ? row.level : 0)
      )
    },
    renderCell: ({ row }) => {
      return <DarkSummonBadge size={32}>{row}</DarkSummonBadge>
    }
  },
  {
    headerName: "PJ",
    field: "pjStatus",
    type: "string",
    minWidth: 70,
    flex: 1,
    renderCell: ({ row }) => {
      if (row.pjStatus == null) {
        return "❌"
      } else if (row.pjStatus == "SURVIVED") {
        return <PJBadge />
      }
      return "RIP"
    },
    sortComparator: (a, b) => {
      if (a == null) return -1
      if (b == null) return 1
      if (a == "SURVIVED") return 1
      if (b == "SURVIVED") return -1
      else return 0
    }
  },
  {
    headerName: "Totstat",
    field: "tostat",
    type: "number",
    minWidth: 60,
    flex: 1,
    valueGetter: ({ row }) => {
      return Number(SumStats(row)).toFixed(0)
    }
  },
  {
    headerName: "Statgain",
    field: "statgain",
    title: "Statgain",
    type: "number",
    minWidth: 60,
    flex: 1,
    valueGetter: ({ row }) => {
      return Number(SumStats(RemoveBase(row))).toFixed(0)
    }
  },
  {
    headerName: "Stamina Max",
    field: "Stamina Max",
    title: "Stamina Max",
    type: "number",
    minWidth: 40,
    flex: 1,
    valueGetter: ({ row }) => {
      return Number(parseInt(25 + parseInt(row.level) / 2))
    }
  },
  {
    headerName: "Stamina Current",
    field: "Stamina Current",
    title: "Stamina Current",
    type: "number",
    minWidth: 40,
    flex: 1,
    valueGetter: ({ row }) => {
      return Number(CurrentStamina(row))
    }
  },
  {
    headerName: "Stamina",
    field: "Stamina",
    title: "Stamina",
    type: "number",
    minWidth: 70,
    flex: 1,
    valueGetter: ({ row }) => {
      return `${CurrentStamina(row)} / ${parseInt(
        25 + parseInt(row.level) / 2
      )}`
    }
  },
  {
    headerName: "Stamina Max In",
    field: "Stamina Max In",
    title: "Stamina Max In",
    minWidth: 70,
    flex: 1,
    valueGetter: ({ row }) => {
      let fullTime = CurrentStaminaHours(row)
      if (fullTime == 0) {
        return null
      } else {
        return fullTime + `H`
      }
    }
  },
  {
    headerName: "Stamina Full At",
    title: "Stamina Full At",
    field: "sFullAt",
    minWidth: 115,
    flex: 1,
    valueGetter: ({ row }) => {
      let fullTime = FullTime(row)
      if (fullTime == 0) {
        return null
      } else {
        return `${fullTime.getDate()} ${fullTime.toLocaleTimeString()}`
      }
    }
  },
  {
    headerName: "Profession Stats",
    field: "Profession Stats",
    title: "Profession Stats",
    minWidth: 50,
    flex: 1,
    type: "number",
    valueGetter: ({ row }) => {
      return Number(
        row[professionStats[row.profession][0]] +
          row[professionStats[row.profession][1]]
      )
    }
  },
  {
    headerName: "Skill Profession Stats",
    field: "Skill Profession Stats",
    title: "Skill Profession Stats",
    minWidth: 50,
    flex: 1,
    type: "number",
    valueGetter: ({ row }) => {
      return Number(
        row[professionStats[row.profession][0]] +
          row[professionStats[row.profession][1]] +
          row[row.profession] * 0.2
      ).toFixed(1)
    }
  },
  {
    headerName: "Element",
    field: "element",
    Title: "Element",
    minWidth: 50,
    flex: 1,
    renderCell: ({ row }) => {
      return <ElementCell>{row.element}</ElementCell>
    }
  },
  {
    headerName: "R1 Element",
    field: "R1 Element",
    Title: "R1 Element",
    minWidth: 50,
    flex: 1,
    renderCell: ({ row }) => {
      return <ElementCell>{row.R1.element}</ElementCell>
    }
  },
  {
    headerName: "R2 Element",
    field: "R2 Element",
    Title: "R2 Element",
    minWidth: 50,
    flex: 1,
    renderCell: ({ row }) => {
      return <ElementCell>{row.R2.element}</ElementCell>
    }
  },
  {
    headerName: "R3 Element",
    field: "R3 Element",
    Title: "R3 Element",
    minWidth: 50,
    flex: 1,
    renderCell: ({ row }) => {
      return <ElementCell>{row.R3.element}</ElementCell>
    }
  },
  {
    headerName: "Element+",
    field: "element+",
    minWidth: 100,
    flex: 1,
    renderCell: ({ row }) => {
      return (
        <Tooltip
          placement="top"
          title={`D: ${row.element} R1: ${row.R1.element} R2: ${row.R2.element} R3: ${row.R3.element}`}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "flex-start",
              fontSize: "12px"
            }}
          >
            {<ElementCell tooltip={false}>{row.element}</ElementCell>}
            {<ElementCell tooltip={false}>{row.R1.element}</ElementCell>}
            <br />
            {<ElementCell tooltip={false}>{row.R2.element}</ElementCell>}
            {<ElementCell tooltip={false}>{row.R3.element}</ElementCell>}
          </div>
        </Tooltip>
      )
    }
  },
  {
    headerName: "Class Score",
    field: "classScore",
    minWidth: 60,
    flex: 1,
    type: "number",
    renderCell: ({ row }) => {
      return <ClassScoreCell>{row}</ClassScoreCell>
    }
  },
  {
    headerName: "CScore/Level",
    field: "classScoreLevel",
    minWidth: 90,
    flex: 1,
    type: "number",
    valueGetter: ({ row }) => {
      return Number(row.classScore / row.level).toFixed(2)
    }
  },
  {
    headerName: "C Score/J",
    field: "cScore/J",
    minWidth: 60,
    flex: 1,
    type: "number",
    valueGetter: ({ row }) => {
      if (row.salePrice == null) return null
      return (row.classScore / row.salePrice).toFixed(5)
    }
  },
  {
    headerName: "Growth Score",
    field: "growthScore",
    minWidth: 60,
    flex: 1,
    type: "number",
    renderCell: ({ row }) => {
      return <GrowthScoreCell>{row}</GrowthScoreCell>
    }
  },
  {
    headerName: `G Score/J`,
    field: "gScore/J",
    minWidth: 60,
    flex: 1,
    type: "number",
    valueGetter: ({ row }) => {
      if (row.salePrice == null) return null
      return (row.growthScore / row.salePrice).toFixed(5)
    }
  },
  {
    headerName: "Active1",
    field: "active1",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <ActiveCell>{row.active1}</ActiveCell>
    }
  },
  {
    headerName: "A1R1",
    field: "a1r1",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <ActiveCell>{row.R1.active1}</ActiveCell>
    }
  },
  {
    headerName: "A1R2",
    field: "a1R2",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <ActiveCell>{row.R2.active1}</ActiveCell>
    }
  },
  {
    headerName: "A1R3",
    field: "a1R3",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <ActiveCell>{row.R3.active1}</ActiveCell>
    }
  },
  {
    headerName: "Active1+",
    field: "active1+",
    minWidth: 225,
    flex: 2,
    renderCell: ({ row }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "flex-start",
            fontSize: "12px"
          }}
        >
          D: <ActiveCell tooltip={false}>{row.active1}</ActiveCell> R1:{" "}
          <ActiveCell tooltip={false}>{row.R1.active1}</ActiveCell> R2:{" "}
          <ActiveCell tooltip={false}>{row.R2.active1}</ActiveCell> R3:{" "}
          <ActiveCell tooltip={false}>{row.R3.active1}</ActiveCell>
        </div>
      )
    }
  },
  {
    headerName: "Active2",
    field: "active2",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <ActiveCell>{row.active2}</ActiveCell>
    }
  },
  {
    headerName: "A2R1",
    field: "a2r1",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <ActiveCell>{row.R1.active2}</ActiveCell>
    }
  },
  {
    headerName: "A2R2",
    field: "a2R2",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <ActiveCell>{row.R2.active2}</ActiveCell>
    }
  },
  {
    headerName: "A2R3",
    field: "a2R3",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <ActiveCell>{row.R3.active2}</ActiveCell>
    }
  },
  {
    headerName: "Active2+",
    field: "active2+",
    minWidth: 225,
    flex: 2,
    renderCell: ({ row }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "flex-start",
            fontSize: "12px"
          }}
        >
          D: <ActiveCell>{row.active2}</ActiveCell>
          R1:<ActiveCell>{row.R1.active2}</ActiveCell>
          R2: <ActiveCell>{row.R2.active2}</ActiveCell>
          R3: <ActiveCell>{row.R3.active2}</ActiveCell>
        </div>
      )
    }
  },
  {
    headerName: "Passive1",
    field: "passive1",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <PassiveCell>{row.passive1}</PassiveCell>
    }
  },
  {
    headerName: "P1R1",
    field: "p1r1",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <PassiveCell>{row.R1.passive1}</PassiveCell>
    }
  },
  {
    headerName: "P1R2",
    field: "p1R2",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <PassiveCell>{row.R2.passive1}</PassiveCell>
    }
  },
  {
    headerName: "P1R3",
    field: "p1R3",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <PassiveCell>{row.R3.passive1}</PassiveCell>
    }
  },
  {
    headerName: "Passive1+",
    field: "passive1+",
    minWidth: 225,
    flex: 2,
    renderCell: ({ row }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "flex-start",
            fontSize: "12px"
          }}
        >
          D: <PassiveCell>{row.passive1}</PassiveCell> R1:{" "}
          <PassiveCell>{row.R1.passive1}</PassiveCell>
          R2: <PassiveCell>{row.R2.passive1}</PassiveCell> R3:{" "}
          <PassiveCell>{row.R3.passive1}</PassiveCell>
        </div>
      )
    }
  },
  {
    headerName: "Passive2",
    field: "passive2",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <PassiveCell>{row.passive2}</PassiveCell>
    }
  },
  {
    headerName: "P2R1",
    field: "p2r1",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <PassiveCell>{row.R1.passive2}</PassiveCell>
    }
  },
  {
    headerName: "P2R2",
    field: "p2R2",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <PassiveCell>{row.R2.passive2}</PassiveCell>
    }
  },
  {
    headerName: "P2R3",
    field: "p2R3",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row }) => {
      return <PassiveCell>{row.R3.passive2}</PassiveCell>
    }
  },
  {
    headerName: "Passive2+",
    field: "passive2+",
    minWidth: 225,
    flex: 2,
    renderCell: ({ row }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "flex-start",
            fontSize: "12px"
          }}
        >
          D: <PassiveCell>{row.passive2}</PassiveCell> R1:{" "}
          <PassiveCell>{row.R1.passive2}</PassiveCell>
          R2: <PassiveCell>{row.R2.passive2}</PassiveCell> R3:{" "}
          <PassiveCell>{row.R3.passive1}</PassiveCell>
        </div>
      )
    }
  },
  {
    headerName: "SU1",
    field: "statsUnknown1",
    minWidth: 40,
    flex: 1
  },
  {
    headerName: "SU1R1",
    field: "su1r1",
    minWidth: 40,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R1.statsUnknown1
    }
  },
  {
    headerName: "SU1R2",
    field: "su1R2",
    minWidth: 40,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R2.statsUnknown1
    }
  },
  {
    headerName: "SU1R3",
    field: "su1R3",
    minWidth: 40,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R3.statsUnknown1
    }
  },
  {
    headerName: "SU1+",
    field: "SU1+",
    title: "Status Unknown 1 Recessives",
    minWidth: 100,
    flex: 1.5,
    renderCell: ({ row }) => {
      return (
        <Tooltip
          placement="top"
          title={`D: ${row.statsUnknown1} R1: ${row.R1.statsUnknown1} R2: ${row.R2.statsUnknown1} R3: ${row.R3.statsUnknown1}`}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "flex-start",
              fontSize: "12px"
            }}
          >
            D: {row.statsUnknown1} R1: {row.R1.statsUnknown1}
            <br />
            R2: {row.R2.statsUnknown1} R3: {row.R3.statsUnknown1}
          </div>
        </Tooltip>
      )
    }
  },
  {
    headerName: "SU2",
    field: "statsUnknown2",
    title: "Status Unknown 2",
    minWidth: 40,
    flex: 1
  },
  {
    headerName: "SU2R1",
    field: "SU2R1",
    minWidth: 40,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R1.statsUnknown2
    }
  },
  {
    headerName: "SU2R2",
    field: "SU2R2",
    minWidth: 40,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R2.statsUnknown2
    }
  },
  {
    headerName: "SU2R3",
    field: "SU2R3",
    minWidth: 40,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R3.statsUnknown2
    }
  },
  {
    headerName: "SU2+",
    field: "SU2+",
    minWidth: 100,
    flex: 1.5,
    renderCell: ({ row }) => {
      return (
        <Tooltip
          placement="top"
          title={`D: ${row.statsUnknown2} R1: ${row.R1.statsUnknown2} R2: ${row.R2.statsUnknown2} R3: ${row.R3.statsUnknown2}`}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "flex-start",
              fontSize: "12px"
            }}
          >
            D: {row.statsUnknown2} R1: {row.R1.statsUnknown2}
            <br />
            R2: {row.R2.statsUnknown2} R3: {row.R3.statsUnknown2}
          </div>
        </Tooltip>
      )
    }
  },
  {
    headerName: "Mining",
    field: "mining",
    type: "number",
    minWidth: 40,
    flex: 1,
    valueFormatter: ({ value }) => {
      return Number(value / 10)
    }
  },
  {
    headerName: "Foraging",
    field: "foraging",
    type: "number",
    minWidth: 40,
    flex: 1,
    valueFormatter: ({ value }) => {
      return Number(value / 10)
    }
  },
  {
    headerName: "Fishing",
    field: "fishing",
    type: "number",
    minWidth: 40,
    flex: 1,
    valueFormatter: ({ value }) => {
      return Number(value / 10)
    }
  },
  {
    headerName: "Gardening",
    field: "gardening",
    type: "number",
    minWidth: 40,
    flex: 1,
    valueFormatter: ({ value }) => {
      return Number(value / 10)
    }
  },
  {
    headerName: "Str",
    field: "strength",
    type: "number",
    minWidth: 40,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(value)
    },
    renderCell: ({ row }) => {
      return (
        <StatBonusCell
          sb1={row.statBoost1}
          sb2={row.statBoost2}
          stat={"STR"}
          statAmount={row.strength}
          statName={"strength"}
        />
      )
    }
  },
  {
    headerName: "Dex",
    field: "dexterity",
    type: "number",
    minWidth: 40,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(value)
    },
    renderCell: ({ row }) => {
      return (
        <StatBonusCell
          sb1={row.statBoost1}
          sb2={row.statBoost2}
          stat={"DEX"}
          statAmount={row.dexterity}
          statName={"dexterity"}
        />
      )
    }
  },
  {
    headerName: "Agi",
    field: "agility",
    type: "number",
    minWidth: 40,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(value)
    },
    renderCell: ({ row }) => {
      return (
        <StatBonusCell
          sb1={row.statBoost1}
          sb2={row.statBoost2}
          stat={"AGI"}
          statAmount={row.agility}
          statName={"agility"}
        />
      )
    }
  },
  {
    headerName: "Vit",
    field: "vitality",
    type: "number",
    minWidth: 40,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(value)
    },
    renderCell: ({ row }) => {
      return (
        <StatBonusCell
          sb1={row.statBoost1}
          sb2={row.statBoost2}
          stat={"VIT"}
          statAmount={row.vitality}
          statName={"vitality"}
        />
      )
    }
  },
  {
    headerName: "End",
    field: "endurance",
    minWidth: 40,
    flex: 1,
    type: "number",
    valueGetter: ({ value }) => {
      return Number(value)
    },
    renderCell: ({ row }) => {
      return (
        <StatBonusCell
          sb1={row.statBoost1}
          sb2={row.statBoost2}
          stat={"END"}
          statAmount={row.endurance}
          statName={"endurance"}
        />
      )
    }
  },
  {
    headerName: "Int",
    field: "intelligence",
    minWidth: 40,
    flex: 1,
    type: "number",
    valueGetter: ({ value }) => {
      return Number(value)
    },
    renderCell: ({ row }) => {
      return (
        <StatBonusCell
          sb1={row.statBoost1}
          sb2={row.statBoost2}
          stat={"INT"}
          statAmount={row.intelligence}
          statName={"intelligence"}
        />
      )
    }
  },
  {
    headerName: "Wis",
    field: "wisdom",
    minWidth: 40,
    flex: 1,
    type: "number",
    valueGetter: ({ value }) => {
      return Number(value)
    },
    renderCell: ({ row }) => {
      return (
        <StatBonusCell
          sb1={row.statBoost1}
          sb2={row.statBoost2}
          stat={"WIS"}
          statAmount={row.wisdom}
          statName={"wisdom"}
        />
      )
    }
  },
  {
    headerName: "lck",
    field: "luck",
    minWidth: 40,
    flex: 1,
    type: "number",
    valueGetter: ({ value }) => {
      return Number(value)
    },
    renderCell: ({ row }) => {
      return (
        <StatBonusCell
          sb1={row.statBoost1}
          sb2={row.statBoost2}
          stat={"LCK"}
          statAmount={row.luck}
          statName={"luck"}
        />
      )
    }
  },
  {
    headerName: "StrBonus",
    field: "StrBonus",
    type: "number",
    minWidth: 65,
    flex: 1,
    visibility: true,
    valueGetter: ({ row }) => {
      return Number(row.strength)
    },
    renderCell: ({ row }) => {
      return (
        <>
          <StatBonusCell
            sb1={row.statBoost1}
            sb2={row.statBoost2}
            stat={"STR"}
            statAmount={row.strength}
            statName={"strength"}
            showBonus={true}
            mainClass={row.mainClass}
          />
        </>
      )
    }
  },
  {
    headerName: "DexBonus",
    field: "DexBonus",
    type: "number",
    minWidth: 65,
    flex: 1,
    visibility: true,
    valueGetter: ({ row }) => {
      return Number(row.dexterity)
    },
    renderCell: ({ row }) => {
      return (
        <StatBonusCell
          sb1={row.statBoost1}
          sb2={row.statBoost2}
          stat={"DEX"}
          statAmount={row.dexterity}
          statName={"dexterity"}
          showBonus={true}
          mainClass={row.mainClass}
        />
      )
    }
  },
  {
    headerName: "AgiBonus",
    field: "AgiBonus",
    type: "number",
    minWidth: 65,
    flex: 1,
    visibility: true,
    valueGetter: ({ row }) => {
      return Number(row.agility)
    },
    renderCell: ({ row }) => {
      return (
        <StatBonusCell
          sb1={row.statBoost1}
          sb2={row.statBoost2}
          stat={"AGI"}
          statAmount={row.agility}
          statName={"agility"}
          showBonus={true}
          mainClass={row.mainClass}
        />
      )
    }
  },
  {
    headerName: "VitBonus",
    field: "VitBonus",
    type: "number",
    minWidth: 65,
    flex: 1,
    visibility: true,
    valueGetter: ({ row }) => {
      return Number(row.vitality)
    },
    renderCell: ({ row }) => {
      return (
        <StatBonusCell
          sb1={row.statBoost1}
          sb2={row.statBoost2}
          stat={"VIT"}
          statAmount={row.vitality}
          statName={"vitality"}
          showBonus={true}
          mainClass={row.mainClass}
        />
      )
    }
  },
  {
    headerName: "EndBonus",
    field: "EndBonus",
    minWidth: 65,
    flex: 1,
    visibility: true,
    type: "number",
    valueGetter: ({ row }) => {
      return Number(row.endurance)
    },
    renderCell: ({ row }) => {
      return (
        <StatBonusCell
          sb1={row.statBoost1}
          sb2={row.statBoost2}
          stat={"END"}
          statAmount={row.endurance}
          statName={"endurance"}
          showBonus={true}
          mainClass={row.mainClass}
        />
      )
    }
  },
  {
    headerName: "IntBonus",
    field: "IntBonus",
    minWidth: 65,
    flex: 1,
    visibility: true,
    type: "number",
    valueGetter: ({ row }) => {
      return Number(row.intelligence)
    },
    renderCell: ({ row }) => {
      return (
        <StatBonusCell
          sb1={row.statBoost1}
          sb2={row.statBoost2}
          stat={"INT"}
          statAmount={row.intelligence}
          statName={"intelligence"}
          showBonus={true}
          mainClass={row.mainClass}
        />
      )
    }
  },
  {
    headerName: "WisBonus",
    field: "WisBonus",
    minWidth: 65,
    flex: 1,
    visibility: true,
    type: "number",
    valueGetter: ({ row }) => {
      return Number(row.wisdom)
    },
    renderCell: ({ row }) => {
      return (
        <StatBonusCell
          sb1={row.statBoost1}
          sb2={row.statBoost2}
          stat={"WIS"}
          statAmount={row.wisdom}
          statName={"wisdom"}
          showBonus={true}
          mainClass={row.mainClass}
        />
      )
    }
  },
  {
    headerName: "lckBonus",
    field: "luckBonus",
    minWidth: 65,
    flex: 1,
    visibility: true,
    type: "number",
    valueGetter: ({ row }) => {
      return Number(row.luck)
    },
    renderCell: ({ row }) => {
      return (
        <StatBonusCell
          sb1={row.statBoost1}
          sb2={row.statBoost2}
          stat={"LCK"}
          statAmount={row.luck}
          statName={"luck"}
          showBonus={true}
          mainClass={row.mainClass}
        />
      )
    }
  },
  {
    headerName: "Previous Owner",
    field: "previousOwner",
    valueGetter: ({ row }) => {
      if (row.previousOwner == null || row.previousOwner.name == "undefined")
        return null
      return row.previousOwner.name
    }
  },
  {
    headerName: "Previous Owner Address",
    field: "previousOwnerAddress",
    valueGetter: ({ row }) => {
      if (row.previousOwner == null || row.previousOwner.id == "undefined")
        return null
      return row.previousOwner.id
    },
    renderCell: ({ row }) => {
      return <HeroOwnerId previousOwner={true}>{row}</HeroOwnerId>
    }
  },
  {
    headerName: "Owner",
    field: "owner",
    valueGetter: ({ row }) => {
      if (row.owner == null) return row.owner
      if (row.owner.name == "undefined") return null
      return row.owner.name
    }
  },
  {
    headerName: "Owner Address",
    field: "ownerAddress",
    valueGetter: ({ row }) => {
      if (row.owner == null || row.owner.id == "undefined") return null
      return row.owner.id
    },
    renderCell: ({ row }) => {
      return <HeroOwnerId>{row}</HeroOwnerId>
    }
  },
  {
    headerName: "Name",
    field: "name",
    type: "string",
    valueGetter: ({ row }) => {
      return FullName(row)
    }
  }
]

module.exports = {
  columnDefs
}
