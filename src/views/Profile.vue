<template>
  <v-app>
    <h1>This is an profile page</h1>
  </v-app>
</template>
<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.account;
    }
  },
  mounted() {

    if (!this.currentUser) {
      this.$router.push("/home");
    }
  }
};
</script>