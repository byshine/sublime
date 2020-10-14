<template>
  <div>
    <div>
      <div
        class="mb-5"
        v-for="(countries, continent) in regions"
        :key="continent"
      >
        <h6 class="text-lg">{{ continent }}</h6>
        <div v-for="(cities, country) in countries" :key="country">
          <div class="cursor-pointer">{{ country }}</div>
          <div class="ml-4" v-for="(value, city) in cities" :key="city">
            &middot; {{ city }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Sidebar extends Vue {
  @Prop({ default: null, type: Object }) regions;
}
</script>
