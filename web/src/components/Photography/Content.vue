<template>
  <div class="max-w-screen-photography-container mx-auto">
    <h4 class="text-2xl">North America</h4>

    <div id="one" class="mt-5" @click="handleClick">
      <img
        :data-index="index"
        v-for="(image, index) in images"
        :key="index"
        :src="image.url"
      />
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Content extends Vue {
  @Prop({ default: null, type: Array }) images;
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

  handleClick(e) {
    console.log(e);
  }
}
</script>
