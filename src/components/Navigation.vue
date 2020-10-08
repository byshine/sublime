<template>
  <div
    class="fixed top-0 left-0 right-0 w-full h-navigation flex justify-between text-white bg-navigation items-center px-5 z-50"
  >
    <h1 class="font-cursive text-2xl tracking-wide">classicstyle</h1>
    <div>Hamburger</div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {}
</script>
