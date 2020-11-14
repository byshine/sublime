<template>
  <div class="text-font-main font-regular text-lg">
    <div class="w-full h-full flex items-center justify-center">
      <div class="relative">
        <div class="loader bg-loader rounded-full w-loader h-loader"></div>
        <div
          class="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-full animate-pulseAndScale"
          style="background-color: rgba(0,0,0,0.1)"
        ></div>
      </div>
    </div>
    <p class="mt-5">It ain't easy being me</p>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class MainLightLoader extends Vue {
  mounted() {
    setTimeout(() => {
      this.$emit("loaded");
    }, 2000);
  }
}
</script>
