import { BasePetVisibilityModels } from "../../Logic/BasePetVisibilityModels";

const PetsBasePersistStore = (set) => ({
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
      state.hideFilters = false;
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
  petSetup: BasePetVisibilityModels[0],
  setPetSetup: (newSetup) =>
    set((state) => {
      return {
        petSetup: newSetup,
      };
    }),
});

export default PetsBasePersistStore;
