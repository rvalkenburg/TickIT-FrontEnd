<template>
  <v-data-table :headers="headers" :items="companies" item-key="id">
    <template v-slot:item.actions="{item}">
      <v-icon small class="mr-2" @click="editCompany(item)">mdi-pencil</v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    nameFilter(value) {
      if (!this.nameFilterValue) {
        return true;
      }
      return value.toLowerCase().includes(this.nameFilterValue.toLowerCase());
    },
    editCompany() {}
  },

  computed: {
    ...mapGetters({
      companies: "company/companies",
      nameFilterValue: "filter/getName"
    }),

    headers() {
      return [
        { text: "Id", value: "id" },
        {
          text: "Company",
          align: "left",
          sortable: false,
          value: "name",
          filter: this.nameFilter
        },
        { text: "Country", value: "country" },
        {
          text: "City",
          value: "city",
          sortable: true
        },
        { text: "Address", value: "address" },
        { text: "Number of tickets", value: "10" },
        { text: "Actions", value: "actions", sortable: false }
      ];
    }
  }
};
</script>