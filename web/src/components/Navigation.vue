<template>
  <div
    class="fixed top-0 left-0 right-0 w-full h-navigation flex justify-between 
    text-white bg-navigation items-center px-5 z-10"
  >
    <h1 class="font-cursive text-2xl tracking-wide">
      <router-link to="/">classicstyle</router-link>
    </h1>
    <Hamburger @click="menu = true"></Hamburger>
    <transition
      enter-active-class="translate-transform duration-500 ease-in"
      leave-active-class="translate-transform duration-500 ease-in"
      enter-class="transform -translate-y-full"
      leave-to-class="transform -translate-y-full"
    >
      <MainMenu @close="menu = false" v-if="menu"></MainMenu>
    </transition>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Hamburger from "@/components/Hamburger.vue";
import MainMenu from "@/components/MainMenu.vue";
@Component({
  components: {
    Hamburger,
    MainMenu
  }
})
export default class Navigation extends Vue {
  menu = false;
}
</script>
