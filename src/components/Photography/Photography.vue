<template>
  <div class="text-white pt-navigation">
    <div
      class="fixed top-navigation bottom-0 left-0 w-sidebar bg-navigation p-10"
    >
      <Sidebar></Sidebar>
    </div>
    <div class="ml-sidebar">
      <Content class="p-10"></Content>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Sidebar from "@/components/Photography/Sidebar.vue";
import Content from "@/components/Photography/Content.vue";
@Component({
  components: {
    Sidebar,
    Content
  }
})
export default class Photography extends Vue {}
</script>
