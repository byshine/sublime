<template>
  <div class="text-white pt-navigation">
    <div
      class="fixed top-navigation bottom-0 left-0 w-sidebar bg-navigation p-10"
    >
      <Sidebar></Sidebar>
    </div>
    <div class="ml-sidebar">
      <Content class="p-10" @openModal="show = true"></Content>
    </div>

    <Modal @closeModal="show = false" :show="show"></Modal>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Sidebar from "@/components/Photography/Sidebar.vue";
import Content from "@/components/Photography/Content.vue";
import Modal from "@/components/Photography/Modal.vue";
@Component({
  components: {
    Sidebar,
    Content,
    Modal
  }
})
export default class Photography extends Vue {
  show = false;
}
</script>
