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
              <v-select
                :items="status"
                clearable
                item-value="text"
                v-model="statusFilterValue"
                label="Status"
              ></v-select>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-row>
              <v-select
                :items="agents"
                item-text="first_name"
                clearable
                v-model="agentFilterValue"
                label="Agent"
              ></v-select>
            </v-row>
            <v-row>
              <v-select
                :items="Companies"
                item-value="text"
                clearable
                v-model="companyFilterValue"
                label="Company"
              ></v-select>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template v-slot:item.actions="{item}">
      <v-icon small class="mr-2" @click="editTicket(item)">mdi-pencil</v-icon>
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
      status: [{ text: "All" }, { text: "Open" }, { text: "Closed" }],

      Companies: [{ text: "Contoso" }, { text: "Google" }],
      nameFilterValue: "",
      statusFilterValue: null,
      agentFilterValue: null,
      companyFilterValue: null
    };
  },

  methods: {
    editTicket(value) {
      this.$store.dispatch("ticket/selectTicket", value).then(
        response => {
          if (response == null) {
            this.$router.push({
              name: "editTicket"
            });
          }
        },
        error => {
          console.log(error);
        }
      );
    },
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
      agents: "user/agents"
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