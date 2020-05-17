<template>
  <v-app style="background-color:white;">
    <v-container>
    <v-row>
      <v-col cols="6">
        <NameFilter />
      </v-col>
      <v-col cols="6">
        <CompanyFilter />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <AgentFilter />
      </v-col>
      <v-col cols="6">
        <StatusFilter />
      </v-col>
    </v-row>
    </v-container>
    <v-container>
    <v-row>
      <v-col cols="12">
      <Tickets />

      </v-col>
    </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Tickets from "../components/Table/TicketTable";
import CompanyFilter from "../components/Filters/CompanyFilter";
import AgentFilter from "../components/Filters/AgentFilter";
import StatusFilter from "../components/Filters/StatusFilter";
import NameFilter from "../components/Filters/NameFilter";

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
    CompanyFilter,
    AgentFilter,
    StatusFilter,
    NameFilter
  }
};
</script>