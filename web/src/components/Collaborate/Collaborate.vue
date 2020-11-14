<template>
  <div class="text-white p-10 flex justify-center flex-col items-center">
    <button @click="handleAuth">Sign In</button>
    <div id="firebaseui-auth-container"></div>
    <transition
      enter-active-class="translate-opacity duration-200 ease-in"
      leave-active-class="translate-opacity duration-200 ease-in"
      enter-class="opacity-0"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <SublimeUploader
        v-if="!files"
        class="mt-10"
        @fileChange="handleFileChange"
      ></SublimeUploader>
      <div class="mt-10 w-full" style="max-width: 1280px;" v-else>
        <div class="flex justify-center">
          <button @click="files = null">Back</button>
        </div>
        <div
          class="w-full grid my-10 justify-items-center"
          :class="{
            'sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1':
              files.length === 1,
            'sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2':
              files.length === 2,
            'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3':
              files.length > 3
          }"
        >
          <div v-for="(file, index) in files" :key="index">
            <UploadCard ref="uploadCard" class="m-2" :file="file"></UploadCard>
          </div>
        </div>
        <div class="flex justify-center">
          <button @click="submitRequest">Submit</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import SublimeUploader from "@/components/SublimeUploader.vue";
import UploadCard from "@/components/UploadCard.vue";
import { collaborate } from "@/api/index.js";
import firebase from "firebase/app";
const firebaseui = require("firebaseui");
var firebaseConfig = {
  apiKey: "AIzaSyBO0mtp0C1WK1NDo98Ukze4akwaZTL0pYI",
  authDomain: "classicstyle-2c480.firebaseapp.com",
  projectId: "classicstyle-2c480"
};

@Component({
  components: {
    SublimeUploader,
    UploadCard
  }
})
export default class Collaborate extends Vue {
  files = null;

  created() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("User found", user);
      } else {
        console.log("User Not Found");
      }
    });
  }

  handleAuth() {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
      signInSuccessUrl: "/collaborate",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      signInFlow: "popup"
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  }

  handleFileChange(files) {
    this.files = files;
  }

  submitRequest() {
    const uploadCards = this.$refs.uploadCard;
    const requests = [];
    for (let i = 0; i < uploadCards.length; i++) {
      const formData = new FormData();
      formData.append("file", this.files[i]);
      const form = uploadCards[i].getData();
      form.map(f => formData.append(f.value, f.model));
      requests.push(collaborate(formData));
    }

    /*
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
    */
  }
}
</script>
