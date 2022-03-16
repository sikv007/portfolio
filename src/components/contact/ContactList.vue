<template>
  <div class="container px-5">
    <div class="d-flex w-50 mx-auto gap-5 justify-content-center">
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
