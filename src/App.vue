<template>
  <v-app>
    <app-header />
    <app-drawer />
    <app-view />
    <app-footer />
    <app-snackbar />
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$vuetify.theme.dark = true;
    this.$http.interceptors.response.use(undefined, async err => {
      if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        this.$store.dispatch("auth/logout");
      }
      throw err;
    });
  },
  mounted() {
    document.documentElement.style.overflow = "auto";

    const path = sessionStorage.getItem("path");
    if (path) {
      sessionStorage.removeItem("path");
      this.$router.push({ path });
    }
  },
  components: {
    AppHeader: () => import("./components/core/Header.vue"),
    AppDrawer: () => import("./components/core/Drawer.vue"),
    AppView: () => import("./components/core/View.vue"),
    AppFooter: () => import("./components/core/Footer.vue"),
    AppSnackbar: () => import("./components/core/Snackbar.vue")
  }
};
</script>
