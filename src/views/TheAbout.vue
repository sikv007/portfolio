<template>
  <div v-if="store.isLoading">Loading...</div>
  <div v-else class="main-container" :class="{ 'dark-mode': store.isDarkMode }">
    <section>
      <article>
        <main-logo></main-logo>
      </article>
      <contact-list></contact-list>
    </section>
  </div>
</template>

<script setup>
import ContactList from "../components/contact/ContactList.vue";
import { useStore } from "../store/store";
const store = useStore();
store.fetchContact();
</script>

<style>
article {
  width: 10rem;
}

i {
  font-size: 20px;
}
</style>
