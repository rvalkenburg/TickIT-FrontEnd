<template>
  <v-app>
    <nav-bar v-if="currentUser" />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "../src/components/Navbar.vue";
export default {
  name: "App",

  components: {
    NavBar
    //Footer
  },

  computed: {
    currentUser() {
      return this.$store.state.auth.account;
    },

    data: () => ({})
  }
};
</script>

<style>

</style>
