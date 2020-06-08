<template>
  <v-select
    @change="filterOnAgent()"
    :items="agents"
    item-text="account.first_name"
    clearable
    v-model="agentFilterValue"
    label="Agent"
  ></v-select>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      agentFilterValue: ''
    };
  },
  created() {
    this.$store.dispatch("user/getAllAgents");
  },
    computed: {
    ...mapGetters({
      agents: "user/agents",
    })
  },
  methods: {
    filterOnAgent() {
      this.$store.dispatch("filter/filterAgent", this.agentFilterValue);
    }
  }
};
</script>