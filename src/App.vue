<template>
  <div id="app" class="font-serif w-full h-full">
    <Navigation></Navigation>
    <transition
      mode="out-in"
      enter-active-class="translate-performant duration-500 ease-in"
      leave-active-class="translate-performant duration-500 ease-in"
      enter-class="opacity-0 transform scale-0"
      leave-to-class="opacity-0 transform scale-0"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
import { Vue, Component } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";
@Component({
  components: {
    Navigation
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #161616;
}
</style>
