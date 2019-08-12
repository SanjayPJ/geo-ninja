<template>
  <v-app-bar color="indigo" app dark>
    <v-toolbar-title class="text-uppercase philosopher">
      Geo<b>Ninja</b>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
        <v-btn text><router-link :to="{ name: 'home' }" class="white--text">Home</router-link></v-btn>
        <v-btn v-if="!this.user" text><router-link :to="{ name: 'signup' }" class="white--text">Sign up</router-link></v-btn>
        <v-btn v-if="!this.user" text><router-link :to="{ name: 'login' }" class="white--text">Log in</router-link></v-btn>
        <v-btn v-if="this.user" text><router-link :to="{ name: 'home' }" class="white--text">{{ user.email }}</router-link></v-btn>
        <v-btn v-if="this.user" text><a class="white--text" @click="logOut">Log out</a></v-btn> 
      </v-toolbar-items>
  </v-app-bar>
</template>

<style scoped>
.white--text{
  text-decoration: none;
}
</style>

<script>
import firebase, { firestore } from 'firebase/app';
import db from '@/firebase/init'
require('firebase/auth')

export default {
  data() {
    return {
      user: null,
    }
  },
  methods: {
    logOut(){
      firebase.auth().signOut().then(() => {
        console.log('Logged out successfully');
        this.$router.push({ name: 'signup' });
      });
    }
  },
  created() {
    let user = null;
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.user = user;
      }else{
        this.user = null
      }
    })
  }
}
</script>