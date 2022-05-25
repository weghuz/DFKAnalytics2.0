import create from "zustand";
import {
  ClassScore,
  getRecessives,
  GrowthScore,
  TrainStat,
} from "../Logic/HeroBase";

const useIndex = create((set, get) => ({
  heroes: [],
  setHeroes: (newHeroes, clear) =>
    set((state) => {
      newHeroes.forEach((h) => {
        getRecessives(h);
        ClassScore(h);
        GrowthScore(h);
        TrainStat(h);
        h.stats = { hp: h.hp };
        h.id = h.id;
      });
      if (clear) {
        return { heroes: newHeroes };
      }
      return { heroes: state.heroes.concat(newHeroes) };
    }),
  hideFilters: false,
  toggleFilters: () =>
    set((state) => {
      localStorage.setItem("IndexHeroFilterVisible", !state.hideFilters);
      return { hideFilters: !state.hideFilters };
    }),
  visibilityModel: undefined,
  setVisibilityModel: (visibilityModel) =>
    set((state) => {
      console.log(visibilityModel);
      console.log(state.visibilityModel);
      localStorage.setItem(
        "IndexColumnVisiblityModel",
        JSON.stringify(visibilityModel)
      );
      return { visibilityModel: visibilityModel };
    }),
}));

const useWallet = create((set, get) => ({
  heroes: [],
  setHeroes: (newHeroes, clear) =>
    set((state) => {
      newHeroes.forEach((h) => {
        getRecessives(h);
        ClassScore(h);
        GrowthScore(h);
        TrainStat(h);
        h.stats = { hp: h.hp };
        h.id = h.id;
      });
      if (clear) {
        return { heroes: newHeroes };
      }
      return { heroes: state.heroes.concat(newHeroes) };
    }),
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

const useAuctions = create((set, get) => ({
  heroes: [],
  setHeroes: (newHeroes, clear) =>
    set((state) => {
      newHeroes.forEach((h) => {
        getRecessives(h);
        ClassScore(h);
        GrowthScore(h);
        TrainStat(h);
        h.stats = { hp: h.hp };
        h.id = h.id;
      });
      if (clear) {
        return { heroes: newHeroes };
      }
      return { heroes: state.heroes.concat(newHeroes) };
    }),
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

module.exports = { useIndex, useWallet, useAuctions };
