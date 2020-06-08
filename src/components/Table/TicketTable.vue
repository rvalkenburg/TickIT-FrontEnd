<template>
  <v-data-table :headers="headers" :items="tickets" item-key="id">
    <template v-slot:item.actions="{item}">
      <v-icon small class="mr-2" @click="editTicket(item)">mdi-pencil</v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dialog: false
    };
  },
  created() {
    this.$store.dispatch("user/getAllAgents");
    this.$store.dispatch("user/getAllUsers");
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

  computed: {
    ...mapGetters({
      tickets: "ticket/tickets",
      agents: "user/agents",
      statusFilterValue: "filter/getStatus",
      companyFilterValue: "filter/getCompany",
      nameFilterValue: "filter/getName",
      agentFilterValue: "filter/getAgent"
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
        { text: "Company", value: "creator.company.name", filter: this.companyFilter },
        { text: "Actions", value: "actions", sortable: false }
      ];
    }
  }
};
</script>