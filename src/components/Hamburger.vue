<template>
  <div
    class="hamburger flex flex-col items-end cursor-pointer"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Hamburger extends Vue {}
</script>
<style lang="scss">
.hamburger > div {
  margin: 0.15em 0;
  height: 2px;
  width: 23px;
  background-color: white;
}

.hamburger > div:nth-of-type(2) {
  width: 17px;
}

.hamburger > div:nth-of-type(3) {
  width: 12px;
}
</style>
