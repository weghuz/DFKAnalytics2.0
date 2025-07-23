import { BaseWeaponVisibilityModels } from "../../Logic/BaseWeaponVisibilityModels";

const WeaponBasePersistStore = (set) => ({
  visibilityModel: undefined,
  hideFilters: false,
  setVisibilityModel: (visibilityModel) => {
    set((state) => {
      state.visibilityModel = visibilityModel;
    });
  },
  hideColumns: false,
  toggleHideColumns: () =>
    set((state) => {
      state.hideColumns = !state.hideColumns;
    }),
  toggleHideSaved: () => {
    set((state) => {
      state.hideSaved = !state.hideSaved;
    });
  },
  toggleHideFilters: () => {
    set((state) => {
      state.hideFilters = !state.hideFilters;
    });
  },
  weaponSetup: BaseWeaponVisibilityModels[0],
  setWeaponSetup: (newSetup) =>
    set((state) => {
      return {
        weaponSetup: newSetup,
      };
    }),
});

export default WeaponBasePersistStore;
