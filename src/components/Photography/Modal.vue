<template>
  <transition
    enter-active-class="translate-opacity duration-500 ease-in"
    leave-active-class="translate-opacity duration-500 ease-in"
    enter-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      class="fixed top-0 left-0 right-0 bottom-0 bg-black w-full h-full flex justify-center items-center z-50"
      @click.self.stop="$emit('closeModal')"
    >
      <div class="bg-white text-black">
        <img src="@/assets/images/1.jpg" style="max-height: 70vh;" />
      </div>
    </div>
  </transition>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Modal extends Vue {
  @Prop({ default: false, type: Boolean }) show;
}
</script>
