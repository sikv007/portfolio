<template>
  <div></div>
  <div class="icons">
    <contact-item
      v-for="item in store.getContact"
      :key="item.title"
      :icon="item.icon"
      :type="item.type"
      :url="item.url"
    ></contact-item>
  </div>
</template>

<script setup>
import { useStore } from "../../store/store";
import ContactItem from "./ContactItem.vue";
const store = useStore();
</script>

<style scoped>
.icons {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
