import { defineStore } from "pinia";
import { API_URL } from "../config";

export const useStore = defineStore("store", {
  state() {
    return {
      darkMode: true,
      contact: {
        isLoading: false,
      },
    };
  },
  getters: {
    isDarkMode: (state) => state.darkMode,
    getContact: (state) => state.contact,
  },
  actions: {
    setDarkMode() {
      this.darkMode = !this.darkMode;
    },
    setState() {
      const currentState = JSON.parse(localStorage.getItem("state"));
      if (currentState) {
        this.darkMode = currentState.darkMode;
      }
    },
    async fetchContact() {
      this.contact.isLoading = true;
      const res = await fetch(`${API_URL}socials`);
      if (!res.ok) throw new Error("Det oppsto en feil... Prøv igjen senere");
      const { data } = await res.json();
      this.contact.data = data.socials;
      this.contact.isLoading = false;
    },
  },
});
