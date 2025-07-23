import initiateWeapon from "../../Logic/WeaponBase";

const WeaponBaseStore = (set, UpdateQuery) => ({
  weapons: [],
  setWeapon: (newWeapons, query) =>
    set((state) => {
      if (query !== state.query) {
        return;
      }
      newWeapons = newWeapons.filter((nw) => state.weapons.every((w) => w.id !== nw.id));
      if (newWeapons.length == 0) {
        console.log("Finished Query");
        return;
      }
      newWeapons = newWeapons.filter((w) => initiateWeapon(w));
      console.log("New Weapons: ", newWeapons);
      state.skip = state.skip + state.first;
      state.first = 1000;
      UpdateQuery(state);
      if (state.weapons.length == 0) {
        state.weapons = newWeapons;
        return;
      }
      state.weapons = state.weapons.concat(newWeapons);
    }),
  first: 100,
  skip: 0,
  query: ``,
  order: ``,
  filter: ``,
  setFilter: (filter, order) =>
    set((state) => {
      state.filter = filter;
      state.order = order;
      state.skip = 0;
      state.first = 100;
      state.weapons = [];
      UpdateQuery(state);
    }),
});

export default WeaponBaseStore;
