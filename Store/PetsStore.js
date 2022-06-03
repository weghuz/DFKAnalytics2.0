import create from "zustand";
import initiatePet from "../Logic/PetBase";
import { petData } from "../Logic/Query";

const UpdateQuery = (state) => {
  console.log(
    "query: ",
    `{pets(first:${state.first},skip:${state.skip}${
      state.filter.length > 0 ? `,where:{${state.filter}}` : ``
    },${state.order})${petData}}`
  );
  state.query = `{pets(first:${state.first},skip:${state.skip}${
    state.filter.length > 0 ? `,where:{${state.filter}}` : ``
  },${state.order})${petData}}`;
};

const usePets = create((set, get) => ({
  pets: [],
  first: 100,
  filter: ``,
  order: ``,
  setFilter: (filter, order) =>
    set((state) => {
      state.filter = filter;
      state.order = order;
      state.skip = 0;
      state.first = 100;
      state.pets = [];
      UpdateQuery(state);
    }),
  skip: 0,
  setSkip: (newSkip) =>
    set((state) => {
      return { skip: newSkip };
    }),
  query: ``,
  setPets: (newPets, clear) =>
    set((state) => {
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
  initiated: false,
  initiateStore: () => {
    set((state) => {
      if (!state.initiated) {
        state.initiated = true;
        let filterVisible = JSON.parse(
          localStorage.getItem("PetsIndexFilterVisible")
        );
        if (state.hideFilters != filterVisible && filterVisible !== null) {
          state.toggleFilters();
        }
        let columnsVisibilityModel = JSON.parse(
          localStorage.getItem("PetsIndexVisiblityModel")
        );
        if (columnsVisibilityModel !== null) {
          state.setVisibilityModel(columnsVisibilityModel);
        }
        state.setFilter("salePrice_not:null", "orderBy: salePrice");
      }
    });
  },
  visibilityModel: undefined,
  setVisibilityModel: (visibilityModel) =>
    set((state) => {
      localStorage.setItem(
        "PetsIndexVisiblityModel",
        JSON.stringify(visibilityModel)
      );
      return { visibilityModel: visibilityModel };
    }),
  hideFilters: false,
  toggleFilters: () =>
    set((state) => {
      localStorage.setItem("PetsIndexFilterVisible", !state.hideFilters);
      return { hideFilters: !state.hideFilters };
    }),
}));

export default usePets;
