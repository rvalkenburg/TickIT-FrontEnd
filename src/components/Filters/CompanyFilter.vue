<template>
  <v-select
    @change="filterOnCompany()"
    :items="companies"
    item-text="name"
    item-value="name"
    clearable
    v-model="companyFilterValue"
    label="Company"
  ></v-select>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      companyFilterValue: null
    };
  },
  created() {
    this.$store.dispatch("company/all");
  },
  computed: {
    ...mapGetters({
      companies: "company/companies",
      nameFilterValue: "filter/getName"
    })
  },

  methods: {
    filterOnCompany() {
      this.$store.dispatch("filter/filterCompnay", this.companyFilterValue);
    }
  }
};
</script>