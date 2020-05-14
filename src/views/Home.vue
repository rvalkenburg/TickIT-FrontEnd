<template>
  <v-app>
    <div>
      <v-app-bar color="black" dense dark>
        <v-toolbar-title>TickIT</v-toolbar-title>
        <v-spacer></v-spacer>
        <Login />
      </v-app-bar>
    </div>
    <v-parallax
      dark
      src="https://www.ecopetit.cat/wpic/mpic/50-508704_1929x1089-faded-wallpaper-hd-data-id-41731-data.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">TickIT</h1>
          <h4 class="subheading">manage your tickets!</h4>
        </v-col>
      </v-row>
    </v-parallax>
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
          <v-img
            src="https://external-preview.redd.it/AOJtwr7lW8E4k5rsua3rPoky1ySO_34UkAVmm6PuVpM.jpg?auto=webp&s=2645657b4d14ff6f7321db22bcb96f4652876af8"
            aspect-ratio="3"
            contain
          ></v-img>
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
import Login from "@/components/Login.vue";

export default {
  components: {
    Footer,
    Login
  }
};
</script>
