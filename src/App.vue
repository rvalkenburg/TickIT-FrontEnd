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
  metaInfo() {
    return {
      title: "TickIT - manage your tickets!",
      meta: [
        {
          name: "description",
          content: "TickIT is about managing your tickets for all you customers"
        },
        {
          property: "og:title",
          content: "TickIT -TickIT - manage your tickets!"
        },
        { property: "og:site_name", content: "TickIT" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  components: {
    NavBar
  },

  computed: {
    currentUser() {
      return this.$store.state.auth.account;
    }
  }
};
</script>

<style>
</style>
