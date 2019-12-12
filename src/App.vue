<template>
  <v-app>
    <app-header />
    <app-drawer />
    <app-view />
    <app-footer />
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$vuetify.theme.dark = true;
  },
  mounted() {},
  components: {
    AppHeader: () => import("./components/core/Header.vue"),
    AppDrawer: () => import("./components/core/Drawer.vue"),
    AppView: () => import("./components/core/View.vue"),
    AppFooter: () => import("./components/core/Footer.vue")
  }
};
</script>
