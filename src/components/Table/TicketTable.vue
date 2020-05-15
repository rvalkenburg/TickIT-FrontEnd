<template>
  <v-data-table :headers="headers" :items="tickets" item-key="id">
    <template v-slot:item.actions="{item}">
      <v-icon small class="mr-2" @click="editTicket(item)">mdi-pencil</v-icon>
    </template>
  </v-data-table>
</template>

<script>
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
  },

  computed: {
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
};
</script>