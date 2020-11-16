<template>
  <div class="upload-card" style="width: 400px;">
    <div class="upload-card-header p-3 bg-input-bg rounded-t-lg">
      <div class="h-preview flex justify-center">
        <ImagePreview :file="file"></ImagePreview>
      </div>
    </div>
    <hr class="bg-input-bg border-black-shade" />
    <div class="upload-card-body p-5 shadow-lg bg-input-bg-dark rounded-b-lg">
      <div class="text-center mb-2">{{ file.name }}</div>
      <UploadInputs ref="uploadInput"></UploadInputs>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import ImagePreview from "@/components/ImagePreview.vue";
import UploadInputs from "@/components/UploadInputs.vue";

@Component({
  components: {
    ImagePreview,
    UploadInputs
  }
})
export default class UploadCard extends Vue {
  @Prop({ default: null }) file;

  getData() {
    return this.$refs.uploadInput.form;
  }
}
</script>
