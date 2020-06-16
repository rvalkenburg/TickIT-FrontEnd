<template>
  <v-app style="background-color:white;">
    <v-container>
      <v-row>
        <v-col cols="5">
          <NameFilter />
        </v-col>
        <v-col cols="5">
          <StatusFilter />
        </v-col>
        <v-col class="text-right" cols="2">
          <CreateTicket />
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
import StatusFilter from "../components/Filters/StatusFilter";
import NameFilter from "../components/Filters/NameFilter";
import CreateTicket from "../components/Button/CreateTicket";

export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.account;
    }
  },
  created() {
    this.$store.dispatch("ticket/getByAccountId", this.currentUser.account.id);
  },

  components: {
    Tickets,
    StatusFilter,
    NameFilter,
    CreateTicket
  }
};
</script>