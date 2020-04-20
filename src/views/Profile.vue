<template>
  <v-app>
    <h1>This is an about page</h1>
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
    console.log(this.currentUser);

    if (!this.currentUser) {
      this.$router.push("/home");
    }
  }
};
</script>