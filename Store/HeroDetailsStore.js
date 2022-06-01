import create from "zustand";
const useHeroDetails = create((set, get) => ({
  hero: null,
  setHero: (hero) => (state) => {
    state.hero = hero;
  },
}));

export default useHeroDetails;
