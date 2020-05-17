<template>
  <v-select
    @change="filterOnStatus()"
    :items="status"
    clearable
    item-value="text"
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
        { text: "Open", value: "Open" },
        { text: "Closed", value: "Closed" }
      ],
      statusFilterValue: null
    };
  },
  methods: {
    filterOnStatus() {
      console.log(this.statusFilterValue);
      this.$store.dispatch("filter/filterStatus", this.statusFilterValue);
    }
  }
};
</script>