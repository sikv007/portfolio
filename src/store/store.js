import { defineStore } from "pinia";

const DB_URL = "https://portolio-243b5-default-rtdb.firebaseio.com/";

export const useStore = defineStore("store", {
  state() {
    return {
      darkMode: false,
      loading: false,
      contact: [],
    };
  },
  getters: {
    isDarkMode: (state) => state.darkMode,
    isLoading: (state) => state.loading,
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
      this.loading = true;
      const res = await fetch(`${DB_URL}contact.json`);
      const data = await res.json();
      this.contact = data;
      this.loading = false;
    },
  },
});
