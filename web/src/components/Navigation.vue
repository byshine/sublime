<template>
  <div
    class="nav:fixed nav:top-0 nav:left-0 nav:bottom-0 nav:w-sidebar flex items-center nav:justify-center nav:h-full fixed top-0 left-0 right-0 bg-white h-navigation z-40"
    style="border-right: 1px solid rgba(0,0,0,0.1);"
  >
    <div
      class="px-5 nav:p-10 flex justify-between w-full items-center nav:flex-col"
    >
      <h1 class="font-cursive text-2xl tracking-wide text-left nav:text-center">
        <router-link to="/">classicstyle</router-link>
      </h1>
      <Hamburger
        class="nav:hidden block cursor-pointer"
        @click.native="$emit('openMenu')"
      ></Hamburger>

      <ul class="nav:mt-10 hidden nav:block">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/gallery">Gallery</router-link>
        </li>
        <li>
          <router-link to="/collaborate">Collaborate</router-link>
        </li>
      </ul>
    </div>
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
export default class Navigation extends Vue {}
</script>
