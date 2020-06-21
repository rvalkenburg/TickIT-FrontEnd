<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-card height="100" outlined>
            <v-card-title>Amount of registered tickets</v-card-title>
            <v-card-text>{{tickets.length}}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="100" outlined>
            <v-card-title>Amount of users</v-card-title>
            <v-card-subtitle>{{users.length}}</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="100" outlined>
            <v-card-title>Amount of agents</v-card-title>
            <v-card-subtitle>{{agents.length}}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card height="100" outlined>
            <v-card-title>Amount of companies</v-card-title>
            <v-card-subtitle>{{companies.length}}</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4"></v-col>
      </v-row>
      <v-row>
        <v-data-table :headers="headers" :items="agents" item-key="id">
          <template v-slot:item.actions="{item}">
            <v-icon small class="mr-2" @click="editTicket(item)">mdi-pencil</v-icon>
          </template>
        </v-data-table>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      tickets: "ticket/tickets",
      companies: "company/companies",
      users: "user/users",
      agents: "user/agents"
    }),

    headers() {
      return [
        { text: "Username", value: "account.username" },
        {
          text: "Average solve time",
          value: "time",
          sortable: true,
        }
      ];
    }
  },

  created() {
    this.$store.dispatch("ticket/all");
    this.$store.dispatch("company/all");
    this.$store.dispatch("user/getAllAgents");
    this.$store.dispatch("user/getAllUsers");
  },
  methods: {
    calcSovleTime(value){
      console.log(value)
          // 1- Convert to seconds:
    var seconds = value / 1000;
    // 2- Extract hours:
    var hours = parseInt( seconds / 3600 ); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    var minutes = parseInt( seconds / 60 ); // 60 seconds in 1 minute
    seconds = seconds % 60;
    return( hours+":"+minutes+":"+seconds);
    }
  }
  
};
</script>
