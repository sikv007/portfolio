<template>
  <div class="main-container" :class="{ 'dark-mode': store.isDarkMode }">
    <the-header></the-header>
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import TheHeader from "./components/shared/layout/TheHeader.vue";
import { useStore } from "./store/store";
const store = useStore();
store.setState();
store.fetchContact();
store.fetchAbout();
store.$subscribe((_, state) => {
  const currentSate = {
    darkMode: state.darkMode,
  };
  localStorage.setItem("state", JSON.stringify(currentSate));

  if (!state.contact.isLoading && !state.about.isLoading) state.loading = false;
});
</script>

<style scoped></style>
