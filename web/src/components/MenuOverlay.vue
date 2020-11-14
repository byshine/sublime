<template>
  <div
    class="w-full h-full fixed top-0 left-0 bottom-0 right-0 bg-white z-50 flex justify-center items-center transition-transform duration-500 ease-in transform"
    :class="{ 'translate-y-0': menu, '-translate-y-full': !menu }"
  >
    <ul class="text-font-main" @click="$emit('close')">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/gallery">Gallery</router-link></li>
      <li>Close</li>
    </ul>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class MenuOverlay extends Vue {
  @Prop({ default: true, type: Boolean }) menu;
}
</script>
