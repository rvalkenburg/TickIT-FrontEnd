<template>
  <nav>
    <v-navigation-drawer bottom app fixed permanent>
      <v-list-item class="px-4 background">
        <v-list-item-avatar>
          <v-img
            src="../images/vuelogo.png"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-title>{{currentUser.account.first_name}}</v-list-item-title>
        <v-btn icon bottom @click="logout()">
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in showIcon()" :key="item.title" link route :to="item.route">
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
        {
          title: "Profile",
          icon: "mdi-account",
          route: "/profile",
          shared: true
        },
        { title: "Tickets", icon: "mdi-book", route: "/tickets", admin: true },
        {
          title: "Tickets",
          icon: "mdi-book",
          route: "/tickets/user",
          admin: false
        },
        {
          title: "Companies",
          icon: "mdi-account-group-outline mdi-home-city",
          route: "/company",
          admin: true
        },
        {
          title: "Statistics",
          icon: "mdi-chart-bar",
          route: "/stats",
          admin: true
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
    },
    showIcon() {
      if (this.currentUser.account.role == "USER") {
        return this.items.filter(u => u.admin == false || u.shared == true);
      } else {
        return this.items.filter(u => u.admin == true || u.shared == true);
      }
    }
  }
};
</script>

<style>
.background {
  background-color: rgb(146, 146, 146);
}
</style>