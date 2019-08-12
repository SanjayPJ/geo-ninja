<template>
  <v-card class="mx-auto mt-5" max-width="444">
    <v-card-text>
      <h1 class="text--primary philosopher">
        <div class="text-center py-4">Log In</div>
      </h1>
      <form @submit.prevent="formSubmit">
        <v-text-field :rules="emailRules" v-model="email" class="mt-5" label="Email" outlined></v-text-field>
        <v-text-field type="password" v-model="password" label="Password" outlined></v-text-field>
        <v-btn type="submit" large block dark color="indigo">log in</v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import slugify from "slugify";
import db from "@/firebase/init";
import firebase from "firebase/app";

require("firebase/auth");

export default {
  data() {
    return {
      email: null,
      password: null,
      emailRules: [v => /.+@.+/.test(v) || "E-mail must be valid"]
    };
  },
  methods: {
    formSubmit() {
      if (this.email && this.password) {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((cred) => {
            //   console.log(cred.user);
              this.$router.push({ name: 'home' });
          }).catch(err => {
              console.log(err);
          })
      } else {
        console.log("fill out all shit!!!");
      }
    }
  }
};
</script>