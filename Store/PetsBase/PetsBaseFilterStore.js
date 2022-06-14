const initialState = {
  minSalePrice: 0,
  maxSalePrice: 9999999,
  bonusCount: [1, 3],
  combatBonus: [0, 3],
  craftBonus: [0, 3],
  profBonus: [1, 3],
  rarity: [0, 4],
  idInput: ``,
  eggType: [],
  element: [],
  background: [],
  forSale: true,
};

const PetsBaseFilterStore = (set) => ({
  clearFilters: () => {
    set({
      ...initialState,
    });
  },
  minSalePrice: 0,
  setMinSalePrice: (minSalePrice) => {
    set({
      minSalePrice,
    });
  },
  maxSalePrice: 9999999,
  setMaxSalePrice: (maxSalePrice) => {
    set({
      maxSalePrice,
    });
  },
  bonusCount: [1, 3],
  setBonusCount: (bonusCount) => {
    set({
      bonusCount,
    });
  },
  combatBonus: [0, 3],
  setCombatBonus: (combatBonus) => {
    set({
      combatBonus,
    });
  },
  craftBonus: [0, 3],
  setCraftBonus: (craftBonus) => {
    set({
      craftBonus,
    });
  },
  profBonus: [1, 3],
  setProfBonus: (profBonus) => {
    set({
      profBonus,
    });
  },
  rarity: [0, 4],
  setRarity: (rarity) => {
    set({
      rarity,
    });
  },
  idInput: ``,
  setIdInput: (idInput) => {
    set({
      idInput,
    });
  },
  eggType: [],
  setEggType: (eggType) => {
    set({
      eggType,
    });
  },
  element: [],
  setElement: (element) => {
    set({
      element,
    });
  },
  background: [],
  setBackground: (background) => {
    set({
      background,
    });
  },
  forSale: true,
  setForSale: (forSale) => {
    set({
      forSale,
    });
  },
});

export default PetsBaseFilterStore;
