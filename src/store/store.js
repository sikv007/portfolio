import { defineStore } from "pinia";
import { API_URL } from "../config";

export const useStore = defineStore("store", {
  state() {
    return {
      darkMode: true,
      loading: true,
      contact: {
        isLoading: false,
      },
      about: {
        isLoading: false,
      },
    };
  },
  getters: {
    isDarkMode: (state) => state.darkMode,
    getContact: (state) => state.contact,
    getAbout: (state) => state.about,
    isLoading: (state) => state.loading,
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
      const { data } = await res.json();
      this.contact.data = data.socials;
      this.contact.isLoading = false;
    },
    async fetchAbout() {
      this.about.isLoading = true;
      const res = await fetch(`${API_URL}about`);
      const { data } = await res.json();
      this.about.data = data.about[0];
      this.about.isLoading = false;
    },
  },
});
