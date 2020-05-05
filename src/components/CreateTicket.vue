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
              <v-select :items="agents" label="Agent" item-value="id" v-model="ticket.agent"></v-select>
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
import Ticket from "../models/ticket";


export default {
  data: () => ({
    ticket: new Ticket(),
    dialog: false,
    enabled: true,
    companies: [
      { text: "Contoso", id: "2" },
    ],
    users: [
      { text: "Roger", company: "2", id: "2" },
      { text: "John", company: "2", id: "3" }
    ],
    agents: [
      { text: "Roger", company: "2", id: "1" },
      { text: "John", company: "2", id: "2" }
    ]
  }),

  methods: {
    filterUsers: function() {
      if (!this.ticket.company) {
        //this.ticket.company = null;
        this.enabled = true;
        return this.users;
      }

      this.enabled = false;
      return this.users.filter(user => {
        return user.company.match(this.ticket.company);
      });
    },
    createTicket() {
      console.log(this.ticket);
      if (
        this.ticket.user &&
        this.ticket.title &&
        this.ticket.description &&
        this.ticket.agent
      ) {
        this.$store.dispatch("ticket/create", this.ticket).then(response => {
          console.log(response)
        },
        error => {
          console.log(error)
        });
      }
    }
  }
};
</script>