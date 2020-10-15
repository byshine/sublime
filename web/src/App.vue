<template>
  <div id="app" class="font-serif w-full h-full">
    <Navigation></Navigation>
    <transition
      mode="out-in"
      enter-active-class="translate-performant duration-500 ease-in"
      leave-active-class="translate-performant duration-500 ease-in"
      enter-class="opacity-0 transform"
      leave-to-class="opacity-0 transform"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
import { Vue, Component, Watch } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";
@Component({
  components: {
    Navigation
  }
})
export default class Home extends Vue {
  get noScroll() {
    return this.$store.state.noScroll;
  }

  @Watch("noScroll")
  handleNoScroll(nv) {
    if (nv === true) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }
}
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
