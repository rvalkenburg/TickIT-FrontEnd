<template>
  <v-app>
    <div>
      <v-app-bar color="black" dense dark>
        <v-toolbar-title>TickIT</v-toolbar-title>
        <v-spacer></v-spacer>
        <Login />
      </v-app-bar>
    </div>
    <v-parallax dark src="../assets/vue_logo.jpg"></v-parallax>
    <v-layout wrap row class="mt-auto">
      <v-flex xl6>
        <v-card height="100%" outlined color="white">
          <v-card-text>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Mange your own tickets for free</h3>
                <h5>
                  Phasellus a ex efficitur, elementum lectus sit amet, laoreet massa.
                  Vivamus sed eros eget turpis bibendum viverra sit amet id odio.
                  Praesent eu arcu vehicula, scelerisque libero sed, suscipit nisl.
                  Pellentesque lacinia nunc in felis blandit, quis gravida ante cursus.Phasellus a ex efficitur, elementum lectus sit amet, laoreet massa.
                  Vivamus sed eros eget turpis bibendum viverra sit amet id odio.
                  Praesent eu arcu vehicula, scelerisque libero sed, suscipit nisl.
                  Pellentesque lacinia nunc in felis blandit, quis gravida ante cursus.
                </h5>
              </div>
            </v-card-title>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xl6>
        <div>
          <v-img src="../assets/background.jpg" aspect-ratio="3" contain></v-img>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row class="mt-auto">
      <v-flex xl12>
        <Footer />
      </v-flex>
    </v-layout>
  </v-app>
</template>
                
<script>
import Footer from "@/components/Footer.vue";
import Login from "@/components/Button/Login.vue";

export default {
  metaInfo: {
    description: "Manage your tickets"
  },
  components: {
    Footer,
    Login
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
  }
};
</script>
