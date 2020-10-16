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

  mounted() {
    console.log(this.groupedContinents);
  }

  handleImageClicked(image) {
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

  images = [
    {
      url:
        "https://images.unsplash.com/photo-1496016943515-7d33598c11e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3700&q=80",
      camera: "Sony A7S III",
      date: "2019-05-13",
      lens: "Sigma 14mm F1.6",
      country: "United States",
      continent: "North America",
      city: "Seattle",
      description: "maybe in time you will understand",
      photographer: "Aaron Ahn"
    },
    {
      url:
        "https://images.unsplash.com/photo-1496016943515-7d33598c11e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3700&q=80",
      camera: "Sony A7S III",
      date: "2019-05-13",
      lens: "Sigma 14mm F1.6",
      country: "United States",
      continent: "North America",
      city: "Seattle",
      description: "maybe in time you will understand",
      photographer: "Aaron Ahn"
    },
    {
      url:
        "https://images.unsplash.com/photo-1496016943515-7d33598c11e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3700&q=80",
      camera: "Sony A7S III",
      date: "2019-05-13",
      lens: "Sigma 14mm F1.6",
      country: "United States",
      continent: "North America",
      city: "Washington",
      description: "maybe in time you will understand",
      photographer: "Aaron Ahn"
    },
    {
      url:
        "https://images.unsplash.com/photo-1487452066049-a710f7296400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80",
      camera: "Sony A7S III",
      date: "2019-05-13",
      lens: "Sigma 14mm F1.6",
      continent: "North America",
      country: "Canada",
      city: "Vancouver",
      description: "maybe in time you will understand",
      photographer: "Aaron Ahn"
    },
    {
      url:
        "https://images.unsplash.com/photo-1514439827219-9137a0b99245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3262&q=80",
      camera: "Sony A7S III",
      date: "2019-05-13",
      lens: "Sigma 14mm F1.6",
      country: "United Kingdom",
      continent: "Europe",
      city: "London",
      description: "maybe in time you will understand",
      photographer: "Aaron Ahn"
    },
    {
      url:
        "https://images.unsplash.com/photo-1477336229416-9d67406e73bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
      camera: "Sony A7S III",
      date: "2019-05-13",
      lens: "Sigma 14mm F1.6",
      continent: "Asia",
      country: "Taiwan",
      city: "Taipei",
      description: "maybe in time you will understand",
      photographer: "Aaron Ahn"
    }
  ];
}
</script>
