<template>
  <div class="text-white">
    <input
      v-show="false"
      ref="fileInput"
      type="file"
      accept=".jpg,.jpeg"
      multiple
      @change="handleFileChange"
    />
    <div class="shadow-lg" style="width: 500px;">
      <div
        id="dropArea"
        class="bg-white text-black p-2  flex justify-center items-center rounded-t-lg cursor-pointer py-20"
        @click="handleClick"
        @dragover.prevent.stop
        @dragleave.prevent.stop
        @drop.prevent.stop="handleDrop"
        ref="dropArea"
      >
        <span class="font-regular text-white font-serif tracking-normal text-xl"
          >Drop Images</span
        >
      </div>
      <div
        class="bg-input-bg text-center flex justify-center align-center py-10 rounded-b-lg"
      >
        Supported Format: jpeg, jpg
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class SublimeUploader extends Vue {
  files = null;

  handleClick() {
    const { fileInput } = this.$refs;
    fileInput && fileInput.click();
  }

  handleFileChange(e) {
    this.files = e.target.files;
    this.$emit("fileChange", this.files);
    console.log(this.files);
  }

  handleDrop(e) {
    this.files = e.dataTransfer.files;
    this.$emit("fileChange", this.files);
  }
}
</script>

<style scoped>
#dropArea {
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
}
</style>
