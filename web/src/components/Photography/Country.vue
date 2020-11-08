<template>
  <div>
    <div class="cursor-pointer text-lg" @click="open = !open">
      {{ country }} {{ statusIcon }}
    </div>
    <ExpandTransition>
      <div v-if="open">
        <div
          class="ml-4 cursor-pointer"
          v-for="(value, city) in cities"
          :key="city"
        >
          &middot; {{ city }}
        </div>
      </div>
    </ExpandTransition>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import ExpandTransition from "@/components/Transitions/ExpandTransition.vue";

@Component({
  components: {
    ExpandTransition
  }
})
export default class CountryMenu extends Vue {
  @Prop({ default: null, type: String }) country;
  @Prop({ default: null, type: Object }) cities;

  open = false;

  get statusIcon() {
    return this.open ? "-" : "+";
  }
}
</script>
