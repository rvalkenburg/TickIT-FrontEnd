<template>
  <v-select
    @change="filterOnStatus()"
    :items="status"
    clearable
    item-value="value"
    v-model="statusFilterValue"
    label="Status"
  ></v-select>
</template>

<script>
export default {
  data() {
    return {
      status: [
        { text: "All", value: null },
        { text: "Open", value: "OPEN" },
        { text: "Closed", value: "CLOSED" }
      ],
      statusFilterValue: null
    };
  },
  methods: {
    filterOnStatus() {
      this.$store.dispatch("filter/filterStatus", this.statusFilterValue);
    }
  }
};
</script>