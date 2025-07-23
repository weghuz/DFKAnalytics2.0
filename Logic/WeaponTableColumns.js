import ElementCell from "../Components/Hero/ElementCell"
import EquipmentId from "../Components/Equipment/EquipmentId"
import PetPriceCell from "../Components/Pet/PetPriceCell"
import EquipmentRarityCell from "../Components/Equipment/EquipmentRarityCell"

let weaponColumnDefs = [
  {
    headerName: "Cost",
    field: "salePrice",
    valueGetter: ({ value }) => {
      return Number(value)
    },
    renderCell: ({ row }) => {
      return <PetPriceCell>{row}</PetPriceCell>
    }
  },
  {
    headerName: "Current Realm",
    field: "currentRealm",
  },
  {
    headerName: "Id",
    field: "id",
    valueGetter: ({ value }) => {
      return Number(value)
    },
    renderCell: ({ row }) => {
      return <EquipmentId>{row}</EquipmentId>
    }
  },
  {
    headerName: "Rarity",
    field: "rarity",
    type: "number",
    valueGetter: ({ value }) => {
      return Number(value)
    },
    renderCell: ({ row }) => {
      return <EquipmentRarityCell rarity={row.rarity} />
    }
  },
  {
    headerName: "Type",
    field: "weaponTypeName",
  },
  {
    headerName: "Display Name",
    field: "displayName",
  },
  {
    headerName: "Req. Level",
    field: "equipRequirement",
    type: "number"
  },
  {
    headerName: "Speed Mod",
    field: "speedModifier",
    type: "number"
  },
  {
    headerName: "Attack",
    field: "attack",
  },
  {
    headerName: "ATK Min",
    field: "baseDamage",
    type: "number"
  },
  {
    headerName: "ATK Max",
    field: "maxDamage",
    type: "number"
  },
  {
    headerName: "ATK DEX Req",
    field: "accuracyRequirement",
    type: "number"
  },
  {
    headerName: "ATK Base Acc",
    field: "pAccuracyAtRequirement",
    type: "number"
  },
  {
    headerName: "Spell",
    field: "spell",
  },
  {
    headerName: "Spell Min",
    field: "basePotency",
    type: "number"
  },
  {
    headerName: "Spell Max",
    field: "maxPotency",
    type: "number"
  },
  {
    headerName: "Spell Focus Req",
    field: "focusRequirement",
    type: "number"
  },
  {
    headerName: "Spell Base Acc",
    field: "mAccuracyAtRequirement",
    type: "number"
  },
  {
    headerName: "Durability Remaining",
    field: "durabilityRemaining",
    type: "number"
  },
  {
    headerName: "Max Durability",
    field: "maxDurability",
    type: "number"
  },
  {
    headerName: "Durability",
    field: "durability",
  },
  {
    headerName: "Repairs Remaining",
    field: "remainingRepairs",
    type: "number"
  },
  {
    headerName: "Max Repairs",
    field: "maxRepairs",
    type: "number"
  },
  {
    headerName: "Repairs",
    field: "repairs",
  },
  {
    headerName: "Restore Count",
    field: "restorationCount",
    type: "number"
  },
  {
    headerName: "Bonus 1",
    field: "bonusText1",
  },
  {
    headerName: "Bonus 1 Value",
    field: "bonusScalar1",
    type: "number"
  },
  {
    headerName: "Bonus 2",
    field: "bonusText2",
  },
  {
    headerName: "Bonus 2 Value",
    field: "bonusScalar2",
    type: "number"
  },
  {
    headerName: "Bonus 3",
    field: "bonusText3",
  },
  {
    headerName: "Bonus 3 Value",
    field: "bonusScalar3",
    type: "number"
  },
  {
    headerName: "Bonus 4",
    field: "bonusText4",
  },
  {
    headerName: "Bonus 4 Value",
    field: "bonusScalar4",
    type: "number"
  },
  {
    headerName: "Owner",
    field: "owner",
    valueGetter: ({ row }) => {
      if (row.owner == null) return row.owner
      if (row.owner.id == "undefined") return null
      return row.owner.name
    }
  },
  {
    headerName: "Owner Address",
    field: "ownerAddress",
    valueGetter: ({ row }) => {
      if (row.owner == null) return row.owner
      if (row.owner.id == "undefined") return null
      return row.owner.id
    }
  },
]

export default weaponColumnDefs
