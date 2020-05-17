<template>
  <v-select
    @change="filterOnCompany()"
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
      this.$store.dispatch("filter/filterCompnay", this.companyFilterValue);
    }
  }
};
</script>