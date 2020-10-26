<template>
  <div class="max-w-screen-photography-container mx-auto">
    <div v-for="(continent, index) in continents" :key="index">
      <h4 class="text-2xl my-5">{{ continent }}</h4>

      <div :id="`macy-${index}`" @click="handleClick(continent, $event)">
        <img
          class="cursor-pointer"
          :data-index="index"
          v-for="(image, index) in filterImages('continent', continent)"
          :key="`${continent}-image-${index}`"
          :src="image.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Content extends Vue {
  @Prop({ default: null, type: Array }) images;
  @Prop({ default: null, type: Object }) regions;

  get continents() {
    return Object.keys(this.regions);
  }

  filterImages(field, value) {
    return this.images.filter(img => img[field] === value);
  }

  mounted() {
    let index = 0;
    this.continents.map(() => {
      window.Macy({
        container: `#macy-${index}`,
        trueOrder: false,
        waitForImages: false,
        margin: 6,
        columns: 3,
        breakAt: {
          1200: 3,
          940: 2,
          520: 1,
          400: 1
        }
      });
      index++;
    });
  }

  handleClick(continent, e) {
    const { index } = e.target.dataset;
    const filteredImages = this.filterImages("continent", continent);
    this.$emit("imageClicked", filteredImages[index]);
  }
}
</script>
