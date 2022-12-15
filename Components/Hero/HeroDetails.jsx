import { Container, Grid, Typography, useTheme } from "@mui/material"
import { DataGridPro } from "@mui/x-data-grid-pro"
import {
  appendageColorOrder,
  calculateRequiredXp,
  CurrentStamina,
  eyeColorTiers,
  FullName,
  hairColorOrder,
  skinColorTiers
} from "../../Logic/HeroBase"
import ClassScoreCell from "./ClassScoreCell"
import ElementCell from "./ElementCell"
import GrowthScoreCell from "./GrowthScoreCell"
import HeroGenderCell from "./HeroGenderCell"
import HeroId from "./HeroId"
import PriceCell from "./PriceCell"
import RarityCell from "./RarityCell"
import StatBonusCell from "./StatBonusCell"
import Image from "next/image"
import { Box } from "@mui/system"
import HeroOwnerName from "./HeroOwnerName"
import HeroOwnerId from "./HeroOwnerId"
import HeroHeadAppendageCell from "./HeroHeadAppendageCell"
import HeroColorCell from "./HeroColorCell"
import HeroBackAppendageCell from "./HeroBackAppendageCell"
import HeroHairCell from "./HeroHairCell"
import HeroHairColorCell from "./HeroHairColorCell"
import HeroEyeColor from "./HeroEyeColor"
import HeroSkinColor from "./HeroSkinColor"
import useMediaQuery from "@mui/material/useMediaQuery"
import PJBadge from "./PJBadge"
import DarkSummonBadge from "./DarkSummonBadge"

export default function HeroDetails({ hero }) {
  const theme = useTheme()
  const getBasicColumns = () => {
    return [
      { headerName: "Class", field: "mainClass", width: 100, flex: 1 },
      { headerName: "Subclass", field: "subClass", width: 100, flex: 1 },
      {
        headerName: "Gen",
        field: "generation",
        type: "number",
        minWidth: 50,
        flex: 1,
        valueFormatter: ({ value }) => Number(value)
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
      }
    ]
  }
  const getBasicColumns2 = () => {
    return [
      {
        headerName: "C Score",
        field: "classScore",
        minWidth: 60,
        flex: 1,
        type: "number",
        renderCell: ({ row }) => {
          return <ClassScoreCell>{row}</ClassScoreCell>
        }
      },
      {
        headerName: "G Score",
        field: "growthScore",
        minWidth: 60,
        flex: 1,
        type: "number",
        renderCell: ({ row }) => {
          return <GrowthScoreCell>{row}</GrowthScoreCell>
        }
      },
      {
        headerName: "Level",
        field: "level",
        width: 100,
        flex: 1
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
        headerName: "Gender",
        field: "gender",
        flex: 1,
        minWidth: 60,
        type: "string",
        renderCell: ({ value }) => {
          return <HeroGenderCell>{value}</HeroGenderCell>
        }
      },
      {
        headerName: "Shiny",
        field: "shiny",
        valueFormatter: ({ value }) => (value ? "✨" : "❌"),
        flex: 1,
        minWidth: 50
      }
    ]
  }
  const getStatsColumns = () => {
    return [
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
            <>
              <StatBonusCell
                sb1={row.statBoost1}
                sb2={row.statBoost2}
                stat={"STR"}
                statAmount={row.strength}
                statName={"strength"}
                showBonus={true}
                mainClass={hero.mainClass}
              />
            </>
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
              showBonus={true}
              mainClass={hero.mainClass}
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
              showBonus={true}
              mainClass={hero.mainClass}
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
              showBonus={true}
              mainClass={hero.mainClass}
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
              showBonus={true}
              mainClass={hero.mainClass}
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
              showBonus={true}
              mainClass={hero.mainClass}
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
              showBonus={true}
              mainClass={hero.mainClass}
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
              showBonus={true}
              mainClass={hero.mainClass}
            />
          )
        }
      }
    ]
  }
  const getProfessionColumns = () => {
    return [
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
      }
    ]
  }
  const getStateColumns = () => {
    return [
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
        headerName: "XP",
        field: "XP",
        flex: 1,
        minWidth: 100,
        valueGetter: ({ row }) => {
          return `${row.xp}/${calculateRequiredXp(row.level) / 1000}k`
        }
      }
    ]
  }
  const getVisualColumns1 = () => {
    return [
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
      }
    ]
  }
  const getVisualColumns2 = () => {
    return [
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
      }
    ]
  }
  const getGrowthColumns = () => {
    return [
      { headerName: "Growth", field: "class", width: 100, flex: 1 },
      { headerName: "STR", field: "strengthGrowth", width: 60, flex: 1 },
      { headerName: "DEX", field: "dexterityGrowth", width: 60, flex: 1 },
      { headerName: "AGI", field: "agilityGrowth", width: 60, flex: 1 },
      { headerName: "VIT", field: "vitalityGrowth", width: 60, flex: 1 },
      { headerName: "END", field: "enduranceGrowth", width: 60, flex: 1 },
      { headerName: "INT", field: "intelligenceGrowth", width: 60, flex: 1 },
      { headerName: "WIS", field: "wisdomGrowth", width: 60, flex: 1 },
      { headerName: "LCK", field: "luckGrowth", width: 60, flex: 1 }
    ]
  }
  const getGrowthRows = () => {
    let rows = [
      {
        id: "Growth",
        class: `${hero.mainClass}`,
        strengthGrowth: parseFloat(hero.strengthGrowthP.toFixed(2)),
        dexterityGrowth: parseFloat(hero.dexterityGrowthP.toFixed(2)),
        agilityGrowth: parseFloat(hero.agilityGrowthP.toFixed(2)),
        vitalityGrowth: parseFloat(hero.vitalityGrowthP.toFixed(2)),
        enduranceGrowth: parseFloat(hero.enduranceGrowthP.toFixed(2)),
        intelligenceGrowth: parseFloat(hero.intelligenceGrowthP.toFixed(2)),
        wisdomGrowth: parseFloat(hero.wisdomGrowthP.toFixed(2)),
        luckGrowth: parseFloat(hero.luckGrowthP.toFixed(2))
      },
      {
        id: "subclass",
        class: `${hero.subClass}`,
        strengthGrowth: parseFloat(hero.strengthGrowthS.toFixed(2)),
        dexterityGrowth: parseFloat(hero.dexterityGrowthS.toFixed(2)),
        agilityGrowth: parseFloat(hero.agilityGrowthS.toFixed(2)),
        vitalityGrowth: parseFloat(hero.vitalityGrowthS.toFixed(2)),
        enduranceGrowth: parseFloat(hero.enduranceGrowthS.toFixed(2)),
        intelligenceGrowth: parseFloat(hero.intelligenceGrowthS.toFixed(2)),
        wisdomGrowth: parseFloat(hero.wisdomGrowthS.toFixed(2)),
        luckGrowth: parseFloat(hero.luckGrowthS.toFixed(2))
      },
      {
        id: "total",
        class: "Total",
        strengthGrowth: parseFloat(
          (hero.strengthGrowthS + hero.strengthGrowthP).toFixed(2)
        ),
        dexterityGrowth: parseFloat(
          (hero.dexterityGrowthP + hero.dexterityGrowthS).toFixed(2)
        ),
        agilityGrowth: parseFloat(
          (hero.agilityGrowthP + hero.agilityGrowthS).toFixed(2)
        ),
        vitalityGrowth: parseFloat(
          (hero.vitalityGrowthP + hero.vitalityGrowthS).toFixed(2)
        ),
        enduranceGrowth: parseFloat(
          (hero.enduranceGrowthP + hero.enduranceGrowthS).toFixed(2)
        ),
        intelligenceGrowth: parseFloat(
          (hero.intelligenceGrowthP + hero.intelligenceGrowthS).toFixed(2)
        ),
        wisdomGrowth: parseFloat(
          (hero.wisdomGrowthP + hero.wisdomGrowthS).toFixed(2)
        ),
        luckGrowth: parseFloat((hero.luckGrowthP + hero.luckGrowthS).toFixed(2))
      }
    ]
    return rows
  }
  const getRecessiveColumns = () => {
    return [
      { headerName: "Recessives", field: "Stat", flex: 1 },
      { headername: "D", field: "D", flex: 1 },
      { headername: "R1", field: "R1", flex: 1 },
      { headername: "R2", field: "R2", flex: 1 },
      { headername: "R3", field: "R3", flex: 1 }
    ]
  }
  const ActiveSkills = {
    Basic1: "B1 Poisoned Blade",
    Basic2: "B2 Blinding Winds",
    Basic3: "B3 Heal",
    Basic4: "B4 Cleanse",
    Basic5: "B5 Iron Skin",
    Basic6: "B6 Speed",
    Basic7: "B7 Critical Aim",
    Basic8: "B8 Deathmark",
    Advanced1: "A1 Exhaust",
    Advanced2: "A2 Daze",
    Advanced3: "A3 Explosion",
    Advanced4: "A4 Hardened Shield",
    Elite1: "E1 Stun",
    Elite2: "E2 Second Wind",
    Transcendent1: "T1 Resurrection"
  }
  const PassiveSkills = {
    Basic1: "B1 Duelist",
    Basic2: "B2 Clutch",
    Basic3: "B3 Foresight",
    Basic4: "B4 Headstrong",
    Basic5: "B5 Clear Vision",
    Basic6: "B6 Fearless",
    Basic7: "B7 Chatterbox",
    Basic8: "B8 Stalwart",
    Advanced1: "A1 Leadership",
    Advanced2: "A2 Efficient",
    Advanced3: "A3 Intimidation",
    Advanced4: "A4 Toxic",
    Elite1: "E1 Giant Slayer",
    Elite2: "E2 Last Stand",
    Transcendent1: "T1 Second Life"
  }
  const getRecessiveRows = () => {
    return [
      {
        id: "mainClass",
        Stat: "mainClass",
        D: hero.mainClass,
        R1: hero.R1.mainClass,
        R2: hero.R2.mainClass,
        R3: hero.R3.mainClass
      },
      {
        id: "subClass",
        Stat: "subClass",
        D: hero.subClass,
        R1: hero.R1.subClass,
        R2: hero.R2.subClass,
        R3: hero.R3.subClass
      },
      {
        id: "profession",
        Stat: "profession",
        D: hero.profession,
        R1: hero.R1.profession,
        R2: hero.R2.profession,
        R3: hero.R3.profession
      },
      {
        id: "statBoost1",
        Stat: "SB1",
        D: hero.statBoost1,
        R1: hero.R1.statBoost1,
        R2: hero.R2.statBoost1,
        R3: hero.R3.statBoost1
      },
      {
        id: "statBoost2",
        Stat: "SB2",
        D: hero.statBoost2,
        R1: hero.R1.statBoost2,
        R2: hero.R2.statBoost2,
        R3: hero.R3.statBoost2
      },
      {
        id: "active1",
        Stat: "active1",
        D: ActiveSkills[hero.active1] + " " + hero.active1,
        R1: ActiveSkills[hero.R1.active1] + " " + hero.R1.active1,
        R2: ActiveSkills[hero.R2.active1] + " " + hero.R2.active1,
        R3: ActiveSkills[hero.R3.active1] + " " + hero.R3.active1
      },
      {
        id: "active2",
        Stat: "active2",
        D: ActiveSkills[hero.active2] + " " + hero.active2,
        R1: ActiveSkills[hero.R1.active2] + " " + hero.R1.active2,
        R2: ActiveSkills[hero.R2.active2] + " " + hero.R2.active2,
        R3: ActiveSkills[hero.R3.active2] + " " + hero.R3.active2
      },
      {
        id: "passive1",
        Stat: "passive1",
        D: PassiveSkills[hero.passive1] + " " + hero.passive1,
        R1: PassiveSkills[hero.R1.passive1] + " " + hero.R1.passive1,
        R2: PassiveSkills[hero.R2.passive1] + " " + hero.R2.passive1,
        R3: PassiveSkills[hero.R3.passive1] + " " + hero.R3.passive1
      },
      {
        id: "passive2",
        Stat: "passive2",
        D: PassiveSkills[hero.passive2],
        R1: PassiveSkills[hero.R1.passive2],
        R2: PassiveSkills[hero.R2.passive2],
        R3: PassiveSkills[hero.R3.passive2]
      },
      {
        id: "element",
        Stat: "element",
        D: hero.element,
        R1: hero.R1.element,
        R2: hero.R2.element,
        R3: hero.R3.element
      },
      {
        id: "Status Unknown 2",
        Stat: "SU2",
        D: hero.statsUnknown2,
        R1: hero.R1.statsUnknown2,
        R2: hero.R2.statsUnknown2,
        R3: hero.R3.statsUnknown2
      },
      {
        id: "Status Unknown 1",
        Stat: "SU1",
        D: hero.statsUnknown1,
        R1: hero.R1.statsUnknown1,
        R2: hero.R2.statsUnknown1,
        R3: hero.R3.statsUnknown1
      }
    ]
  }
  const GetHeroRarity = () => {
    switch (hero.rarity) {
      case 0:
        return "common"
      case 1:
        return "uncommon"
      case 2:
        return "rare"
      case 3:
        return "legendary"
      case 4:
        return "mythic"
      default:
        return
    }
  }
  const mdLess = () => {
    console.log(screen.width, screen.width < 680)
    return screen.width < 680
  }
  return (
    <Container disableGutters={mdLess()}>
      <Grid
        container
        className={GetHeroRarity()}
        bgcolor={"background.default"}
      >
        <Grid
          container
          item
          display={"flex"}
          textAlign={"center"}
          xs={12}
          justifyContent={"center"}
        >
          <Grid item xs={12}>
            <Box marginBottom={"3px"}>
              <DarkSummonBadge size={48} style={{ paddingRight: "10px" }}>
                {hero}
              </DarkSummonBadge>
              {hero.pjStatus == null ? (
                ""
              ) : hero.pjStatus == "SURVIVED" ? (
                <PJBadge style={{ paddingTop: "5px", paddingRight: "10px" }} />
              ) : (
                <Box sx={{ paddingTop: "5px", paddingRight: "10px" }}>RIP</Box>
              )}
              <HeroId>{hero.heroId ? hero.heroId : hero.id}</HeroId> -{" "}
              {FullName(hero)} -{" "}
              <Box
                sx={{
                  paddingX: "15px",
                  display: "inline-block",
                  width: "130px"
                }}
              >
                <PriceCell>{hero}</PriceCell>
              </Box>
            </Box>
            Owner: <HeroOwnerName>{hero}</HeroOwnerName> -{" "}
            <HeroOwnerId>{hero}</HeroOwnerId>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent={"center"}
            marginBottom={"50px"}
          >
            <Box
              sx={{
                width: 84,
                height: 100
              }}
              className={GetHeroRarity()}
            >
              <img
                src={`https://heroes.defikingdoms.com/image/${
                  hero.heroId ? hero.heroId : hero.id
                }`}
                width={100}
                height={111}
              ></img>
            </Box>
            <Grid
              item
              minWidth={"300px"}
              width={"100%"}
              maxWidth={"200px"}
              margin={"5px"}
            >
              <DataGridPro
                columns={getBasicColumns()}
                rows={[hero]}
                autoHeight={true}
                disableColumnSelector={true}
                density={"compact"}
                hideFooter={true}
              ></DataGridPro>
            </Grid>
            <Grid
              minWidth={"200px"}
              width={"100%"}
              maxWidth={"400px"}
              margin={"5px"}
            >
              <DataGridPro
                disableColumnSelector={true}
                columns={getBasicColumns2()}
                width={"100%"}
                rows={[hero]}
                autoHeight={true}
                density={"compact"}
                hideFooter={true}
              ></DataGridPro>
            </Grid>
            <Grid
              minWidth={"200px"}
              width={"100%"}
              maxWidth={"300px"}
              margin={"5px"}
            >
              <DataGridPro
                disableColumnSelector={true}
                columns={getStateColumns()}
                width={"100%"}
                rows={[hero]}
                autoHeight={true}
                density={"compact"}
                hideFooter={true}
              ></DataGridPro>
            </Grid>
            <Grid
              minWidth={"200px"}
              width={"100%"}
              maxWidth={"500px"}
              margin={"5px"}
            >
              <DataGridPro
                disableColumnSelector={true}
                columns={getStatsColumns()}
                width={"100%"}
                rows={[hero]}
                autoHeight={true}
                density={"compact"}
                hideFooter={true}
              ></DataGridPro>
            </Grid>
            <Grid
              minWidth={"200px"}
              width={"100%"}
              maxWidth={"350px"}
              margin={"5px"}
            >
              <DataGridPro
                disableColumnSelector={true}
                columns={getProfessionColumns()}
                width={"100%"}
                rows={[hero]}
                autoHeight={true}
                density={"compact"}
                hideFooter={true}
              ></DataGridPro>
            </Grid>

            <Grid
              minWidth={"200px"}
              width={"100%"}
              maxWidth={"420px"}
              margin={"5px"}
            >
              <DataGridPro
                disableColumnSelector={true}
                columns={getVisualColumns1()}
                width={"100%"}
                rows={[hero]}
                autoHeight={true}
                density={"compact"}
                hideFooter={true}
              ></DataGridPro>
            </Grid>
            <Grid
              minWidth={"200px"}
              width={"100%"}
              maxWidth={"420px"}
              margin={"5px"}
            >
              <DataGridPro
                disableColumnSelector={true}
                columns={getVisualColumns2()}
                width={"100%"}
                rows={[hero]}
                autoHeight={true}
                density={"compact"}
                hideFooter={true}
              ></DataGridPro>
            </Grid>
            <Grid
              minWidth={"200px"}
              width={"100%"}
              maxWidth={"600px"}
              margin={"5px"}
            >
              <DataGridPro
                disableColumnSelector={true}
                autoHeight={true}
                density={"compact"}
                columns={getGrowthColumns()}
                rows={getGrowthRows()}
                hideFooter={true}
              ></DataGridPro>
            </Grid>
            <Grid
              minWidth={"200px"}
              width={"100%"}
              maxWidth={"500px"}
              margin={"5px"}
            >
              <DataGridPro
                disableColumnSelector={true}
                autoHeight={true}
                density={"compact"}
                columns={getRecessiveColumns()}
                rows={getRecessiveRows()}
                hideFooter={true}
              ></DataGridPro>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
