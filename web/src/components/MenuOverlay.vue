<template>
  <div
    class="w-full h-full fixed top-0 left-0 bottom-0 right-0 bg-white z-50 flex justify-center items-center transition-transform duration-500 ease-in transform"
    :class="{ 'translate-y-0': menu, '-translate-y-full': !menu }"
  >
    <ul class="text-font-main text-center" @click="$emit('close')">
      <li>
        <router-link to="/" class="inline-block text-center mb-10">
          <img
            :src="require('@/assets/logo.svg')"
            class="w-10 h-10 inline-block"
          />
        </router-link>
      </li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/gallery">Gallery</router-link></li>
      <li class="mt-5 text-center">
        <a class="inline-block" href="https://instagram.com/classicstyle">
          <img
            :src="require('@/assets/instagram.svg')"
            width="25"
            class="inline-block"
          />
        </a>
      </li>
    </ul>

    <div class="absolute right-5 top-5 cursor-pointer" @click="$emit('close')">
      Close
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class MenuOverlay extends Vue {
  @Prop({ default: true, type: Boolean }) menu;
}
</script>
