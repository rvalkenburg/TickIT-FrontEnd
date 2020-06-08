<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Create user</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Create user</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-select
                item-text="text"
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
                item-text="first_name"
                label="Agent"
                item-value="id"
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
    companies: [{ text: "Contoso", id: "2" }]
  }),
  created() {
    this.$store.dispatch("company/getAllCompanies");
    this.$store.dispatch("user/getAllUsers");
  },

  computed: {
    ...mapGetters({
      companies: "company/companies",
      users: "user/users"
    })
  },
  methods: {
    filterUsers: function() {
      if (!this.ticket.company) {
        this.enabled = true;
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
    },

  }
};
</script>