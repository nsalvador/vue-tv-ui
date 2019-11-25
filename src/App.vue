<template>
  <v-app>
    <v-content>
      <app-header />
    </v-content>
    <!-- <app-search-results :showToSearch="show" /> -->
    <!-- <app-search-bar @search="search" /> -->
  </v-app>
</template>

<script>
import appHeader from "./components/Header.vue";
// import appSearchResults from "./components/Search/Results.vue";

export default {
  components: {
    appHeader
    // appSearchResults
  }
  // data() {
  //   return {
  //     show: "",
  //     error: null
  //   };
  // },
  // methods: {
  //   search(show) {
  //     if (show !== "") {
  //       this.show = show;
  //     }
  //   }
  // }
};
</script>

