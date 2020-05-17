<template>
  <v-select
    :items="agents"
    item-text="first_name"
    clearable
    v-model="agentFilterValue"
    label="Agent"
  ></v-select>
</template>

<script>
export default {
  props: ['tickets'],
  data() {
    return {
      agents: ['test'],
      agentFilterValue: null
    };
  },
  methods: {
    filterOnAgent() {
        this.$store.dispatch("ticket/getTicketsByAgent", this.agentFilterValue);
    }
  }
};
</script>