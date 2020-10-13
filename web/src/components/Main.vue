<template>
  <div class="w-full h-full">
    <video
      preload="auto"
      @canplaythrough="canPlayThrough"
      muted
      autoplay
      loop
      playsinline
      class="w-full h-full fixed top-0 left-0 right-0 bottom-0 object-cover"
    >
      <source :src="video" />
    </video>
    <div
      class="fixed top-0 left-0 bottom-0 right-0 w-full h-full flex items-center main-sm:justify-start justify-center"
    >
      <MainContent class="main-sm:pl-20 text-white"></MainContent>
    </div>
    <div class="fixed bottom-0 left-0 right-0 w-full">
      <MainFooter></MainFooter>
    </div>
  </div>
</template>
<script>
import { Vue, Component } from "vue-property-decorator";
import MainContent from "@/components/MainContent.vue";
import MainFooter from "@/components/MainFooter.vue";

@Component({
  components: {
    MainContent,
    MainFooter
  }
})
export default class Main extends Vue {
  video = null;
  mounted() {
    const video = require("@/assets/1.mp4");
    this.video = video;
  }

  canPlayThrough(e) {
    console.log(e, "Can play");

    setTimeout(() => {
      this.$emit("videoReady");
    }, 1000);
  }
}
</script>
