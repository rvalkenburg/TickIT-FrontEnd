<template>
  <v-data-table :headers="headers" :items="users" item-key="id">
    <template v-slot:item.actions="{item}">
      <v-icon small class="mr-2" @click="editUser(item)">mdi-pencil</v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    editUser(value) {
    console.log(value)
    }
  },

  computed: {
    ...mapGetters({
      users: "user/users",
    }),

    headers() {
      return [
        { text: "Username", value: "username" },
        {
          text: "firstname",
          align: "left",
          value: "first_name",
        },
        {
          text: "Surname",
          value: "surname",
          sortable: true
        },
        { text: "Actions", value: "actions", sortable: false }
      ];
    }
  }
};
</script>