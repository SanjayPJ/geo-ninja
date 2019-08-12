<template>
  <v-card max-width="375" class="mx-auto">
    <v-img
      src="data:image/jpeg;base64,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"
      height="300px"
      dark
      class="mt-3"
      v-if="profile"
    >
      <v-layout column fill-height>
        <v-card-title>
          <v-spacer></v-spacer>
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="white--text pt-12">
          <h2 class="display-1 pt-12 pb-4">{{ profile.alias }}</h2>
        </v-card-title>
      </v-layout>
    </v-img>
    <div class="mt-5">
      <v-list-item two-line v-for="(comment, index) in comments" :key="index">
        <v-list-item-content>
          <v-list-item-title>
            <b>{{ comment.from }}</b>
          </v-list-item-title>
          <v-list-item-subtitle>{{ comment.comment }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
    <v-list-item two-line>
      <v-list-item-content>
        <v-text-field
          v-model="comment"
          outlined
          label="Type Comment"
          class="mt-5"
          @keydown.enter="addComment"
        ></v-text-field>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import firebase, { firestore } from "firebase/app";
import db from "@/firebase/init";
require("firebase/auth");

export default {
  data() {
    return {
      comment: null,
      id: this.$route.params.id,
      profile: null,
      user: null,
      comments: []
    };
  },
  params: ["id"],
  created() {
    db.collection("users")
      .where("user_id", "==", firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user = doc.data();
          this.user.id = doc.id;
        });
      });
    db.collection("users")
      .doc(this.id)
      .get()
      .then(user => {
        this.profile = user.data();
      });
    db.collection('comments').where('to' ,'==' , this.id).onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        console.log(change);
        if(change.type == 'added'){
          this.comments.unshift({
            from: change.doc.data().from,
            comment: change.doc.data().comment
          })
        }
      })
    })
  },
  methods: {
    addComment() {
      if (this.comment) {
        db.collection("comments").add({
          to: this.id,
          from: this.user.id,
          comment: this.comment
        });
        this.comment = "";
      }
    }
  }
};
</script>
