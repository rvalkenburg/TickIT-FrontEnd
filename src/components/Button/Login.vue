<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="white" v-on="on" text="Login">
        <v-icon>mdi-login</v-icon>
        Login
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Sign in</span>
      </v-card-title>
      <v-alert
        v-if="login == false"
        dismissible="login == true"
        type="warning"
      >Incorrect credentials</v-alert>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Email*"
                required
                v-model="account.username"
                name="username"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                :rules="[rules.required, rules.min]"
                label="Enter your password*"
                hint="At least 8 characters"
                validate
                counter
                :type="'password'"
                clearable
                v-model="account.password"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="handleLogin">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Account from "../../models/account";

export default {
  name: "Login",

  data() {
    return {
      account: new Account("", ""),
      loading: false,
      login: true,
      dialog: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.login = true;
      if (this.account.username && this.account.password) {
        this.$store.dispatch("auth/login", this.account).then(
          () => {
            this.$router.push("/profile");
          },
          error => {
            this.login = false;
            console.log(error);
          }
        );
      }
    }
  }
};
</script>