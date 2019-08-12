<template>
  <v-app>
    <Navbar />
    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
        <!-- If using vue-router -->
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },
  data: () => ({
    //
  })
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Philosopher&display=swap");
.philosopher {
  font-family: "Philosopher", sans-serif !important;
}
</style>