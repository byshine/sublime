<template>
  <div id="app" class="font-serif w-full h-full bg-primary">
    <Navigation></Navigation>
    <router-view />
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
}
</style>
