<template>
  <div class="w-full h-full">
    <div v-show="!ready" class="flex h-full justify-center items-center">
      <MainLightLoader></MainLightLoader>
    </div>
    <transition
      mode="out-in"
      enter-active-class="translate-performant duration-500 ease-in"
      leave-active-class="translate-performant duration-500 ease-in"
      enter-class="opacity-0 transform"
      leave-to-class="opacity-0 transform"
    >
      <MainLight v-show="ready"></MainLight>
    </transition>
    <!--
    <div
      v-show="loading"
      class="w-full h-full flex items-center justify-center"
    >
      <div class="relative">
        <div class="loader bg-loader rounded-full w-loader h-loader"></div>
        <div
          class="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-full animate-pulseAndScale"
          style="background-color: rgba(255,255,255,0.3)"
        ></div>
      </div>
    </div>
    <transition
      mode="out-in"
      enter-active-class="translate-performant duration-500 ease-in"
      leave-active-class="translate-performant duration-500 ease-in"
      enter-class="opacity-0 transform"
      leave-to-class="opacity-0 transform"
    >
      <Main v-show="!loading" @videoReady="loading = false"></Main>
    </transition>
    -->
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Main from "@/components/Main.vue";
import MainLightLoader from "@/components/MainLightLoader.vue";
import MainLight from "@/components/MainLight.vue";
@Component({
  components: {
    Main,
    MainLight,
    MainLightLoader
  }
})
export default class Home extends Vue {
  loading = true;

  get ready() {
    return this.$store.state.videoReady;
  }
}
</script>
