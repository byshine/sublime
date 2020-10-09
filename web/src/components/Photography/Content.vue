<template>
  <div class="max-w-screen-photography-container mx-auto">
    <h4 class="text-2xl">North America</h4>

    <div id="one" class="mt-5" @click="$emit('openModal')">
      <img src="@/assets/images/1.jpg" />
      <img src="@/assets/images/2.jpg" />
      <img src="@/assets/images/3.jpg" />
      <img src="@/assets/images/4.jpg" />
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Content extends Vue {
  mounted() {
    window.Macy({
      container: "#one",
      trueOrder: false,
      waitForImages: false,
      margin: 6,
      columns: 4,
      breakAt: {
        1200: 3,
        940: 2,
        520: 1,
        400: 1
      }
    });
  }
}
</script>
