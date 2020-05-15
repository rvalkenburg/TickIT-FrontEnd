<template>
  <v-text-field v-model="nameFilterValue" clearable type="text" label="Name"></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      agentFilterValue: null,
    };
  },
}
</script>