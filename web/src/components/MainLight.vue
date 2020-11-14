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
      >
        <source :src="video" />
      </video>
    </div>
    <div
      class="flex justify-center items-center w-full h-full flex-col text-font-main relative z-30 p-10"
    >
      <blockquote class="w-full max-w-3xl relative rounded-lg text-white">
        <p class="md:text-lg sm:text-md">
          Don't hope for better, Just be better <br />
          Be something better. Be more compassionate, more resilient, more
          humble, more disciplined. <br />
          Many people would also throw in there "Be more human," but no-be a
          better human.<br />
          And maybe if we're lucky, one day we'll get to be more than human.<br />
        </p>
        <footer class="float-right mt-5">
          - <cite>Everything is f**cked</cite>
        </footer>
      </blockquote>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class MainLight extends Vue {
  video = null;
  mounted() {
    const video = require("@/assets/2.mp4");
    this.video = video;
  }
}
</script>
