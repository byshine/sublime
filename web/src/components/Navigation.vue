<template>
  <div
    class="fixed top-0 left-0 bottom-0 w-sidebar"
    style="border-right: 1px solid rgba(0,0,0,0.1)"
  >
    <div class="p-10">
      <h1 class="font-cursive text-2xl tracking-wide text-center">
        <router-link to="/">classicstyle</router-link>
      </h1>

      <ul class="mt-10">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/gallery">Gallery</router-link>
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
export default class Navigation extends Vue {
  menu = false;
}
</script>
