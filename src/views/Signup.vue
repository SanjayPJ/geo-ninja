<template>
  <v-card class="mx-auto mt-5" max-width="444">
    <v-card-text>
      <h1 class="text--primary philosopher">
        <div class="text-center py-4">Sign Up</div>
      </h1>
      <form @submit.prevent="formSubmit">
        <v-text-field :rules="emailRules" v-model="email" class="mt-5" label="Email" outlined></v-text-field>
        <v-text-field type="password" v-model="password" label="Password" outlined></v-text-field>
        <v-text-field v-model="alias" label="Alias" outlined></v-text-field>
        <v-btn type="submit" large block dark color="indigo">sign up</v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import slugify from "slugify";
import db from '@/firebase/init';
import firebase from 'firebase/app';

require('firebase/auth')

export default {
  data() {
    return {
      email: null,
      password: null,
      alias: null,
      emailRules: [v => /.+@.+/.test(v) || "E-mail must be valid"]
    };
  },
  methods: {
    formSubmit() {
      if (this.email && this.password && this.alias) {
        const slug_alias = slugify(this.alias, {
          replacement: '-',
          lower: true
        });
        const ref = db.collection('users').doc(slug_alias);
        ref.get().then((doc) => {
          if(doc.exists){
            console.log('This alias already exists');
          }else{
            console.log('This alias is free to use');
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((cred) => {
              console.log(cred.user);
              ref.set({
                alias: this.alias,
                geolocation: null,
                user_id: cred.user.uid
              }).then(() => {
                this.$router.push({ name: 'home' })
              })
            }).catch((error) => {
              console.log(error);
              console.log('user already exists');
            });
          }
        })
      }else{
        console.log('Check email, password, alias');
      }
    }
  }
};
</script>