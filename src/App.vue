<template>
  <v-app>
    <app-header />
    <app-drawer />
    <app-view />
    <app-footer />
  </v-app>
</template>

<script>
import router from "./router";

export default {
  name: "App",
  created() {
    this.$vuetify.theme.dark = true;
  },
  mounted() {
    const route = localStorage.getItem("route");
    if (route) {
      router.push({ name: route });
    }
  },
  components: {
    AppHeader: () => import("./components/core/Header.vue"),
    AppDrawer: () => import("./components/core/Drawer.vue"),
    AppView: () => import("./components/core/View.vue"),
    AppFooter: () => import("./components/core/Footer.vue")
  }
};
</script>
