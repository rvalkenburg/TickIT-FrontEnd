<template>
  <v-app>
    <v-container>
      <v-row>
        <h1>This is an company page</h1>
      </v-row>
      <v-row>
          <v-container v-for="company in companies" v-bind:key="company.id">
            <v-card outlined>
              <v-card-title>{{company.Text}}</v-card-title>
            </v-card>
          </v-container>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      companies: [
        {
          Text: "Contoso",
          address: "Rachelsmolen 1",
          city: "Eindhoven",
          id: 1
        },
        {
          Text: "Contoso",
          address: "Rachelsmolen 1",
          city: "Eindhoven",
          id: 2
        },
        {
          Text: "Contoso",
          address: "Rachelsmolen 1",
          city: "Eindhoven",
          id: 3
        },
        {
          Text: "Contoso",
          address: "Rachelsmolen 1",
          city: "Eindhoven",
          id: 4
        },
        {
          Text: "Contoso",
          address: "Rachelsmolen 1",
          city: "Eindhoven",
          id: 5
        },
        {
          Text: "Contoso",
          address: "Rachelsmolen 1",
          city: "Eindhoven",
          id: 6
        },
        { Text: "Contoso", address: "Rachelsmolen 1", city: "Eindhoven", id: 7 }
      ]
    };
  }
};
</script>