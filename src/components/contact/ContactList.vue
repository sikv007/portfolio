<template>
  <div class="container px-5">
    <transition name="contact" mode="out-in">
      <div
        v-if="store.getContact.isLoading"
        class="d-flex w-50 mx-auto gap-5 justify-content-center"
      >
        <base-loader></base-loader>
      </div>
      <div v-else class="d-flex w-50 mx-auto gap-5 justify-content-center">
        <contact-item
          v-for="item in store.getContact.data"
          :key="item.title"
          :icon="item.icon"
          :type="item.type"
          :url="item.url"
        ></contact-item>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useStore } from "../../store/store";
import ContactItem from "./ContactItem.vue";
const store = useStore();
</script>

<style scoped>
.contact-enter-from {
  opacity: 0;
  transform: translateY(20px);
  -webkit-transform: translateY(20px);
}
.contact-leave-to {
  opacity: 0;
}

.contact-enter-to,
.contact-leave-from {
  opacity: 1;
}
.contact-enter-active,
.contact-leave-active {
  transition: all 1s ease;
  -webkit-transition: all 1s ease;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>
