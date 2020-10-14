<template>
  <div>
    <div v-for="(cities, country) in countries" :key="country">
      <Country :country="country" :cities="cities"></Country>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import Country from "@/components/Photography/Country.vue";
@Component({
  components: {
    Country
  }
})
export default class CountryMenu extends Vue {
  @Prop({ default: null, type: Object }) countries;

  open = false;
}
</script>
