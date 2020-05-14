<template>
  <v-app>
    <v-container>
      <v-row color="grey" dense>
        <v-col cols="4">
          <v-card outlined min-height="275">
            <v-card-title>Company details</v-card-title>
            <v-card-text>Name: {{currentTicket.company.name}}</v-card-text>
            <v-card-text>Country: {{currentTicket.company.country}}</v-card-text>
            <v-card-text>City: {{currentTicket.company.city}}</v-card-text>
            <v-card-text>Address: {{currentTicket.company.address}}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card outlined min-height="275">
            <v-card-title>User details</v-card-title>
            <v-card-text>Firstname: {{currentTicket.creator.first_name}}</v-card-text>
            <v-card-text>surname: {{currentTicket.creator.surname}}</v-card-text>
            <v-card-text>email: {{currentTicket.creator.username}}</v-card-text>
          </v-card>
          <v-container></v-container>
        </v-col>
        <v-col cols="4">
          <v-btn depressed large color="primary">Save</v-btn>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="4">
          <v-card outlined>
            <v-card-title>Ticket details</v-card-title>
            <v-container>
              <v-select :items="status" v-model="currentTicket.status.name" outlined label="Status"></v-select>
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
        <v-col cols="8">
          <v-card outlined>
            <v-card-title>Add comment</v-card-title>
            <v-container>
              <v-textarea name="input-7-1" label="Add new comment here..." auto-grow outlined value></v-textarea>
              <v-btn class="mr-4" justify @click="saveTicket">submit</v-btn>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense v-if="currentTicket.comments.length > 0">
        <v-col cols="8">
          <v-card outlined>
            <v-card-title>Previous comment</v-card-title>
            <v-container>
              <v-textarea
                v-for="comment in currentTicket.comments"
                v-bind:key="comment.id"
                name="input-7-1"
                auto-grow
                outlined
                readonly
                v-model="comment.comment"
                disabled
              ></v-textarea>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      dialog: false,
      status: [
        { text: "Open", value: "Open" },
        { text: "Closed", value: "Closed" }
      ],
      comments: [
        { id: 1, text: "Open" },
        { id: 2, text: "Closed" },
        { id: 3, text: "Closed" },
        { id: 4, text: "Closed" }
      ]
    };
  },
  methods: {
    saveTicket() {}
  },

  computed: {
    currentTicket() {
      return this.$store.getters["ticket/selectedTicket"];
      
    }
  },
  
};
</script>