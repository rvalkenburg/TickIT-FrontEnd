<template>
  <v-select :items="status" clearable item-value="text" v-model="statusFilterValue" label="Status"></v-select>
</template>

<script>
export default {
  data() {
    return {
      status: [{ text: "All" }, { text: "Open" }, { text: "Closed" }],
      statusFilterValue: null,
    };
  },
}
</script>