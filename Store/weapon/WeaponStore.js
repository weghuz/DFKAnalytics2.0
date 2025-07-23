import create from "zustand";
import { devtools } from "zustand/middleware";
import { weaponData } from "../../Logic/Query";
import WeaponBaseFilterStore from "../WeaponBase/WeaponBaseFilterStore";
import WeaponBaseStore from "../WeaponBase/WeaponBaseStore";

const UpdateQuery = (state) => {
  state.query = `{weapons(first:${state.first},skip:${state.skip}${
    state.filter.length > 0 ? `,where:{${state.filter}}` : ``
  },${state.order})${weaponData}}`;
};

const useWeapon = create((set) => ({
  ...WeaponBaseStore(set, UpdateQuery),
  ...WeaponBaseFilterStore(set),
}));

export default useWeapon;
