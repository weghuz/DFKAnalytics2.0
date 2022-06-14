import create from "zustand";
import { devtools } from "zustand/middleware";
import { petData } from "../../Logic/Query";
import PetsBaseFilterStore from "../PetsBase/PetsBaseFilterStore";
import PetsBaseStore from "../PetsBase/PetsBaseStore";

const UpdateQuery = (state) => {
  state.query = `{pets(first:${state.first},skip:${state.skip}${
    state.filter.length > 0 ? `,where:{${state.filter}}` : ``
  },${state.order})${petData}}`;
};

const usePets = create((set) => ({
  ...PetsBaseStore(set, UpdateQuery),
  ...PetsBaseFilterStore(set),
}));

export default usePets;
