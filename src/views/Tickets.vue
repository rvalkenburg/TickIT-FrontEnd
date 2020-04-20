<template>
  <v-app style="background-color:white;" >
      <v-container>
    <Tickets />
      </v-container>
  </v-app>
</template>
<script>
import Tickets from "../components/Tickets.vue";

export default {
  name: "Ticket",
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
  },
    components: {
    Tickets,
  },

  
};
</script>