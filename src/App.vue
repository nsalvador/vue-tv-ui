<template>
  <v-app>
    <app-search-bar @search="search" />
    <app-search-results :showToSearch="show" />
  </v-app>
</template>

<script>
import appSearchBar from "./components/Search/Bar.vue";
import appSearchResults from "./components/Search/Results";

export default {
  components: {
    appSearchBar,
    appSearchResults
  },
  data() {
    return {
      show: "",
      error: null
    };
  },
  methods: {
    search(show) {
      if (show !== "") {
        this.show = show;
      }
    }
  }
};
</script>
