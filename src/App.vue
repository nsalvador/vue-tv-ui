<template>
  <v-app>
    <Search @search="search" />
  </v-app>
</template>

<script>
import Search from "./components/Search";
export default {
  name: "App",
  components: {
    Search
  },
  methods: {
    search(show) {
      alert(`Searching for ${show}`);
    }
  }
};
</script>
