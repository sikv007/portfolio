<template>
  <header class="container-fluid position-relative pb-5">
    <section class="container">
      <div class="position-relative logo-container mb-5">
        <div class="d-flex justify-content-between align-items-center">
          <main-logo :class="{ logo: true }"></main-logo>
          <base-button @click="store.setDarkMode">
            <transition mode="out-in" name="darkmode">
              <div v-if="!store.isDarkMode">Dark Mode</div>
              <div v-else>Light Mode</div>
            </transition>
          </base-button>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="position-relative heading-container pt-5">
        <h1 style="font-weight: bold" class="text-center w-75 mx-auto mb-5">
          Frontend Developer and UX Designer located in Oslo, Norway
        </h1>
        <hr class="w-50 mx-auto mb-5" />
        <contact-list></contact-list>
      </div>
    </div>
    <div class="position-absolute gradient-container">
      <div class="gradient-container-circles">
        <div class="circle circle--a"></div>
        <div class="circle circle--b"></div>
        <div class="circle circle--c"></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import ContactList from "../../contact/ContactList.vue";
import { useStore } from "@/store/store";
const store = useStore();
</script>

<style scoped>
.darkmode-enter-from,
.darkmode-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.darkmode-enter-to,
.darkmode-leave-from {
  opacity: 1;
}
.darkmode-enter-active,
.darkmode-leave-active {
  transition: all 0.5s ease;
}
</style>
