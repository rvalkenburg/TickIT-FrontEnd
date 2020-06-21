<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Create company</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Create company</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field label="Name*" v-model="company.name" clearable required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="countries"
                item-value="value"
                item-text="text"
                v-model="company.country"
                label="Country*"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="City*" v-model="company.city" clearable required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Address*" v-model="company.address" clearable required></v-text-field>
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
import Company from "../../models/company";

export default {
  data: () => ({
    company: new Company(),
    dialog: false,
    countries: [
      { text: "Germany", value: "Germany" },
      { text: "The Netherlands", value: "The Netherlands" },
      { text: "Belgium", value: "Belgium" }
    ]
  }),
  methods: {
    createTicket() {
      if (
        this.company.name &&
        this.company.country &&
        this.company.city &&
        this.company.address
      ) {
        this.$store.dispatch("company/create", this.company).then(
          response => {
            console.log(response);
            this.$store.dispatch("company/all");
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