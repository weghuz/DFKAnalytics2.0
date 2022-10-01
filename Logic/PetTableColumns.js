import ElementCell from "../Components/Hero/ElementCell";
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
    hide: false,
    valueGetter: ({ value }) => {
      return Number(value);
    },
    renderCell: ({ row }) => {
      return <PetPriceCell>{row}</PetPriceCell>;
    },
  },
  {
    headerName: "Id",
    field: "id",
    hide: false,
    valueGetter: ({ value }) => {
      return Number(value);
    },
    renderCell: ({ row }) => {
      return <PetId>{row}</PetId>;
    },
  },
  {
    headerName: "Rarity",
    field: "rarity",
    type: "number",
    hide: false,
    valueGetter: ({ value }) => {
      return Number(value);
    },
    renderCell: ({ row }) => {
      return <PetRarityCell rarity={row.rarity} />;
    },
  },
  {
    headerName: "Shiny",
    field: "shiny",
    hide: true,
  },
  {
    headerName: "Appearance Id",
    field: "appearance",
    type: "number",
    hide: true,
  },
  {
    headerName: "Appearance Rarity",
    field: "appearanceRarity",
    type: "number",
    hide: true,
  },
  {
    headerName: "Display Name",
    field: "displayName",
    hide: false,
  },
  {
    headerName: "Variant",
    field: "variant",
  },
  {
    headerName: "Family",
    field: "family",
    hide: false,
  },
  {
    headerName: "Background",
    field: "backgroundName",
    hide: false,
  },
  {
    headerName: "Profession ⭐",
    field: "profBonus",
    type: "number",
    hide: false,
    valueGetter: ({ value }) => {
      return Number({ 0: 0, 1: 1, 80: 2, 160: 3 }[value]);
    },
    renderCell: ({ row }) => {
      return <ProfessionBonus>{row}</ProfessionBonus>;
    },
  },
  {
    headerName: "Crafting ⭐",
    field: "craftBonus",
    type: "number",
    hide: false,
    valueGetter: ({ value }) => {
      return Number({ 0: 0, 1: 1, 80: 2, 160: 3 }[value]);
    },
    renderCell: ({ row }) => {
      return <CraftingBonus>{row}</CraftingBonus>;
    },
  },
  {
    headerName: "Combat ⭐",
    field: "combatBonus",
    type: "number",
    hide: false,
    valueGetter: ({ value }) => {
      return Number({ 0: 0, 1: 1, 80: 2, 160: 3 }[value]);
    },
    renderCell: ({ row }) => {
      return <CombatBonus>{row}</CombatBonus>;
    },
  },
  {
    headerName: "Egg",
    field: "eggType",
    hide: false,
    type: "number",
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
    renderCell: ({ row }) => {
      return <PetCredits>{row}</PetCredits>;
    },
  },
  {
    headerName: "Element",
    field: "element",
    Title: "Element",
    hide: false,
    renderCell: ({ row }) => {
      return <ElementCell>{row.elementName}</ElementCell>;
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
  },
];

export default petColumnDefs;
