<template>
  <transition name="heading" mode="out-in">
    <div class="splash" v-if="store.isLoading">
      <base-loader></base-loader>
    </div>
    <header v-else class="container-fluid position-relative pb-5">
      <section class="container">
        <div class="position-relative logo-container mb-5">
          <div class="d-flex justify-content-between align-items-center">
            <main-logo :class="{ logo: true }"></main-logo>
            <base-button @click="store.setDarkMode" class="btn--dark-mode">
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
          <div class="row mb-5">
            <div class="col col-sm-12 col-md-7 mx-auto">
              <h1 style="font-weight: bold" class="text-center">
                {{ store.getAbout.data.heading }}
              </h1>
            </div>
          </div>
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
  </transition>
</template>

<script setup>
import ContactList from "../../contact/ContactList.vue";
import { useStore } from "@/store/store";
const store = useStore();
</script>

<style scoped>
.darkmode-enter-from,
.darkmode-leave-to {
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

.heading-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.heading-leave-to {
  opacity: 0;
}

.heading-enter-to,
.heading-leave-from {
  opacity: 1;
}
.heading-enter-active,
.heading-leave-active {
  transition: all 1s ease;
  -webkit-transition: all 1s ease;
}
</style>
