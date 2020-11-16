<template>
  <div
    class="text-black p-10 flex justify-center flex-col items-center h-full w-full"
  >
    <button v-if="user" @click="signOut">Sign Out</button>
    <button v-else @click="handleAuth('google')">
      Sign In With Google
    </button>
    <div class="mt-5" v-if="user && !validated">
      Thanks for joining the team. Please allow time for approval.
    </div>

    <transition
      v-if="validated"
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
import "firebase/auth";
//const firebaseui = require("firebaseui");
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

  signOut() {
    return firebase.auth().signOut();
  }

  mounted() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("validateUser", user);
      } else {
        this.$store.dispatch("validateUser", null);
      }
    });
  }

  get user() {
    return this.$store.state.user;
  }

  get validated() {
    return this.$store.state.validated;
  }

  handleAuth(provider) {
    const providers = {
      google: new firebase.auth.GoogleAuthProvider()
    };
    firebase.auth().signInWithPopup(providers[provider]);
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
