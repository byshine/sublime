<template>
  <div class="text-white h-full">
    <img :src="src" class="block h-full" />
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class ImagePreview extends Vue {
  @Prop({ default: null }) file;

  objectUrl = null;

  get src() {
    this.objectUrl = URL.createObjectURL;
    return URL.createObjectURL(this.file);
  }

  beforeDestroy() {
    return URL.revokeObjectURL(this.objectUrl);
  }
}
</script>
