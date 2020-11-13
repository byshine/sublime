<template>
  <div class="max-w-screen-photography-container mx-auto">
    <div id="macy">
      <div
        class="inline-block m-2 imageContainer"
        v-for="(image, index) in images"
        :key="index"
        @click="handleClick(index, $event)"
      >
        <img
          class="cursor-pointer inline-block rounded-lg"
          :data-index="index"
          :src="getImageUrl(image.large)"
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

  getImageUrl(imagePath) {
    return `https://storage.googleapis.com/classicstyle-2c480.appspot.com/${imagePath}`;
  }

  filterImages(field, value) {
    return this.images.filter(img => img[field] === value);
  }

  mounted() {
    console.log(this.images);
    this.continents.map(() => {
      window.Macy({
        container: `#macy`,
        trueOrder: false,
        waitForImages: false,
        columns: 4,
        breakAt: {
          1200: 4,
          940: 3,
          520: 2,
          400: 1
        }
      });
    });
  }

  handleClick(continent, e) {
    const { index } = e.target.dataset;
    const filteredImages = this.filterImages("continent", continent);
    console.log(filteredImages[index]);
    this.$emit("imageClicked", filteredImages[index]);
  }
}
</script>
<style scoped>
.imageContainer {
  width: calc(25% - 1rem);
}
</style>
