<template>
  <v-select
    @change="filterOnAgent()"
    :items="agents"
    item-text="first_name"
    clearable
    v-model="agentFilterValue"
    label="Agent"
  ></v-select>
</template>

<script>
export default {
  data() {
    return {
      agents: ["test"],
      agentFilterValue: null
    };
  },
  methods: {
    filterOnAgent() {
      this.$store.dispatch("filter/filterAgent", this.agentFilterValue);
    }
  }
};
</script>