<template>
  <div class="text-white pt-navigation">
    <div
      class="fixed top-navigation bottom-0 left-0 w-sidebar bg-white p-10 bg-opacity-3"
    >
      <Sidebar :regions="groupedContinents"></Sidebar>
    </div>
    <div class="ml-sidebar px-10 py-5">
      <button>Filters</button>
      <Content
        :regions="groupedContinents"
        @imageClicked="handleImageClicked"
        :images="images"
      ></Content>
    </div>

    <Modal
      :image="selectedImage"
      @closeModal="show = false"
      :show="show"
    ></Modal>
  </div>
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";
import Sidebar from "@/components/Photography/Sidebar.vue";
import Content from "@/components/Photography/Content.vue";
import Modal from "@/components/Photography/Modal.vue";
import { getPhotos } from "@/api/index.js";

@Component({
  components: {
    Sidebar,
    Content,
    Modal
  }
})
export default class Photography extends Vue {
  show = false;
  selectedImage = null;

  @Watch("show")
  handleShow(nv) {
    if (nv === true) {
      this.$store.commit("setNoScroll", true);
    } else {
      this.$store.commit("setNoScroll", false);
    }
  }

  handleKeyDown(event) {
    if (event.key === "Escape") {
      this.show = false;
    }
  }

  async mounted() {
    window.addEventListener("keydown", this.handleKeyDown);
    const result = await getPhotos();
    this.images = result.data;
  }

  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleImageClicked(image) {
    if (!image) {
      return;
    }
    this.selectedImage = image;
    this.show = true;
  }

  get groupedContinents() {
    return this.images.reduce((accumulator, image) => {
      const continent = image.continent;
      accumulator[continent] ? "" : (accumulator[continent] = {});

      const country = image.country;
      accumulator[continent][country]
        ? ""
        : (accumulator[continent][country] = {});

      const city = image.city;
      accumulator[continent][country][city]
        ? ""
        : (accumulator[continent][country][city] = true);

      return accumulator;
    }, {});
  }

  images = [];
}
</script>
