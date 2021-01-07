<template>
  <div class="w-full h-full font-serif relative pt-navigation nav:pt-0">
    <div class="fixed top-0 left-0 right-0 bottom-0">
      <video
        preload="auto"
        muted
        autoplay
        loop
        playsinline
        class="w-full h-full object-cover"
        data-object-fit="cover"
        @canplaythrough="handleCanPlayThrough"
      >
        <source :src="require('@/assets/2.mp4')" type="video/mp4" />
        <source :src="require('@/assets/2.webm')" type="video/webm" />
      </video>
    </div>
    <div
      class="flex justify-center items-center w-full h-full flex-col text-font-main relative z-30 p-10"
    >
      <blockquote class="w-full max-w-3xl relative rounded-lg text-white">
        <p class="text-center md:text-lg sm:text-md">
          2021 Exhibition
          <br />
          <span class="font-bold">Vancouver</span>
          <br />
          <span class="inline-block mt-10">In Production</span>
        </p>
      </blockquote>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class MainLight extends Vue {
  handleCanPlayThrough() {
    this.$store.commit("setVideoReady", true);
  }
}
</script>
