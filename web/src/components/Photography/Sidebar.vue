<template>
  <div>
    <div>
      <div
        class="mb-5"
        v-for="(countries, continent) in regions"
        :key="continent"
      >
        <h6 class="text-2xl border-b border-white border-opacity-25 mb-3">
          {{ continent }}
        </h6>
        <CountryMenu :countries="countries"></CountryMenu>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import CountryMenu from "@/components/Photography/CountryMenu.vue";
@Component({
  components: {
    CountryMenu
  }
})
export default class Sidebar extends Vue {
  @Prop({ default: null, type: Object }) regions;
}
</script>
