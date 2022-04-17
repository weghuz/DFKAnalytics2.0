const {
  FixSalePrice,
  rarities,
  calculateRequiredXp,
  SumStats,
  RemoveBase,
  CurrentStamina,
  FullTime,
  CurrentStaminaHours,
  professionStats,
  FullName,
} = require("./HeroBase");
import { Tooltip } from "@mui/material";
import ElementCell from "../Components/Hero/ElementCell";
import PJBadge from "../Components/Hero/PJBadge";
import PriceCell from "../Components/Hero/PriceCell";
import RarityCell from "../Components/Hero/RarityCell";

let columnDefs = [
  {
    headerName: "Cost",
    field: "salePrice",
    width: 105,
    renderCell: ({ row }) => {
      return <PriceCell>{row}</PriceCell>;
    },
    sortComparator: ( a, b ) => {
      return a-b;
    }
  },
  {
    headerName: "Id",
    field: "numberId",
    width: 70,
  },
  {
    headerName: "Rarity",
    field: "rarity",
    width: 60,
    type: "number",
    renderCell: ({ row }) => {
      return <RarityCell rarity={row.rarity} />;
    },
    sortComparator: (a, b, c, e) => {
      return a - b;
    }
  },
  {
    headerName: "Class",
    field: "mainClass",
    hide: false,
    width: 100,
  },
  {
    headerName: "ClassR1",
    field: "R1.mainClass",
    hide: true,
    valueGetter: ({ row }) => {
      return row.R1.mainClass;
    },
  },
  {
    headerName: "Class+",
    field: "Class+",
    minWidth: 150,
    hide: true,
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
    minWidth: 150,
    hide: true,
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
    headerName: "Lvl",
    field: "level",
    hide: false,
    width:60,
  },
  {
    headerName: "XP",
    field: "XP",
    hide: true,
    valueGetter: ({ row }) => {
      return `${row.xp}/${calculateRequiredXp(row.level) / 1000}k`;
    },
  },
  {
    headerName: "XP Current",
    field: "XPC",
    hide: true,
    valueGetter: ({ row }) => {
      return row.xp;
    },
  },
  {
    headerName: "XP Max",
    field: "XPM",
    hide: true,
    valueGetter: ({ row }) => {
      return calculateRequiredXp(row.level);
    },
  },
  {
    headerName: "Shiny",
    field: "shiny",
    hide: true,
    width: 70,
  },
  {
    headerName: "Gen",
    field: "generation",
    width: 40,
    hide: false,
  },
  {
    headerName: "Sum",
    field: "summons",
    width: 70,
    hide: false,
    valueGetter: ({ row }) => {
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
    valueGetter: ({ row }) => {
      if (row.generation == 0) {
        return `${row.generation} | ${row.summons}/∞`;
      }
      return `${row.generation} | ${row.summonsRemaining}/${row.maxSummons}`;
    },
  },
  {
    headerName: "HP",
    field: "hp",
    width: 60,
    hide: true,
  },
  {
    headerName: "MP",
    field: "mp",
    width: 60,
    hide: true,
  },
  {
    headerName: "SB1",
    field: "statBoost1",
    width: 60,
    hide: false,
  },
  {
    headerName: "SB1R1",
    field: "SB1R1",
    width: 60,
    hide: true,
    valueGetter: ({ row }) => {
      return row.R1.statBoost1;
    },
  },
  {
    headerName: "SB1+",
    field: "sb1+",
    hide: true,
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
    width: 60,
    hide: false,
  },
  {
    headerName: "SB2R1",
    field: "sb2r1",
    hide: true,
    valueGetter: ({row}) => {
      return row.R1.statBoost2;
    },
  },
  {
    headerName: "SB2+",
    field: "sb2+",
    hide: true,
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
    headerName: "Profession",
    field: "profession",
    hide: false,
  },
  {
    headerName: "Profession+",
    field: "professionRecessives",
    hide: true,
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
    valueGetter: ({ row }) => {
      return row.R1.profession;
    },
  },
  {
    headerName: "PJ",
    field: "pjStatus",
    width: "60",
    type: "string",
    renderCell: ({ row }) => {
      if (row.pjStatus == null) {
        return "";
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
    hide: true,
    valueGetter: ({ row }) => {
      return parseInt(SumStats(row)).toFixed(0);
    },
  },
  {
    headerName: "Statgain",
    field: "statgain",
    title: "Statgain",
    hide: true,
    valueGetter: ({ row }) => {
      return parseInt(SumStats(RemoveBase(row))).toFixed(0);
    },
  },
  {
    headerName: "Stamina Max",
    field: "Stamina Max",
    title: "Stamina Max",
    hide: true,
    valueGetter: ({ row }) => {
      return parseInt(25 + parseInt(row.level) / 2);
    },
  },
  {
    headerName: "Stamina Current",
    field: "Stamina Current",
    title: "Stamina Current",
    hide: true,
    valueGetter: ({ row }) => {
      return CurrentStamina(row);
    },
  },
  {
    headerName: "Stamina",
    field: "Stamina",
    title: "Stamina",
    hide: false,
    valueGetter: ({ row }) => {
      return `${CurrentStamina(row)}/${parseInt(25 + parseInt(row.level) / 2)}`;
    },
  },
  {
    headerName: "Stamina Max In",
    field: "Stamina Max In",
    title: "Stamina Max In",
    hide: true,
    width: 75,
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
    width: 125,
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
    width: 60,
    valueGetter: ({ row }) => {
      return (
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
    width: 60,
    valueGetter: ({ row }) => {
      return (
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
    hide: false,
    width: 50,
    renderCell: ({ row }) => {
      return <ElementCell>{row.element}</ElementCell>;
    },
  },
  {
    headerName: "R1 Element",
    field: "R1 Element",
    Title: "R1 Element",
    hide: true,
    width: 50,
    renderCell: ({ row }) => {
      return <ElementCell>{row.R1.element}</ElementCell>;
    },
  },
  {
    headerName: "Element+",
    field: "element+",
    hide: true,
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
  },
  {
    headerName: "C Score/J",
    field: "cScore/J",
    hide: true,
    valueGetter: ({ row }) => {
      if (row.salePrice == null) return null;
      return (row.classScore / FixSalePrice(row.salePrice)).toFixed(5);
    },
  },
  {
    headerName: "Growth Score",
    field: "growthScore",
    hide: false,
  },
  {
    headerName: `G Score/J`,
    field: "gScore/J",
    hide: true,
    valueGetter: ({ row }) => {
      if (row.salePrice == null) return null;
      return (row.growthScore / FixSalePrice(row.salePrice)).toFixed(5);
    },
  },
  {
    headerName: "Active1",
    field: "active1",
    hide: false,
  },
  {
    headerName: "A1R1",
    field: "a1r1",
    hide: true,
    valueGetter: ({row}) => {
      return row.R1.active1;
    },
  },
  {
    headerName: "Active1+",
    field: "active1+",
    hide: true,
    width: 185,
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
            D: {row.active1} R1: {row.R1.active1}<br/>R2: {row.R2.active1} R3: {row.R3.active1}
          </div>
        </Tooltip>
      );
    },
  },
  {
    headerName: "Active2",
    field: "active2",
    hide: false,
  },
  {
    headerName: "A2R1",
    field: "a2r1",
    hide: true,
    valueGetter: ({row}) => {
      return row.R1.active2;
    },
  },
  {
    headerName: "Active2+",
    field: "active2+",
    hide: true,
    width: 185,
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
            D: {row.active2} R1: {row.R1.active2}<br/> R2: {row.R2.active2} R3: {row.R3.active2}
          </div>
        </Tooltip>
      );
    },
  },
  {
    headerName: "Passive1",
    field: "passive1",
    hide: false,
  },
  {
    headerName: "P1R1",
    field: "p1r1",
    hide: true,
    renderCell: ({row}) => {
      return row.R1.passive1;
    },
  },
  {
    headerName: "Passive1+",
    field: "passive1+",
    hide: true,
    width: 185,
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
            D: {row.passive1} R1: {row.R1.passive1}<br/>R2: {row.R2.passive1} R3: {row.R3.passive1}
          </div>
        </Tooltip>
      );
    },
  },
  {
    headerName: "Passive2",
    field: "passive2",
    hide: false,
  },
  {
    headerName: "P2R1",
    field: "p2r1",
    hide: true,
    renderCell: ({row}) => {
      return row.R1.passive2;
    },
  },
  {
    headerName: "Passive2+",
    field: "passive2+",
    hide: true,
    width: 185,
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
            D: {row.passive2} R1: {row.R1.passive2} <br/>R2: {row.R2.passive2} R3: {row.R3.passive1}
          </div>
        </Tooltip>
      );
    },
  },
  {
    headerName: "SU1",
    field: "statsUnknown1",
    hide: true,
    width: 55,
  },
  {
    headerName: "SU1R1",
    field: "su1r1",
    hide: true,
    width: 55,
    valueGetter: ({row}) => {
      return row.R1.statsUnknown1;
    },
  },
  {
    headerName: "SU1+",
    field: "SU1+",
    title: "Status Unknown 1 Recessives",
    hide: true,
    width: 90,
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
            D: {row.statsUnknown1} R1: {row.R1.statsUnknown1}<br/>R2: {row.R2.statsUnknown1} R3: {row.R3.statsUnknown1}
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
    width: 55,
  },
  {
    headerName: "SU2R1",
    field: "SU2R1",
    hide: true,
    width: 55,
    valueGetter: ({row}) => {
      return row.R1.statsUnknown2;
    },
  },
  {
    headerName: "SU2+",
    field: "SU2+",
    hide: true,
    width: 90,
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
            D: {row.statsUnknown2} R1: {row.R1.statsUnknown2}<br/>R2: {row.R2.statsUnknown2} R3: {row.R3.statsUnknown2}
          </div>
        </Tooltip>
      );
    },
  },
  {
    headerName: "Mining",
    field: "mining",
    hide: true,
    width:60,
    valueFormatter: ({ value }) => {
      return value / 10;
    },
  },
  {
    headerName: "Foraging",
    field: "foraging",
    hide: true,
    width:60,
    valueFormatter: ({ value }) => {
      return value / 10;
    },
  },
  {
    headerName: "Fishing",
    field: "fishing",
    hide: true,
    width:60,
    valueFormatter: ({ value }) => {
      return value / 10;
    },
  },
  {
    headerName: "Gardening",
    field: "gardening",
    hide: true,
    width:60,
    valueFormatter: ({ value }) => {
      return value / 10;
    },
  },
  {
    headerName: "Str",
    field: "strength",
    width:60,
    hide: true,
  },
  {
    headerName: "Dex",
    field: "dexterity",
    width:60,
    hide: true,
  },
  {
    headerName: "Agi",
    field: "agility",
    width:60,
    hide: true
  },
  {
    headerName: "Vit",
    field: "vitality",
    width:60,
    hide: true
  },
  {
    headerName: "End",
    field: "endurance",
    width:60,
    hide: true
  },
  {
    headerName: "Int",
    field: "intelligence",
    width:60,
    hide: true
  },
  {
    headerName: "Wis",
    field: "wisdom",
    width:60,
    hide: true
  },
  {
    headerName: "lck",
    field: "luck",
    width:60,
    hide: true
  },
  {
    headerName: "Previous Owner",
    field: "previousOwner",
    hide: true,
    renderCell: ({row}) => {
      if (row.previousOwner == null) return null;
      return <div style={{overflow:"auto"}}>{row.previousOwner.name}</div>;
    },
  },
  {
    headerName: "Previous Owner Address",
    field: "previousOwnerAddress",
    hide: true,
    renderCell: ({row}) => {
      if (row.previousOwner == null) return null;
      return <div style={{overflow:"auto"}}>{row.previousOwner.id}</div>;
    },
  },
  {
    headerName: "Owner",
    field: "owner",
    hide: true,
    renderCell: ({row}) => {
      if (row.owner == null) return row.owner;
      if (row.owner.name == "undefined") return null;
      return <div style={{overflow:"auto"}}>{row.owner.name}</div>;
    },
  },
  {
    headerName: "Owner Address",
    field: "ownerAddress",
    hide: true,
    renderCell: ({row}) => {
      if (row.owner == null) return row.owner;
      if (row.owner.id == "undefined") return null;
      return <div style={{overflow:"auto"}}>{row.owner.id}</div>;
    },
  },
  {
    headerName: "Name",
    field: "name",
    hide: false,
    width: 170,
    renderCell: ({row}) => {
      return <div style={{overflow:"auto"}}>{FullName(row)}</div>;
    },
  },
];

module.exports = {
  columnDefs,
};
