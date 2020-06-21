<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="5" style="flex-direction:column">
          <v-card outlined class="mb-1 flex-grow-1">
            <v-card-title>Company details</v-card-title>
            <v-card-text>
              <div>Name: {{currentCompany.name}}</div>
              <div>Country: {{currentCompany.country}}</div>
              <div>City: {{currentCompany.city}}</div>
              <div>Address: {{currentCompany.address}}</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="5" style="flex-direction:column">
          <v-card outlined class="mb-1 flex-grow-1">
            <v-card-title>Company stats</v-card-title>
            <v-card-text>
              <div>Total tickets: {{tickets.length}}</div>
              <div>Total users: {{users.length}}</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2" class="text-right">
          <CreateUser />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <TicketTable />
        </v-col>
        <v-col cols="6">
          <UserTable />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import TicketTable from "../components/Table/TicketTable";
import UserTable from "../components/Table/UserTable";
import CreateUser from "../components/Button/CreateUser";
import { mapGetters } from "vuex";

export default {
  components: {
    TicketTable,
    UserTable,
    CreateUser
  },
  computed: {
    currentCompany() {
      return this.$store.getters["company/company"];
    },
    ...mapGetters({
      tickets: "ticket/tickets",
      users: "user/users"
    })
  },
  mounted() {
    this.$store.dispatch("ticket/getByCompanyId", this.currentCompany.id);
    this.$store.dispatch("user/setUsers", this.currentCompany.accounts);
  }
};
</script>