<template>
  <div class="main-sm:text-left text-center">
    <h2 class="text-3xl opacity-75 leading-none">Aaron Ahn</h2>
    <p class="opacity-100 mt-1 sm:mt-0 tracking-wider text-lg">
      Capturing the moments in time,
      <span class="main-sm:inline-block block"
        >because they will never come back</span
      >
    </p>
    <p class="tracking-widest mt-5 text-lg font-bold">
      Sublime Restoration Project
    </p>
    <p class="tracking-widest text-lg font-bold">
      <router-link to="/photography">Lookbook</router-link>
    </p>
  </div>
</template>
<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class MainContent extends Vue {}
</script>
