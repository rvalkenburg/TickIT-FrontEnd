<template>
  <v-data-table :headers="headers" :items="tickets" item-key="id">
    <template v-slot:top>
      <CreateTicket />
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-row>
              <v-text-field v-model="nameFilterValue" clearable type="text" label="Name"></v-text-field>
            </v-row>
            <v-row>
              <v-select :items="status" clearable v-model="statusFilterValue" label="Status"></v-select>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-row>
              <v-select :items="agents" item-text="first_name" clearable v-model="agentFilterValue" label="Agent"></v-select>
            </v-row>
            <v-row>
              <v-select :items="Companies" clearable v-model="companyFilterValue" label="Company"></v-select>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";
import CreateTicket from "../components/CreateTicket";

export default {
  data() {
    return {
      dialog: false,
      editedIndex: -1,
      editedItem: {
        title: "",
        description: "",
        agent: "",
        user: "",
        company: ""
      },

      status: [
        { text: "All", value: null },
        { text: "Open", value: "Open" },
        { text: "Closed", value: "Closed" }
      ],

      Companies: [
        { text: "All", value: null },
        { text: "Contoso", value: "Contoso" },
        { text: "Google", value: "Google" }
      ],
      nameFilterValue: "",
      statusFilterValue: null,
      agentFilterValue: null,
      companyFilterValue: null
    };
  },

  methods: {
    nameFilter(value) {
      if (!this.nameFilterValue) {
        return true;
      }
      return value.toLowerCase().includes(this.nameFilterValue.toLowerCase());
    },

    statusFilter(value) {
      if (!this.statusFilterValue) {
        return true;
      }
      return value === this.statusFilterValue;
    },
    companyFilter(value) {
      if (!this.companyFilterValue) {
        return true;
      }

      return value === this.companyFilterValue;
    },
    agentFilter(value) {
      if (!this.agentFilterValue) {
        return true;
      }

      return value === this.agentFilterValue;
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    }
  },

  created() {
    this.$store.dispatch("ticket/all");
    this.$store.dispatch("user/getAllAgents");
    this.$store.dispatch("user/getAllUsers");
  },

  computed: {
    ...mapGetters({
      tickets: "ticket/tickets",
      agents: "user/agents",
      users: "user/users"
    }),

    headers() {
      return [
        { text: "Id", value: "id" },
        {
          text: "Title",
          align: "left",
          sortable: false,
          value: "title",
          filter: this.nameFilter
        },
        { text: "Status", value: "status.name", filter: this.statusFilter },
        {
          text: "Agent",
          value: "agent.first_name",
          filter: this.agentFilter,
          sortable: true
        },
        { text: "Company", value: "company.name", filter: this.companyFilter },
        { text: "Actions", value: "actions", sortable: false }
      ];
    }
  },
  components: {
    CreateTicket
  }
};
</script>