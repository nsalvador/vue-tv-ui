<template>
  <v-app>
    <app-header />
    <app-drawer />
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- <app-footer></app-footer>-->
  </v-app>
</template>

<script>
// import AppFooter from "./components/Footer.vue";
import AppHeader from "./components/Header.vue";
import AppDrawer from "./components/Drawer.vue";

export default {
  name: "App",
  created() {
    this.$vuetify.theme.dark = true;
  },
  components: {
    AppHeader,
    AppDrawer
    // AppFooter
  }
};
</script>
