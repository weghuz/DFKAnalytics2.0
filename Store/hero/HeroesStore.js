import create from "zustand";
import { heroData } from "../../Logic/Query";
import HeroBaseFilterStore from "../HeroBase/HeroBaseFilterStore";
import HeroBaseStore from "../HeroBase/HeroBaseStore";

const UpdateQuery = (state) => {
  state.query = `{heroes(first:${state.first},skip:${state.skip}${
    state.filter.length > 0 ? `,where:{${state.filter}}` : ``
  },${state.order})${heroData}}`;
};

const useHeroes = create((set) => ({
  ...HeroBaseStore(set, UpdateQuery),
  ...HeroBaseFilterStore(set),
}));

export default useHeroes;
