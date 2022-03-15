<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
</template>
