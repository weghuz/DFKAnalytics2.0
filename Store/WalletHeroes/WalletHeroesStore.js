import create from "zustand";
import { heroData } from "../../Logic/Query";
import HeroBaseFilterStore from "../HeroBase/HeroBaseFilterStore";
import HeroBaseStore from "../HeroBase/HeroBaseStore";

const UpdateQuery = (state) => {
  state.query = `{heroes(first:${state.first},skip:${state.skip},where:{owner:"${state.address}",${state.filter}},${state.order})${heroData}}`;
};

const useWalletHeroes = create((set) => ({
  address: "",
  setAddress: (address) => {
    set((state) => {
      console.log("set new wallet");
      state.address = address;
      UpdateQuery(state);
    });
  },
  ...HeroBaseStore(set, UpdateQuery),
  ...HeroBaseFilterStore(set),
}));

export default useWalletHeroes;
