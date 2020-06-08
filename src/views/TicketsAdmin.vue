<template>
  <v-app style="background-color:white;">
    <v-container>
      <v-row>
        <v-col cols="5">
          <NameFilter />
        </v-col>
        <v-col cols="5">
          <CompanyFilter />
        </v-col>
        <v-col cols="2">
          <CreateTicket />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <AgentFilter />
        </v-col>
        <v-col cols="5">
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
import CreateTicket from "../components/Button/CreateTicket";

export default {
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
  created() {
        this.$store.dispatch("ticket/all");

  },

  components: {
    Tickets,
    CompanyFilter,
    AgentFilter,
    StatusFilter,
    NameFilter,
    CreateTicket
  }
};
</script>