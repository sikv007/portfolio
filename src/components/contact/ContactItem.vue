<template>
  <a v-if="type === 'website'" :href="url" target="_blank"
    ><i class="bi" :class="icon"></i
  ></a>
  <a v-if="type === 'email'" :href="'mailto:' + url"
    ><i class="bi" :class="icon"></i
  ></a>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  type: String,
  icon: String,
  url: String,
});
const icon = computed(() => {
  return {
    [props.icon]: true,
  };
});
</script>
