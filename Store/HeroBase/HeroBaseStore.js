import { NormalizeHero } from "../../Logic/HeroBase";

const HeroBaseStore = (set, UpdateQuery) => ({
  heroes: [],
  first: 100,
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
  setHeroes: (newHeroes, query) =>
    set((state) => {
      if (query !== state.query) {
        return;
      }
      newHeroes = newHeroes.filter(
        (nh) => !state.heroes.some((h) => h.id === nh.id)
      );
      if (newHeroes.length == 0) {
        console.log("Finished Query");
        return;
      }
      newHeroes.forEach((h) => {
        NormalizeHero(h);
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
});

export default HeroBaseStore;
