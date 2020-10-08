<template>
  <div class="w-full h-full">
    <div
      class="w-full h-full bg-main bg-cover flex items-center opacity-40 shadow-main"
    ></div>
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
export default class Main extends Vue {}
</script>
