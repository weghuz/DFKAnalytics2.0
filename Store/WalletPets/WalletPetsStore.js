import create from "zustand";
import { petData } from "../../Logic/Query";
import PetsBaseFilterStore from "../PetsBase/PetsBaseFilterStore";
import PetsBaseStore from "../PetsBase/PetsBaseStore";

const UpdateQuery = (state) => {
  state.query = `{pets(first:${state.first},skip:${state.skip},where:{owner:"${state.address}",${state.filter}},${state.order})${petData}}`;
  console.log(state.query);
};

const useWalletPets = create((set) => ({
  address: "",
  setAddress: (address) => {
    set((state) => {
      console.log("set new wallet");
      state.address = address;
      UpdateQuery(state);
    });
  },
  ...PetsBaseStore(set, UpdateQuery),
  ...PetsBaseFilterStore(set),
}));

export default useWalletPets;
