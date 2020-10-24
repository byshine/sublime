<template>
  <transition
    enter-active-class="translate-opacity duration-500 ease-in"
    leave-active-class="translate-opacity duration-500 ease-in"
    enter-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      class="fixed flex-col top-0 left-0 right-0 bottom-0 bg-black w-full h-full flex justify-start items-center z-50 overflow-y-auto"
      @click.self.stop="$emit('closeModal')"
    >
      <div class="mt-5">
        <div>
          <img :src="image.url" style="max-height: 60vh;" />
        </div>
      </div>

      <div class="mt-5 max-w-4xl w-full mx-auto">
        <div class="px-10 text-center">
          {{ description.description }}
        </div>
        <div class="flex mb-4 text-center flex-wrap mt-10 w-full">
          <div
            class="w-1/3 my-2"
            v-for="(val, prop) in filteredImage"
            :key="prop"
          >
            <div class="inline-block text-left">
              <div class="capitalize">{{ prop }}</div>
              <div>{{ val }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import pick from "lodash/pick";
@Component
export default class Modal extends Vue {
  @Prop({ default: false, type: Boolean }) show;
  @Prop({ default: null, type: Object }) image;

  get filteredImage() {
    return pick(this.image, [
      "city",
      "camera",
      "continent",
      "country",
      "photographer",
      "lens",
      "date"
    ]);
  }

  get description() {
    return pick(this.image, "description");
  }
}
</script>
