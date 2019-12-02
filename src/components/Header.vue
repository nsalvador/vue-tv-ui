<template>
  <v-container>
    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <app-search @search="search" />
    </v-app-bar>
  </v-container>
</template>

<script>
import appSearch from "../components/Search/Search.vue";

export default {
  components: {
    appSearch
  },
  methods: {
    search(show) {
      this.$emit("search", {
        show,
        page: "1"
      });
    }
  }
};
</script>
