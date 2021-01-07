<template>
  <div
    class="nav:fixed nav:top-0 nav:left-0 nav:bottom-0 nav:w-sidebar flex items-center nav:justify-center nav:h-full fixed top-0 left-0 right-0 bg-white h-navigation z-40"
    style="border-right: 1px solid rgba(0,0,0,0.1);"
  >
    <div
      class="px-5 nav:p-10 flex justify-between w-full items-center nav:flex-col"
    >
      <div class="flex items-center nav:flex-col nav:justify-center ">
        <router-link to="/" class="mr-4 nav:mr-0">
          <img
            :src="require('@/assets/logo.svg')"
            class="nav:mb-5 nav:w-10 nav:h-10 h-6 w-6 -mt-1 nav:mt-0"
          />
        </router-link>
        <h1
          class="font-cursive text-2xl tracking-wide text-left nav:text-center"
        >
          <router-link to="/">classicstyle</router-link>
        </h1>
      </div>
      <Hamburger
        class="nav:hidden block cursor-pointer"
        @click.native="$emit('openMenu')"
      ></Hamburger>

      <ul class="nav:mt-10 hidden nav:block text-center">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/gallery">Exhibitions</router-link>
        </li>
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
