<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-container>
            <v-text-field v-model="item.company.name" label="Company" outlined readonly></v-text-field>
            <v-text-field v-model="item.agent.first_name" label="Agent" outlined readonly></v-text-field>
          </v-container>
        </v-col>
        <v-col cols="4">
          <v-container>
            <v-text-field v-model="item.creator.first_name" label="User" outlined readonly></v-text-field>
            <v-select :items="status" v-model="item.status.name" outlined label="Status"></v-select>
          </v-container>
        </v-col>
        <v-col cols="4">
          <v-btn depressed large color="primary">Save</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <v-container>
              <v-textarea
                name="input-7-1"
                label="Comment"
                auto-grow
                outlined
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea>
            <v-container v-for="comment in comments" v-bind:key="comment.id">
              <v-textarea
                name="input-7-1"
                label="Comment"
                auto-grow
                outlined
                readonly
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea>
            </v-container>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      dialog: false,
      status: [
        { text: "Open", value: "Open" },
        { text: "Closed", value: "Closed" }
      ],
      comments: [
        { id: 1, text: "Open" },
        { id: 2, text: "Closed" }
      ]
    };
  }
};
</script>