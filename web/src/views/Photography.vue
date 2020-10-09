<template>
  <div>
    <Photography></Photography>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Photography from "@/components/Photography/Photography.vue";
@Component({
  components: {
    Photography
  }
})
export default class PhotographyView extends Vue {}
</script>
