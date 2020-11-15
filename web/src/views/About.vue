<template>
  <div class="w-full h-full flex justify-center items-center p-10 xl:p-2">
    <div class="text-font-main">
      <h2 class="text-4xl">the motivation.</h2>
      <p class="text-md text-left max-w-3xl">
        Built with <a href="https://vuejs.org">Vue</a>,
        <a href="https://tailwindcss.com">Tailwind</a> &
        <a href="https://firebase.google.com">Firebase</a>. Much thanks to the
        ever-growing JavaScript community. <br />
        dedicated to the one and only.<br />
        &#169; Aaron Ahn
      </p>
    </div>
  </div></template
>
<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class About extends Vue {}
</script>
