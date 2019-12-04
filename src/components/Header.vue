<template>
  <v-container>
    <v-app-bar app>
      <v-spacer></v-spacer>
      <app-search @search="search" v-if="isVisible" />
      <v-toolbar-items>
        <v-btn text @click="goToHome">Home</v-btn>
        <v-btn text @click="goToSearch">Search</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-container>
</template>

<script>
import appSearch from "./SearchBar.vue";
import router from "../router";

export default {
  name: "Header",
  computed: {
    isVisible() {
      return this.$route.name == "search";
    }
  },
  components: {
    appSearch
  },
  methods: {
    goToHome() {
      if (this.$route.name === "search") {
        router.push({ name: "home" });
      }
    },
    goToSearch() {
      if (this.$route.name === "home") {
        router.push({ name: "search" });
      }
    },
    search(show) {
      this.$emit("search", {
        show,
        page: "1"
      });
    }
  }
};
</script>
