<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 w-full h-full main-menu flex items-center justify-center z-50"
  >
    <div
      class="absolute top-0 right-0 pt-3 pr-3 cursor-pointer"
      @click="$emit('close')"
    >
      Close
    </div>
    <ul @click="$emit('close')">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/photography">Photography</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class MainMenu extends Vue {}
</script>
<style lang="scss" scoped>
.main-menu {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
