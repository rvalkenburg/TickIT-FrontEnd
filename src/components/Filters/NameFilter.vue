<template>
  <v-text-field v-model="nameFilterValue" clearable type="text" label="Name"></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      nameFilterValue: ""
    };
  },
  methods: {
    filterOnCompany() {
      if (this.nameFilterValue != null) {
        this.$store.dispatch(
          "ticket/getTicketsByName",
          this.nameFilterValue
        );
      }
    }
  }
};
</script>