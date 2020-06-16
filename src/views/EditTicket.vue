<template>
  <v-app>
    <v-container>
      <v-row color="grey" dense>
        <v-col cols="3">
          <v-card outlined min-height="200">
            <v-card-title>Company details</v-card-title>
            <v-card-text>
              <div>Name: {{currentTicket.creator.company.name}}</div>
              <div>Country: {{currentTicket.creator.company.country}}</div>
              <div>City: {{currentTicket.creator.company.city}}</div>
              <div>Address: {{currentTicket.creator.company.address}}</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card outlined min-height="200">
            <v-card-title>User details</v-card-title>
            <v-card-text>
              <div>Description: {{currentTicket.creator.first_name}}</div>
              <div>surname: {{currentTicket.creator.surname}}</div>
              <div>email: {{currentTicket.creator.username}}</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card outlined min-height="200">
            <v-card-title>Description</v-card-title>
            <v-card-text>
              <div>Description: {{currentTicket.description}}</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="text-right" cols="2">
          <v-btn @click="saveTicket" depressed large color="primary">Save</v-btn>
        </v-col>
      </v-row>
      <v-row dense v-if="currentTicket.agent != null">
        <v-col cols="4">
          <v-card outlined>
            <v-card-title>Ticket details</v-card-title>
            <v-container>
              <v-select :items="status" v-model="currentTicket.status" outlined label="Status"></v-select>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card outlined>
            <v-card-title>Agent details</v-card-title>
            <v-container>
              <v-text-field
                v-model="currentTicket.agent.first_name"
                label="Agent"
                outlined
                readonly
              ></v-text-field>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="10">
          <v-card outlined>
            <v-card-title>Add comment</v-card-title>
            <v-container>
              <v-textarea
                name="input-7-1"
                v-model="comment.comment"
                label="Add new comment here..."
                auto-grow
                outlined
                value
              ></v-textarea>
              <v-btn class="mr-4" justify @click="addComment">submit</v-btn>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense v-if="currentTicket.comments.length > 0">
        <v-col cols="8">
          <v-card outlined>
            <v-card-title>Previous comment</v-card-title>
            <v-container v-for="comment in currentTicket.comments" v-bind:key="comment.id">
              <div>{{comment.account.username}}</div>
              <v-textarea name="input-7-1" auto-grow outlined readonly v-model="comment.comment"></v-textarea>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Comment from "../models/comment";
import EditTicket from "../models/editTicket";

export default {
  data() {
    return {
      dialog: false,
      comment: new Comment(),
      ticket: new EditTicket(),

      status: [
        { text: "Open", value: "1" },
        { text: "Closed", value: "2" }
      ]
    };
  },
  methods: {
    saveTicket() {
      (this.ticket.ticketid = this.currentTicket.id),
        (this.ticket.agent = this.currentUser.account.id),
        (this.ticket.status = this.currentTicket.status.name);
      if (this.ticket.ticketid && this.ticket.agent && this.ticket.status) {
        console.log(this.currentTicket);

        this.$store.dispatch("ticket/edit", this.ticket).then(
          response => {
            console.log(response);
            //this.$store.dispatch("ticket/all");
            this.dialog = false;
          },
          error => {
            console.log(error);
          }
        );
      }
    },
    addComment() {
      (this.comment.userid = this.currentUser.account.id),
        (this.comment.ticketid = this.currentTicket.id);
      if (
        this.comment.userid &&
        this.comment.ticketid &&
        this.comment.comment
      ) {
        this.$store.dispatch("comment/create", this.comment).then(
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
  },

  computed: {
    currentTicket() {
      return this.$store.getters["ticket/selectedTicket"];
    },
    currentUser() {
      return this.$store.state.auth.account;
    }
  }
};
</script>