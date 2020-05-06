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
            <v-text-field v-model="item.status.name" label="Status" outlined readonly></v-text-field>
          </v-container>
        </v-col>
        <v-col cols="4"></v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <v-container>
            <v-text-field value="John Doe" label="User" outlined readonly></v-text-field>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: ["item"]
};
</script>