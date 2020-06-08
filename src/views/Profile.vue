<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card outlined>
            <v-card-title>User details</v-card-title>
            <v-card-text>Name: {{currentUser.account.first_name}}</v-card-text>
            <v-card-text>Address: {{currentUser.account.surname}}</v-card-text>
            <v-card-text>City: {{currentUser.account.username}}</v-card-text>
                        <v-card-text>Country: {{currentUser.account.username}}</v-card-text>

          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card outlined>
            <v-card-title>User details</v-card-title>
            <v-card-text>Firstname: {{currentUser.account.first_name}}</v-card-text>
            <v-card-text>surname: {{currentUser.account.surname}}</v-card-text>
            <v-card-text>email: {{currentUser.account.username}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <TicketTable />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import TicketTable from "../components/Table/TicketTable";

export default {
  name: "Profile",
  components: {
    TicketTable
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.account;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/home");
    }
  },
  created() {
    this.$store.dispatch("ticket/getByAccountId", this.currentUser.account.id);
  }
};
</script>