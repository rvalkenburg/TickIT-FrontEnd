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
              <v-select :items="companies" v-model="selectedCompany" label="Company*" required></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="filterUsers()"
                v-model="selectedUser"
                :disabled="enabled"
                label="User*"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Title*" clearable required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="agents"
                label="Agent"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-textarea label="Description" clearable></v-textarea>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    selectedCompany: "",
    selectedUser: "",
    dialog: false,
    enabled: true,
    companies: [
      { text: "None", value: "" },
      { text: "Contoso", value: "Contoso" },
      { text: "Google", value: "Google" }
    ],
    users: [
      { text: "Roger", company: "Contoso" },
      { text: "Hugo", company: "Google" }
    ],
        agents: [
      { text: "Roger", company: "Contoso" },
      { text: "Hugo", company: "Google" }
    ]
  }),

  methods: {
    filterUsers: function() {
      if (!this.selectedCompany) {
        this.selectedUser = null;
        this.enabled = true;
        return this.users;
      }

      this.enabled = false;
      return this.users.filter(user => {
        return user.company.match(this.selectedCompany);
      });
    },
    filterCompanies: function() {
      if (!this.selectedUser) {
        return this.companies;
      }
      return this.companies.filter(company => {
        return company.company.match(this.selectedCompany);
      });
    }
  }
};
</script>