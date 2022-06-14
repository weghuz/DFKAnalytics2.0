import initiatePet from "../../Logic/PetBase";

const PetsBaseStore = (set, UpdateQuery) => ({
  pets: [],
  setPets: (newPets, query) =>
    set((state) => {
      if (query !== state.query) {
        return;
      }
      newPets = newPets.filter((np) => state.pets.every((p) => p.id !== np.id));
      if (newPets.length == 0) {
        console.log("Finished Query");
        return;
      }
      newPets = newPets.filter((p) => initiatePet(p));
      console.log("New Pets: ", newPets);
      state.skip = state.skip + state.first;
      state.first = 1000;
      UpdateQuery(state);
      if (state.pets.length == 0) {
        state.pets = newPets;
        return;
      }
      state.pets = state.pets.concat(newPets);
    }),
  first: 100,
  skip: 0,
  query: ``,
  order: ``,
  filter: ``,
  setFilter: (filter, order) =>
    set((state) => {
      state.filter = filter;
      state.order = order;
      state.skip = 0;
      state.first = 100;
      state.pets = [];
      UpdateQuery(state);
    }),
});

export default PetsBaseStore;
