<template>
  <v-select
    :items="Companies"
    item-value="text"
    clearable
    v-model="companyFilterValue"
    label="Company"
  ></v-select>
</template>

<script>
export default {
  data() {
    return {
      Companies: [{ text: "Contoso" }, { text: "Google" }],
      companyFilterValue: null
    };
  },
  methods: {
    filterOnCompany() {
      if (this.companyFilterValue != null) {
        this.$store.dispatch("ticket/getTicketsByCompany", this.companyFilterValue);
      }
    }
  }
};
</script>