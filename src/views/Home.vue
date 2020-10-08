<template>
  <div class="home w-full h-full">
    <Main></Main>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Main from "@/components/Main.vue";
@Component({
  components: {
    Main
  }
})
export default class Home extends Vue {}
</script>
