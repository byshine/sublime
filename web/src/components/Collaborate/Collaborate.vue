<template>
  <div class="text-white p-10">
    <div class="max-w-xl mx-auto flex flex-col items-center">
      <div class="w-full flex flex-wrap -mx-1">
        <div class="w-full sm:w-full md:w-full lg:w-full xl:w-full mb-5 px-1">
          <FileUploader @fileChange="fileChange"></FileUploader>
        </div>
      </div>

      <div class="w-full flex flex-wrap -mx-1">
        <div
          v-for="(f, index) in form"
          :key="index"
          class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-1 mb-2"
        >
          <select
            v-model="f.model"
            v-if="f.value === 'country'"
            class="w-full block bg-input-bg py-3 px-5 text-white placeholder-white uppercase text-xs tracking-widest appearance-none
            "
          >
            <option value="placeholder">Country</option>
            <option
              class="text-black "
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
            class="w-full block bg-input-bg py-3 px-5 text-white placeholder-white uppercase text-xs tracking-widest"
            type="text"
            :placeholder="f.placeholder"
          />
        </div>
      </div>

      <button
        class="mt-10 bg-primary text-white tracking-widest uppercase border-2 border-solid border-white min-w-xs w-full max-w-xs py-2"
        @click="submitRequest"
      >
        Collaborate
      </button>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import FileUploader from "@/components/Collaborate/FileUploader.vue";
import { collaborate } from "@/api/index.js";
const countryList = require("countries-list");

@Component({
  components: {
    FileUploader
  }
})
export default class Collaborate extends Vue {
  file = null;
  fileChange(file) {
    this.file = file;
  }

  get countries() {
    return Object.values(countryList.countries);
  }

  mounted() {
    console.log(countryList);
  }

  getContinent(countryName) {
    const temp = this.countries.find(c => c.name === countryName);
    if (!temp) {
      return null;
    }

    const continents = countryList.continents;
    return continents[temp.continent];
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

  submitRequest() {
    console.log(this.file);

    const formData = new FormData();
    formData.append("file", this.file);
    this.form.map(f => formData.append(f.value, f.model));

    const countryForm = this.form.find(f => f.value === "country");
    const country = countryForm.model;
    const continent = this.getContinent(country);
    formData.append("continent", continent);

    collaborate(formData).then(result => {
      console.log("Result", result);
    });
  }
}
</script>
