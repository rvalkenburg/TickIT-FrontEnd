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
            <v-col v-if="showDetails()" cols="12" sm="6">
              <v-select
                item-text="name"
                item-value="id"
                :items="companies"
                v-model="company"
                label="Company*"
                required
              ></v-select>
            </v-col>
            <v-col v-if="showDetails()" cols="12" sm="6">
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
            <v-col v-if="showDetails()" cols="12" sm="6">
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
    company: ""
  }),
  created() {
    this.$store.dispatch("user/getAllAgents");
    this.$store.dispatch("user/getAllUsers");
    this.$store.dispatch("company/all");
    if (this.currentUser.account.role == "USER") {
      this.ticket.user = this.currentUser.account.id;
    }
  },

  computed: {
    ...mapGetters({
      agents: "user/agents",
      users: "user/users",
      companies: "company/companies"
    }),
    currentUser() {
      return this.$store.state.auth.account;
    }
  },
  methods: {
    filterUsers: function() {
      if (!this.company) {
        this.enabled = false;
        return this.users;
      }
      this.enabled = false;
      return this.$store.getters["user/getUsersByCompany"](this.company);
    },
    createTicket() {
      if (this.ticket.user && this.ticket.title && this.ticket.description) {
        this.$store.dispatch("ticket/create", this.ticket).then(
          response => {
            console.log(response);
            if (this.currentUser.account.role == "AGENT") {
              this.$store.dispatch("ticket/all");
            } else {
              this.$store.dispatch(
                "ticket/getByAccountId",
                this.currentUser.account.id
              );
            }
            this.dialog = false;
          },
          error => {
            console.log(error);
          }
        );
      }
    },
    showDetails() {
      if (this.currentUser.account.role == "AGENT") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>