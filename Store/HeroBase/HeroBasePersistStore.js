import { BaseHeroVisibilityModels } from "../../Logic/BaseVisibilityModels";

const HeroBasePersistStore = (set) => ({
  hideFilters: false,
  toggleHideFilters: () =>
    set((state) => {
      state.hideFilters = !state.hideFilters;
      state.hideColumns = false;
    }),
  hideColumns: false,
  toggleHideColumns: () =>
    set((state) => {
      state.hideFilters = false;
      state.hideColumns = !state.hideColumns;
    }),
  visibilityModel: undefined,
  setVisibilityModel: (visibilityModel) =>
    set((state) => {
      return { visibilityModel };
    }),
  heroSetup: BaseHeroVisibilityModels[0],
  setHeroSetup: (newSetup) =>
    set((state) => {
      return {
        heroIndexSetup: newSetup,
      };
    }),
});

export default HeroBasePersistStore;
