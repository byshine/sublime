<template>
  <div class="p-20 w-full h-full  text-font-main font-serif relative">
    <div class="absolute top-0 left-0 right-0 bottom-0">
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
    <blockquote
      class="max-w-sidebar w-full max-w-3xl absolute top-5 left-5 p-5 rounded-lg"
    >
      <p class="text-lg">
        Don't hope for better, Just be better <br />
        Be something better. Be more compassionate, more resilient, more humble,
        more disciplined. <br />
        Many people would also throw in there "Be more human," but no-be a
        better human.<br />
        And maybe if we're lucky, one day we'll get to be more than human.<br />
      </p>
      <footer class="float-right mt-5">
        - Mark Manson, <cite>Everything is f**cked</cite>
      </footer>
    </blockquote>
    <ul class="mt-20 clear-both">
      <li>
        <button>
          <router-link to="/gallery">&middot; View Gallery</router-link>
        </button>
      </li>
    </ul>
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
