import create from "zustand";
import initiatePet from "../Logic/PetBase";
import { petData } from "../Logic/Query";

const useWalletPets = create((set, get) => ({
  pets: [],
  first: 1000,
  filter: "",
  setFilter: (newFilter) =>
    set((state) => {
      return { filter: newFilter, skip: 0, pets: [] };
    }),
  order: "",
  setOrder: (newOrder) =>
    set((state) => {
      return { order: newOrder, skip: 0, pets: [] };
    }),
  setSkip: (newFirst) =>
    set((state) => {
      return { first: newFirst };
    }),
  skip: 0,
  setSkip: (newSkip) =>
    set((state) => {
      return { skip: newSkip };
    }),
  query: ``,
  setQuery: (newQuery) => {
    set((state) => {
      return {
        query: newQuery,
      };
    });
  },
  setPets: (newPets, clear) =>
    set((state) => {
      console.log(newPets);
      newPets.forEach((p) => {
        initiatePet(p);
      });
      if (state.skip == 0) {
        return { pets: newPets };
      }
      return { pets: state.pets.concat(newPets) };
    }),
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

export default useWalletPets;
