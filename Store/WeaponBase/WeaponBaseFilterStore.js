const initialState = {
  currentRealm: [],
  rarity: [0, 4],
  weaponType: [],
  minSalePrice: 0,
  maxSalePrice: 9999999,
  idInput: ``,
  forSale: true,
}

const WeaponBaseFilterStore = (set) => ({
  clearFilters: () => {
    set({
      ...initialState
    })
  },
  currentRealm: [],
  setCurrentRealm: (currentRealm) => {
    set({
      currentRealm
    })
  },
  weaponType: [],
  setWeaponType: (weaponType) => {
    set({
      weaponType
    })
  },
  rarity: [0, 4],
  setRarity: (rarity) => {
    set({
      rarity
    })
  },
  minSalePrice: 0,
  setMinSalePrice: (minSalePrice) => {
    set({
      minSalePrice
    })
  },
  maxSalePrice: 9999999,
  setMaxSalePrice: (maxSalePrice) => {
    set({
      maxSalePrice
    })
  },
  idInput: ``,
  setIdInput: (idInput) => {
    set({
      idInput
    })
  },
  forSale: true,
  setForSale: (forSale) => {
    set({
      forSale
    })
  }
})

export default WeaponBaseFilterStore
