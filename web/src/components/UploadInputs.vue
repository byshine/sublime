<template>
  <div class="upload-inputs">
    <div class="w-full flex flex-wrap -mx-1">
      <div
        v-for="(f, index) in form"
        :key="index"
        class="w-full sm:w-full md:w-full lg:w-full xl:w-full px-1 mb-2"
      >
        <select
          v-model="f.model"
          v-if="f.value === 'country'"
          class="w-full block py-3 px-2 text-font-main placeholder-text-font-main text-xs tracking-widest appearance-none bg-transparent border-b border-white-shade border-solid
            "
        >
          <option value="placeholder">Country</option>
          <option
            class="text-font-main"
            v-for="country in countries"
            :key="country.name"
            :value="country.name"
            >{{ country.name }}</option
          >
        </select>
        <input
          v-else
          v-model="f.model"
          name="Text"
          class="w-full block bg-transparent py-3 px-2 text-font-mainplaceholder-text-font-main text-xs tracking-widest border-b border-white-shade border-solid"
          type="text"
          :placeholder="f.placeholder"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
const countryList = require("countries-list");
@Component
export default class UploadInputs extends Vue {
  @Prop({ default: null }) name;

  get countries() {
    return Object.values(countryList.countries);
  }

  form = [
    {
      placeholder: "Photographer *",
      value: "photographer",
      model: null
    },
    {
      placeholder: "Country *",
      value: "country",
      model: "placeholder"
    },
    {
      placeholder: "City",
      value: "city",
      model: null
    },
    {
      placeholder: "Date",
      value: "date",
      model: null
    },
    {
      placeholder: "Camera",
      value: "camera",
      model: null
    },
    {
      placeholder: "Lens",
      value: "description",
      model: null
    }
  ];
}
</script>
