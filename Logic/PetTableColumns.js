import ElementCell from "../Components/Hero/ElementCell";
import RarityCell from "../Components/Hero/RarityCell";
import CombatBonus from "../Components/Pet/CombatBonus";
import CraftingBonus from "../Components/Pet/CraftingBonus";
import EggCell from "../Components/Pet/EggCell";
import PetCredits from "../Components/Pet/PetCredits";
import PetId from "../Components/Pet/PetId";
import PetPriceCell from "../Components/Pet/PetPriceCell";
import PetRarityCell from "../Components/Pet/PetRarityCell";
import ProfessionBonus from "../Components/Pet/ProfessionBonus";

let petColumnDefs = [
  {
    headerName: "Cost",
    field: "salePrice",
    renderCell: ({ row }) => {
      return <PetPriceCell>{row}</PetPriceCell>;
    },
    sortComparator: (a, b) => {
      return a - b;
    },
  },
  {
    headerName: "Id",
    field: "id",
    hide: false,
    width: 100,
    renderCell: ({ row }) => {
      return <PetId>{row.heroId > 0 ? row.heroId : row.id}</PetId>;
    },
    sortComparator: (a, b) => {
      return a - b;
    },
  },
  {
    headerName: "Rarity",
    field: "rarity",
    width: 60,
    hide: false,
    type: "number",
    renderCell: ({ row }) => {
      return <PetRarityCell rarity={row.rarity} />;
    },
    sortComparator: (a, b, c, e) => {
      return a - b;
    },
  },
  {
    headerName: "Shiny",
    field: "shiny",
    hide: true,
    width: 70,
  },
  {
    headerName: "Display Name",
    field: "displayName",
    hide: false,
    width: 160,
  },
  {
    headerName: "Variant",
    field: "variant",
    width: 160,
  },
  {
    headerName: "Family",
    field: "family",
    hide: false,
    width: 215,
  },
  {
    headerName: "Background",
    field: "backgroundName",
    hide: false,
    width: 175,
  },
  {
    headerName: "Profession ⭐",
    field: "profBonus",
    hide: false,
    type: "number",
    width: 150,
    renderCell: ({ row }) => {
      return <ProfessionBonus>{row}</ProfessionBonus>;
    },
  },
  {
    headerName: "Crafting ⭐",
    field: "craftBonus",
    hide: false,
    type: "number",
    width: 160,
    renderCell: ({ row }) => {
      return <CraftingBonus>{row}</CraftingBonus>;
    },
  },
  {
    headerName: "Combat ⭐",
    field: "combatBonus",
    hide: false,
    type: "number",
    width: 150,
    renderCell: ({ row }) => {
      return <CombatBonus>{row}</CombatBonus>;
    },
  },
  {
    headerName: "Egg",
    field: "eggType",
    hide: false,
    type: "number",
    width: 50,
    renderCell: ({ row }) => {
      return <EggCell>{row}</EggCell>;
    },
  },
  {
    headerName: "Pool",
    field: "pool",
    hide: false,
  },
  {
    headerName: "Credits",
    field: "credits",
    hide: false,
    width: 150,
    renderCell: ({ row }) => {
      return <PetCredits>{row}</PetCredits>;
    },
  },
  {
    headerName: "Element",
    field: "element",
    Title: "Element",
    hide: false,
    width: 70,
    renderCell: ({ row }) => {
      return <ElementCell>{row.elementName}</ElementCell>;
    },
  },
  {
    headerName: "Previous Owner",
    field: "previousOwner",
    hide: true,
    width: 150,
    valueGetter: ({ row }) => {
      if (row.previousOwner == null) return null;
      return row.previousOwner.name;
    },
  },
  {
    headerName: "Previous Owner Address",
    field: "previousOwnerAddress",
    hide: true,
    width: 375,
    valueGetter: ({ row }) => {
      if (row.previousOwner == null) return null;
      return row.previousOwner.id;
    },
  },
  {
    headerName: "Owner",
    field: "owner",
    width: 150,
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
    width: 375,
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
    width: 190,
    type: "string",
  },
];

export default petColumnDefs;
