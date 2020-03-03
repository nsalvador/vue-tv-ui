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
    this.$http.interceptors.response.use(undefined, function(err) {
      if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        this.$store.dispatch("auth/logout");
      }
    });
  },
  mounted() {
    document.documentElement.style.overflow = "auto";
  },
  components: {
    AppHeader: () => import("./components/core/Header.vue"),
    AppDrawer: () => import("./components/core/Drawer.vue"),
    AppView: () => import("./components/core/View.vue"),
    AppFooter: () => import("./components/core/Footer.vue")
  }
};
</script>
