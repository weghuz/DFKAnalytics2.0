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
  eyeColorNames,
  skinColorNames,
  eyeColorTiers,
  skinColorTiers,
} = require("./HeroBase");
import { Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import ClassScoreCell from "../Components/Hero/ClassScoreCell";
import ElementCell from "../Components/Hero/ElementCell";
import GrowthScoreCell from "../Components/Hero/GrowthScoreCell";
import HeroBackAppendageCell from "../Components/Hero/HeroBackAppendageCell";
import HeroColorCell from "../Components/Hero/HeroColorCell";
import HeroEyeColor from "../Components/Hero/HeroEyeColor";
import HeroHairCell from "../Components/Hero/HeroHairCell";
import HeroHairColorCell from "../Components/Hero/HeroHairColorCell";
import HeroHeadAppendageCell from "../Components/Hero/HeroHeadAppendageCell";
import HeroId from "../Components/Hero/HeroId";
import HeroSkinColor from "../Components/Hero/HeroSkinColor";
import PJBadge from "../Components/Hero/PJBadge";
import PriceCell from "../Components/Hero/PriceCell";
import RarityCell from "../Components/Hero/RarityCell";
import StatBonusCell from "../Components/Hero/StatBonusCell";

let columnDefs = [
  {
    headerName: "Cost",
    field: "salePrice",
    type: "number",
    hide: false,
    minWidth: 105,
    flex: 1,
    valueFormatter: ({ value }) => {
      return Number(value);
    },
    renderCell: ({ row }) => {
      return <PriceCell>{row}</PriceCell>;
    },
  },
  {
    headerName: "Realm",
    field: "network",
    hide: true,
    minWidth: 50,
    flex: 1,
    valueFormatter: ({ value }) => {
      return value == "hmy" ? "SD" : "CV";
    },
  },
  {
    headerName: "Summoned Time",
    field: "summonedTime",
    hide: true,
    minWidth: 180,
    flex: 1,
    valueFormatter: ({ value }) => {
      return (
        new Date(value * 1000).toLocaleDateString() +
        " " +
        new Date(value * 1000).toLocaleTimeString()
      );
    },
  },
  {
    headerName: "Id",
    field: "id",
    hide: false,
    minWidth: 80,
    flex: 1,
    type: "number",
    valueFormatter: ({ value }) => Number(value),
    renderCell: ({ row }) => {
      return <HeroId>{row.heroId > 0 ? row.heroId : row.id}</HeroId>;
    },
  },
  {
    headerName: "Rarity",
    field: "rarity",
    type: "number",
    hide: false,
    minWidth: 50,
    flex: 1,
    valueFormatter: ({ value }) => Number(value),
    renderCell: ({ row }) => {
      return <RarityCell rarity={row.rarity} />;
    },
  },
  {
    headerName: "Class",
    field: "mainClass",
    hide: false,
    type: "string",
  },
  {
    headerName: "ClassR1",
    field: "R1.mainClass",
    hide: true,
    type: "string",
    valueGetter: ({ row }) => {
      return row.R1.mainClass;
    },
  },
  {
    headerName: "Class+",
    field: "Class+",
    hide: true,
    minWidth: 150,
    flex: 2,
    renderCell: ({ row }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            fontSize: "12px",
          }}
        >
          D: {row.mainClass} R1: {row.R1.mainClass}
          <br />
          R2: {row.R2.mainClass} R3: {row.R3.mainClass}
        </div>
      );
    },
  },
  {
    headerName: "Subclass",
    field: "subClass",
    hide: false,
  },
  {
    headerName: "R1 Subclass",
    field: "R1 Subclass",
    title: "R1 Subclass",
    hide: true,
    valueGetter: ({ row }) => {
      return row.R1.subClass;
    },
  },
  {
    headerName: "Subclass+",
    field: "Subclass+",
    hide: true,
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
            fontSize: "12px",
          }}
        >
          D: {row.subClass} R1: {row.R1.subClass}
          <br /> R2: {row.R2.subClass} R3: {row.R3.subClass}
        </div>
      );
    },
  },
  {
    headerName: "Background",
    field: "background",
    hide: true,
    flex: 1,
    minWidth: 90,
    type: "string",
  },
  {
    headerName: "Gender",
    field: "gender",
    hide: true,
    flex: 1,
    minWidth: 60,
    type: "string",
  },
  {
    headerName: "Lvl",
    field: "level",
    type: "number",
    minWidth: 50,
    flex: 1,
    hide: false,
    valueFormatter: ({ value }) => Number(value),
  },
  {
    headerName: "XP",
    field: "XP",
    hide: true,
    flex: 1,
    minWidth: 100,
    valueGetter: ({ row }) => {
      return `${row.xp}/${calculateRequiredXp(row.level) / 1000}k`;
    },
  },
  {
    headerName: "XP To Level",
    field: "XPToLevel",
    hide: true,
    flex: 1,
    minWidth: 80,
    valueGetter: ({ row }) => {
      return calculateRequiredXp(row.level) - row.xp;
    },
  },
  {
    headerName: "XP Current",
    field: "XPC",
    hide: true,
    type: "number",
    flex: 1,
    minWidth: 80,
    valueFormatter: ({ value }) => Number(value),
    valueGetter: ({ row }) => {
      return row.xp;
    },
  },
  {
    headerName: "XP Max",
    field: "XPM",
    hide: true,
    type: "number",
    flex: 1,
    minWidth: 80,
    valueFormatter: ({ value }) => Number(value),
    valueGetter: ({ row }) => {
      return calculateRequiredXp(row.level);
    },
  },
  {
    headerName: "Shiny",
    field: "shiny",
    hide: true,
    valueFormatter: ({ value }) => (value ? "✨" : "❌"),
    flex: 1,
    minWidth: 50,
  },
  {
    headerName: "Gen",
    field: "generation",
    type: "number",
    minWidth: 50,
    flex: 1,
    valueFormatter: ({ value }) => Number(value),
    hide: false,
  },
  {
    headerName: "Used Summons",
    field: "summons",
    type: "number",
    hide: true,
    minWidth: 50,
    flex: 1,
  },
  {
    headerName: "Summons Remaining",
    field: "summonsRemaining",
    type: "number",
    hide: true,
    minWidth: 50,
    flex: 1,
  },
  {
    headerName: "Max Summons",
    field: "maxSummons",
    type: "number",
    hide: true,
    minWidth: 50,
    flex: 1,
  },
  {
    headerName: "Summons",
    field: "Summons",
    type: "number",
    hide: false,
    minWidth: 50,
    flex: 1,
    valueGetter: ({ row }) => {
      return Number(row.summonsRemaining);
    },
    renderCell: ({ row }) => {
      if (row.generation == 0) {
        return `${row.summons}/∞`;
      }
      return `${row.summonsRemaining}/${row.maxSummons}`;
    },
  },
  {
    headerName: "Gen|Sum",
    field: "gen|sum",
    hide: true,
    type: "number",
    valueGetter: ({ row }) => {
      return Number(`${row.generation}${row.summonsRemaining}`);
    },
    renderCell: ({ row }) => {
      if (row.generation == 0) {
        return `${row.generation} | ${row.summons}/∞`;
      }
      return `${row.generation} | ${row.summonsRemaining}/${row.maxSummons}`;
    },
  },
  {
    headerName: "HP",
    field: "hp",
    hide: true,
    minWidth: 50,
    flex: 1,
    type: "number",
    valueFormatter: ({ value }) => Number(value),
  },
  {
    headerName: "MP",
    field: "mp",
    hide: true,
    minWidth: 50,
    flex: 1,
    type: "number",
    valueFormatter: ({ value }) => Number(value),
  },
  {
    headerName: "SB1",
    field: "statBoost1",
    hide: false,
    minWidth: 50,
    flex: 1,
  },
  {
    headerName: "SB1R1",
    field: "SB1R1",
    hide: true,
    minWidth: 50,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R1.statBoost1;
    },
  },
  {
    headerName: "SB1+",
    field: "sb1+",
    hide: true,
    minWidth: 150,
    flex: 2,
    renderCell: ({ row }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            fontSize: "12px",
          }}
        >
          D: {row.statBoost1} R1: {row.R1.statBoost1}
          <br /> R2: {row.R2.statBoost1} R3: {row.R3.statBoost1}
        </div>
      );
    },
  },
  {
    headerName: "SB2",
    field: "statBoost2",
    hide: false,
    minWidth: 50,
    flex: 1,
  },
  {
    headerName: "SB2R1",
    field: "sb2r1",
    hide: true,
    minWidth: 50,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R1.statBoost2;
    },
  },
  {
    headerName: "SB2+",
    field: "sb2+",
    hide: true,
    minWidth: 150,
    flex: 2,
    renderCell: ({ row }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            fontSize: "12px",
          }}
        >
          D: {row.statBoost2} R1: {row.R1.statBoost2}
          <br /> R2: {row.R2.statBoost2} R3: {row.R3.statBoost2}
        </div>
      );
    },
  },
  {
    headerName: "Train Stat",
    field: "TrainStat",
    hide: true,
    type: "number",
    valueGetter: ({ value }) => {
      return Number(value.amount);
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
      );
    },
  },
  {
    headerName: "Profession",
    field: "profession",
    hide: false,
  },
  {
    headerName: "Profession+",
    field: "professionRecessives",
    hide: true,
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
              fontSize: "12px",
            }}
          >
            D: {row.profession.substring(0, 3)} R1:
            {row.R1.profession.substring(0, 3)}
            <br /> R2: {row.R2.profession.substring(0, 3)} R3:
            {row.R3.profession.substring(0, 3)}
          </div>
        </Tooltip>
      );
    },
  },
  {
    headerName: "ProfR1",
    field: "profR1",
    hide: true,
    minWidth: 90,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R1.profession;
    },
  },
  {
    headerName: "Head Appendage",
    field: "headAppendage",
    hide: true,
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(value);
    },
    renderCell: ({ row }) => {
      return <HeroHeadAppendageCell hero={row} />;
    },
  },
  {
    headerName: "Appendage Color",
    field: "appendageColor",
    hide: true,
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(appendageColorOrder[value]);
    },
    renderCell: ({ row }) => {
      return <HeroColorCell>{row.appendageColor}</HeroColorCell>;
    },
  },
  {
    headerName: "Back Appendage",
    field: "backAppendage",
    hide: true,
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(value);
    },
    renderCell: ({ row }) => {
      return <HeroBackAppendageCell hero={row} />;
    },
  },
  {
    headerName: "Back Appendage Color",
    field: "backAppendageColor",
    hide: true,
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(appendageColorOrder[value]);
    },
    renderCell: ({ row }) => {
      return <HeroColorCell>{row.backAppendageColor}</HeroColorCell>;
    },
  },
  {
    headerName: "Hairstyle",
    field: "hairStyle",
    hide: true,
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(value);
    },
    renderCell: ({ row }) => {
      return <HeroHairCell hero={row} />;
    },
  },
  {
    headerName: "Hair Color",
    field: "hairColor",
    hide: true,
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(hairColorOrder[value]);
    },
    renderCell: ({ row }) => {
      return <HeroHairColorCell>{row.hairColor}</HeroHairColorCell>;
    },
  },
  {
    headerName: "Eye color",
    field: "eyeColor",
    hide: true,
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(eyeColorTiers[value]);
    },
    renderCell: ({ row }) => {
      return <HeroEyeColor>{row.eyeColor}</HeroEyeColor>;
    },
  },
  {
    headerName: "Skin color",
    field: "skinColor",
    hide: true,
    minWidth: 100,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(skinColorTiers[value]);
    },
    renderCell: ({ row }) => {
      return <HeroSkinColor>{row.skinColor}</HeroSkinColor>;
    },
  },
  {
    headerName: "PJ",
    field: "pjStatus",
    type: "string",
    hide: true,
    minWidth: 70,
    flex: 1,
    renderCell: ({ row }) => {
      if (row.pjStatus == null) {
        return "❌";
      } else if (row.pjStatus == "SURVIVED") {
        return <PJBadge />;
      }
      return "RIP";
    },
    sortComparator: (a, b) => {
      if (a == null) return -1;
      if (b == null) return 1;
      if (a == "SURVIVED") return 1;
      if (b == "SURVIVED") return -1;
      else return 0;
    },
  },
  {
    headerName: "Totstat",
    field: "tostat",
    type: "number",
    hide: true,
    minWidth: 60,
    flex: 1,
    valueGetter: ({ row }) => {
      return Number(SumStats(row)).toFixed(0);
    },
  },
  {
    headerName: "Statgain",
    field: "statgain",
    title: "Statgain",
    type: "number",
    hide: true,
    minWidth: 60,
    flex: 1,
    valueGetter: ({ row }) => {
      return Number(SumStats(RemoveBase(row))).toFixed(0);
    },
  },
  {
    headerName: "Stamina Max",
    field: "Stamina Max",
    title: "Stamina Max",
    type: "number",
    hide: true,
    minWidth: 40,
    flex: 1,
    valueGetter: ({ row }) => {
      return Number(parseInt(25 + parseInt(row.level) / 2));
    },
  },
  {
    headerName: "Stamina Current",
    field: "Stamina Current",
    title: "Stamina Current",
    type: "number",
    hide: true,
    minWidth: 40,
    flex: 1,
    valueGetter: ({ row }) => {
      return Number(CurrentStamina(row));
    },
  },
  {
    headerName: "Stamina",
    field: "Stamina",
    title: "Stamina",
    type: "number",
    hide: true,
    minWidth: 70,
    flex: 1,
    valueGetter: ({ row }) => {
      return `${CurrentStamina(row)} / ${parseInt(
        25 + parseInt(row.level) / 2
      )}`;
    },
  },
  {
    headerName: "Stamina Max In",
    field: "Stamina Max In",
    title: "Stamina Max In",
    hide: true,
    minWidth: 70,
    flex: 1,
    valueGetter: ({ row }) => {
      let fullTime = CurrentStaminaHours(row);
      if (fullTime == 0) {
        return null;
      } else {
        return fullTime + `H`;
      }
    },
  },
  {
    headerName: "Stamina Full At",
    title: "Stamina Full At",
    field: "sFullAt",
    hide: true,
    minWidth: 115,
    flex: 1,
    valueGetter: ({ row }) => {
      let fullTime = FullTime(row);
      if (fullTime == 0) {
        return null;
      } else {
        return `${fullTime.getDate()} ${fullTime.toLocaleTimeString()}`;
      }
    },
  },
  {
    headerName: "Profession Stats",
    field: "Profession Stats",
    title: "Profession Stats",
    hide: true,
    minWidth: 50,
    flex: 1,
    type: "number",
    valueGetter: ({ row }) => {
      return Number(
        row[professionStats[row.profession][0]] +
          row[professionStats[row.profession][1]]
      );
    },
  },
  {
    headerName: "Skill Profession Stats",
    field: "Skill Profession Stats",
    title: "Skill Profession Stats",
    hide: true,
    minWidth: 50,
    flex: 1,
    type: "number",
    valueGetter: ({ row }) => {
      return Number(
        row[professionStats[row.profession][0]] +
          row[professionStats[row.profession][1]] +
          row[row.profession] * 0.2
      ).toFixed(1);
    },
  },
  {
    headerName: "Element",
    field: "element",
    Title: "Element",
    hide: true,
    minWidth: 50,
    flex: 1,
    renderCell: ({ row }) => {
      return <ElementCell>{row.element}</ElementCell>;
    },
  },
  {
    headerName: "R1 Element",
    field: "R1 Element",
    Title: "R1 Element",
    hide: true,
    minWidth: 50,
    flex: 1,
    renderCell: ({ row }) => {
      return <ElementCell>{row.R1.element}</ElementCell>;
    },
  },
  {
    headerName: "Element+",
    field: "element+",
    hide: true,
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
              fontSize: "12px",
            }}
          >
            {<ElementCell tooltip={false}>{row.element}</ElementCell>}
            {<ElementCell tooltip={false}>{row.R1.element}</ElementCell>}
            <br />
            {<ElementCell tooltip={false}>{row.R2.element}</ElementCell>}
            {<ElementCell tooltip={false}>{row.R3.element}</ElementCell>}
          </div>
        </Tooltip>
      );
    },
  },
  {
    headerName: "Class Score",
    field: "classScore",
    hide: false,
    minWidth: 60,
    flex: 1,
    type: "number",
    renderCell: ({ row }) => {
      return <ClassScoreCell>{row}</ClassScoreCell>;
    },
  },
  {
    headerName: "CScore/Level",
    field: "classScoreLevel",
    hide: true,
    minWidth: 90,
    flex: 1,
    type: "number",
    valueGetter: ({ row }) => {
      return Number(row.classScore / row.level).toFixed(2);
    },
  },
  {
    headerName: "C Score/J",
    field: "cScore/J",
    hide: true,
    minWidth: 60,
    flex: 1,
    type: "number",
    valueGetter: ({ row }) => {
      if (row.salePrice == null) return null;
      return (row.classScore / row.salePrice).toFixed(5);
    },
  },
  {
    headerName: "Growth Score",
    field: "growthScore",
    hide: false,
    minWidth: 60,
    flex: 1,
    type: "number",
    renderCell: ({ row }) => {
      return <GrowthScoreCell>{row}</GrowthScoreCell>;
    },
  },
  {
    headerName: `G Score/J`,
    field: "gScore/J",
    hide: true,
    minWidth: 60,
    flex: 1,
    type: "number",
    valueGetter: ({ row }) => {
      if (row.salePrice == null) return null;
      return (row.growthScore / row.salePrice).toFixed(5);
    },
  },
  {
    headerName: "Active1",
    field: "active1",
    hide: true,
    minWidth: 100,
    flex: 1,
  },
  {
    headerName: "A1R1",
    field: "a1r1",
    hide: true,
    minWidth: 100,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R1.active1;
    },
  },
  {
    headerName: "Active1+",
    field: "active1+",
    hide: true,
    minWidth: 150,
    flex: 2,
    renderCell: ({ row }) => {
      return (
        <Tooltip
          placement="top"
          title={`D: ${row.active1} R1: ${row.R1.active1} R2: ${row.R2.active1} R3: ${row.R3.active1}`}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "flex-start",
              fontSize: "12px",
            }}
          >
            D: {row.active1} R1: {row.R1.active1}
            <br />
            R2: {row.R2.active1} R3: {row.R3.active1}
          </div>
        </Tooltip>
      );
    },
  },
  {
    headerName: "Active2",
    field: "active2",
    hide: true,
    minWidth: 100,
    flex: 1,
  },
  {
    headerName: "A2R1",
    field: "a2r1",
    hide: true,
    minWidth: 100,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R1.active2;
    },
  },
  {
    headerName: "Active2+",
    field: "active2+",
    hide: true,
    minWidth: 150,
    flex: 2,
    renderCell: ({ row }) => {
      return (
        <Tooltip
          placement="top"
          title={`D: ${row.active2} R1: ${row.R1.active2} R2: ${row.R2.active2} R3: ${row.R3.active2}`}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "flex-start",
              fontSize: "12px",
            }}
          >
            D: {row.active2} R1: {row.R1.active2}
            <br /> R2: {row.R2.active2} R3: {row.R3.active2}
          </div>
        </Tooltip>
      );
    },
  },
  {
    headerName: "Passive1",
    field: "passive1",
    hide: true,
    minWidth: 100,
    flex: 1,
  },
  {
    headerName: "P1R1",
    field: "p1r1",
    hide: true,
    minWidth: 100,
    flex: 1,
    renderCell: ({ row }) => {
      return row.R1.passive1;
    },
  },
  {
    headerName: "Passive1+",
    field: "passive1+",
    hide: true,
    minWidth: 150,
    flex: 2,
    renderCell: ({ row }) => {
      return (
        <Tooltip
          placement="top"
          title={`D: ${row.passive1} R1: ${row.R1.passive1} R2: ${row.R2.passive1} R3: ${row.R3.passive1}`}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "flex-start",
              fontSize: "12px",
            }}
          >
            D: {row.passive1} R1: {row.R1.passive1}
            <br />
            R2: {row.R2.passive1} R3: {row.R3.passive1}
          </div>
        </Tooltip>
      );
    },
  },
  {
    headerName: "Passive2",
    field: "passive2",
    hide: true,
    minWidth: 100,
    flex: 1,
  },
  {
    headerName: "P2R1",
    field: "p2r1",
    hide: true,
    minWidth: 100,
    flex: 1,
    renderCell: ({ row }) => {
      return row.R1.passive2;
    },
  },
  {
    headerName: "Passive2+",
    field: "passive2+",
    hide: true,
    minWidth: 150,
    flex: 2,
    renderCell: ({ row }) => {
      return (
        <Tooltip
          placement="top"
          title={`D: ${row.passive2} R1: ${row.R1.passive2} R2: ${row.R2.passive2} R3: ${row.R3.passive1}`}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "flex-start",
              fontSize: "12px",
            }}
          >
            D: {row.passive2} R1: {row.R1.passive2} <br />
            R2: {row.R2.passive2} R3: {row.R3.passive1}
          </div>
        </Tooltip>
      );
    },
  },
  {
    headerName: "SU1",
    field: "statsUnknown1",
    hide: true,
    minWidth: 40,
    flex: 1,
  },
  {
    headerName: "SU1R1",
    field: "su1r1",
    hide: true,
    minWidth: 40,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R1.statsUnknown1;
    },
  },
  {
    headerName: "SU1+",
    field: "SU1+",
    title: "Status Unknown 1 Recessives",
    hide: true,
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
              fontSize: "12px",
            }}
          >
            D: {row.statsUnknown1} R1: {row.R1.statsUnknown1}
            <br />
            R2: {row.R2.statsUnknown1} R3: {row.R3.statsUnknown1}
          </div>
        </Tooltip>
      );
    },
  },
  {
    headerName: "SU2",
    field: "statsUnknown2",
    title: "Status Unknown 2",
    hide: true,
    minWidth: 40,
    flex: 1,
  },
  {
    headerName: "SU2R1",
    field: "SU2R1",
    hide: true,
    minWidth: 40,
    flex: 1,
    valueGetter: ({ row }) => {
      return row.R1.statsUnknown2;
    },
  },
  {
    headerName: "SU2+",
    field: "SU2+",
    hide: true,
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
              fontSize: "12px",
            }}
          >
            D: {row.statsUnknown2} R1: {row.R1.statsUnknown2}
            <br />
            R2: {row.R2.statsUnknown2} R3: {row.R3.statsUnknown2}
          </div>
        </Tooltip>
      );
    },
  },
  {
    headerName: "Mining",
    field: "mining",
    hide: true,
    type: "number",
    minWidth: 40,
    flex: 1,
    valueFormatter: ({ value }) => {
      return Number(value / 10);
    },
  },
  {
    headerName: "Foraging",
    field: "foraging",
    hide: true,
    type: "number",
    minWidth: 40,
    flex: 1,
    valueFormatter: ({ value }) => {
      return Number(value / 10);
    },
  },
  {
    headerName: "Fishing",
    field: "fishing",
    hide: true,
    type: "number",
    minWidth: 40,
    flex: 1,
    valueFormatter: ({ value }) => {
      return Number(value / 10);
    },
  },
  {
    headerName: "Gardening",
    field: "gardening",
    hide: true,
    type: "number",
    minWidth: 40,
    flex: 1,
    valueFormatter: ({ value }) => {
      return Number(value / 10);
    },
  },
  {
    headerName: "Str",
    field: "strength",
    type: "number",
    hide: true,
    minWidth: 40,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(value);
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
      );
    },
  },
  {
    headerName: "Dex",
    field: "dexterity",
    type: "number",
    hide: true,
    minWidth: 40,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(value);
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
      );
    },
  },
  {
    headerName: "Agi",
    field: "agility",
    type: "number",
    hide: true,
    minWidth: 40,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(value);
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
      );
    },
  },
  {
    headerName: "Vit",
    field: "vitality",
    type: "number",
    hide: true,
    minWidth: 40,
    flex: 1,
    valueGetter: ({ value }) => {
      return Number(value);
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
      );
    },
  },
  {
    headerName: "End",
    field: "endurance",
    hide: true,
    minWidth: 40,
    flex: 1,
    type: "number",
    valueGetter: ({ value }) => {
      return Number(value);
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
      );
    },
  },
  {
    headerName: "Int",
    field: "intelligence",
    hide: true,
    minWidth: 40,
    flex: 1,
    type: "number",
    valueGetter: ({ value }) => {
      return Number(value);
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
      );
    },
  },
  {
    headerName: "Wis",
    field: "wisdom",
    hide: true,
    minWidth: 40,
    flex: 1,
    type: "number",
    valueGetter: ({ value }) => {
      return Number(value);
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
      );
    },
  },
  {
    headerName: "lck",
    field: "luck",
    hide: true,
    minWidth: 40,
    flex: 1,
    type: "number",
    valueGetter: ({ value }) => {
      return Number(value);
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
      );
    },
  },
  {
    headerName: "Previous Owner",
    field: "previousOwner",
    hide: true,
    valueGetter: ({ row }) => {
      if (row.previousOwner == null) return null;
      return row.previousOwner.name;
    },
  },
  {
    headerName: "Previous Owner Address",
    field: "previousOwnerAddress",
    hide: true,
    valueGetter: ({ row }) => {
      if (row.previousOwner == null) return null;
      return row.previousOwner.id;
    },
  },
  {
    headerName: "Owner",
    field: "owner",
    hide: true,
    valueGetter: ({ row }) => {
      if (row.owner == null) return row.owner;
      if (row.owner.id == "undefined") return null;
      return row.owner.name;
    },
  },
  {
    headerName: "Owner Address",
    field: "ownerAddress",
    hide: true,
    valueGetter: ({ row }) => {
      if (row.owner == null) return row.owner;
      if (row.owner.id == "undefined") return null;
      return row.owner.id;
    },
  },
  {
    headerName: "Name",
    field: "name",
    hide: true,
    type: "string",
    valueGetter: ({ row }) => {
      return FullName(row);
    },
  },
];

module.exports = {
  columnDefs,
};
