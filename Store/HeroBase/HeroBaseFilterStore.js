const initialState = {
  mainClass: [],
  subClass: [],
  professions: [],
  SB1: [],
  SB2: [],
  target: [{ label: "Buy", value: "Tavern" }],
  PJ: [],
  rarity: [0, 4],
  generation: [0, 14],
  summons: [0, 10],
  level: [1, 100],
  minSalePrice: 0,
  maxSalePrice: 9999999,
  mFName: [],
  fFName: [],
  lName: [],
  idInput: "",
  active1: [],
  active2: [],
  passive1: [],
  passive2: [],
  background: [],
  realm: [{ value: "", label: "Any" }],
  gender: [],
};

const HeroBaseFilterStore = (set) => ({
  clearFilters: () => {
    set({ ...initialState });
  },
  gender: [],
  setGender: (gender) => {
    set({ gender });
  },
  realm: [{ value: "", label: "Any" }],
  setRealm: (realm) => {
    set({ realm });
  },
  section: "Main",
  setSection: (section) => {
    set({ section });
  },
  background: [],
  setBackground: (background) => {
    set({ background });
  },
  mainClass: [],
  setMainClass: (mainClass) => {
    set({ mainClass });
  },
  subClass: [],
  setSubClass: (subClass) => {
    set({ subClass });
  },
  professions: [],
  setProfessions: (professions) => {
    set({ professions });
  },
  SB1: [],
  setSB1: (SB1) => {
    set({ SB1 });
  },
  SB2: [],
  setSB2: (SB2) => {
    set({ SB2 });
  },
  target: [{ label: "Buy", value: "Tavern" }],
  setTarget: (target) => {
    set({ target });
  },
  PJ: [],
  setPJ: (PJ) => {
    set({ PJ });
  },
  generation: [0, 14],
  setGeneration: (generation) => {
    set({ generation });
  },
  summons: [0, 10],
  setSummons: (summons) => {
    set({ summons });
  },
  level: [1, 100],
  setLevel: (level) => {
    set({ level });
  },
  mFName: [],
  setMFName: (mFName) => {
    set({ mFName });
  },
  fFName: [],
  setFFName: (fFName) => {
    set({ fFName });
  },
  lName: [],
  setLName: (lName) => {
    set({ lName });
  },
  active1: [],
  setActive1: (active1) => {
    set({ active1 });
  },
  active2: [],
  setActive2: (active2) => {
    set({ active2 });
  },
  passive1: [],
  setPassive1: (passive1) => {
    set({ passive1 });
  },
  passive2: [],
  setPassive2: (passive2) => {
    set({ passive2 });
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

export default HeroBaseFilterStore;
