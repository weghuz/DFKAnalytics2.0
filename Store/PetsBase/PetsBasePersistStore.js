const PetsBasePersistStore = (set) => ({
  visibilityModel: undefined,
  hideSaved: false,
  hideFilters: false,
  setVisibilityModel: (visibilityModel) => {
    set((state) => {
      state.visibilityModel = visibilityModel;
    });
  },
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
});

export default PetsBasePersistStore;
