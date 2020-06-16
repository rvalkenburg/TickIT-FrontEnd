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
              <v-text-field label="username*" v-model="account.username" clearable required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="firstname*" v-model="account.firstname" clearable required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="surname*" v-model="account.surname" clearable required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="password*" v-model="account.password" clearable required></v-text-field>
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
import Account from "../../models/account";

export default {
  data: () => ({
    account: new Account(),
    dialog: false,
    enabled: true,
    companies: [{ text: "Contoso", id: "2" }]
  }),
  
  methods: {
    createTicket() {
      console.log(this.account);
      this.account.company = this.currentCompany.id
      if (
        this.account.username &&
        this.account.firstname &&
        this.account.surname &&
        this.account.company &&
        this.account.password
      ) {

        this.$store.dispatch("auth/register", this.account).then(
          () => {
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
      currentCompany() {
      return this.$store.getters["company/company"];
    }
  }

};
</script>