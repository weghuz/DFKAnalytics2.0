import { ConstructionOutlined } from "@mui/icons-material";
import create from "zustand";
import {
  ClassScore,
  getRecessives,
  GrowthScore,
  TrainStat,
} from "../Logic/HeroBase";
import { heroData } from "../Logic/Query";

const UpdateQuery = (state) => {
  state.query = `{heroes(first:${state.first},skip:${state.skip},where:{owner:"${state.address}",${state.filter}},${state.order})${heroData}}`;
};

const useWalletHeroes = create((set, get) => ({
  heroes: [],
  first: 100,
  attempt: 0,
  address: ``,
  setAddress: (newAddress) =>
    set((state) => {
      console.log(newAddress);
      if (state.address == newAddress) return;
      state.address = newAddress;
      state.setFilter("", "");
    }),
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
      console.log(newHeroes);
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
          localStorage.getItem("WalletHeroColumnVisiblityModel")
        );
        console.log(columnsVisibilityModel);
        if (columnsVisibilityModel !== null) {
          state.visibilityModel = columnsVisibilityModel;
        }
        let filterVisible = JSON.parse(
          localStorage.getItem("WalletHeroFilterVisible")
        );
        if (state.hideFilters != filterVisible && filterVisible !== null) {
          state.toggleFilters();
        }
      }
    });
  },
  hideFilters: false,
  toggleFilters: () =>
    set((state) => {
      localStorage.setItem("WalletHeroFilterVisible", !state.hideFilters);
      return { hideFilters: !state.hideFilters };
    }),
  visibilityModel: undefined,
  setVisibilityModel: (visibilityModel) =>
    set((state) => {
      console.log(visibilityModel);
      console.log(state.visibilityModel);
      localStorage.setItem(
        "WalletColumnVisiblityModel",
        JSON.stringify(visibilityModel)
      );
      return { visibilityModel: visibilityModel };
    }),
}));
export default useWalletHeroes;
