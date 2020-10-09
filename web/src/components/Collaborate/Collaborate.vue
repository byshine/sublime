<template>
  <div class="text-white p-10">
    <div class="max-w-5xl mx-auto flex flex-col items-center">
      <FileUploader @fileChange="fileChange" class="mb-10"></FileUploader>
      <button
        class="bg-primary text-white tracking-widest uppercase border-2 border-solid border-white min-w-xs w-full max-w-xs py-2"
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

  submitRequest() {
    console.log(this.file);

    const formData = new FormData();
    formData.append("file", this.file);
    collaborate(formData).then(result => {
      console.log("Result", result);
    });
  }
}
</script>
