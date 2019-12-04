<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import appFooter from "./components/Footer.vue";

export default {
  name: "App",
  created() {
    this.$vuetify.theme.dark = true;
  },
  components: {
    appFooter
  }
};
</script>
