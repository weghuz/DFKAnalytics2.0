import create from "zustand";
import {
  ClassScore,
  getRecessives,
  GrowthScore,
  TrainStat,
} from "../Logic/HeroBase";
import { heroData } from "../Logic/Query";

const UpdateQuery = (state) => {
  state.query = `{heroes(first:${state.first},skip:${state.skip}${
    state.filter.length > 0 ? `,where:{${state.filter}}` : ``
  },${state.order})${heroData}}`;
};

const useIndex = create((set, get) => ({
  heroes: [],
  first: 100,
  attempt: 0,
  nextAttempt: () =>
    set((state) => {
      state.attempt = state.attempt + 1;
    }),
  clearAttempt: () => {
    state.attempt = 0;
  },
  filter: ``,
  order: ``,
  setFilter: (filter, order) =>
    set((state) => {
      state.filter = filter;
      state.order = order;
      state.skip = 0;
      state.first = 100;
      state.heroes = [];
      UpdateQuery(state);
    }),
  skip: 0,
  setSkip: (newSkip) =>
    set((state) => {
      state.skip = newSkip;
    }),
  query: ``,
  setHeroes: (newHeroes) =>
    set((state) => {
      newHeroes = newHeroes.filter(
        (nh) => !state.heroes.some((h) => h.id === nh.id)
      );
      if (newHeroes.length == 0) {
        console.log("Finished Query");
        return;
      }
      newHeroes.forEach((h) => {
        getRecessives(h);
        ClassScore(h);
        GrowthScore(h);
        TrainStat(h);
        h.stats = { hp: h.hp };
        h.id = h.id;
      });
      console.log("New Heroes: ", newHeroes);
      state.skip = state.skip + state.first;
      state.first = 1000;
      UpdateQuery(state);
      if (state.heroes.length == 0) {
        state.heroes = newHeroes;
        return;
      }
      state.heroes = state.heroes.concat(newHeroes);
    }),
  initiated: false,
  initiateStore: () => {
    set((state) => {
      if (!state.initiated) {
        state.initiated = true;
        let columnsVisibilityModel = JSON.parse(
          localStorage.getItem("IndexColumnVisiblityModel")
        );
        console.log(columnsVisibilityModel);
        if (columnsVisibilityModel !== null) {
          state.visibilityModel = columnsVisibilityModel;
        }
        let filterVisible = JSON.parse(
          localStorage.getItem("IndexHeroFilterVisible")
        );
        if (state.hideFilters != filterVisible && filterVisible !== null) {
          state.toggleFilters();
        }
        state.setFilter("salePrice_not:null", "orderBy: salePrice");
      }
    });
  },
  hideFilters: false,
  toggleFilters: () =>
    set((state) => {
      localStorage.setItem("IndexHeroFilterVisible", !state.hideFilters);
      state.hideFilters = !state.hideFilters;
    }),
  visibilityModel: undefined,
  setVisibilityModel: (visibilityModel) =>
    set((state) => {
      localStorage.setItem(
        "IndexColumnVisiblityModel",
        JSON.stringify(visibilityModel)
      );
      state.visibilityModel = visibilityModel;
    }),
}));

export default useIndex;
