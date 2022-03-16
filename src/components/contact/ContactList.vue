<template>
  <div class="container">
    <div class="d-flex justify-content-between w-50 mx-auto">
      <contact-item
        v-for="item in store.getContact"
        :key="item.title"
        :icon="item.icon"
        :type="item.type"
        :url="item.url"
      ></contact-item>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../../store/store";
import ContactItem from "./ContactItem.vue";
const store = useStore();
</script>
