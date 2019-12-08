<template>
  <v-app>
    <app-header />
    <app-drawer />
    <app-view />
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from "./components/core/Header.vue";
import AppDrawer from "./components/core/Drawer.vue";
import AppView from "./components/core/View.vue";
import AppFooter from "./components/core/Footer.vue";

export default {
  name: "App",
  created() {
    this.$vuetify.theme.dark = true;
  },
  components: {
    AppHeader,
    AppDrawer,
    AppView,
    AppFooter
  }
};
</script>
