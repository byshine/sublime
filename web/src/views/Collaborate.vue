<template>
  <div class="pt-navigation">
    <Collaborate></Collaborate>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Collaborate from "@/components/Collaborate/Collaborate.vue";
@Component({
  components: {
    Collaborate
  }
})
export default class CollaborateView extends Vue {}
</script>
