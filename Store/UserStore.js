import create from "zustand";

const useUser = create((set, get) => ({
  address: "",
  theme: "dark",
  toggleTheme: () => {
    set((state) => {
      state.theme = state.theme == "light" ? "dark" : "light";
      window.localStorage.setItem("prefers-color-scheme", state.theme);
    });
  },
}));
export default useUser;
