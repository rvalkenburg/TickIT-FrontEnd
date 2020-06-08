<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="5">
          <NameFilter />
        </v-col>
        <v-col cols="7">
          <CreateCompany />
        </v-col>
      </v-row>
      <v-row>
        <v-container>
          <v-col cols="12">
            <CompanyTable />
          </v-col>
        </v-container>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import CompanyTable from "../components/Table/CompanyTable";
import NameFilter from "../components/Filters/NameFilter";
import CreateCompany from "../components/Button/CreateCompany";

export default {
  created() {
    this.$store.dispatch("company/all");
  },
  components: {
    CompanyTable,
    NameFilter,
    CreateCompany
  }
};
</script>