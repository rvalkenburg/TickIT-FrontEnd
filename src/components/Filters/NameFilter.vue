<template>
  <v-text-field @keyup="filterOnName()" v-model="nameFilterValue" clearable type="text" label="Name"></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      nameFilterValue: ""
    };
  },
  methods: {
    filterOnName() {
      this.$store.dispatch("filter/filterName", this.nameFilterValue);
    }
  }
};
</script>