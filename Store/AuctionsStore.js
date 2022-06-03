import create from "zustand";
import {
  ClassScore,
  getRecessives,
  GrowthScore,
  TrainStat,
} from "../Logic/HeroBase";
import { heroData } from "../Logic/Query";

const UpdateQuery = (state) => {
  state.query = `{saleAuctions(first:${state.first},skip:${state.skip},where: {seller: "${state.address}", purchasePrice_gt:"1"}, orderBy:startedAt, orderDirection:desc){id purchasePrice startedAt tokenId ${heroData}}}`;
};

const useAuctions = create((set, get) => ({
  heroes: [],
  first: 100,
  attempt: 0,
  address: ``,
  setAddress: (newAddress) =>
    set((state) => {
      if (state.address == newAddress) return;
      state.address = newAddress;
      state.setFilter("", "");
    }),
  initiated: false,
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
  initiateStore: () => {
    set((state) => {
      if (!state.initiated) {
        state.initiated = true;
        let columnsVisibilityModel = JSON.parse(
          localStorage.getItem("AuctionsColumnVisiblityModel")
        );
        console.log(columnsVisibilityModel);
        if (columnsVisibilityModel !== null) {
          state.visibilityModel = columnsVisibilityModel;
        }
        let filterVisible = JSON.parse(
          localStorage.getItem("AuctionsHeroFilterVisible")
        );
        if (state.hideFilters != filterVisible && filterVisible !== null) {
          state.toggleFilters();
        }
        state.setFilter("salePrice_not:null", "orderBy: salePrice");
      }
    });
  },
  visibilityModel: undefined,
  setVisibilityModel: (visibilityModel) =>
    set((state) => {
      console.log(visibilityModel);
      console.log(state.visibilityModel);
      localStorage.setItem(
        "AuctionsColumnVisiblityModel",
        JSON.stringify(visibilityModel)
      );
      return { visibilityModel: visibilityModel };
    }),
  hideFilters: false,
  toggleFilters: () =>
    set((state) => {
      localStorage.setItem("AuctionsHeroFilterVisible", !state.hideFilters);
      return { hideFilters: !state.hideFilters };
    }),
}));

export default useAuctions;
