<template>
  <nav>
    <v-navigation-drawer bottom app fixed permanent>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-title>{{currentUser.account.first_name}}</v-list-item-title>
        <v-btn icon bottom @click="logout()">
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link route :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Profile", icon: "mdi-account", route: "/profile" },
        { title: "Tickets", icon: "mdi-book", route: "/tickets" },
        {
          title: "Companies",
          icon: "mdi-account-group-outline mdi-home-city",
          route: "/company"
        }
      ]
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.account;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout", this.account).then(
          () => {
            this.$router.push("/home");
          },
          error => {
            console.log(error);
          }
        );
    }
  }
};
</script>