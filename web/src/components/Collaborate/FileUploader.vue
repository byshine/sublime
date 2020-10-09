<template>
  <div class="text-white">
    <input
      v-show="false"
      ref="file-input"
      class="block"
      id="image-file"
      type="file"
      @change="handleFiles"
    />
    <button
      class="block bg-white text-black py-3 text-center max-w-xl px-10 w-full min-w-xs rounded-lg"
      @click="handleUpload"
    >
      <span v-if="file && file.name" class="block normal-case truncate">{{
        file.name
      }}</span>
      <span class="tracking-widest uppercase" v-else>Select Image</span>
    </button>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class FileUploader extends Vue {
  file = null;
  handleFiles(e) {
    const file = e.target.files && e.target.files[0];
    this.file = file;
    this.$emit("fileChange", file);
  }

  handleUpload() {
    this.$refs["file-input"].click();
  }
}
</script>
