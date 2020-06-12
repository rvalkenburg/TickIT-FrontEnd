<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Create ticket</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Create ticket</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-select
                item-text="name"
                item-value="id"
                :items="companies"
                v-model="ticket.company"
                label="Company*"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="filterUsers()"
                item-value="id"
                item-text="first_name"
                v-model="ticket.user"
                :disabled="enabled"
                label="User*"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Title*" v-model="ticket.title" clearable required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="agents"
                item-text="account.first_name"
                label="Agent"
                item-value="account.id"
                v-model="ticket.agent"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-textarea label="Description" v-model="ticket.description" clearable></v-textarea>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="createTicket">Create</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Ticket from "../../models/account";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    ticket: new Ticket(),
    dialog: false,
    enabled: true,
  }),
  created() {
    this.$store.dispatch("user/getAllAgents");
    this.$store.dispatch("user/getAllUsers");
    this.$store.dispatch("company/all");
  },

  computed: {
    ...mapGetters({
      agents: "user/agents",
      users: "user/users",
      companies: "company/companies"
    })
  },
  methods: {
    filterUsers: function() {
      if (!this.ticket.company) {
        this.enabled = false;
        return this.users;
      }
      this.enabled = false;
      return this.$store.getters["user/getUsersByCompany"](this.ticket.company);
    },
    createTicket() {
      console.log(this.ticket);
      if (
        this.ticket.user &&
        this.ticket.title &&
        this.ticket.description &&
        this.ticket.agent
      ) {
        this.$store.dispatch("ticket/create", this.ticket).then(
          response => {
            console.log(response);
            this.$store.dispatch("ticket/all");
            this.dialog = false;
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }
};
</script>