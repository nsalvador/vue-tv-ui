<template>
  <v-container>
    <v-app-bar app>
      <app-search @search="search" v-if="isVisible" />
    </v-app-bar>
  </v-container>
</template>

<script>
import appSearch from "./SearchBar.vue";

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
    search(show) {
      this.$emit("search", {
        show,
        page: "1"
      });
    }
  }
};
</script>
