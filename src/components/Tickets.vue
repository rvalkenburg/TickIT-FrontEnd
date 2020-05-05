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
              <v-select :items="Agents" clearable v-model="agentFilterValue" label="Agent"></v-select>
            </v-row>
            <v-row>
              <v-select :items="Companies" clearable v-model="companyFilterValue" label="Company"></v-select>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";
import CreateTicket from "../components/CreateTicket";

export default {
  data() {
    return {
      status: [
        { text: "All", value: null },
        { text: "Open", value: "Open" },
        { text: "Closed", value: "Closed" }
      ],
      Agents: [
        { text: "All", value: null },
        { text: "Roger", value: "Roger" },
        { text: "Hugo", value: "Hugo" },
        { text: "John fucking Doe", value: "John" }
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
    }
  },

  created() {
    this.$store.dispatch("ticket/all");
  },

  computed: {
    ...mapGetters({
      tickets: "ticket/tickets"
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
        { text: "Company", value: "company.name", filter: this.companyFilter }
      ];
    }
  },
  components: {
    CreateTicket
  }
};
</script>